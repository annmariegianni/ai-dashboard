'use client';

import { useState } from 'react';

export default function Home() {
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const GPT_API = "https://0e40fa4b-1125-4586-8d07-51e603b8de2e-00-kpr319x2y9jg.riker.replit.dev/bezos-chat/";
  const ACCESS_KEY = "yourpassword"; // 🔐 Replace this with your real key

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

  if (!authed) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-xl font-bold mb-4">🔐 Enter Access Key</h1>
        <input
          className="border p-2 rounded w-full max-w-sm"
          type="password"
          placeholder="Access key..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="mt-4 bg-black text-white px-4 py-2 rounded" onClick={() => setAuthed(password === ACCESS_KEY)}>
          Unlock
        </button>
      </main>
    );
  }

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

