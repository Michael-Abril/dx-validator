import Image from "next/image";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main>
      <h1>DX Validator — Varity / Akash integration test</h1>
      <p>Eight checks for dynamic Next.js features on Akash:</p>
      <ul>
        <li><a href="/api/health">/api/health</a> — API routes (check #1)</li>
        <li><a href="/api/env">/api/env</a> — env vars at runtime (check #2)</li>
        <li><a href="/product/42">/product/42</a> — dynamic routes (check #3)</li>
        <li><a href="/middleware-test">/middleware-test</a> — middleware (check #4)</li>
        <li><a href="/api/stream">/api/stream</a> — streaming responses (check #5)</li>
        <li>Image below — next/image w/ unoptimized (check #6)</li>
        <li>All routes 200 — build artifacts complete (check #7)</li>
        <li><a href="/db">/db</a> — Prisma + Postgres sidecar (check #8)</li>
      </ul>
      <hr />
      <h2>next/image test (check #6)</h2>
      <Image
        src="/varity-logo.svg"
        alt="Varity logo"
        width={240}
        height={80}
        priority
      />
      <p><em>If the logo above is visible, next/image with unoptimized=true works under the varity.app subpath.</em></p>
    </main>
  );
}
