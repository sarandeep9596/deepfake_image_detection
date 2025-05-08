import React, { useEffect, useState } from 'react';

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Fetch history from backend or local storage (mock data here)
    setHistory([
      { id: 1, date: '2025-05-01', result: 'Fake', confidence: 13 },
      { id: 2, date: '2025-04-30', result: 'Real', confidence: 92 },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h2 className="text-3xl font-bold mb-6">Detection History</h2>
      <table className="w-full table-auto text-left">
        <thead>
          <tr className="bg-gray-700">
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Result</th>
            <th className="px-4 py-2">Confidence</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry) => (
            <tr key={entry.id} className="border-b border-gray-600">
              <td className="px-4 py-2">{entry.date}</td>
              <td className="px-4 py-2">{entry.result}</td>
              <td className="px-4 py-2">{entry.confidence}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
