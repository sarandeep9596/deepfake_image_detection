import React from "react";
export default function Result() {
    const result = JSON.parse(localStorage.getItem("result"));
    const imageUrl = localStorage.getItem("uploadedImage");
  
    const handleDownload = () => {
      const element = document.createElement("a");
      const content = `Analysis Result:\n\nAuthenticity: ${result.authenticity}\nConfidence: ${result.confidence}%\nMessage: ${result.message}`;
      const file = new Blob([content], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = "analysis_result.txt";
      document.body.appendChild(element);
      element.click();
    };
  
    return (
      <div className="p-4 text-white">
        <h2 className="text-2xl font-bold mb-2">Result Page</h2>
        <img src={imageUrl} alt="Uploaded" className="max-w-md mb-4" />
        <p><strong>Authenticity:</strong> {result.authenticity}</p>
        <p><strong>Confidence:</strong> {result.confidence}%</p>
        <p><strong>Message:</strong> {result.message}</p>
        <button onClick={handleDownload} className="mt-4 bg-blue-600 px-4 py-2 rounded">Download PDF</button>
        <div className="mt-6">
          <h3 className="text-lg font-semibold">Useful Resources</h3>
          <ul className="list-disc list-inside">
            <li><a href="https://www.deepware.ai" className="text-blue-400" target="_blank">Deepware Scanner</a></li>
            <li><a href="https://www.sensity.ai" className="text-blue-400" target="_blank">Sensity AI</a></li>
          </ul>
        </div>
      </div>
    );
  }