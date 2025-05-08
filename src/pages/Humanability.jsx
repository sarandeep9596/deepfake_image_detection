import React from "react";
import "./Humanability.css";
import { motion } from "framer-motion";
import { EyeIcon } from "lucide-react";

const data = [
    {
      title: "TL;DR",
      points: [
        "2,500 humans took the 'AI or not?' test",
        "Humans achieved 71% accuracy (balanced dataset, F1-score of 71%)",
        "20% of images fooled most humans (over half mislabeled them)",
        "Real images are harder to identify confidently than AI images",
        "Image texture, framing, and likeliness are key patterns in tricky cases"
      ]
    },
    {
      title: "Why a Game",
      content:
        "AI images are spreading fast and can mislead people, especially in political contexts. Sightengine created a game to test how well users can detect AI images and to raise awareness."
    },
    {
      title: "Game Mechanics",
      content:
        "Players are shown a mix of real and AI-generated images and must decide which is which, relying only on their own judgment—no tools allowed. The game continues for 25+ images."
    },
    {
      title: "How Well Did People Do",
      points: [
        "Average accuracy: 71%",
        "Real images correctly identified: 68%",
        "AI images correctly identified: 73%",
        "Some images were extremely easy or difficult"
      ]
    },
    {
      title: "Examples",
      examples: [
        {
          type: "hard",
          label: "Woman lying in grass (AI, only 28% guessed right)",
          image: "woman-lying-in-grass.jpg"
        },
        {
          type: "hard",
          label: "Church in snow (AI, only 30% guessed right)",
          image: "church-snow.jpg"
        },
        {
          type: "easy",
          label: "Kid with flawless face and mud (AI, 92% guessed right)",
          image: "kid-mud.jpg"
        },
        {
          type: "easy",
          label: "Gladiators in NYC (AI, 97% guessed right)",
          image: "gladiators-nyc.jpg"
        },
        {
          type: "real",
          label: "Tourists in bus (real, dim and boring)",
          image: "tourists-bus.jpg"
        },
        {
          type: "misjudged",
          label: "Bench under autumn leaves (real, but looks fake)",
          image: "bench-autumn.jpg"
        },
        {
          type: "split",
          label: "Woman playing golf (mixed votes)",
          image: "golf-woman.jpg"
        },
        {
          type: "split",
          label: "Hindu wedding ritual (mixed votes)",
          image: "hindu-wedding.jpg"
        },
        {
          type: "split",
          label: "Woman reading on train (mixed votes)",
          image: "train-reading.jpg"
        }
      ]
    },
    {
      title: "Takeaways",
      content:
        "Humans can detect fakes at a decent rate but often overestimate their abilities. With AI advancing rapidly, even skilled humans struggle. Tools like watermarking and automated detection are crucial for identifying synthetic media."
    }
  ];

const Humanability = () => {
  return (
    <div className="page-container">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="page-title"
      >
        Can You Spot AI Images? A Fascinating Test
      </motion.h1>

      {data.map((section, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * idx, duration: 0.5 }}
        >
          <div className="section-card">
            <div>
              <h2 className="section-title">{section.title}</h2>
              {section.content && <p>{section.content}</p>}
              {section.points && (
                <ul className="section-points">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
              {section.examples && (
                <div className="examples-grid">
                  {section.examples.map((ex, i) => (
                    <div key={i} className="example-card">
                      <img src={`/${ex.image}`} alt={ex.label} />
                      <p className="example-label">{ex.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}

      <div className="text-center">
      <button className="mt-6 text-lg px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition">
  <EyeIcon className="w-5 h-5 mr-2" /> Try the AI or Not? Game
</button>

      </div>
    </div>
  );
};

export default Humanability;
