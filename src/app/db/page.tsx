import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function DbPage() {
  let status: { ok: true; count: number; recorded: number } | { ok: false; error: string };
  try {
    // Record this visit, then count all visits. Proves both reads and writes
    // against the Akash-provisioned postgres sidecar via Prisma.
    const recorded = await prisma.visit.create({
      data: { path: "/db" },
    });
    const count = await prisma.visit.count();
    status = { ok: true, count, recorded: recorded.id };
  } catch (err) {
    status = {
      ok: false,
      error: err instanceof Error ? err.message : String(err),
    };
  }

  return (
    <main>
      <h1>Prisma + Postgres sidecar test</h1>
      {status.ok ? (
        <>
          <p style={{ color: "green" }}>
            ✓ Connected to Postgres via Prisma. Read + write both succeeded.
          </p>
          <p>Visits recorded: <strong>{status.count}</strong></p>
          <p>This visit's ID: {status.recorded}</p>
        </>
      ) : (
        <>
          <p style={{ color: "red" }}>✗ Prisma / Postgres failed.</p>
          <pre style={{ background: "#fee", padding: 12, overflow: "auto" }}>
            {status.error}
          </pre>
        </>
      )}
      <a href="/">← back</a>
    </main>
  );
}
