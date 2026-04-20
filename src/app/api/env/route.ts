import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Never returns secret values — only presence flags. Proves env vars from
// `.env.varity` / `.env.local` reach the Akash container runtime.
export async function GET() {
  return NextResponse.json({
    has_openai_key: Boolean(process.env.OPENAI_API_KEY),
    openai_key_starts_with: process.env.OPENAI_API_KEY?.slice(0, 7) ?? null,
    has_database_url: Boolean(process.env.DATABASE_URL),
    database_url_scheme: process.env.DATABASE_URL?.split("://")[0] ?? null,
    has_app_name: Boolean(process.env.APP_NAME),
    app_name: process.env.APP_NAME ?? null,
    has_custom_test_var: Boolean(process.env.DX_VALIDATOR_TOKEN),
    custom_test_var: process.env.DX_VALIDATOR_TOKEN ?? null,
    node_env: process.env.NODE_ENV,
    port: process.env.PORT,
  });
}
