import { useEffect, useState } from 'react';

export default function Approvals() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://0e40fa4b-1125-4586-8d07-51e603b8de2e-00-kpr319x2y9jg.riker.replit.dev/approvals")
      .then(res => res.json())
      .then(data => {
        setRows(data.approvals || []);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">✅ Approved Recommendations</h1>
      {loading ? (
        <p>Loading approvals...</p>
      ) : (
        <ul className="space-y-4">
          {rows.map((rec, i) => (
            <li key={i} className="p-4 border rounded bg-white">
              <div className="text-xs text-gray-500 mb-1">{rec.created_at}</div>
              <div className="font-semibold">📣 Recommendation:</div>
              <pre className="whitespace-pre-wrap text-sm mb-2">{rec.recommendation}</pre>
              <div><strong>Campaign:</strong> {rec.campaign_id}</div>
              <div><strong>Approved by:</strong> {rec.approved_by}</div>
              <div><strong>Status:</strong> {rec.approved ? "✅ Approved" : "❌ Rejected"}</div>
              {rec.reason && (
                <div><strong>Reason:</strong> {rec.reason}</div>
              )}
              {rec.feedback && (
                <div><strong>Feedback:</strong> {rec.feedback}</div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
