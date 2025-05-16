// File: pages/summary.jsx

import { useEffect, useState } from 'react';

export default function Summary() {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://0e40fa4b-1125-4586-8d07-51e603b8de2e-00-kpr319x2y9jg.riker.replit.dev/summary")
      .then(res => res.json())
      .then(data => {
        setSummary(data.summary || "No summary available.");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">📊 Weekly Digest Summary</h1>
      {loading ? (
        <p>Loading summary...</p>
      ) : (
        <pre className="whitespace-pre-wrap bg-white border p-4 rounded text-sm">
          {summary}
        </pre>
      )}
    </div>
  );
}
