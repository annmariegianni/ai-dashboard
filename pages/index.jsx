'use client';

import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const GPT_API = "https://0e40fa4b-1125-4586-8d07-51e603b8de2e-00-kpr319x2y9jg.riker.replit.dev/bezos-chat/";

  const ask = async () => {
    setLoading(true);
    const res = await fetch(GPT_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    const data = await res.json();
    setResponse(data.response);
    setLoading(false);
  };

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🧠 Bezos GPT Dashboard</h1>
      <textarea
        className="w-full border p-2 rounded mb-2"
        rows={4}
        placeholder="Ask Bezos anything about your campaigns..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="bg-black text-white px-4 py-2 rounded" onClick={ask} disabled={loading}>
        {loading ? 'Thinking...' : 'Ask Bezos'}
      </button>
      <pre className="mt-4 bg-white p-4 rounded whitespace-pre-wrap">{response}</pre>
    </main>
  );
}
