import React, { useState } from "react";
import { Link,useNavigate } from 'react-router-dom';
import "./FakeImageDetector.css"; 
import Explore from "./pages/Explore";
import Result from "./pages/Result";
import Guide from "./pages/Guide";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
const FakeImageDetector = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState("");
  const [explanationUrl, setExplanationUrl] = useState("");
  const navigate = useNavigate();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    setPreview(URL.createObjectURL(file));
    setResult("");
  };

  const handlePredict = async () => {
    if (!selectedImage) {
      alert("Please upload an image first.");
      return;
    }
  
    const formData = new FormData();
    formData.append("file", selectedImage);
  
    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
      console.log("Received from backend:", data);
  
      if (response.ok && data.result && data.confidence !== undefined) {
        const confidencePercent = Math.round(Number(data.confidence) * 100);
        const predictionResult = `${data.result} (Confidence: ${confidencePercent}%)`;
        setResult(predictionResult);
        setExplanationUrl(data.explanation_url || "");
      } else {
        setResult("Prediction failed.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setResult("Error connecting to backend.");
    }
  };
  

  return (
    <div className="main">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">FakeDetect</div>
        <ul className="nav-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/explore">Explore</Link></li>
          <li><Link to="/guide">Guide</Link></li>
        </ul>
      </nav>
  
      {/* Main Content */}
      <div className="container">
        <h1>Detect AI-generated images </h1>
        <p>Our AI image detector automatically detects images.</p>
  
        <div className="main-section">
  {preview ? (
    <img src={preview} alt="Preview" className="image-preview" />
  ) : (
    <div className="image-placeholder">Image preview</div>
  )}
  <div className="arrow">→</div>
  <div className="result-box">
    {result ? (
      <>
        <p className="result">{result}</p>
        {explanationUrl && (
          <img src={explanationUrl} alt="Grad-CAM Explanation" className="heatmap" />
        )}
      </>
    ) : (
      <p>Prediction result will appear here</p>
    )}
  </div>
</div>

  
        <div className="controls">
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <button onClick={handlePredict}>Predict Image</button>
        </div>
      </div>
    </div>
  );
};

export default FakeImageDetector;
