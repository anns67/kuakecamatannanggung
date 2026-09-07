// Cloudflare Pages Function: /api/settings
// Pengaturan situs (seperti foto hero) di Cloudflare D1 (SQLite)

export async function onRequestGet(context) {
  const { env, request } = context;

  if (!env.DB) {
    return Response.json({ success: false, message: "D1 belum terpasang." }, { status: 503 });
  }

  try {
    const url = new URL(request.url);
    const key = url.searchParams.get("key");

    if (key) {
      const row = await env.DB.prepare("SELECT value FROM settings WHERE key = ?").bind(key).first();
      return Response.json({ success: true, key, value: row ? row.value : null });
    }

    const { results } = await env.DB.prepare("SELECT * FROM settings").all();
    const settingsObj = {};
    results.forEach(r => { settingsObj[r.key] = r.value; });
    return Response.json({ success: true, data: settingsObj });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function onRequestPost(context) {
  const { env, request } = context;

  if (!env.DB) {
    return Response.json({ success: false, message: "D1 belum terpasang." }, { status: 503 });
  }

  try {
    const body = await request.json();
    const { key, value } = body;

    if (!key) {
      return Response.json({ success: false, message: "Key diperlukan." }, { status: 400 });
    }

    await env.DB.prepare(`
      INSERT INTO settings (key, value, updated_at)
      VALUES (?, ?, CURRENT_TIMESTAMP)
      ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = CURRENT_TIMESTAMP
    `).bind(key, value || "").run();

    return Response.json({ success: true, message: `Setting ${key} tersimpan di D1!` });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
