import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="flex gap-6 p-4 border-b bg-white shadow text-sm font-medium">
        <Link href="/">🧠 GPT</Link>
        <Link href="/logs">📄 Logs</Link>
        <Link href="/approvals">✅ Approvals</Link>
        <Link href="/summary">📊 Summary</Link>
      </nav>
      <main className="p-6 max-w-5xl mx-auto">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
