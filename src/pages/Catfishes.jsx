import React from 'react';
import './Catfishes.css';

const Catfishes = () => {
  return (
    <div className="guide-container">
      <h1>AI Media Detection Guide</h1>

      <section className="guide-section">
        <h2>Introduction</h2>
        <p>In the age of artificial intelligence, it has become increasingly difficult to differentiate between real and AI-generated images. With the rise of generative tools like GANs and diffusion models, distinguishing reality from fabrication requires both human perception and machine assistance.</p>
      </section>

      <section className="guide-section">
        <h2>Human Perception</h2>
        <p>Humans can often detect inconsistencies in AI-generated media by spotting abnormalities in patterns, lighting, or familiar human features. However, AI models are becoming more accurate, requiring closer scrutiny.</p>
      </section>

      <section className="guide-section">
        <h2>Details in Images That Can Help Determine if It's AI</h2>
        <h3>Textures</h3>
        <p>Textures in AI-generated images can sometimes appear overly smooth or unnaturally distorted. This is especially noticeable in backgrounds, fabric, or nature-based elements.</p>

        <h3>Human Faces, Hands, and Limbs</h3>
        <p>Hands and limbs may have extra fingers, warped joints, or inconsistent shadows. Eyes may be misaligned, and facial symmetry might be off. Look closely at earrings, hair strands, and eyeglass frames for duplication or blurring.</p>
      </section>

      <section className="guide-section">
        <h2>Why the Task is Hard</h2>
        <p>AI-generated images are trained on massive real-world datasets and optimized for photorealism. With continued training and fine-tuning, these models can create images that even experts struggle to identify as fake.</p>
      </section>

      <section className="guide-section">
        <h2>Available Tools</h2>
        <ul>
          <li><strong>Deepware Scanner</strong> – Mobile app for scanning content for deepfake traces.</li>
          <li><strong>HIVE AI</strong> – Provides moderation tools to classify AI-generated images.</li>
          <li><strong>AI or Not</strong> – Upload an image and it predicts whether it was AI-generated.</li>
          <li><strong>Optic AI or Not</strong> – Chrome extension to detect if an image is fake or AI-created.</li>
          <li><strong>Illuminarty</strong> – Detects synthetic content in images, videos, and audio.</li>
          <li><strong>FakeCatcher (Intel)</strong> – Detects fake videos by analyzing subtle changes in skin tone and blood flow.</li>
        </ul>
      </section>

      <section className="guide-section">
        <h2>Conclusion</h2>
        <p>While tools and human judgment play key roles, a combination of visual scrutiny, awareness of common AI flaws, and proper detection systems offers the best chance of identifying fake images. Stay informed, stay alert.</p>
      </section>
    </div>
  );
};

export default Catfishes;
