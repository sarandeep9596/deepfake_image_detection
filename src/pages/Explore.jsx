import React from 'react';
import "./Explore.css";
import spot_ai from "../images/spot_ai.png";
import human_ability from "../images/human_ability.png";
import trust_safety from "../images/trust_safety.png";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Explore() {
  const  navigate = useNavigate();
  const handleClick = () => {
    navigate('/Catfishes');
  };
  const handleClick2 = () => {
    navigate('/Humanability');
  };
  return (
    <div className="explore-container">
      <div className="explore-heading">
        <h1>Content Moderation Guides & Resources</h1>
        <p>
          Learn and stay informed with the Knowledge Center. <br />
          Read our guides and articles on Trust & Safety.
        </p>
      </div>

      <h2 className="section-title">Guides to Content Moderation</h2>

      <div className="resources-grid">
        <div className="resource-card">
          <img src={trust_safety} alt="AI brain" />
          <h3>Detecting and moderating AI-generated content with technology</h3>
          <p>
            Learn about the evolution of GenAI models and the best strategies to detect AI-generated content.
          </p>
        </div>

        <div onClick={handleClick} className="resource-card " style={{ cursor: 'pointer' }}>
          <img src={spot_ai} alt="Catfished" />
          <h3>How to spot AI images and deepfakes: tips and limits</h3>
          <p>
            Learn how to recognize AI-generated images and deepfakes. Improve your detection skills today.
          </p>
        </div>

        <div onClick={handleClick2} style={{cursor: 'pointer'}} className="resource-card">
          <img src={human_ability} alt="Face in grass" />
          <h3>AI images: testing human abilities to identify fakes</h3>
          <p>
            Results and insights from our AI vs human game: how well do humans identify fake AI-generated content?
          </p>
        </div>
      

      <div className="resource-card">
          <img src={trust_safety} alt="Face in grass" />
          <h3>AI images: testing human abilities to identify fakes</h3>
          <p>
            Results and insights from our AI vs human game: how well do humans identify fake AI-generated content?
          </p>
        </div>

        <div className="resource-card">
          <img src="https://i.imgur.com/bTc50H5.jpg" alt="Face in grass" />
          <h3>AI images: testing human abilities to identify fakes</h3>
          <p>
            Results and insights from our AI vs human game: how well do humans identify fake AI-generated content?
          </p>
        </div>

        <div className="resource-card">
          <img src="https://i.imgur.com/bTc50H5.jpg" alt="Face in grass" />
          <h3>AI images: testing human abilities to identify fakes</h3>
          <p>
            Results and insights from our AI vs human game: how well do humans identify fake AI-generated content?
          </p>
        </div>

        <div className="resource-card">
          <img src="https://i.imgur.com/bTc50H5.jpg" alt="Face in grass" />
          <h3>AI images: testing human abilities to identify fakes</h3>
          <p>
            Results and insights from our AI vs human game: how well do humans identify fake AI-generated content?
          </p>
          </div>

          <div className="resource-card">
          <img src="https://i.imgur.com/bTc50H5.jpg" alt="Face in grass" />
          <h3>AI images: testing human abilities to identify fakes</h3>
          <p>
            Results and insights from our AI vs human game: how well do humans identify fake AI-generated content?
          </p>
          </div>
        </div>
    </div>
  );
}