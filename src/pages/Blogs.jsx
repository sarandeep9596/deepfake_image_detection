import React from "react";
import "./Blogs.css";
import { motion } from "framer-motion";
import  detectimage from "../images/detectimage.jpg";
import imageauthentication from "../images/imageauthentication.jpg";
import heatmap from "../images/heatmap.png";
const Blogs = () => {
  return (
    <div className="blogs-container">
      <motion.h1
        className="blogs-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        📝 Latest Blogs
      </motion.h1>

      <motion.p
        className="blogs-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Explore insightful articles about AI image detection and more.
      </motion.p>

      <div className="blogs-grid">

        {/* Blog 1 */}
        <motion.div className="blog-card" whileHover={{ scale: 1.03 }}>
          <img
            src={detectimage}
            alt="Detect AI Images"
            className="blog-image"
          />
          <div className="blog-content">
            <h2>How to Detect AI-Generated Images</h2>
            <p className="blog-date">May 1, 2025</p>
            <p className="blog-description">
              Learn how deep learning models like CNN and Grad-CAM can help you distinguish between real and AI-generated images.
            </p>
            <a
              href="https://www.computerhowtoguide.com/how-to-detect-ai-generated-images/#google_vignette"
              className="read-more"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More →
            </a>
          </div>
        </motion.div>

        {/* Blog 2 */}
        <motion.div className="blog-card" whileHover={{ scale: 1.03 }}>
          <img
            src={imageauthentication}
            alt="Image Authenticity"
            className="blog-image"
          />
          <div className="blog-content">
            <h2>Why Image Authenticity Matters</h2>
            <p className="blog-date">April 20, 2025</p>
            <p className="blog-description">
              Explore the impact of fake images on journalism, education, and digital trust — and how FakeDetect can help.
            </p>
            <a
              href="https://imagefree.com/en/blog/what-are-authentic-images---benefits-of-authentic-images"
              className="read-more"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More →
            </a>
          </div>
        </motion.div>

        {/* Blog 3 */}
        <motion.div className="blog-card" whileHover={{ scale: 1.03 }}>
          <img
            src={heatmap}
            alt="Building FakeDetect"
            className="blog-image"
          />
          <div className="blog-content">
            <h2>Behind the Scenes: Building FakeDetect</h2>
            <p className="blog-date">April 10, 2025</p>
            <p className="blog-description">
              A technical deep dive into the AI model, Grad-CAM heatmaps, and the FastAPI + React integration.
            </p>
            <a
              href="https://medium.com/@kdk199604/grad-cam-a-gradient-based-approach-to-explainability-in-deep-learning-871b3ab8a6ce"
              className="read-more"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More →
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Blogs;
