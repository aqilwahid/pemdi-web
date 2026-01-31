# PEMDI Web - Dashboard Eksekutif Pemerintah Digital

**PEMDI (Pemerantauan Digital Indonesia)** adalah aplikasi dashboard eksekutif yang dirancang untuk memantau indeks Sistem Pemerintahan Berbasis Elektronik (SPBE), integrasi layanan publik, infrastruktur digital, hingga kesiapan SDM aparatur sipil negara.

Aplikasi ini bertujuan untuk memberikan transparansi dan kemudahan pengambilan keputusan berbasis data bagi pimpinan daerah maupun masyarakat.

---

## 🚀 Fitur Utama

### 1. 📊 Executive Dashboard
Overview komprehensif mengenai kesehatan digital pemerintahan:
*   **Skor SPBE & Tren**: Visualisasi indeks maturitas digital.
*   **Status Indikator**: Pemantauan 20 indikator utama keberhasilan SPBE.
*   **Navigasi Cepat**: Akses langsung ke modul-modul penting lainnya.

### 2. 🏛️ Portal Layanan Digital
Pusat akses layanan publik terintegrasi ("One Stop Service"):
*   **Katalog Layanan**: Akses ke berbagai layanan (Kependudukan, Perizinan, Kesehatan, dll).
*   **Mandatory Authentication**: Sistem keamanan yang memastikan pengguna Login/Register sebelum mengakses layanan.
*   **Statistik Pengguna**: Transparansi jumlah pengguna aktif per layanan.

### 3. 🌐 Portal Data (API Gateway)
Hub pertukaran data antar instansi (OPD):
*   **OPD Selector**: Pilih Dinas/Instansi untuk melihat API yang tersedia.
*   **API Testing Console**: Uji coba endpoint API (GET, POST) secara langsung di browser.
*   **Katalog Dataset**: Akses Open Data dengan detail metadata.

### 4. 🛡️ Keamanan Siber
Pusat transparansi keamanan informasi:
*   **Audit Center**: Laporan hasil audit eksternal (ISO 27001) dan internal.
*   **Risk & Compliance**: Visualisasi temuan audit, tingkat risiko, dan skor kepatuhan keamanan.

### 5. 💻 Teknologi Digital
Dokumentasi teknis ekosistem digital:
*   **App Landscape**: Daftar aplikasi pemerintah beserta status SDLC (Planning - Deploy).
*   **Infrastruktur**: Monitoring kapasitas Data Center, Cloud, dan Jaringan (CPU, Storage, Bandwidth).
*   **Dokumentasi ala Tech Docs**: Layout side-by-side untuk kemudahan navigasi teknis.

### 6. 👨‍🎓 SDM & Budaya Digital
Manajemen kapabilitas talenta digital:
*   **Peta Kompetensi**: Distribusi sertifikasi profesional (misal: TOGAF, PMP) di kalangan ASN.
*   **Digital Culture**: Rekam jejak aktivitas kolaborasi digital dan notulen rapat yang transparan.

### 7. ⭐ Kepuasan Pengguna
Kanal umpan balik masyarakat:
*   **Rating Layanan**: Indeks kepuasan per kategori layanan publik.
*   **Review Interaktif**: Warga dapat memberikan bintang dan komentar langsung terkait pengalaman layanan.

---

## 🛠️ Tech Stack

Dibangun dengan teknologi web modern untuk performa dan skalabilitas:
*   **Frontend**: [React](https://react.dev/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: CSS Modules & Responsive Layouts
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **State Management**: React Hooks (useState, useEffect)

---

## 📦 Instalasi & Menjalankan Project

Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) (versi 16+ direkomendasikan).

1.  **Clone Repository**
    ```bash
    git clone https://github.com/aqilwahid/pemdi-web.git
    cd pemdi-web
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Jalankan Mode Development**
    ```bash
    npm run dev
    ```
    Buka browser dan akses `http://localhost:5173` (atau port yang tertera di terminal).

4.  **Build untuk Produksi**
    ```bash
    npm run build
    ```

---

## 🤝 Kontribusi

Proyek ini dikembangkan secara iteratif. Masukan dan kontribusi sangat diapresiasi. Silakan buat Issue atau Pull Request jika ada saran pengembangan.

---
*PEMDI Web © 2024 - Menuju Pemerintahan Digital yang Terintegrasi & Terpercaya*
