from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import tensorflow as tf
import numpy as np
from PIL import Image
import matplotlib.pyplot as plt
import io
import os
import uuid

app = FastAPI()

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve static files (for Grad-CAM heatmaps)
if not os.path.exists("static"):
    os.makedirs("static")

app.mount("/static", StaticFiles(directory="static"), name="static")

# Load model
model = load_model("deepfake_model_final1.h5")

# Grad-CAM function
def generate_gradcam(img_array, model, layer_name='block_1_depthwise'):  # change to your last conv layer
    grad_model = tf.keras.models.Model(
        [model.inputs], [model.get_layer(layer_name).output, model.output]
    )

    with tf.GradientTape() as tape:
        conv_outputs, predictions = grad_model(img_array)
        loss = predictions[:, 0]

    grads = tape.gradient(loss, conv_outputs)
    pooled_grads = tf.reduce_mean(grads, axis=(0, 1, 2))

    conv_outputs = conv_outputs[0]
    heatmap = conv_outputs @ pooled_grads[..., tf.newaxis]
    heatmap = tf.squeeze(heatmap)

    heatmap = np.maximum(heatmap, 0) / (tf.math.reduce_max(heatmap) + 1e-8)
    heatmap = np.uint8(255 * heatmap.numpy())

    # Resize and save overlay
    img = tf.squeeze(img_array).numpy()
    img = np.uint8(img * 255)
    img = Image.fromarray(img)

    heatmap_img = Image.fromarray(heatmap).resize(img.size)
    heatmap_img = heatmap_img.convert("RGBA")
    heatmap_color = plt.cm.jet(heatmap / 255.0)[:, :, :3]
    heatmap_color = Image.fromarray((heatmap_color * 255).astype(np.uint8)).resize(img.size)
    heatmap_color = heatmap_color.convert("RGBA")

    superimposed_img = Image.blend(img.convert("RGBA"), heatmap_color, alpha=0.5)

    filename = f"{uuid.uuid4().hex}.png"
    path = os.path.join("static", filename)
    superimposed_img.save(path)

    return f"/static/{filename}"

# Prediction route
@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        img = Image.open(io.BytesIO(contents)).convert("RGB")
        img = img.resize((224, 224))
        img_array = np.array(img) / 255.0
        img_array = np.expand_dims(img_array, axis=0)

        prediction = model.predict(img_array)
        confidence_score = float(prediction[0][0])
        predicted_class = int(round(confidence_score))
        label = "Real" if predicted_class == 1 else "Fake"

        # Grad-CAM
        explanation_url = generate_gradcam(img_array, model, layer_name="block_1_depthwise")  # change layer name if needed

        return {
            "result": label,
            "confidence": confidence_score,
            "explanation_url": explanation_url
        }

    except Exception as e:
        print("Error:", e)
        return {"error": str(e)}
