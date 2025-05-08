import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <motion.h1
          className="about-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About FakeDetect
        </motion.h1>

        <motion.p
          className="about-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Your intelligent assistant in detecting AI-generated images with confidence and clarity.
        </motion.p>

        <div className="info-grid">
          <motion.div className="info-box" whileHover={{ scale: 1.02 }}>
            <h2>🔍 What We Do</h2>
            <p>
              FakeDetect uses a trained deep learning model to analyze images and determine whether they are Real or AI-generated (Fake). It also provides Grad-CAM heatmaps for transparency and insight.
            </p>
          </motion.div>

          <motion.div className="info-box" whileHover={{ scale: 1.02 }}>
            <h2>🛠️ How It Works</h2>
            <ul>
              <li>Deep Learning CNN Model for binary classification</li>
              <li>Grad-CAM for visual explanations</li>
              <li>Simple upload and instant feedback</li>
            </ul>
          </motion.div>

          <motion.div className="info-box" whileHover={{ scale: 1.02 }}>
            <h2>🎯 Why It Matters</h2>
            <p>
              As AI content grows, so does misinformation. FakeDetect helps users verify authenticity, making it essential in journalism, education, and tech ethics.
            </p>
          </motion.div>

          <motion.div className="info-box" whileHover={{ scale: 1.02 }}>
            <h2>👨‍💻 Who Is This For?</h2>
            <ul>
              <li>Journalists & fact-checkers</li>
              <li>Educators & media literacy advocates</li>
              <li>Developers exploring AI</li>
              <li>Every curious user</li>
            </ul>
          </motion.div>
        </div>

        <motion.div className="built-with" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <h2>🚀 Built With</h2>
          <p>React.js, FastAPI, TensorFlow/Keras, Grad-CAM, and open-source tech.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
