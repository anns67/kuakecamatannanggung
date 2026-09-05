/* ==========================================================================
   PORTAL KUA - LOGIKA JAVASCRIPT UTAMA & MANAJEMEN PEGAWAI KUA
   ========================================================================== */

// --- INITIAL MOCK DATA PEGAWAI KUA ---
const DEFAULT_KUA_PEGAWAI = [
  {
    id: "kua-1",
    nama: "H. Baday, S.Ag.",
    role: "kepala",
    nip: "19750812 200212 1 003",
    jabatan: "Kepala KUA Kecamatan Nanggung",
    wilayah: "KUA Kecamatan Nanggung",
    avatar: "foto/baday",
    bio: "Memimpin pelayanan KUA dengan prinsip integritas, pelayanan cepat bebas pungli, dan pembinaan keluarga sakinah mawaddah wa rahmah di wilayah kecamatan.",
    keahlian: ["Hukum Munakahat", "Manajemen Pelayanan Publik", "Penasihat BP4", "Kepemimpinan Syariah"],
    email: "baday@kemenag.go.id",
    hp: "0857-1535-4226"
  },
  {
    id: "kua-2",
    nama: "Acep, S.Ag.",
    role: "Penghulu Ahli Madya",
    nip: "196910131992031002",
    jabatan: "Wakli Kepala KUA",
    wilayah: "KUA Kecamatan Nanggung",
    avatar: "foto/Acep",
    bio: "Pejabat Pencatat Nikah (PPAN) senior yang melayani pemeriksaan berkas nikah N1-N4, verifikasi SIMKAH, dan memimpin majelis akad nikah.",
    keahlian: ["Pemeriksaan Berkas N1-N4", "Legalitas Akta Nikah", "Konseling Suscatin"],
    email: "muhammad.ridwan@kemenag.go.id",
    hp: "0813-8877-6655"
  },
  {
    id: "kua-3",
    nama: "Siti Maryam, S.Th.I., M.Pd.",
    role: "penyuluh",
    nip: "19840620 200912 2 005",
    jabatan: "Penyuluh Agama Islam Fungsional",
    wilayah: "Kelurahan Mekarjaya & Bimbingan BP4",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    bio: "Penyuluh Agama Islam spesialis Bimbingan Perkawinan (Bimwin) calon pengantin dan konseling psikologi rumah tangga sakinah.",
    keahlian: ["Bimbingan Perkawinan (Bimwin)", "Konseling Rumah Tangga BP4", "Edukasi Pencegahan Stunting"],
    email: "siti.maryam@kemenag.go.id",
    hp: "0815-1122-3344"
  },
  {
    id: "kua-4",
    nama: "Ustadz Zulkifli, S.H.I.",
    role: "penghulu",
    nip: "19881104 201403 1 001",
    jabatan: "Penghulu Ahli Muda",
    wilayah: "Kelurahan Harapan Baru",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    bio: "Penghulu KUA yang aktif memberikan bimbingan syariat nikah, registrasi rujuk, dan pelayanan akad nikah baik di kantor maupun bedhol.",
    keahlian: ["Fiqih Munakahat", "Akta Nikah SIMKAH", "Bimbingan Calon Pengantin"],
    email: "zulkifli@kemenag.go.id",
    hp: "0817-6655-4433"
  },
  {
    id: "kua-5",
    nama: "Dewi Rahmawati, S.E.",
    role: "staf",
    nip: "19920418 201802 2 004",
    jabatan: "Staf Administrasi & Operator SIMKAH",
    wilayah: "Front Office Pelayanan KUA",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    bio: "Petugas staf administrasi front office yang melayani verifikasi pendaftaran SIMKAH online, validasi dokumen, dan pencetakan Buku Nikah.",
    keahlian: ["Operator SIMKAH Web 4.0", "Pelayanan Front Office", "Pengarsipan Akta Nikah"],
    email: "dewi.rahma@kemenag.go.id",
    hp: "0819-2233-4455"
  },
  {
    id: "kua-6",
    nama: "H. Ahmad Syarifuddin, S.Ag.",
    role: "penyuluh",
    nip: "19810110 200801 1 006",
    jabatan: "Penyuluh Zakat, Wakaf & Halal",
    wilayah: "Binaan Wakaf & Sertifikasi Halal UMK",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    bio: "Penyuluh spesialis penerbitan Akta Ikrar Wakaf (AIW), pendampingan Sertifikasi Halal Gratis (SEHALAL UMK), dan pengawasan masjid.",
    keahlian: ["Akta Ikrar Wakaf (AIW)", "Pendamping PPH Halal", "Pembinaan Kemasjidan"],
    email: "ahmad.syarif@kemenag.go.id",
    hp: "0812-9988-1122"
  },
  {
    id: "kua-7",
    nama: "Drs. H. Sulaiman, M.Sy.",
    role: "wakil_kepala",
    nip: "19760520 200312 1 002",
    jabatan: "Wakil Kepala KUA",
    wilayah: "Kecamatan Utama",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    bio: "Mendampingi Kepala KUA dalam tugas-tugas administratif, pelayanan keagamaan, serta menjadi koordinator pengawasan lintas program KUA.",
    keahlian: ["Manajemen Organisasi", "Hukum Keluarga Islam", "Supervisi Pelayanan"],
    email: "sulaiman.wakil@kemenag.go.id",
    hp: "0812-4455-6677"
  },
  {
    id: "kua-pembina",
    nama: "K.H. Mustofa Bisri, Lc.",
    role: "pembina",
    nip: "-",
    jabatan: "Pembina Keagamaan",
    wilayah: "Seluruh Wilayah Kecamatan",
    avatar: "https://images.unsplash.com/photo-1555952517-2e8af1a4f61b?auto=format&fit=crop&w=400&q=80",
    bio: "Memberikan nasihat, bimbingan, dan fatwa keagamaan untuk meningkatkan kualitas spiritual masyarakat dan staf KUA.",
    keahlian: [],
    email: "mustofa.pembina@kemenag.go.id",
    hp: "0811-1234-5678"
  },
  {
    id: "kua-8",
    nama: "H. Abdullah Faqih, S.Ag.",
    role: "penghulu",
    nip: "19800714 200604 1 004",
    jabatan: "Penghulu Ahli Muda",
    wilayah: "Kelurahan Cempaka & Melati",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    bio: "Berpengalaman dalam memimpin akad nikah di berbagai kondisi, memberikan penyuluhan pra-nikah, dan membantu verifikasi dokumen perkawinan.",
    keahlian: ["Fiqih Munakahat", "Bimbingan Pra-nikah", "Pemeriksaan Dokumen"],
    email: "abdullah.faqih@kemenag.go.id",
    hp: "0813-1122-4455"
  },
  {
    id: "kua-9",
    nama: "Ustadz Hasan Basri, Lc., M.A.",
    role: "penghulu",
    nip: "19850228 201011 1 003",
    jabatan: "Penghulu Pertama",
    wilayah: "Kelurahan Kenanga",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    bio: "Lulusan Timur Tengah yang mendedikasikan ilmunya untuk memberikan bimbingan keluarga harmonis sesuai tuntunan sunnah serta melayani akad nikah.",
    keahlian: ["Bahasa Arab", "Konseling Keluarga", "Bimbingan Rohani"],
    email: "hasan.basri@kemenag.go.id",
    hp: "0815-5566-7788"
  },
  {
    id: "kua-10",
    nama: "H. Ibrahim Malik, S.H.I.",
    role: "penghulu",
    nip: "19821210 200701 1 005",
    jabatan: "Penghulu Madya",
    wilayah: "Kelurahan Anggrek",
    avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=400&q=80",
    bio: "Penghulu senior yang sering menjadi rujukan terkait persoalan fikih keluarga, pembagian waris, dan perwalian dalam pernikahan.",
    keahlian: ["Faraid (Waris)", "Fikih Perwalian", "Resolusi Konflik Keluarga"],
    email: "ibrahim.malik@kemenag.go.id",
    hp: "0811-2233-4455"
  }
];

// --- INITIAL MOCK DATA KONSULTASI FORUM KUA ---
const DEFAULT_KUA_KONSULTASI = [
  {
    id: "consult-1",
    nama: "Fajar Pratama",
    isAnonim: false,
    hp: "081287654321",
    topik: "Pernikahan & Akad Nikah",
    judul: "Prosedur Rekomendasi Nikah Luar Daerah (Numpang Nikah) ke KUA Lain",
    pesan: "Assalamu'alaikum Warahmatullahi Wabarakatuh. Saya warga KUA Nanggung, berencana melangsungkan akad pernikahan di kediaman calon istri di Kota Bandung. Apa saja syarat surat numpang nikah dari KUA asal dan berapa lama surat rekomendasi tersebut berlaku?",
    visibility: "public",
    date: "04/09/2026 09.30",
    status: "answered",
    likes: 12,
    likedByUser: false,
    answer: {
      petugasId: "kua-2",
      petugasNama: "Acep, S.Ag.",
      petugasJabatan: "Wakil Kepala KUA / Penghulu Madya",
      avatar: "foto/Acep",
      date: "04/09/2026 11.15",
      isi: "Wa'alaikumsalam Wr. Wb. Bapak Fajar Pratama.\n\nUntuk pengurusan Surat Rekomendasi Nikah (Numpang Nikah) ke KUA tujuan (Bandung), silakan lengkapi berkas berikut:\n1. Pengantar Nikah dari Kelurahan/Desa domisili (Model N1).\n2. Fotokopi KTP, KK, Akta Kelahiran, dan Ijazah Terakhir calon pengantin.\n3. Pasfoto 2x3 dan 4x6 latar belakang biru (masing-masing 3 lembar).\n4. Surat Rekomendasi Nikah dari KUA Nanggung tidak dipungut biaya (Rp 0 / GRATIS).\n\nProses penerbitan rekomendasi di kantor KUA hanya memakan waktu 15–30 menit jika berkas lengkap. Masa berlaku surat rekomendasi umumnya 6 bulan sejak diterbitkan. Anda juga dapat mendaftar mandiri via portal SIMKAH Kemenag (simkah.kemenag.go.id)."
    }
  },
  {
    id: "consult-2",
    nama: "Hj. Ratna Wulandari",
    isAnonim: false,
    hp: "081399887766",
    topik: "Hukum Waris (Mawaris)",
    judul: "Perhitungan Waris: Ahli Waris 1 Anak Laki-laki dan 2 Anak Perempuan",
    pesan: "Bismillah. Almarhum orang tua kami meninggalkan sebidang tanah dan tabungan. Ahli waris yang ada adalah 1 anak laki-laki dan 2 anak perempuan (ibu sudah meninggal lebih dulu). Bagaimana pembagian yang sah sesuai kaidah faraid Islam dan apakah KUA dapat memfasilitasi musyawarah pembagian?",
    visibility: "public",
    date: "03/09/2026 14.10",
    status: "answered",
    likes: 18,
    likedByUser: false,
    answer: {
      petugasId: "kua-10",
      petugasNama: "H. Ibrahim Malik, S.H.I.",
      petugasJabatan: "Penghulu Madya & Pakar Faraid",
      avatar: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?auto=format&fit=crop&w=400&q=80",
      date: "03/09/2026 16.45",
      isi: "Bismillah walhamdulillah. Berdasarkan ketentuan Al-Qur'an (QS. An-Nisa: 11) dan Kompilasi Hukum Islam (KHI):\n\n1. Ketentuan porsi: Anak laki-laki memperoleh 2 bagian, sedangkan anak perempuan memperoleh 1 bagian (li adz-dzakari mitslu hazhzhi al-untsayain).\n2. Perhitungan: Anak laki-laki = 2 saham, 2 anak perempuan = 2 saham (masing-masing 1 saham). Total tirkah (harta waris bersih setelah pelunasan hutang/wasiat) dibagi 4 bagian sama besar. Anak laki-laki mendapat 2/4 (50%), dan masing-masing anak perempuan mendapat 1/4 (25%).\n3. Catatan: Jika seluruh ahli waris sepakat secara sukarela (ishlah / takharuj) membagi rata atau pembagian lain secara ikhlas, hal tersebut diperbolehkan dalam syariat.\n\nKUA siap memfasilitasi konsultasi bimbingan mawaris secara kekeluargaan di kantor pada jam kerja secara gratis."
    }
  },
  {
    id: "consult-3",
    nama: "Samsul Hadi (Ketua DKM)",
    isAnonim: false,
    hp: "085211223344",
    topik: "Wakaf & Kemasjidan",
    judul: "Pembuatan Akta Ikrar Wakaf (AIW) untuk Tanah Masjid Warga",
    pesan: "Assalamu'alaikum. Tanah masjid di kampung kami merupakan wakaf lisan dari orang tua terdahulu yang sudah wafat. Ahli waris wakif sekarang sepakat ingin menerbitkan sertifikat tanah wakaf resmi dari BPN. Bagaimana tahap pembuatan AIW / APAIW di KUA?",
    visibility: "public",
    date: "02/09/2026 10.00",
    status: "answered",
    likes: 9,
    likedByUser: false,
    answer: {
      petugasId: "kua-6",
      petugasNama: "H. Ahmad Syarifuddin, S.Ag.",
      petugasJabatan: "Penyuluh Zakat & Wakaf / PPAIW",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      date: "02/09/2026 13.20",
      isi: "Wa'alaikumsalam Wr. Wb. Pak Samsul dan segenap pengurus DKM.\n\nLangkah yang sangat mulia demi mengamankan legalitas rumah ibadah. Prosedurnya:\n1. Pembentukan susunan Nadzir (Pengelola Wakaf) minimal 3 orang (Ketua, Sekretaris, Bendahara).\n2. Permohonan Surat Keterangan Kepala Desa bahwa tanah tersebut riwayatnya tidak dalam sengketa.\n3. Hadir ke KUA bersama Ahli Waris Wakif (sebagai pengganti) dan 2 orang saksi untuk penandatanganan Akta Pengganti Akta Ikrar Wakaf (APAIW) di hadapan Kepala KUA / PPAIW.\n4. KUA akan menerbitkan dokumen pengesahan APAIW yang menjadi dasar pengurusan Sertifikat Tanah Wakaf ke Kantor Pertanahan (BPN) secara bebas biaya.\n\nSilakan datang ke ruang Penyuluh Wakaf KUA Nanggung untuk kami dampingi penyusunan berkasnya."
    }
  },
  {
    id: "consult-4",
    nama: "Anonim",
    isAnonim: true,
    hp: "087788990011",
    topik: "Bimbingan Keluarga & BP4",
    judul: "Bagaimana Mengikuti Kursus Calon Pengantin (Bimwin) jika Bekerja di Luar Kota?",
    pesan: "Selamat siang Bapak/Ibu KUA. Saya dan calon suami sudah mendaftar nikah di SIMKAH, namun calon suami bekerja di luar kota dan baru pulang 3 hari sebelum hari H akad nikah. Apakah bimbingan perkawinan wajib tatap muka atau bisa dengan penugasan mandiri?",
    visibility: "public",
    date: "04/09/2026 15.20",
    status: "pending",
    likes: 4,
    likedByUser: false,
    answer: null
  },
  {
    id: "consult-5",
    nama: "Hj. Maryamah",
    isAnonim: false,
    hp: "081900112233",
    topik: "Sertifikasi Halal UMK",
    judul: "Pendampingan Sertifikasi Halal Gratis (SEHALAL) untuk Usaha Roti Rumahan",
    pesan: "Assalamu'alaikum. Saya memiliki usaha kue dan roti skala mikro di rumah. Ingin mendaftar Sertifikasi Halal Gratis dari Kemenag. Apakah di KUA Nanggung ada petugas pendamping PPH yang bisa membantu proses input akun SIHALAL?",
    visibility: "public",
    date: "03/09/2026 11.45",
    status: "answered",
    likes: 7,
    likedByUser: false,
    answer: {
      petugasId: "kua-6",
      petugasNama: "H. Ahmad Syarifuddin, S.Ag.",
      petugasJabatan: "Pendamping Proses Produk Halal (P3H) KUA",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      date: "03/09/2026 14.00",
      isi: "Wa'alaikumsalam Wr. Wb. Ibu Maryamah.\n\nTentu saja! KUA Kecamatan Nanggung memiliki tim Pendamping Proses Produk Halal (P3H) resmi BPJPH Kemenag yang siap mendampingi pelaku usaha UMK secara GRATIS.\n\nSyarat program SEHALAL (Self Declare):\n1. Memiliki NIB (Nomor Induk Berusaha).\n2. Bahan baku sudah jelas kehalalannya (bersertifikat halal atau bahan alami nabati).\n3. Proses pengolahan sederhana dan bebas kontaminasi non-halal.\n\nSilakan bawa foto produk, daftar bahan baku, dan NIB ke KUA setiap hari kerja (08.00-15.00 WIB) untuk kami bantu daftarkan langsung sampai sertifikat halal terbit."
    }
  },
  {
    id: "consult-6",
    nama: "Hamba Allah",
    isAnonim: true,
    hp: "081299998888",
    topik: "Bimbingan Keluarga & BP4",
    judul: "Permohonan Mediasi & Bimbingan Khusus Rumah Tangga",
    pesan: "Mohon bimbingan dan waktu dari penasihat BP4 KUA untuk mediasi permasalahan komunikasi rumah tangga kami secara privat dan tertutup.",
    visibility: "private",
    date: "04/09/2026 16.00",
    status: "pending",
    likes: 0,
    likedByUser: false,
    answer: null
  }
];

// --- CLOUD SYNC CONFIG (JSONBin.io) ---
// Data pegawai tersimpan di cloud agar sinkron di semua perangkat
const CLOUD_SYNC = {
  // Bin ID dan API Key JSONBin.io - dibuat otomatis saat pertama kali sync
  binId: localStorage.getItem("kua_jsonbin_id") || null,
  apiKey: "$2a$10$KUA_PLACEHOLDER_KEY", // Akan diganti setelah setup JSONBin
  baseUrl: "https://api.jsonbin.io/v3",
  enabled: false // Akan true setelah binId tersedia
};

async function cloudPush(data) {
  if (!CLOUD_SYNC.enabled || !CLOUD_SYNC.binId) return false;
  try {
    const res = await fetch(`${CLOUD_SYNC.baseUrl}/b/${CLOUD_SYNC.binId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", "X-Master-Key": CLOUD_SYNC.apiKey },
      body: JSON.stringify(data)
    });
    return res.ok;
  } catch (e) { return false; }
}

async function cloudPull() {
  if (!CLOUD_SYNC.enabled || !CLOUD_SYNC.binId) return null;
  try {
    const res = await fetch(`${CLOUD_SYNC.baseUrl}/b/${CLOUD_SYNC.binId}/latest`, {
      headers: { "X-Master-Key": CLOUD_SYNC.apiKey, "X-Bin-Meta": "false" }
    });
    if (res.ok) return await res.json();
  } catch (e) {}
  return null;
}

// --- APP STATE MANAGEMENT ---
class KuaState {
  constructor() {
    this.pegawaiList = this.loadPegawaiFromStorage();
    this.activeRoleFilter = "all";
    this.searchQuery = "";
    this.isAdmin = false;
    this.heroImgUrl = this.loadHeroImgFromStorage();
    this.konsultasiList = this.loadKonsultasiFromStorage();
  }

  loadKonsultasiFromStorage() {
    const saved = localStorage.getItem("kua_konsultasi_data");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch (e) {
        console.error("Gagal membaca data konsultasi dari LocalStorage", e);
      }
    }
    localStorage.setItem("kua_konsultasi_data", JSON.stringify(DEFAULT_KUA_KONSULTASI));
    return DEFAULT_KUA_KONSULTASI;
  }

  saveKonsultasiToStorage() {
    localStorage.setItem("kua_konsultasi_data", JSON.stringify(this.konsultasiList));
  }

  addKonsultasi(data) {
    data.id = "consult-" + Date.now();
    const now = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    data.date = `${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()} ${pad(now.getHours())}.${pad(now.getMinutes())}`;
    data.likes = 0;
    data.likedByUser = false;
    data.status = "pending";
    data.answer = null;
    this.konsultasiList.unshift(data);
    this.saveKonsultasiToStorage();
  }

  answerKonsultasi(id, answerData) {
    const item = this.konsultasiList.find(c => c.id === id);
    if (item) {
      item.status = "answered";
      item.answer = answerData;
      this.saveKonsultasiToStorage();
    }
  }

  toggleKonsultasiStatus(id) {
    const item = this.konsultasiList.find(c => c.id === id);
    if (item) {
      item.status = item.status === "answered" ? "pending" : "answered";
      this.saveKonsultasiToStorage();
    }
  }

  deleteKonsultasi(id) {
    this.konsultasiList = this.konsultasiList.filter(c => c.id !== id);
    this.saveKonsultasiToStorage();
  }

  likeKonsultasi(id) {
    const item = this.konsultasiList.find(c => c.id === id);
    if (item) {
      if (item.likedByUser) {
        item.likes = Math.max(0, (item.likes || 0) - 1);
        item.likedByUser = false;
      } else {
        item.likes = (item.likes || 0) + 1;
        item.likedByUser = true;
      }
      this.saveKonsultasiToStorage();
    }
  }

  loadHeroImgFromStorage() {
    return localStorage.getItem("kua_hero_img") || "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80";
  }

  saveHeroImgToStorage(url) {
    this.heroImgUrl = url;
    localStorage.setItem("kua_hero_img", url);
  }

  loadPegawaiFromStorage() {
    const saved = localStorage.getItem("kua_pegawai_data_v2");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Gagal membaca data dari LocalStorage", e);
      }
    }
    localStorage.setItem("kua_pegawai_data_v2", JSON.stringify(DEFAULT_KUA_PEGAWAI));
    return DEFAULT_KUA_PEGAWAI;
  }

  savePegawaiToStorage() {
    localStorage.setItem("kua_pegawai_data_v2", JSON.stringify(this.pegawaiList));
    // Sinkron ke cloud jika admin sedang login
    if (this.isAdmin) {
      this._syncToCloud();
    }
  }

  async _syncToCloud() {
    const payload = { pegawai: this.pegawaiList, updatedAt: new Date().toISOString() };
    const ok = await cloudPush(payload);
    const badge = document.getElementById("cloud-sync-badge");
    if (badge) {
      badge.textContent = ok ? "✓ Tersimpan ke Cloud" : "⚠ Offline (tersimpan lokal)";
      badge.style.color = ok ? "#22c55e" : "#f59e0b";
      badge.style.display = "inline";
      setTimeout(() => { badge.style.display = "none"; }, 3000);
    }
  }

  async loadFromCloud() {
    const data = await cloudPull();
    if (data && data.pegawai && Array.isArray(data.pegawai) && data.pegawai.length > 0) {
      this.pegawaiList = data.pegawai;
      localStorage.setItem("kua_pegawai_data_v2", JSON.stringify(this.pegawaiList));
      console.log("[KUA] Data pegawai diperbarui dari cloud:", data.updatedAt);
      return true;
    }
    return false;
  }

  addPegawai(pegawai) {
    pegawai.id = "kua-" + Date.now();
    this.pegawaiList.push(pegawai);
    this.savePegawaiToStorage();
  }

  updatePegawai(id, updatedData) {
    const index = this.pegawaiList.findIndex(p => p.id === id);
    if (index !== -1) {
      this.pegawaiList[index] = { ...this.pegawaiList[index], ...updatedData };
      this.savePegawaiToStorage();
    }
  }

  deletePegawai(id) {
    this.pegawaiList = this.pegawaiList.filter(p => p.id !== id);
    this.savePegawaiToStorage();
  }

  getFilteredPegawai() {
    return this.pegawaiList.filter(p => {
      // Filter Peran
      let matchesRole = true;
      if (this.activeRoleFilter !== "all") {
        matchesRole = p.role === this.activeRoleFilter;
      }

      // Filter Search Box
      let matchesSearch = true;
      if (this.searchQuery.trim() !== "") {
        const q = this.searchQuery.toLowerCase();
        const keahlianStr = Array.isArray(p.keahlian) ? p.keahlian.join(" ") : p.keahlian;
        matchesSearch = p.nama.toLowerCase().includes(q) ||
          p.nip.toLowerCase().includes(q) ||
          p.jabatan.toLowerCase().includes(q) ||
          p.wilayah.toLowerCase().includes(q) ||
          keahlianStr.toLowerCase().includes(q);
      }

      return matchesRole && matchesSearch;
    });
  }
}

const state = new KuaState();

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", async () => {
  initNavbar();
  initHeroImg();
  initCounters();
  initBiayaCalculator();
  initSyaratTabs();

  // Coba ambil data terbaru dari cloud (agar HP & desktop sinkron)
  if (CLOUD_SYNC.enabled) {
    const updated = await state.loadFromCloud();
    if (updated) renderPegawaiGrid();
    else renderPegawaiGrid();
  } else {
    renderPegawaiGrid();
  }

  initForum();
  initEventListeners();
  updateAdminInboxBadge();
});

// --- NAVBAR SCROLL & MOBILE MENU ---
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger-menu");
  const navMenu = document.getElementById("nav-menu");

  window.addEventListener("scroll", () => {
    highlightActiveNavLink();
  });

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
      });
    });
  }
}

function highlightActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 140;
    const sectionId = current.getAttribute("id");
    const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      if (navLink) navLink.classList.add("active");
    } else {
      if (navLink) navLink.classList.remove("active");
    }
  });
}

// --- STATS COUNTER ANIMATION ---
function initCounters() {
  const counters = document.querySelectorAll(".stat-number");
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        counters.forEach(counter => {
          const target = +counter.getAttribute("data-target");
          if (target === 0) {
            counter.innerText = "0";
            return;
          }
          const duration = 1500;
          const increment = target / (duration / 16);
          let current = 0;

          const updateCount = () => {
            current += increment;
            if (current < target) {
              counter.innerText = Math.ceil(current);
              requestAnimationFrame(updateCount);
            } else {
              counter.innerText = target;
            }
          };

          updateCount();
        });
        animated = true;
      }
    });
  }, { threshold: 0.5 });

  const heroSection = document.querySelector(".hero-section");
  if (heroSection) observer.observe(heroSection);
}

// --- SIMULATOR BIAYA NIKAH CALCULATOR ---
function initBiayaCalculator() {
  const tileKua = document.getElementById("tile-kua");
  const tileLuar = document.getElementById("tile-luar");
  const selectTime = document.getElementById("calc-time");

  function calculateTarif() {
    const isKua = document.querySelector('input[name="calc-location"]:checked').value === "kua";
    const timeValue = selectTime.value;

    const resPrice = document.getElementById("res-price");
    const resBadge = document.getElementById("res-badge");
    const resNote = document.getElementById("res-note");

    if (isKua && timeValue === "jam_kerja") {
      resPrice.innerText = "Rp 0";
      resBadge.className = "result-badge";
      resBadge.innerHTML = `<i class="fa-solid fa-gift"></i> GRATIS 100%`;
      resNote.innerText = "Pelaksanaan akad nikah di Balai Nikah KUA pada hari dan jam kerja kantor adalah GRATIS (Rp 0) tanpa biaya apapun.";
    } else {
      resPrice.innerText = "Rp 600.000";
      resBadge.className = "result-badge";
      resBadge.style.background = "#d97706";
      resBadge.innerHTML = `<i class="fa-solid fa-building-columns"></i> PNBP KAS NEGARA`;
      resNote.innerHTML = "Pelaksanaan nikah di luar kantor KUA (Rumah/Gedung) atau di luar jam kerja dikenakan tarif resmi <b>Rp 600.000</b> disetor langsung ke kas negara via Bank BUMN (MPN).";
    }
  }

  if (tileKua && tileLuar && selectTime) {
    tileKua.addEventListener("click", () => {
      tileKua.classList.add("active");
      tileLuar.classList.remove("active");
      tileKua.querySelector("input").checked = true;
      calculateTarif();
    });

    tileLuar.addEventListener("click", () => {
      tileLuar.classList.add("active");
      tileKua.classList.remove("active");
      tileLuar.querySelector("input").checked = true;
      calculateTarif();
    });

    selectTime.addEventListener("change", calculateTarif);
  }
}

// --- SYARAT NIKAH TABS ---
function initSyaratTabs() {
  const tabBtns = document.querySelectorAll(".tab-buttons .tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      tabBtns.forEach(b => b.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));

      const targetTabId = e.currentTarget.getAttribute("data-tab");
      e.currentTarget.classList.add("active");
      document.getElementById(targetTabId)?.classList.add("active");
    });
  });
}

// --- RENDER PEGAWAI KUA GRID ---
function renderPegawaiGrid() {
  const container = document.getElementById("pegawai-grid");
  if (!container) return;

  const list = state.getFilteredPegawai();

  if (list.length === 0) {
    container.innerHTML = `<div class="text-center" style="grid-column: 1/-1; padding: 4rem; background: #ffffff; border-radius: var(--radius-lg); border: 1px dashed var(--kua-border);">
      <i class="fa-solid fa-user-slash" style="font-size: 3.5rem; color: var(--kua-primary); margin-bottom: 1rem;"></i>
      <h3>Tidak Ada Data Pegawai Ditemukan</h3>
      <p style="color: var(--kua-text-secondary); margin-bottom: 1.5rem;">Coba sesuaikan kata kunci pencarian atau filter kategori peran pegawai KUA.</p>
      <button class="btn btn-outline-green" onclick="resetPegawaiFilters()"><i class="fa-solid fa-rotate-left"></i> Reset Filter</button>
    </div>`;
    return;
  }

  container.innerHTML = list.map(p => {
    let badgeClass = "badge-staf";
    let badgeLabel = `<i class="fa-solid fa-user-gear"></i> STAF`;

    if (p.role === "kepala") {
      badgeClass = "badge-kepala";
      badgeLabel = `<i class="fa-solid fa-user-tie"></i> KEPALA KUA`;
    } else if (p.role === "wakil_kepala" || p.role === "wakil") {
      badgeClass = "badge-wakil";
      badgeLabel = `<i class="fa-solid fa-user-shield"></i> WAKIL KEPALA KUA`;
    } else if (p.role === "pembina") {
      badgeClass = "badge-pembina";
      badgeLabel = `<i class="fa-solid fa-award"></i> PEMBINA`;
    } else if (p.role === "penghulu") {
      badgeClass = "badge-penghulu";
      badgeLabel = `<i class="fa-solid fa-scroll"></i> PENGHULU`;
    } else if (p.role === "penyuluh") {
      badgeClass = "badge-penyuluh";
      badgeLabel = `<i class="fa-solid fa-book-quran"></i> PENYULUH AGAMA`;
    }

    return `
      <div class="pegawai-card" data-id="${p.id}">
        <!-- Role Badge -->
        <div class="pegawai-badge ${badgeClass}">${badgeLabel}</div>

        <!-- Action Edit & Delete Buttons -->
        ${state.isAdmin ? `
        <div class="card-actions-top">
          <button class="action-btn-mini" title="Edit Profil" onclick="openEditPegawaiModal('${p.id}')">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button class="action-btn-mini btn-del" title="Hapus Profil" onclick="confirmDeletePegawai('${p.id}')">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
        ` : ''}

        <div class="pegawai-avatar-wrapper">
          <img src="${p.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80'}" alt="${p.nama}" class="pegawai-avatar">
          ${state.isAdmin ? `
          <button class="btn-quick-edit admin-only" title="Ubah Foto Profil" onclick="promptEditAvatar('${p.id}')">
            <i class="fa-solid fa-camera"></i>
          </button>
          ` : ''}
        </div>

        <div class="pegawai-nip">NIP: ${p.nip}</div>
        <h3 class="pegawai-nama">${p.nama}</h3>
        <p class="pegawai-jabatan">${p.jabatan}</p>
        <p class="pegawai-wilayah"><i class="fa-solid fa-location-dot"></i> ${p.wilayah}</p>

        <div class="pegawai-card-footer">
          <button class="btn btn-outline-green btn-sm btn-block" onclick="openDetailPegawaiModal('${p.id}')">
            <i class="fa-solid fa-address-card"></i> Lihat Profil Lengkap
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function initHeroImg() {
  const heroImg = document.getElementById("hero-main-img");
  if (heroImg) {
    heroImg.src = state.heroImgUrl;
  }
}

let currentEditAvatarId = null;

window.promptEditHeroImg = function () {
  document.getElementById("upload-hero").click();
};

window.promptEditAvatar = function (id) {
  currentEditAvatarId = id;
  document.getElementById("upload-avatar").click();
};

function resetPegawaiFilters() {
  state.searchQuery = "";
  state.activeRoleFilter = "all";
  document.getElementById("pegawai-search").value = "";
  document.querySelectorAll("#pegawai-role-filters .p-filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-role") === "all");
  });
  renderPegawaiGrid();
}

// --- MODAL SYSTEM CONTROLLER ---
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
}

// --- DETAIL MODAL PEGAWAI KUA ---
window.openDetailPegawaiModal = function (id) {
  const p = state.pegawaiList.find(item => item.id === id);
  if (!p) return;

  let badgeClass = "badge-staf";
  let badgeText = "STAF ADMINISTRASI KUA";
  if (p.role === "kepala") { badgeClass = "badge-kepala"; badgeText = "KEPALA KUA KECAMATAN"; }
  if (p.role === "wakil_kepala" || p.role === "wakil") { badgeClass = "badge-wakil"; badgeText = "WAKIL KEPALA KUA"; }
  if (p.role === "pembina") { badgeClass = "badge-pembina"; badgeText = "PEMBINA KUA"; }
  if (p.role === "penghulu") { badgeClass = "badge-penghulu"; badgeText = "PENASIHAT / PENGHULU PPAN"; }
  if (p.role === "penyuluh") { badgeClass = "badge-penyuluh"; badgeText = "PENYULUH AGAMA ISLAM"; }

  let keahlianList = [];
  if (p.keahlian) {
    keahlianList = Array.isArray(p.keahlian) ? p.keahlian : p.keahlian.split(',').map(k => k.trim());
  }

  const content = document.getElementById("modal-pegawai-content");
  content.innerHTML = `
    <div class="pegawai-detail-header">
      <img src="${p.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80'}" alt="${p.nama}" class="pegawai-detail-avatar">
      <div class="pegawai-detail-meta">
        <h2>${p.nama}</h2>
        <div class="pos">${p.jabatan}</div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          <span class="pegawai-badge ${badgeClass}" style="position: static;">${badgeText}</span>
          <span class="pegawai-nip">NIP: ${p.nip}</span>
        </div>
      </div>
    </div>

    <div class="pegawai-detail-grid">
      <div class="detail-info">
        <label>Wilayah Binaan / Tugas</label>
        <p>${p.wilayah}</p>
      </div>

      <div class="detail-info">
        <label>No. WhatsApp Pelayanan</label>
        <p>${p.hp}</p>
      </div>
      <div class="detail-info">
        <label>Status Kepegawaian</label>
        <p style="color: var(--kua-primary);"><i class="fa-solid fa-circle-check"></i> ASN Aktif Melayani</p>
      </div>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--kua-primary); margin-bottom: 0.5rem;"><i class="fa-solid fa-quote-left"></i> Biografi & Tugas Pelayanan:</h4>
      <p style="color: var(--kua-text-secondary); line-height: 1.7;">${p.bio}</p>
    </div>

    ${keahlianList.length > 0 ? `
    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--kua-primary); margin-bottom: 0.75rem;"><i class="fa-solid fa-award"></i> Keahlian & Spesialisasi Pelayanan:</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
        ${keahlianList.map(k => `<span style="font-size: 0.825rem; font-weight: 700; padding: 0.35rem 0.8rem; background: var(--kua-primary-light); color: var(--kua-primary); border-radius: var(--radius-sm);">${k}</span>`).join('')}
      </div>
    </div>
    ` : ''}

    <div class="modal-footer">
      <button class="btn btn-outline" onclick="closeModal('modal-pegawai-detail')">Tutup</button>
      ${state.isAdmin ? `
      <button class="btn btn-primary" onclick="closeModal('modal-pegawai-detail'); openEditPegawaiModal('${p.id}');">
        <i class="fa-solid fa-pen"></i> Edit Profil Pegawai
      </button>
      ` : ''}
    </div>
  `;

  openModal("modal-pegawai-detail");
};

// --- CRUD FORM MODAL (ADD / EDIT PEGAWAI) ---
window.openAddPegawaiModal = function () {
  document.getElementById("form-modal-title").innerHTML = `<i class="fa-solid fa-user-plus"></i> Tambah Pegawai KUA Baru`;
  document.getElementById("pegawai-crud-form").reset();
  document.getElementById("form-pegawai-id").value = "";
  openModal("modal-pegawai-form");
};

window.openEditPegawaiModal = function (id) {
  const p = state.pegawaiList.find(item => item.id === id);
  if (!p) return;

  document.getElementById("form-modal-title").innerHTML = `<i class="fa-solid fa-user-pen"></i> Edit Data ${p.nama}`;
  document.getElementById("form-pegawai-id").value = p.id;
  document.getElementById("form-nama").value = p.nama;
  document.getElementById("form-role").value = p.role;
  document.getElementById("form-nip").value = p.nip;
  document.getElementById("form-jabatan").value = p.jabatan;
  document.getElementById("form-wilayah").value = p.wilayah;
  document.getElementById("form-bio").value = p.bio;

  document.getElementById("form-hp").value = p.hp;

  openModal("modal-pegawai-form");
};

window.confirmDeletePegawai = function (id) {
  const p = state.pegawaiList.find(item => item.id === id);
  if (!p) return;

  if (confirm(`Apakah Anda yakin ingin menghapus data profil pegawai "${p.nama}"?`)) {
    state.deletePegawai(id);
    renderPegawaiGrid();
    showToast(`Data pegawai ${p.nama} berhasil dihapus.`, "info");
  }
};

// --- TOAST NOTIFICATIONS ---
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --- EVENT LISTENERS ---
function initEventListeners() {
  const uploadHero = document.getElementById("upload-hero");
  if (uploadHero) {
    uploadHero.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          state.saveHeroImgToStorage(ev.target.result);
          initHeroImg();
          showToast("Foto hero berhasil diperbarui dari file lokal!", "success");
        };
        reader.readAsDataURL(file);
      }
      uploadHero.value = "";
    });
  }

  const uploadAvatar = document.getElementById("upload-avatar");
  if (uploadAvatar) {
    uploadAvatar.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file && currentEditAvatarId) {
        const p = state.pegawaiList.find(item => item.id === currentEditAvatarId);
        const reader = new FileReader();
        reader.onload = (ev) => {
          state.updatePegawai(currentEditAvatarId, { avatar: ev.target.result });
          renderPegawaiGrid();
          showToast(`Foto profil ${p?.nama} berhasil diperbarui dari file lokal!`, "success");
        };
        reader.readAsDataURL(file);
      }
      uploadAvatar.value = "";
    });
  }

  // Add Pegawai Buttons
  document.getElementById("btn-add-pegawai-nav")?.addEventListener("click", openAddPegawaiModal);
  document.getElementById("btn-add-pegawai-main")?.addEventListener("click", openAddPegawaiModal);
  document.getElementById("btn-add-pegawai-footer")?.addEventListener("click", openAddPegawaiModal);

  // --- EKSPOR DATA PEGAWAI ---
  document.getElementById("btn-export-data")?.addEventListener("click", () => {
    const exportData = {
      pegawai: state.pegawaiList,
      konsultasi: state.konsultasiList,
      exportedAt: new Date().toISOString(),
      version: "1.0"
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const tgl = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `kua-data-backup-${tgl}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast("✓ Data berhasil diekspor! Kirim file ini ke perangkat lain lalu klik Impor Data.", "success");
  });

  // --- IMPOR DATA PEGAWAI ---
  document.getElementById("import-data-file")?.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const imported = JSON.parse(ev.target.result);
        if (imported.pegawai && Array.isArray(imported.pegawai)) {
          state.pegawaiList = imported.pegawai;
          state.savePegawaiToStorage();
          renderPegawaiGrid();
          showToast(`✓ Data ${imported.pegawai.length} pegawai berhasil diimpor dari file backup!`, "success");
        }
        if (imported.konsultasi && Array.isArray(imported.konsultasi)) {
          state.konsultasiList = imported.konsultasi;
          state.saveKonsultasiToStorage();
          updateAdminInboxBadge();
          showToast(`✓ Data ${imported.konsultasi.length} konsultasi juga berhasil diimpor!`, "success");
        }
      } catch (err) {
        showToast("✗ File tidak valid. Pastikan file JSON dari ekspor KUA.", "error");
      }
      e.target.value = "";
    };
    reader.readAsText(file);
  });

  // Filter Buttons Pegawai Role
  const roleFilterBtns = document.querySelectorAll("#pegawai-role-filters .p-filter-btn");
  roleFilterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      roleFilterBtns.forEach(b => b.classList.remove("active"));
      const target = e.currentTarget;
      target.classList.add("active");
      state.activeRoleFilter = target.getAttribute("data-role");
      renderPegawaiGrid();
    });
  });

  // Search Input Pegawai
  const searchInput = document.getElementById("pegawai-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      renderPegawaiGrid();
    });
  }

  // Submit Form CRUD Pegawai
  const crudForm = document.getElementById("pegawai-crud-form");
  if (crudForm) {
    crudForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const id = document.getElementById("form-pegawai-id").value;
      const nama = document.getElementById("form-nama").value;
      const role = document.getElementById("form-role").value;
      const nip = document.getElementById("form-nip").value;
      const jabatan = document.getElementById("form-jabatan").value;
      const wilayah = document.getElementById("form-wilayah").value;
      const bio = document.getElementById("form-bio").value;

      const hp = document.getElementById("form-hp").value;

      const existing = id ? state.pegawaiList.find(p => p.id === id) : null;
      const avatar = existing?.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80";
      const keahlian = existing?.keahlian || [];

      const pegawaiData = {
        nama,
        role,
        nip,
        jabatan,
        avatar,
        wilayah,
        bio,
        keahlian,

        hp
      };

      if (id) {
        state.updatePegawai(id, pegawaiData);
        showToast(`Profil pegawai "${nama}" berhasil diperbarui!`, "success");
      } else {
        state.addPegawai(pegawaiData);
        showToast(`Pegawai baru "${nama}" berhasil ditambahkan!`, "success");
      }

      renderPegawaiGrid();
      closeModal("modal-pegawai-form");
    });
  }

  // Submit Form Konsultasi
  const konsultasiForm = document.getElementById("konsultasi-form");
  if (konsultasiForm) {
    konsultasiForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const namaRaw = document.getElementById("f-nama").value.trim();
      const isAnonim = document.getElementById("f-anonim")?.checked || false;
      const nama = isAnonim ? "Warga KUA (Anonim)" : namaRaw;
      const hp = document.getElementById("f-hp").value.trim();
      const topik = document.getElementById("f-topik").value;
      const judul = document.getElementById("f-judul")?.value.trim() || `Konsultasi ${topik}`;
      const pesan = document.getElementById("f-pesan").value.trim();
      const visibility = document.querySelector("input[name='f-visibility']:checked")?.value || "public";

      state.addKonsultasi({
        nama,
        isAnonim,
        namaAsli: namaRaw,
        hp,
        topik,
        judul,
        pesan,
        visibility
      });

      showToast(`Terima kasih Bapak/Ibu ${namaRaw}, pesan konsultasi Anda telah diterima Petugas KUA!`, "success");
      konsultasiForm.reset();

      renderForumFeed();
      updateAdminInboxBadge();
      if (document.getElementById("modal-inbox")?.classList.contains("active")) {
        renderAdminInbox();
      }
    });
  }

  // Submit Form Jawab Konsultasi Resmi KUA
  const formJawab = document.getElementById("form-jawab-konsultasi");
  if (formJawab) {
    formJawab.addEventListener("submit", (e) => {
      e.preventDefault();
      const consultId = document.getElementById("jawab-konsultasi-id").value;
      const petugasSelect = document.getElementById("jawab-petugas");
      const petugasOption = petugasSelect.options[petugasSelect.selectedIndex];
      const petugasNama = petugasOption.getAttribute("data-nama") || petugasSelect.value;
      const petugasJabatan = petugasOption.getAttribute("data-jabatan") || "Petugas KUA Nanggung";
      const petugasAvatar = petugasOption.getAttribute("data-avatar") || "";
      const isiJawaban = document.getElementById("jawab-isi").value.trim();

      const now = new Date();
      const pad = (n) => String(n).padStart(2, '0');
      const dateStr = `${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()} ${pad(now.getHours())}.${pad(now.getMinutes())}`;

      state.answerKonsultasi(consultId, {
        petugasId: petugasSelect.value,
        petugasNama,
        petugasJabatan,
        avatar: petugasAvatar,
        date: dateStr,
        isi: isiJawaban
      });

      showToast("Tanggapan resmi KUA berhasil disimpan dan dipublikasikan!", "success");
      closeModal("modal-jawab-konsultasi");

      renderForumFeed();
      renderAdminInbox();
      updateAdminInboxBadge();
    });
  }

  // Backdrop modal close
  document.querySelectorAll("[data-close-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      closeModal("modal-pegawai-detail");
      closeModal("modal-pegawai-form");
      closeModal("modal-inbox");
      closeModal("modal-jawab-konsultasi");
      closeModal("modal-login");
    });
  });

  document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });
  });

  // --- LOGIN SYSTEM ADMIN ---
  function updateAdminUI() {
    const adminElements = document.querySelectorAll(".admin-only");
    adminElements.forEach(el => {
      el.style.display = state.isAdmin ? (el.tagName === "BUTTON" ? "inline-block" : "flex") : "none";
    });

    const adminBar = document.getElementById("admin-bar");
    if (adminBar) adminBar.style.display = state.isAdmin ? "block" : "none";

    const btnOpenLogin = document.getElementById("btn-open-login");
    if (btnOpenLogin) btnOpenLogin.style.display = state.isAdmin ? "none" : "inline-block";

    const adminDisplay = document.getElementById("admin-username-display");
    if (adminDisplay) adminDisplay.innerText = "Admin KUA Nanggung";

    renderPegawaiGrid();
    renderForumFeed();
    updateAdminInboxBadge();
  }

  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("login-username").value;
      const pass = document.getElementById("login-password").value;

      if (user === "kuananggung" && pass === "admin67") {
        state.isAdmin = true;
        document.getElementById("login-error").style.display = "none";
        closeModal("modal-login");
        showToast("Berhasil masuk sebagai Administrator KUA", "success");
        updateAdminUI();
      } else {
        document.getElementById("login-error").style.display = "flex";
      }
    });
  }

  const togglePw = document.getElementById("toggle-password");
  if (togglePw) {
    togglePw.addEventListener("click", () => {
      const pwInput = document.getElementById("login-password");
      if (pwInput.type === "password") {
        pwInput.type = "text";
        togglePw.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
      } else {
        pwInput.type = "password";
        togglePw.innerHTML = '<i class="fa-solid fa-eye"></i>';
      }
    });
  }

  document.getElementById("btn-open-login")?.addEventListener("click", () => {
    openModal("modal-login");
  });

  document.getElementById("btn-open-login-link")?.addEventListener("click", () => {
    openModal("modal-login");
  });

  document.getElementById("btn-open-inbox")?.addEventListener("click", () => {
    renderAdminInbox();
    openModal("modal-inbox");
  });

  document.getElementById("btn-logout")?.addEventListener("click", () => {
    state.isAdmin = false;
    showToast("Berhasil keluar dari mode Admin", "info");
    updateAdminUI();
  });
}

/* ==========================================================================
   FORUM KONSULTASI UI & INTERACTION LOGIC
   ========================================================================== */

let activeForumFilter = "all"; // 'all' | 'answered' | 'pending'
let activeForumCategory = "all";
let forumSearchQuery = "";

let activeAdminInboxFilter = "all"; // 'all' | 'pending' | 'answered' | 'private'
let adminInboxSearchQuery = "";

function initForum() {
  renderForumFeed();

  // Search Input Forum
  const searchInput = document.getElementById("forum-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      forumSearchQuery = e.target.value;
      renderForumFeed();
    });
  }

  // Status Filter Tabs
  const statusTabs = document.querySelectorAll(".forum-tab-btn");
  statusTabs.forEach(btn => {
    btn.addEventListener("click", (e) => {
      statusTabs.forEach(b => b.classList.remove("active"));
      const target = e.currentTarget;
      target.classList.add("active");
      activeForumFilter = target.getAttribute("data-filter");
      renderForumFeed();
    });
  });

  // Category Filter Pills
  const catPills = document.querySelectorAll("#forum-category-pills .cat-pill-btn");
  catPills.forEach(btn => {
    btn.addEventListener("click", (e) => {
      catPills.forEach(b => b.classList.remove("active"));
      const target = e.currentTarget;
      target.classList.add("active");
      activeForumCategory = target.getAttribute("data-cat");
      renderForumFeed();
    });
  });

  // Admin Inbox KPI Filter Chips
  const kpiChips = document.querySelectorAll(".admin-kpi-chip");
  kpiChips.forEach(chip => {
    chip.addEventListener("click", (e) => {
      kpiChips.forEach(c => c.classList.remove("active"));
      const target = e.currentTarget;
      target.classList.add("active");
      activeAdminInboxFilter = target.getAttribute("data-inbox-filter");
      renderAdminInbox();
    });
  });

  // Admin Inbox Search
  const adminSearch = document.getElementById("admin-inbox-search");
  if (adminSearch) {
    adminSearch.addEventListener("input", (e) => {
      adminInboxSearchQuery = e.target.value;
      renderAdminInbox();
    });
  }
}

function renderForumFeed() {
  const container = document.getElementById("forum-posts-container");
  if (!container) return;

  // Filter public items
  const publicList = state.konsultasiList.filter(item => item.visibility === "public");

  // Update Stats
  const statTotal = document.getElementById("forum-stat-total");
  const statAnswered = document.getElementById("forum-stat-answered");
  if (statTotal) statTotal.innerText = state.konsultasiList.length;
  if (statAnswered) {
    const totalAns = state.konsultasiList.filter(c => c.status === "answered").length;
    statAnswered.innerText = totalAns;
  }

  // Apply filters
  let filtered = publicList.filter(item => {
    // Filter status
    let matchesStatus = true;
    if (activeForumFilter === "answered") matchesStatus = item.status === "answered";
    else if (activeForumFilter === "pending") matchesStatus = item.status === "pending";

    // Filter category
    let matchesCat = true;
    if (activeForumCategory !== "all") {
      matchesCat = item.topik.toLowerCase().includes(activeForumCategory.toLowerCase()) ||
                   activeForumCategory.toLowerCase().includes(item.topik.toLowerCase());
    }

    // Filter search
    let matchesSearch = true;
    if (forumSearchQuery.trim() !== "") {
      const q = forumSearchQuery.toLowerCase();
      matchesSearch = (item.judul && item.judul.toLowerCase().includes(q)) ||
                      (item.pesan && item.pesan.toLowerCase().includes(q)) ||
                      (item.nama && item.nama.toLowerCase().includes(q)) ||
                      (item.topik && item.topik.toLowerCase().includes(q)) ||
                      (item.answer?.isi && item.answer.isi.toLowerCase().includes(q));
    }

    return matchesStatus && matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="background: var(--kua-white); border: 1.5px dashed var(--kua-border); border-radius: var(--radius-lg); padding: 3.5rem 1.5rem; text-align: center;">
        <div style="width: 60px; height: 60px; border-radius: 50%; background: var(--kua-primary-light); color: var(--kua-primary); display: flex; align-items: center; justify-content: center; font-size: 1.75rem; margin: 0 auto 1.25rem;">
          <i class="fa-solid fa-comments"></i>
        </div>
        <h4 style="font-size: 1.15rem; color: var(--kua-text-primary); margin-bottom: 0.5rem;">Tidak Ada Diskusi yang Sesuai</h4>
        <p style="font-size: 0.9rem; color: var(--kua-text-muted); max-width: 420px; margin: 0 auto 1.25rem;">
          Belum ada pertanyaan atau bimbingan yang cocok dengan kata kunci atau filter yang Anda pilih.
        </p>
        <button class="btn btn-outline btn-sm" onclick="resetForumFilters()">
          <i class="fa-solid fa-arrows-rotate"></i> Reset Filter Pencarian
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(post => {
    const isAnon = post.isAnonim;
    const authorInitial = isAnon ? '<i class="fa-solid fa-user-secret"></i>' : (post.nama ? post.nama.charAt(0).toUpperCase() : "W");
    const authorClass = isAnon ? "fpost-avatar anonim" : "fpost-avatar";

    let answerHtml = "";
    if (post.status === "answered" && post.answer) {
      let avatarHtml = `<div class="fpost-responder-avatar-fallback"><i class="fa-solid fa-user-tie"></i></div>`;
      if (post.answer.avatar && post.answer.avatar.startsWith("http")) {
        avatarHtml = `<img src="${post.answer.avatar}" alt="${post.answer.petugasNama}" class="fpost-responder-avatar">`;
      } else if (post.answer.avatar) {
        avatarHtml = `<div class="fpost-responder-avatar-fallback"><i class="fa-solid fa-mosque"></i></div>`;
      }

      answerHtml = `
        <div class="fpost-official-answer">
          <div class="fpost-official-header">
            <div class="fpost-official-responder">
              ${avatarHtml}
              <div class="fpost-responder-info">
                <strong>${post.answer.petugasNama}</strong>
                <span>${post.answer.petugasJabatan}</span>
              </div>
            </div>
            <span class="official-badge-tag"><i class="fa-solid fa-certificate"></i> Jawaban Resmi KUA</span>
          </div>
          <div class="fpost-official-body">
            ${escapeHtmlForCard(post.answer.isi)}
          </div>
          <div class="fpost-official-footer">
            <i class="fa-solid fa-clock"></i> Dijawab pada ${post.answer.date} WIB
          </div>
        </div>
      `;
    } else {
      answerHtml = `
        <div class="fpost-pending-notice">
          <i class="fa-solid fa-hourglass-half"></i>
          <div>
            <strong>Sedang Ditelaah:</strong> Pertanyaan ini sedang dalam proses review dan penyiapan fatwa/jawaban oleh Penghulu atau Penyuluh Agama KUA.
          </div>
        </div>
      `;
    }

    const statusBadge = post.status === "answered"
      ? `<span class="fpost-status-badge answered"><i class="fa-solid fa-circle-check"></i> Telah Dijawab</span>`
      : `<span class="fpost-status-badge pending"><i class="fa-solid fa-clock"></i> Menunggu Respon</span>`;

    const adminBtn = state.isAdmin ? `
      <button class="fpost-action-btn btn-admin-reply-direct" onclick="openModalJawabKonsultasi('${post.id}')">
        <i class="fa-solid fa-reply"></i> ${post.status === "answered" ? "Edit Tanggapan KUA" : "Beri Jawaban KUA"}
      </button>
    ` : "";

    return `
      <div class="forum-post-card" id="card-${post.id}">
        <div class="fpost-header">
          <div class="fpost-author">
            <div class="${authorClass}">${authorInitial}</div>
            <div>
              <div class="fpost-author-name">
                ${post.nama}
                ${isAnon ? '<span style="font-size: 0.725rem; font-weight: normal; color: #64748b;">(Anonim)</span>' : ''}
              </div>
              <span class="fpost-time"><i class="fa-solid fa-calendar-day"></i> ${post.date} WIB</span>
            </div>
          </div>
          <div class="fpost-badges">
            <span class="fpost-cat-badge"><i class="fa-solid fa-tag"></i> ${post.topik}</span>
            ${statusBadge}
          </div>
        </div>

        <h3 class="fpost-title">${escapeHtmlForCard(post.judul)}</h3>
        <div class="fpost-content">${escapeHtmlForCard(post.pesan)}</div>

        ${answerHtml}

        <div class="fpost-actions">
          <div class="fpost-actions-left">
            <button class="fpost-action-btn btn-helpful ${post.likedByUser ? 'liked' : ''}" onclick="toggleLikeKonsultasi('${post.id}')">
              <i class="fa-solid fa-thumbs-up"></i> Bermanfaat (${post.likes || 0})
            </button>
            <button class="fpost-action-btn" onclick="shareKonsultasi('${post.id}')">
              <i class="fa-solid fa-share-nodes"></i> Bagikan
            </button>
          </div>
          ${adminBtn}
        </div>
      </div>
    `;
  }).join('');
}

function escapeHtmlForCard(text) {
  if (!text) return "";
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

window.toggleLikeKonsultasi = function(id) {
  state.likeKonsultasi(id);
  renderForumFeed();
};

window.shareKonsultasi = function(id) {
  const url = window.location.href.split('#')[0] + '#forum-konsultasi';
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      showToast("Tautan Forum Konsultasi berhasil disalin ke clipboard!", "success");
    }).catch(() => {
      showToast("Tautan: " + url, "info");
    });
  } else {
    showToast("Tautan: " + url, "info");
  }
};

window.resetForumFilters = function() {
  activeForumFilter = "all";
  activeForumCategory = "all";
  forumSearchQuery = "";
  document.getElementById("forum-search-input").value = "";
  document.querySelectorAll(".forum-tab-btn").forEach(b => b.classList.toggle("active", b.getAttribute("data-filter") === "all"));
  document.querySelectorAll("#forum-category-pills .cat-pill-btn").forEach(b => b.classList.toggle("active", b.getAttribute("data-cat") === "all"));
  renderForumFeed();
};

/* ==========================================================================
   ADMIN INBOX & CONSULTATION MANAGEMENT LOGIC
   ========================================================================== */

function updateAdminInboxBadge() {
  const badge = document.getElementById("inbox-badge-count");
  if (!badge) return;

  const pendingCount = state.konsultasiList.filter(c => c.status === "pending").length;
  if (pendingCount > 0) {
    badge.innerText = pendingCount;
    badge.style.display = "inline-flex";
  } else {
    badge.style.display = "none";
  }
}

function renderAdminInbox() {
  const container = document.getElementById("inbox-list");
  if (!container) return;

  const total = state.konsultasiList.length;
  const pending = state.konsultasiList.filter(c => c.status === "pending").length;
  const answered = state.konsultasiList.filter(c => c.status === "answered").length;
  const priv = state.konsultasiList.filter(c => c.visibility === "private").length;

  const elTotal = document.getElementById("admin-kpi-total");
  const elPending = document.getElementById("admin-kpi-pending");
  const elAnswered = document.getElementById("admin-kpi-answered");
  const elPriv = document.getElementById("admin-kpi-private");

  if (elTotal) elTotal.innerText = total;
  if (elPending) elPending.innerText = pending;
  if (elAnswered) elAnswered.innerText = answered;
  if (elPriv) elPriv.innerText = priv;

  // Filter list
  let filtered = state.konsultasiList.filter(item => {
    let matchesStatus = true;
    if (activeAdminInboxFilter === "pending") matchesStatus = item.status === "pending";
    else if (activeAdminInboxFilter === "answered") matchesStatus = item.status === "answered";
    else if (activeAdminInboxFilter === "private") matchesStatus = item.visibility === "private";

    let matchesSearch = true;
    if (adminInboxSearchQuery.trim() !== "") {
      const q = adminInboxSearchQuery.toLowerCase();
      matchesSearch = (item.nama && item.nama.toLowerCase().includes(q)) ||
                      (item.namaAsli && item.namaAsli.toLowerCase().includes(q)) ||
                      (item.hp && item.hp.toLowerCase().includes(q)) ||
                      (item.judul && item.judul.toLowerCase().includes(q)) ||
                      (item.pesan && item.pesan.toLowerCase().includes(q)) ||
                      (item.topik && item.topik.toLowerCase().includes(q));
    }

    return matchesStatus && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1.5rem; color: var(--kua-text-muted); background: var(--kua-bg-light); border-radius: var(--radius-md);">
        <i class="fa-solid fa-inbox" style="font-size: 2.5rem; margin-bottom: 0.75rem; color: #cbd5e1;"></i>
        <h4>Tidak ada data konsultasi pada filter ini</h4>
        <p style="font-size: 0.85rem;">Pesan konsultasi dari masyarakat akan otomatis masuk ke panel ini.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const isPrivate = item.visibility === "private";
    const isPending = item.status === "pending";
    const statusClass = isPending ? "is-pending" : "is-answered";

    const cleanHp = (item.hp || "").replace(/[^0-9]/g, '');
    let waNumber = cleanHp;
    if (waNumber.startsWith('0')) waNumber = '62' + waNumber.slice(1);
    else if (!waNumber.startsWith('62')) waNumber = '62' + waNumber;

    const waGreeting = encodeURIComponent(
      `Assalamu'alaikum Warahmatullahi Wabarakatuh.\n\n` +
      `Bapak/Ibu ${item.namaAsli || item.nama},\n` +
      `Kami dari Kantor Urusan Agama (KUA) Kecamatan Nanggung menindaklanjuti pesan konsultasi Anda mengenai:\n` +
      `"${item.judul}"\n\n`
    );

    let answerPreview = "";
    if (item.status === "answered" && item.answer) {
      answerPreview = `
        <div class="admin-consult-answer-box">
          <strong><i class="fa-solid fa-check-circle"></i> Dijawab oleh ${item.answer.petugasNama} (${item.answer.date} WIB):</strong>
          <p>${escapeHtmlForCard(item.answer.isi)}</p>
        </div>
      `;
    }

    return `
      <div class="admin-consult-card ${statusClass} ${isPrivate ? 'is-private' : ''}">
        <div class="admin-consult-header">
          <div class="admin-consult-user-info">
            <div class="fpost-avatar" style="width: 36px; height: 36px; font-size: 0.85rem;">
              ${item.nama ? item.nama.charAt(0).toUpperCase() : 'W'}
            </div>
            <div>
              <h4>
                ${item.namaAsli || item.nama}
                ${item.isAnonim ? '<span style="font-size: 0.7rem; background: #64748b; color: white; padding: 0.15rem 0.4rem; border-radius: 4px;">Anonim di Publik</span>' : ''}
              </h4>
              <small><i class="fa-solid fa-clock"></i> ${item.date} WIB &bull; Telp: <strong>${item.hp}</strong></small>
            </div>
          </div>
          <div class="admin-consult-badges">
            <span class="fpost-cat-badge"><i class="fa-solid fa-tag"></i> ${item.topik}</span>
            ${isPrivate ? '<span class="badge-private"><i class="fa-solid fa-lock"></i> Privat</span>' : '<span style="background: #e0f2fe; color: #0369a1; font-size: 0.725rem; font-weight: 700; padding: 0.2rem 0.5rem; border-radius: 4px;"><i class="fa-solid fa-globe"></i> Publik</span>'}
            ${isPending ? '<span class="fpost-status-badge pending"><i class="fa-solid fa-clock"></i> Menunggu</span>' : '<span class="fpost-status-badge answered"><i class="fa-solid fa-check"></i> Selesai</span>'}
          </div>
        </div>

        <div class="admin-consult-body">
          <div class="c-title">${escapeHtmlForCard(item.judul)}</div>
          <div class="c-message">${escapeHtmlForCard(item.pesan)}</div>
          ${answerPreview}
        </div>

        <div class="admin-consult-actions">
          <div class="admin-actions-group">
            <a href="https://wa.me/${waNumber}?text=${waGreeting}" target="_blank" class="btn-wa-direct" title="Buka WhatsApp Pengirim">
              <i class="fa-brands fa-whatsapp"></i> Chat WhatsApp (${item.hp})
            </a>
            <button class="btn btn-primary btn-sm" onclick="openModalJawabKonsultasi('${item.id}')">
              <i class="fa-solid fa-reply"></i> ${item.status === 'answered' ? 'Edit Tanggapan KUA' : 'Beri Jawaban Resmi'}
            </button>
          </div>
          <div class="admin-actions-group">
            <button class="btn btn-outline btn-sm" onclick="toggleStatusKonsultasi('${item.id}')" title="Ubah Status">
              <i class="fa-solid fa-arrows-rotate"></i> ${isPending ? 'Tandai Selesai' : 'Tandai Menunggu'}
            </button>
            <button class="btn btn-outline btn-sm" style="color: #dc2626; border-color: #fca5a5;" onclick="confirmDeleteKonsultasi('${item.id}')" title="Hapus Konsultasi">
              <i class="fa-solid fa-trash"></i> Hapus
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

window.openModalJawabKonsultasi = function(id) {
  const item = state.konsultasiList.find(c => c.id === id);
  if (!item) return;

  document.getElementById("jawab-konsultasi-id").value = id;

  // Render question summary preview
  const preview = document.getElementById("jawab-pertanyaan-preview");
  if (preview) {
    preview.innerHTML = `
      <h5><i class="fa-solid fa-circle-question"></i> ${escapeHtmlForCard(item.judul)}</h5>
      <p style="margin-bottom: 0.35rem; font-size: 0.8rem; color: var(--kua-text-muted);">
        Dari: <strong>${item.namaAsli || item.nama}</strong> (${item.hp}) &bull; Kategori: <strong>${item.topik}</strong>
      </p>
      <p style="font-style: italic; background: rgba(0,0,0,0.03); padding: 0.5rem; border-radius: 4px;">"${escapeHtmlForCard(item.pesan)}"</p>
    `;
  }

  // Populate responders dropdown
  const selectPetugas = document.getElementById("jawab-petugas");
  if (selectPetugas) {
    selectPetugas.innerHTML = state.pegawaiList.map(p => {
      const selected = item.answer?.petugasId === p.id ? "selected" : "";
      return `<option value="${p.id}" data-nama="${p.nama}" data-jabatan="${p.jabatan}" data-avatar="${p.avatar}" ${selected}>${p.nama} (${p.jabatan})</option>`;
    }).join('');
  }

  // Populate answer textarea
  const txtIsi = document.getElementById("jawab-isi");
  if (txtIsi) {
    txtIsi.value = item.answer?.isi || "";
  }

  openModal("modal-jawab-konsultasi");
};

window.toggleStatusKonsultasi = function(id) {
  state.toggleKonsultasiStatus(id);
  renderAdminInbox();
  renderForumFeed();
  updateAdminInboxBadge();
  showToast("Status konsultasi berhasil diperbarui.", "success");
};

window.confirmDeleteKonsultasi = function(id) {
  const item = state.konsultasiList.find(c => c.id === id);
  if (!item) return;

  if (confirm(`Apakah Anda yakin ingin menghapus pesan konsultasi dari "${item.namaAsli || item.nama}"?`)) {
    state.deleteKonsultasi(id);
    renderAdminInbox();
    renderForumFeed();
    updateAdminInboxBadge();
    showToast("Konsultasi berhasil dihapus.", "info");
  }
};

/* ==========================================================================
   CHATBOT AI KUA KECAMATAN NANGGUNG
   ========================================================================== */

const KUA_KNOWLEDGE_BASE = [
  {
    keywords: ["jadwal", "jam buka", "jam kerja", "operasional", "buka", "tutup", "hari kerja", "waktu pelayanan"],
    answer: `<b>🕐 Jadwal Pelayanan KUA Kecamatan Nanggung:</b><br><br>
    📅 <b>Senin – Jumat:</b> 07.30 – 16.00 WIB<br>
    📅 <b>Sabtu & Minggu:</b> Tutup (kecuali ada jadwal akad nikah di luar jam kerja)<br><br>
    ⏰ <b>Jam pelayanan administrasi:</b><br>
    • Pendaftaran nikah: 08.00 – 14.00 WIB<br>
    • Konsultasi & bimbingan: 08.00 – 15.00 WIB<br><br>
    📌 <i>Harap datang minimal 30 menit sebelum jam tutup untuk pengurusan berkas.</i>`
  },
  {
    keywords: ["syarat nikah", "persyaratan nikah", "berkas nikah", "dokumen nikah", "syarat menikah", "mau nikah", "daftar nikah", "pernikahan"],
    answer: `<b>📋 Syarat Pendaftaran Nikah di KUA Nanggung:</b><br><br>
    <b>👨 Calon Pengantin Pria:</b><br>
    ✅ Surat Pengantar Nikah dari Desa (Form N1)<br>
    ✅ Fotokopi KTP & Kartu Keluarga (KK)<br>
    ✅ Fotokopi Akta Kelahiran / Ijazah Terakhir<br>
    ✅ Pasfoto 2x3 (4 lbr) & 4x6 (2 lbr) latar biru<br>
    ✅ Surat Rekomendasi (jika beda kecamatan)<br><br>
    <b>👩 Calon Pengantin Wanita:</b><br>
    ✅ Surat Pengantar Nikah dari Desa (Form N1)<br>
    ✅ Fotokopi KTP & KK Calon Istri<br>
    ✅ Fotokopi KTP Wali Nikah & KK Wali<br>
    ✅ Pasfoto 2x3 (4 lbr) & 4x6 (2 lbr) latar biru<br>
    ✅ Surat Imunisasi dari Puskesmas<br><br>
    📌 <i>Pendaftaran minimal 10 hari kerja sebelum akad nikah.</i>`
  },
  {
    keywords: ["biaya", "tarif", "harga", "bayar", "gratis", "mahal", "murah", "600", "pnbp"],
    answer: `<b>💰 Biaya Nikah di KUA Kecamatan Nanggung:</b><br><br>
    🕌 <b>Di Balai Nikah KUA (Jam Kerja):</b><br>
    💚 <b>GRATIS (Rp 0)</b> — Tidak dipungut biaya apapun!<br><br>
    🏠 <b>Di Luar KUA / Luar Jam Kerja:</b><br>
    💛 <b>Rp 600.000</b> (PNBP ke Kas Negara via Bank BUMN)<br><br>
    ⚠️ Sesuai PP No. 59 Tahun 2018. KUA menerapkan <b>Zero Pungli</b> — tidak ada biaya tambahan di luar ketentuan resmi!`
  },
  {
    keywords: ["alamat", "lokasi", "dimana", "letak", "tempat", "maps", "jalan", "kantor"],
    answer: `<b>📍 Alamat KUA Kecamatan Nanggung:</b><br><br>
    🏢 Jl. Raya Nanggung No. 45, Kec. Nanggung, Kabupaten Bogor, Jawa Barat 16650<br><br>
    📞 <b>Telepon:</b> (021) 789-2345<br>
    📱 <b>WhatsApp:</b> +62 813-9988-7766<br>
    📧 <b>Email:</b> kua.nanggung@kemenag.go.id<br><br>
    📌 <i>Lokasi berada di kompleks perkantoran Kecamatan Nanggung.</i>`
  },
  {
    keywords: ["alur", "prosedur", "cara", "langkah", "tahapan", "proses", "simkah", "pendaftaran"],
    answer: `<b>📝 Alur Pendaftaran Nikah di KUA Nanggung:</b><br><br>
    <b>1️⃣ Kelurahan / Desa</b><br>
    Urus surat pengantar nikah (N1, N2, N3, N4) di kantor desa setempat.<br><br>
    <b>2️⃣ Daftar di KUA / SIMKAH Online</b><br>
    Daftar online di simkah4.kemenag.go.id atau datang langsung ke KUA minimal 10 hari kerja sebelum akad.<br><br>
    <b>3️⃣ Pemeriksaan Berkas & Bimwin</b><br>
    Penghulu memeriksa kelengkapan dokumen & calon pengantin mengikuti Bimbingan Perkawinan (Suscatin).<br><br>
    <b>4️⃣ Pelaksanaan Akad Nikah</b><br>
    Akad nikah dipimpin Penghulu, lalu penyerahan Buku Nikah resmi + Kartu Nikah Digital.`
  },
  {
    keywords: ["bimwin", "suscatin", "bimbingan", "kursus", "pra nikah", "pranikah", "calon pengantin"],
    answer: `<b>💑 Bimbingan Perkawinan (Bimwin) KUA Nanggung:</b><br><br>
    📚 <b>Apa itu Bimwin/Suscatin?</b><br>
    Kursus calon pengantin yang wajib diikuti sebelum menikah untuk mempersiapkan kehidupan rumah tangga.<br><br>
    📅 <b>Jadwal Bimwin:</b><br>
    • Dilaksanakan setiap <b>Rabu & Kamis</b>, pukul 09.00 – 14.00 WIB<br>
    • Durasi: 2 hari (total 16 jam pelajaran)<br><br>
    📋 <b>Materi:</b><br>
    • Hukum pernikahan Islam<br>
    • Membangun keluarga sakinah<br>
    • Kesehatan reproduksi & pencegahan stunting<br>
    • Manajemen keuangan keluarga<br><br>
    📌 <i>Setelah selesai, peserta mendapat Sertifikat Bimbingan Perkawinan resmi.</i>`
  },
  {
    keywords: ["wakaf", "tanah wakaf", "aiw", "akta ikrar wakaf", "sertifikasi wakaf"],
    answer: `<b>🏛️ Layanan Wakaf KUA Kecamatan Nanggung:</b><br><br>
    📜 <b>Penerbitan Akta Ikrar Wakaf (AIW):</b><br>
    • Pembinaan & pendataan tanah wakaf<br>
    • Penerbitan AIW oleh PPAIW (Pejabat Pembuat Akta Ikrar Wakaf)<br>
    • Koordinasi sertifikasi tanah wakaf ke BPN<br><br>
    📋 <b>Syarat AIW:</b><br>
    ✅ Surat keterangan kepemilikan tanah<br>
    ✅ Surat pernyataan dari ahli waris<br>
    ✅ Identitas wakif & nazhir<br>
    ✅ Surat keterangan dari kepala desa<br><br>
    📌 <i>Layanan wakaf di KUA bersifat GRATIS.</i>`
  },
  {
    keywords: ["cerai", "janda", "duda", "akta cerai", "ditinggal mati", "meninggal"],
    answer: `<b>📄 Syarat Khusus untuk Duda / Janda:</b><br><br>
    💔 <b>Duda/Janda Cerai:</b><br>
    • Membawa <b>Akta Cerai Asli</b> dari Pengadilan Agama yang telah berkekuatan hukum tetap<br><br>
    🕊️ <b>Duda/Janda Ditinggal Mati:</b><br>
    • Membawa <b>Surat Keterangan Kematian</b> Pasangan (Form N6) dari Lurah/Kepala Desa<br><br>
    🎖️ <b>Anggota TNI/POLRI:</b><br>
    • Membawa <b>Surat Izin Perkawinan</b> dari Atasan/Komandan Kesatuan`
  },
  {
    keywords: ["kontak", "hubungi", "telepon", "telpon", "hp", "whatsapp", "wa", "email", "nomor"],
    answer: `<b>📞 Kontak KUA Kecamatan Nanggung:</b><br><br>
    📱 <b>Telepon:</b> (021) 789-2345<br>
    💬 <b>WhatsApp:</b> +62 813-9988-7766<br>
    📧 <b>Email:</b> kua.nanggung@kemenag.go.id<br>
    📧 <b>Pengaduan:</b> pengaduan.kua@kemenag.go.id<br><br>
    🕐 <b>Jam Layanan Telepon/WA:</b><br>
    Senin – Jumat, 08.00 – 15.30 WIB`
  },
  {
    keywords: ["halal", "sertifikasi halal", "sehalal", "umk", "usaha kecil"],
    answer: `<b>🥗 Pendampingan Sertifikasi Halal Gratis (SEHALAL):</b><br><br>
    KUA Nanggung menyediakan pendampingan sertifikasi halal gratis bagi pelaku Usaha Mikro dan Kecil (UMK).<br><br>
    📋 <b>Persyaratan:</b><br>
    ✅ Usaha Mikro/Kecil (omzet ≤ Rp 2 Miliar/tahun)<br>
    ✅ Memiliki NIB atau Izin Usaha<br>
    ✅ Produk belum bersertifikat halal<br><br>
    📌 <i>Hubungi Penyuluh Agama Islam KUA untuk konsultasi lebih lanjut.</i>`
  },
  {
    keywords: ["masjid", "musholla", "kemasjidan", "kiblat", "arah kiblat", "takmir"],
    answer: `<b>🕌 Layanan Bimbingan Kemasjidan KUA Nanggung:</b><br><br>
    • Pendataan masjid & musholla se-kecamatan<br>
    • Pengukuran & sertifikasi arah kiblat<br>
    • Pembinaan takmir & pengurus masjid<br>
    • Koordinasi kegiatan keagamaan di masjid<br><br>
    📌 <i>Pengukuran arah kiblat bisa diajukan secara gratis melalui KUA.</i>`
  },
  {
    keywords: ["bp4", "konseling", "mediasi", "rumah tangga", "masalah keluarga", "cekcok"],
    answer: `<b>🤝 Layanan Konseling BP4 KUA Nanggung:</b><br><br>
    BP4 (Badan Penasihatan Pembinaan dan Pelestarian Perkawinan) menyediakan:<br><br>
    • 💬 Konseling masalah rumah tangga<br>
    • 🤝 Mediasi suami-istri<br>
    • 📖 Bimbingan keluarga sakinah<br>
    • 🛡️ Pencegahan perceraian<br><br>
    📅 <b>Jadwal Konseling:</b> Setiap hari kerja, 09.00 – 14.00 WIB<br>
    📌 <i>Layanan konseling BP4 bersifat GRATIS dan RAHASIA.</i>`
  },
  {
    keywords: ["zakat", "infaq", "sedekah", "shadaqah", "zis"],
    answer: `<b>🤲 Bimbingan Zakat & Infaq KUA Nanggung:</b><br><br>
    KUA menyediakan bimbingan zakat, infaq, dan shadaqah (ZIS) meliputi:<br><br>
    • Sosialisasi & edukasi ZIS kepada masyarakat<br>
    • Pembinaan nazhir & pengelola ZIS<br>
    • Koordinasi dengan BAZNAS & LAZ<br>
    • Bimbingan perhitungan zakat mal & fitrah<br><br>
    📌 <i>Konsultasi perhitungan zakat dapat dilakukan di KUA secara gratis.</i>`
  },
  {
    keywords: ["kepala", "penghulu", "staf", "pegawai", "pejabat", "siapa"],
    answer: `<b>👥 Profil Pegawai KUA Kecamatan Nanggung:</b><br><br>
    Anda bisa melihat profil lengkap Kepala KUA, Penghulu, Penyuluh, dan Staf KUA di bagian <b>"Profil Pegawai & Penghulu"</b> pada website ini.<br><br>
    🔍 Gunakan fitur pencarian dan filter untuk menemukan pegawai tertentu.<br><br>
    📌 <i>Klik tombol "Lihat Profil Lengkap" pada kartu pegawai untuk detail lebih lanjut.</i>`
  },
  {
    keywords: ["terima kasih", "makasih", "thanks", "ok", "oke", "baik", "sip"],
    answer: `Sama-sama! 😊 Senang bisa membantu Anda. Jika ada pertanyaan lain seputar pelayanan KUA Kecamatan Nanggung, jangan ragu untuk bertanya kembali. <br><br>🕌 <i>Semoga dimudahkan segala urusannya.</i>`
  }
];

const CHATBOT_SUGGESTIONS = [
  "Syarat nikah apa saja?",
  "Berapa biaya nikah?",
  "Jadwal KUA Nanggung?",
  "Alur pendaftaran nikah?",
  "Jadwal Bimwin?",
  "Alamat KUA dimana?"
];

class KuaChatbot {
  constructor() {
    this.chatMessages = [];
    this.isOpen = false;
    this.init();
  }

  init() {
    const fab = document.getElementById("chatbot-fab");
    const closeBtn = document.getElementById("chatbot-close");
    const sendBtn = document.getElementById("chatbot-send");
    const input = document.getElementById("chatbot-input");
    const window_ = document.getElementById("chatbot-window");

    if (!fab) return;

    fab.addEventListener("click", () => this.toggle());
    closeBtn.addEventListener("click", () => this.close());
    sendBtn.addEventListener("click", () => this.sendMessage());
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.sendMessage();
    });

    // Render suggestions
    this.renderSuggestions();

    // Welcome message
    this.addBotMessage(`Assalamu'alaikum! 👋<br><br>Saya <b>Asisten Virtual KUA Kecamatan Nanggung</b>. Saya siap membantu menjawab pertanyaan Anda seputar:<br><br>
    🕌 Jadwal pelayanan KUA<br>
    📋 Syarat-syarat nikah<br>
    💰 Biaya pernikahan<br>
    📝 Alur pendaftaran SIMKAH<br>
    💑 Bimbingan Perkawinan (Bimwin)<br>
    🏛️ Wakaf, Zakat & layanan lainnya<br><br>
    Silakan ketik pertanyaan atau pilih topik di bawah ini! 👇`);
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.isOpen = true;
    const window_ = document.getElementById("chatbot-window");
    const fab = document.getElementById("chatbot-fab");
    window_.classList.add("active");
    fab.classList.add("active");
  }

  close() {
    this.isOpen = false;
    const window_ = document.getElementById("chatbot-window");
    const fab = document.getElementById("chatbot-fab");
    window_.classList.remove("active");
    fab.classList.remove("active");
  }

  renderSuggestions() {
    const container = document.getElementById("chatbot-suggestions");
    if (!container) return;
    container.innerHTML = CHATBOT_SUGGESTIONS.map(s =>
      `<button class="chatbot-suggestion-chip" onclick="chatbot.askSuggestion('${s}')">${s}</button>`
    ).join('');
  }

  askSuggestion(text) {
    document.getElementById("chatbot-input").value = text;
    this.sendMessage();
  }

  sendMessage() {
    const input = document.getElementById("chatbot-input");
    const text = input.value.trim();
    if (!text) return;

    this.addUserMessage(text);
    input.value = "";

    // Typing indicator
    this.showTyping();

    setTimeout(() => {
      this.hideTyping();
      const answer = this.getAnswer(text);
      this.addBotMessage(answer);
    }, 600 + Math.random() * 800);
  }

  getAnswer(query) {
    const q = query.toLowerCase();

    // Check knowledge base
    let bestMatch = null;
    let bestScore = 0;

    for (const entry of KUA_KNOWLEDGE_BASE) {
      let score = 0;
      for (const keyword of entry.keywords) {
        if (q.includes(keyword.toLowerCase())) {
          score += keyword.length; // Longer keyword matches = more specific
        }
      }
      if (score > bestScore) {
        bestScore = score;
        bestMatch = entry;
      }
    }

    if (bestMatch && bestScore > 0) {
      return bestMatch.answer;
    }

    // Greeting
    if (/^(halo|hai|hi|hello|assalam|salam|selamat|hey)/i.test(q)) {
      return `Wa'alaikumussalam! 😊 Halo, selamat datang di layanan chatbot KUA Kecamatan Nanggung.<br><br>Ada yang bisa saya bantu? Silakan tanyakan seputar syarat nikah, jadwal KUA, biaya nikah, atau layanan lainnya.`;
    }

    // Default
    return `Mohon maaf, saya belum bisa menjawab pertanyaan tersebut secara spesifik. 🙏<br><br>
    Silakan coba pertanyaan lain, atau hubungi langsung KUA Kecamatan Nanggung:<br><br>
    📞 <b>Telepon:</b> 085890394205br>
    💬 <b>WhatsApp:</b> 085894502321<br>
    📧 <b>Email:</b> nanggungkua@gmail.com<br><br>
    Atau pilih salah satu topik di bawah ini 👇`;
  }

  addUserMessage(text) {
    const container = document.getElementById("chatbot-messages");
    const msgDiv = document.createElement("div");
    msgDiv.className = "chatbot-msg chatbot-msg-user";
    msgDiv.innerHTML = `<div class="chatbot-bubble user-bubble">${this.escapeHtml(text)}</div>`;
    container.appendChild(msgDiv);
    this.scrollToBottom();
  }

  addBotMessage(html) {
    const container = document.getElementById("chatbot-messages");
    const msgDiv = document.createElement("div");
    msgDiv.className = "chatbot-msg chatbot-msg-bot";
    msgDiv.innerHTML = `
      <div class="chatbot-bot-avatar"><i class="fa-solid fa-mosque"></i></div>
      <div class="chatbot-bubble bot-bubble">${html}</div>
    `;
    container.appendChild(msgDiv);
    this.scrollToBottom();
  }

  showTyping() {
    const container = document.getElementById("chatbot-messages");
    const typing = document.createElement("div");
    typing.className = "chatbot-msg chatbot-msg-bot chatbot-typing-indicator";
    typing.id = "chatbot-typing";
    typing.innerHTML = `
      <div class="chatbot-bot-avatar"><i class="fa-solid fa-mosque"></i></div>
      <div class="chatbot-bubble bot-bubble">
        <div class="typing-dots"><span></span><span></span><span></span></div>
      </div>
    `;
    container.appendChild(typing);
    this.scrollToBottom();
  }

  hideTyping() {
    const typing = document.getElementById("chatbot-typing");
    if (typing) typing.remove();
  }

  scrollToBottom() {
    const container = document.getElementById("chatbot-messages");
    container.scrollTop = container.scrollHeight;
  }

  escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }
}

let chatbot;
document.addEventListener("DOMContentLoaded", () => {
  chatbot = new KuaChatbot();
});

