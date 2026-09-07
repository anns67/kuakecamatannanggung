// Cloudflare Pages Function: /api/konsultasi
// CRUD Data Forum Konsultasi menggunakan Cloudflare D1 (SQLite)

export async function onRequestGet(context) {
  const { env } = context;

  if (!env.DB) {
    return Response.json({ success: false, d1: false, message: "D1 belum terpasang." }, { status: 503 });
  }

  try {
    const { results } = await env.DB.prepare(`
      SELECT * FROM konsultasi ORDER BY created_at DESC
    `).all();

    const data = results.map(row => {
      const item = {
        id: row.id,
        nama: row.nama,
        isAnonim: Boolean(row.isAnonim),
        hp: row.hp,
        topik: row.topik,
        judul: row.judul,
        pesan: row.pesan,
        visibility: row.visibility || 'public',
        date: row.date,
        status: row.status || 'pending',
        likes: row.likes || 0,
        likedByUser: false,
        answer: null
      };

      if (row.answer_isi) {
        item.answer = {
          petugasId: row.answer_petugas_id,
          petugasNama: row.answer_petugas_nama,
          petugasJabatan: row.answer_petugas_jabatan,
          avatar: row.answer_avatar,
          date: row.answer_date,
          isi: row.answer_isi
        };
      }

      return item;
    });

    return Response.json({ success: true, d1: true, data: data });
  } catch (error) {
    return Response.json({ success: false, d1: true, error: error.message }, { status: 500 });
  }
}

export async function onRequestPost(context) {
  const { env, request } = context;

  if (!env.DB) {
    return Response.json({ success: false, message: "D1 belum terpasang." }, { status: 503 });
  }

  try {
    const body = await request.json();

    // Jika sync batch
    if (Array.isArray(body)) {
      const stmt = env.DB.prepare(`
        INSERT INTO konsultasi (
          id, nama, isAnonim, hp, topik, judul, pesan, visibility, date, status, likes,
          answer_petugas_id, answer_petugas_nama, answer_petugas_jabatan, answer_avatar, answer_date, answer_isi, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
        ON CONFLICT(id) DO UPDATE SET
          nama = excluded.nama,
          isAnonim = excluded.isAnonim,
          hp = excluded.hp,
          topik = excluded.topik,
          judul = excluded.judul,
          pesan = excluded.pesan,
          visibility = excluded.visibility,
          date = excluded.date,
          status = excluded.status,
          likes = excluded.likes,
          answer_petugas_id = excluded.answer_petugas_id,
          answer_petugas_nama = excluded.answer_petugas_nama,
          answer_petugas_jabatan = excluded.answer_petugas_jabatan,
          answer_avatar = excluded.answer_avatar,
          answer_date = excluded.answer_date,
          answer_isi = excluded.answer_isi,
          updated_at = CURRENT_TIMESTAMP
      `);

      const batch = body.map(c => {
        const ans = c.answer || {};
        return stmt.bind(
          c.id,
          c.nama || "",
          c.isAnonim ? 1 : 0,
          c.hp || "",
          c.topik || "",
          c.judul || "",
          c.pesan || "",
          c.visibility || "public",
          c.date || "",
          c.status || "pending",
          c.likes || 0,
          ans.petugasId || null,
          ans.petugasNama || null,
          ans.petugasJabatan || null,
          ans.avatar || null,
          ans.date || null,
          ans.isi || null
        );
      });

      await env.DB.batch(batch);
      return Response.json({ success: true, message: "Konsultasi batch tersimpan di D1!" });
    }

    // Single item
    const c = body;
    const ans = c.answer || {};
    const id = c.id || ("consult-" + Date.now());

    await env.DB.prepare(`
      INSERT INTO konsultasi (
        id, nama, isAnonim, hp, topik, judul, pesan, visibility, date, status, likes,
        answer_petugas_id, answer_petugas_nama, answer_petugas_jabatan, answer_avatar, answer_date, answer_isi, updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
      ON CONFLICT(id) DO UPDATE SET
        nama = excluded.nama,
        isAnonim = excluded.isAnonim,
        hp = excluded.hp,
        topik = excluded.topik,
        judul = excluded.judul,
        pesan = excluded.pesan,
        visibility = excluded.visibility,
        date = excluded.date,
        status = excluded.status,
        likes = excluded.likes,
        answer_petugas_id = excluded.answer_petugas_id,
        answer_petugas_nama = excluded.answer_petugas_nama,
        answer_petugas_jabatan = excluded.answer_petugas_jabatan,
        answer_avatar = excluded.answer_avatar,
        answer_date = excluded.answer_date,
        answer_isi = excluded.answer_isi,
        updated_at = CURRENT_TIMESTAMP
    `).bind(
      id,
      c.nama || "",
      c.isAnonim ? 1 : 0,
      c.hp || "",
      c.topik || "",
      c.judul || "",
      c.pesan || "",
      c.visibility || "public",
      c.date || "",
      c.status || "pending",
      c.likes || 0,
      ans.petugasId || null,
      ans.petugasNama || null,
      ans.petugasJabatan || null,
      ans.avatar || null,
      ans.date || null,
      ans.isi || null
    ).run();

    return Response.json({ success: true, id, message: "Konsultasi tersimpan di D1 SQLite!" });

  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function onRequestDelete(context) {
  const { env, request } = context;

  if (!env.DB) {
    return Response.json({ success: false, message: "D1 belum terpasang." }, { status: 503 });
  }

  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return Response.json({ success: false, message: "Parameter id diperlukan." }, { status: 400 });
    }

    await env.DB.prepare("DELETE FROM konsultasi WHERE id = ?").bind(id).run();

    return Response.json({ success: true, message: `Konsultasi ${id} berhasil dihapus dari D1.` });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
