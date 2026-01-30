import React from 'react';
import { FileText, Download, Ticket, Star, Smile } from 'lucide-react';
import './RightSidebar.css';

const RightSidebar = () => {
    return (
        <div className="right-sidebar">
            <div className="section-title">Transparansi Publikasi PEMDI</div>

            {/* Status Card (Orange) */}
            <div className="stat-card orange">
                <div className="card-top">
                    <span className="card-label">Status PEMDI</span>
                    <div className="ring-mini">53</div>
                </div>
                <div className="card-main-score">53 <span className="sub">Skor</span></div>
            </div>

            {/* Evidence Card (Green) */}
            <div className="stat-card green">
                <div className="card-top">
                    <span className="card-label">Evidence</span>
                    <div className="ring-mini white">56/250</div>
                </div>
                <div className="card-main-score">56/250 <span className="sub">Bukti</span></div>
            </div>

            {/* Layanan Card (Blue) */}
            <div className="stat-card blue">
                <div className="card-top">
                    <span className="card-label">Layanan Pemerintah</span>
                    <span className="icon-badge">🏛️</span>
                </div>
                <div className="card-main-score">32,100+ <span className="tiny">Eksemplar & sukses bln month</span></div>
            </div>

            {/* Kepuasan Card (Yellow) */}
            <div className="stat-card yellow">
                <div className="card-top">
                    <span className="card-label">Kepuasan Pengguna</span>
                    <div className="ring-mini white">78%</div>
                </div>
                <div className="card-main-score">78% <span className="sub">Tingkat Survey</span></div>
            </div>

            {/* Helpdesk Widget */}
            <div className="helpdesk-widget">
                <div className="widget-header">
                    <div className="flex-center">
                        <Ticket size={16} /> <span>Helpdesk</span>
                    </div>
                    <span className="badge-gray">SD Slice</span>
                </div>
                <div className="helpdesk-stats">
                    <div className="stat-item">
                        <span className="val">12</span>
                        <span className="lbl">Open</span>
                    </div>
                    <div className="stat-item">
                        <span className="val">85</span>
                        <span className="lbl">Resolved</span>
                    </div>
                    <div className="stat-item">
                        <span className="val">⭐82</span>
                        <span className="lbl">4.11 rats</span>
                    </div>
                </div>
                <button className="btn-blue-block" onClick={() => alert("Mengarahkan ke form Buat Tiket...")}>
                    Kirim Tiket &gt;
                </button>
            </div>

            {/* Export Section */}
            <div className="export-section">
                <div className="section-header">
                    <FileText size={16} /> <span>Pelaporan & Ekspor</span>
                </div>
                <div className="export-buttons">
                    <button className="btn-export pdf" onClick={() => alert("Mengunduh laporan PDF...")}>PDF</button>
                    <button className="btn-export excel" onClick={() => alert("Mengunduh laporan Excel...")}>Excel</button>
                </div>
                <button className="btn-blue-block" onClick={() => alert("Menyiapkan unduhan laporan lengkap...")}>Unduh Laporan Sekarang</button>
            </div>
        </div>
    );
};

export default RightSidebar;
