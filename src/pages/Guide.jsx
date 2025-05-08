import React from "react";
import "./Guide.css";
import { motion } from "framer-motion";
import spotimage from "../images/spotimage.jpg";
import detectionvisual from "../images/detectionvisuals.jpg";
const Guide = () => {
  return (
    <div className="spot-container">
      <motion.h1
        className="spot-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
         How to Spot Fake Images
      </motion.h1>

      <motion.p
        className="spot-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Learn how to detect AI-generated or manipulated images with real-world examples and visual tips.
      </motion.p>

      <div className="spot-section">
        <h2> Check for Inconsistencies</h2>
        <p>
          Look at hands, eyes, ears, and jewelry — AI often struggles with symmetry and realistic proportions.
        </p>
        <img
          src={spotimage}
          alt="AI face example"
          className="spot-image"
        />
      </div>

      <div className="spot-section">
        <h2> Use Reverse Image Search</h2>
        <p>
          Upload the image to tools like <a href="https://images.google.com" target="_blank" rel="noreferrer">Google Images</a> or <a href="https://tineye.com" target="_blank" rel="noreferrer">TinEye</a> to check if it's authentic or manipulated.
        </p>
      </div>

      <div className="spot-section">
        <h2> Analyze Metadata (EXIF)</h2>
        <p>
          Use tools like <a href="https://www.metadata2go.com/" target="_blank" rel="noreferrer">Metadata2Go</a> or <a href="https://exifinfo.org/" target="_blank" rel="noreferrer">Exif Info</a> to inspect details like camera model, edits, and timestamps.
        </p>
      </div>

      <div className="spot-section">
        <h2> Use AI Tools</h2>
        <p>
          Platforms like <strong>FakeDetect</strong>, <a href="https://www.deepware.ai" target="_blank" rel="noreferrer">Deepware</a>, or <a href="https://hivemoderation.com" target="_blank" rel="noreferrer">Hive</a> can scan images for AI-generated patterns.
        </p>
        <img
          src={detectionvisual}
          alt="AI detection visual"
          className="spot-image"
        />
      </div>

      <motion.div
        className="spot-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p>🔗 Stay alert. Be informed. Share wisely.</p>
      </motion.div>
    </div>
  );
};

export default Guide;
