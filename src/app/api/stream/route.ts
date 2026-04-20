export const dynamic = "force-dynamic";

// SSE endpoint — proves streaming works through the ingress + container.
// Sends 5 chunks one second apart, then closes.
export async function GET() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      for (let i = 1; i <= 5; i++) {
        const data = JSON.stringify({ chunk: i, ts: Date.now() });
        controller.enqueue(encoder.encode(`data: ${data}\n\n`));
        await new Promise((r) => setTimeout(r, 200));
      }
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      "Connection": "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}
