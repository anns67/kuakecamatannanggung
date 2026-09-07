// Cloudflare Pages Function: /api/pegawai
// CRUD Data Pegawai menggunakan Cloudflare D1 (SQLite)

export async function onRequestGet(context) {
  const { env } = context;

  if (!env.DB) {
    return Response.json({
      success: false,
      d1: false,
      message: "D1 database binding (env.DB) belum terpasang."
    }, { status: 503 });
  }

  try {
    const { results } = await env.DB.prepare(`
      SELECT * FROM pegawai ORDER BY urutan ASC, created_at ASC
    `).all();

    // Parse JSON string keahlian
    const data = results.map(row => {
      let keahlianArr = [];
      if (row.keahlian) {
        try {
          keahlianArr = JSON.parse(row.keahlian);
        } catch (e) {
          keahlianArr = [row.keahlian];
        }
      }
      return {
        ...row,
        keahlian: keahlianArr
      };
    });

    return Response.json({
      success: true,
      d1: true,
      data: data
    });
  } catch (error) {
    return Response.json({
      success: false,
      d1: true,
      error: error.message
    }, { status: 500 });
  }
}

export async function onRequestPost(context) {
  const { env, request } = context;

  if (!env.DB) {
    return Response.json({ success: false, message: "D1 database binding belum terpasang." }, { status: 503 });
  }

  try {
    const body = await request.json();

    // Jika mengirim batch data pegawai (misal: sync array penuh)
    if (Array.isArray(body)) {
      const stmt = env.DB.prepare(`
        INSERT INTO pegawai (id, nama, role, nip, jabatan, wilayah, avatar, bio, keahlian, email, hp, urutan, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
        ON CONFLICT(id) DO UPDATE SET
          nama = excluded.nama,
          role = excluded.role,
          nip = excluded.nip,
          jabatan = excluded.jabatan,
          wilayah = excluded.wilayah,
          avatar = excluded.avatar,
          bio = excluded.bio,
          keahlian = excluded.keahlian,
          email = excluded.email,
          hp = excluded.hp,
          urutan = excluded.urutan,
          updated_at = CURRENT_TIMESTAMP
      `);

      const batch = body.map((p, idx) => {
        const keahlianStr = Array.isArray(p.keahlian) ? JSON.stringify(p.keahlian) : (p.keahlian || "[]");
        return stmt.bind(
          p.id || ("kua-" + Date.now() + "-" + idx),
          p.nama || "",
          p.role || "staf",
          p.nip || "",
          p.jabatan || "",
          p.wilayah || "",
          p.avatar || "foto/baday.jpg",
          p.bio || "",
          keahlianStr,
          p.email || "",
          p.hp || "",
          idx + 1
        );
      });

      await env.DB.batch(batch);
      return Response.json({ success: true, message: "Batch data pegawai berhasil disimpan ke D1 SQLite!" });
    }

    // Single insert/update
    const p = body;
    const keahlianStr = Array.isArray(p.keahlian) ? JSON.stringify(p.keahlian) : (p.keahlian || "[]");
    const id = p.id || ("kua-" + Date.now());

    await env.DB.prepare(`
      INSERT INTO pegawai (id, nama, role, nip, jabatan, wilayah, avatar, bio, keahlian, email, hp, urutan, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
      ON CONFLICT(id) DO UPDATE SET
        nama = excluded.nama,
        role = excluded.role,
        nip = excluded.nip,
        jabatan = excluded.jabatan,
        wilayah = excluded.wilayah,
        avatar = excluded.avatar,
        bio = excluded.bio,
        keahlian = excluded.keahlian,
        email = excluded.email,
        hp = excluded.hp,
        urutan = excluded.urutan,
        updated_at = CURRENT_TIMESTAMP
    `).bind(
      id,
      p.nama || "",
      p.role || "staf",
      p.nip || "",
      p.jabatan || "",
      p.wilayah || "",
      p.avatar || "foto/baday.jpg",
      p.bio || "",
      keahlianStr,
      p.email || "",
      p.hp || "",
      p.urutan || 0
    ).run();

    return Response.json({ success: true, id, message: "Data pegawai berhasil disimpan ke D1 SQLite!" });

  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function onRequestDelete(context) {
  const { env, request } = context;

  if (!env.DB) {
    return Response.json({ success: false, message: "D1 database binding belum terpasang." }, { status: 503 });
  }

  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return Response.json({ success: false, message: "Parameter id pegawai diperlukan." }, { status: 400 });
    }

    await env.DB.prepare("DELETE FROM pegawai WHERE id = ?").bind(id).run();

    return Response.json({ success: true, message: `Pegawai ${id} berhasil dihapus dari D1 SQLite.` });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
