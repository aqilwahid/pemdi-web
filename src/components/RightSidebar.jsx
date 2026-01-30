import React from 'react';
import './RightSidebar.css';
import { HelpCircle, FileText, Download } from 'lucide-react';

const RightSidebar = ({ setActivePage }) => {
    return (
        <div className="right-sidebar">
            <h3 className="section-title">Transparansi Publikasi PEMDI</h3>

            {/* Skor PEMDI */}
            <div className="stat-card orange">
                <div className="card-header">
                    <h4>Skor PEMDI total & tren</h4>
                    <span className="score-circle">53</span>
                </div>
                <div className="card-body">
                    <div className="big-score">53 <span>Skor</span></div>
                </div>
            </div>

            {/* Status Indikator (Was Evidence) */}
            <div className="stat-card teal">
                <div className="card-header">
                    <h4>Status Indikator</h4>
                    {/* Simulating a fraction circle or similar */}
                    <span className="score-circle smaller">56/250</span>
                </div>
                <div className="card-body">
                    <div className="big-score">56/250 <span>Bukti</span></div>
                </div>
            </div>

            {/* Layanan A - Navigate to Portal */}
            <div className="stat-card blue clickable" onClick={() => setActivePage('Portal Layanan Digital')}>
                <div className="card-header">
                    <h4>Layanan Pemerintah</h4>
                    <span className="icon-stack">📚</span>
                </div>
                <div className="card-body">
                    <div className="big-score">52 <span>Layanan</span></div>
                    <p className="sub-text">Terintegrasi & suskes (this month)</p>
                </div>
            </div>

            {/* Layanan B */}
            <div className="stat-card yellow">
                <div className="card-header">
                    <h4>Kepuasan Pengguna</h4>
                    <span className="score-circle">78%</span>
                </div>
                <div className="card-body">
                    <div className="big-score">78% <span>Tingkat</span></div>
                    <p className="sub-text">Success</p>
                </div>
            </div>

            {/* Helpdesk */}
            <div className="helpdesk-section">
                <div className="help-header">
                    <h4><HelpCircle size={16} /> Helpdesk</h4>
                    <div className="help-stats-mini">
                        <span>12 Open</span>
                        <span>85 Rcvd</span>
                    </div>
                </div>
                <button className="btn-kirim">Kirim Tiket &gt;</button>
            </div>

            {/* Pelaporan */}
            <div className="pelaporan-section">
                <h4><FileText size={16} /> Pelaporan & Ekspor</h4>
                <div className="export-buttons">
                    <button className="btn-export pdf">PDF</button>
                    <button className="btn-export excel">Excel</button>
                </div>
                <button className="btn-download-full">Unduh Laporan Sekarang</button>
            </div>
        </div>
    );
};

export default RightSidebar;
