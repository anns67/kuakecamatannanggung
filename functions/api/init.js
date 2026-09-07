// Cloudflare Pages Function: /api/init
// Menginisialisasi tabel-tabel SQLite di Cloudflare D1 secara otomatis jika belum ada

export async function onRequest(context) {
  const { env, request } = context;
  const url = new URL(request.url);

  // Cek apakah binding D1 tersedia
  if (!env.DB) {
    return Response.json({
      status: "warning",
      d1_connected: false,
      message: "D1 SQLite binding (env.DB) belum terhubung di Cloudflare Pages. Website tetap berjalan normal menggunakan local cache."
    }, { status: 200 });
  }

  try {
    // 1. Buat tabel pegawai
    await env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS pegawai (
        id TEXT PRIMARY KEY,
        nama TEXT NOT NULL,
        role TEXT NOT NULL,
        nip TEXT,
        jabatan TEXT,
        wilayah TEXT,
        avatar TEXT,
        bio TEXT,
        keahlian TEXT,
        email TEXT,
        hp TEXT,
        urutan INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `).run();

    // 2. Buat tabel konsultasi
    await env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS konsultasi (
        id TEXT PRIMARY KEY,
        nama TEXT NOT NULL,
        isAnonim INTEGER DEFAULT 0,
        hp TEXT,
        topik TEXT,
        judul TEXT NOT NULL,
        pesan TEXT NOT NULL,
        visibility TEXT DEFAULT 'public',
        date TEXT,
        status TEXT DEFAULT 'pending',
        likes INTEGER DEFAULT 0,
        answer_petugas_id TEXT,
        answer_petugas_nama TEXT,
        answer_petugas_jabatan TEXT,
        answer_avatar TEXT,
        answer_date TEXT,
        answer_isi TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `).run();

    // 3. Buat tabel settings
    await env.DB.prepare(`
      CREATE TABLE IF NOT EXISTS settings (
        key TEXT PRIMARY KEY,
        value TEXT,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `).run();

    // 4. Cek apakah tabel pegawai masih kosong
    const countRes = await env.DB.prepare("SELECT COUNT(*) as total FROM pegawai").first();
    let seeded = false;

    if (countRes && countRes.total === 0) {
      // Seed data awal pegawai resmi KUA Nanggung
      const defaultStaff = [
        ['kua-1', 'H. Baday, S.Ag.', 'kepala', '19750812 200212 1 003', 'Kepala KUA Kecamatan Nanggung', 'KUA Kecamatan Nanggung', 'foto/baday.jpg', 'Memimpin pelayanan KUA dengan prinsip integritas, pelayanan cepat bebas pungli, dan pembinaan keluarga sakinah mawaddah wa rahmah di wilayah kecamatan.', '["Hukum Munakahat", "Manajemen Pelayanan Publik", "Penasihat BP4", "Kepemimpinan Syariah"]', 'baday@kemenag.go.id', '0857-1535-4226', 1],
        ['kua-2', 'Acep, S.Ag.', 'wakil_kepala', '196910131992031002', 'Wakil Kepala KUA', 'KUA Kecamatan Nanggung', 'foto/acep.jpg', 'Mendampingi Kepala KUA dalam tugas-tugas administratif, pelayanan keagamaan, serta pengawasan lintas program KUA.', '["Pemeriksaan Berkas N1-N4", "Legalitas Akta Nikah", "Konseling Suscatin"]', 'acep@kemenag.go.id', '0813-8877-6655', 2],
        ['kua-3', 'Ahmad Fadhil, S.Hum.', 'penghulu', '200102022025051006', 'Penghulu Ahli Pertama', 'KUA Kecamatan Nanggung', 'foto/fadhil.jpg', 'Penghulu KUA yang aktif melayani pemeriksaan nikah, bimbingan calon pengantin (Bimwin), dan pelayanan akad nikah.', '["Fiqih Munakahat", "Akta Nikah SIMKAH", "Bimbingan Calon Pengantin"]', 'ahmad.fadhil@kemenag.go.id', '0812-3456-7890', 3],
        ['kua-4', 'Ating, Lc.', 'penyuluh', '198603112023211015', 'Penyuluh Agama Islam', 'Kecamatan Nanggung', 'foto/ating.jpg', 'Penyuluh fungsional yang aktif memberikan pembinaan majelis taklim, khutbah Jumat, dan bimbingan keagamaan masyarakat.', '["Pembinaan Majelis Taklim", "Bimbingan Syariah", "Konseling Rohani"]', 'ating@kemenag.go.id', '0813-2233-4455', 4],
        ['kua-5', 'Dede Nurdiansah, S.Pd.I.', 'penyuluh', '198701112025211011', 'Penyuluh Agama Islam', 'Kecamatan Nanggung', 'foto/dede.png', 'Penyuluh yang membina program pengajian rutin, konsultasi keluarga sakinah, dan pembinaan generasi muda Islam.', '["Konseling Keluarga", "Pembinaan Rohani", "Bimbingan BP4"]', 'dede@kemenag.go.id', '0815-6677-8899', 5],
        ['kua-6', 'Razmi Mujibullah, S.H.I.', 'penyuluh', '198902042023211023', 'Penyuluh Agama Islam', 'Kecamatan Nanggung', 'foto/razmi.jpg', 'Penyuluh Agama Islam yang fokus pada bimbingan perkawinan pra-nikah dan penyuluhan hukum keluarga Islam.', '["Hukum Keluarga Islam", "Bimwin Pranikah", "Penyuluhan BP4"]', 'razmi@kemenag.go.id', '0817-1122-3344', 6],
        ['kua-7', 'Neny Mardiani, S.Pd.I.', 'penyuluh', '197806152025212011', 'Penyuluh Agama Islam', 'Kecamatan Nanggung', 'foto/neny.jpg', 'Penyuluh spesialis pembinaan majelis taklim kaum ibu, pencegahan stunting calon pengantin, dan ketahanan keluarga sakinah.', '["Majelis Taklim Ibu-Ibu", "Pencegahan Stunting", "Konseling Sakinah"]', 'neny@kemenag.go.id', '0818-4455-6677', 7],
        ['kua-8', 'Kiki, S.E.', 'staf', '19920418 201802 2 004', 'Staf Administrasi & Operator SIMKAH', 'Front Office Pelayanan KUA', 'foto/kiki.jpg', 'Petugas staf administrasi front office yang melayani verifikasi pendaftaran SIMKAH online, validasi dokumen, dan pencetakan Buku Nikah.', '["Operator SIMKAH Web 4.0", "Pelayanan Front Office", "Pengarsipan Akta Nikah"]', 'kiki@kemenag.go.id', '0819-3344-5566', 8],
        ['kua-9', 'Tia, S.AP.', 'staf', '19940712 202012 2 008', 'Staf Pelayanan & Umum', 'Front Office KUA', 'foto/tia.jpg', 'Melayani legalisasi buku nikah, surat rekomendasi nikah luar daerah, dan pelayanan informasi umum publik.', '["Legalisasi Dokumen", "Administrasi Umum", "Front Office"]', 'tia@kemenag.go.id', '0821-5566-7788', 9],
        ['kua-10', 'Jajang, S.Sos.', 'staf', '19850315 201201 1 007', 'Staf Tata Usaha', 'KUA Kecamatan Nanggung', 'foto/jajang.jpg', 'Mengelola persuratan, kearsipan dinas, inventaris dan sarana prasarana penunjang operasional kantor KUA.', '["Tata Usaha", "Manajemen Kearsipan", "Sarana Prasarana"]', 'jajang@kemenag.go.id', '0812-7788-9900', 10],
        ['kua-11', 'Maman, S.Ag.', 'penghulu', '19830510 200903 1 005', 'Penghulu Ahli Muda', 'KUA Kecamatan Nanggung', 'foto/maman.jpg', 'Melayani bimbingan pranikah calon pengantin, pemeriksaan saksi dan wali nikah, serta memimpin prosesi ijab kabul akad nikah.', '["Fiqih Munakahat", "Akad Nikah", "Bimwin BP4"]', 'maman@kemenag.go.id', '0813-4455-6677', 11],
        ['kua-12', 'Elya, S.Ag.', 'penghulu', '19810820 200801 1 006', 'Penghulu Ahli Muda', 'KUA Kecamatan Nanggung', 'foto/elya.jpg', 'Melayani pelayanan pendaftaran akad nikah di kantor maupun bedhol luar kantor, verifikasi status wali, dan registrasi nikah rujuk.', '["Pemeriksaan Wali Nikah", "Nikah Bedhol", "Registrasi SIMKAH"]', 'elya@kemenag.go.id', '0815-7788-1122', 12)
      ];

      const stmt = env.DB.prepare(`
        INSERT INTO pegawai (id, nama, role, nip, jabatan, wilayah, avatar, bio, keahlian, email, hp, urutan)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);

      const batchQueries = defaultStaff.map(s => stmt.bind(...s));
      await env.DB.batch(batchQueries);
      seeded = true;
    }

    return Response.json({
      status: "success",
      d1_connected: true,
      message: "Database Cloudflare D1 SQLite berhasil diinisialisasi!",
      seeded: seeded
    });

  } catch (error) {
    return Response.json({
      status: "error",
      d1_connected: true,
      error: error.message
    }, { status: 500 });
  }
}
