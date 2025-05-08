from tensorflow.keras.models import load_model

model = load_model("deepfake_model_final1.h5")

for i, layer in enumerate(model.layers):
    try:
        print(f"{i}: {layer.name} - {layer.__class__.__name__} - {layer.output.shape}")
    except AttributeError:
        print(f"{i}: {layer.name} - {layer.__class__.__name__} - shape not available")


for layer in model.layers:
    print(layer.name)