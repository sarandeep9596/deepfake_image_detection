import React from 'react';

export default function FakeGenerator() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white p-10">
      <h2 className="text-3xl font-bold mb-4">Fake Image Generator</h2>
      <p className="mb-6 text-gray-400">Generate AI images for testing purposes using pre-trained models (e.g., StyleGAN, DeepAI).</p>
      <button className="bg-purple-600 hover:bg-purple-500 px-6 py-2 rounded-lg font-semibold">Generate Image</button>
    </div>
  );
}
