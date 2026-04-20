export const dynamic = "force-dynamic";

export default function MiddlewareTestPage() {
  return (
    <main>
      <h1>Middleware target page</h1>
      <p>
        If Next.js middleware ran correctly, the response to THIS page includes
        the header <code>X-Varity-Middleware: ok</code>. Check response headers
        (browser devtools → Network, or <code>curl -I</code>).
      </p>
      <a href="/">← back</a>
    </main>
  );
}
