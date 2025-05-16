import { useEffect, useState } from 'react';

export default function Logs() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://0e40fa4b-1125-4586-8d07-51e603b8de2e-00-kpr319x2y9jg.riker.replit.dev/logs")
      .then(res => res.json())
      .then(data => {
        setLogs(data.logs || []);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">📄 GPT Logs</h1>
      {loading ? (
        <p>Loading logs...</p>
      ) : (
        <ul className="space-y-4">
          {logs.map((log, i) => (
            <li key={i} className="p-4 border rounded bg-white">
              <div className="text-xs text-gray-500 mb-1">{log.timestamp}</div>
              <div className="font-semibold">🧠 Prompt:</div>
              <pre className="whitespace-pre-wrap text-sm mb-2">{log.user_input}</pre>
              <div className="font-semibold">💡 GPT Response:</div>
              <pre className="whitespace-pre-wrap text-sm mb-2">{log.summary_result}</pre>
              {log.sql_query && (
                <>
                  <div className="font-semibold">🧾 SQL Used:</div>
                  <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-2 rounded border border-gray-200">{log.sql_query}</pre>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
