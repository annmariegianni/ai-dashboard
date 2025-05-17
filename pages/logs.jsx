import { useEffect, useState } from 'react';

export default function Logs() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://0e40fa4b-1125-4586-8d07-51e603b8de2e-00-kpr319x2y9jg.riker.replit.dev/logs")
      .then((res) => res.json())
      .then((data) => {
        setLogs(data.logs || []);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">📄 GPT Logs</h1>

      {loading ? (
        <p>Loading logs...</p>
      ) : (
        <ul className="space-y-6">
          {logs.map((log, i) => (
            <li
              key={i}
              className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              <div className="text-xs text-gray-500 mb-2">
                {log.timestamp}
              </div>

              {log.user_input && (
                <>
                  <div className="font-semibold text-gray-700 mb-1">
                    🧠 Prompt
                  </div>
                  <pre className="text-sm whitespace-pre-wrap bg-gray-50 p-2 rounded border mb-4">
                    {log.user_input}
                  </pre>
                </>
              )}

              {log.summary_result && (
                <>
                  <div className="font-semibold text-gray-700 mb-1">
                    💡 GPT Response
                  </div>
                  <pre className="text-sm whitespace-pre-wrap bg-gray-50 p-2 rounded border mb-4">
                    {log.summary_result}
                  </pre>
                </>
              )}

              {log.sql_query && (
                <>
                  <div className="font-semibold text-gray-700 mb-1">
                    🧾 SQL Used
                  </div>
                  <pre className="text-sm whitespace-pre-wrap bg-yellow-50 p-2 rounded border border-yellow-300">
                    {log.sql_query}
                  </pre>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
