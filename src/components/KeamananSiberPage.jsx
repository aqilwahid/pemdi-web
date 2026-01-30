import React, { useState } from 'react';
import { ShieldCheck, FileCheck, Lock, AlertTriangle, CheckCircle, Search, Download, Calendar } from 'lucide-react';
import './KeamananSiberPage.css';

const KeamananSiberPage = () => {
    // Mock Data for Audits
    const audits = [
        {
            id: 1,
            title: 'Audit ISO 27001:2013',
            type: 'External Audit',
            date: '15 Jan 2024',
            status: 'Compliant',
            score: '98%',
            auditor: 'BSI Group',
            summary: 'Sistem Manajemen Keamanan Informasi (SMKI) PEMDI telah memenuhi standar internasional ISO 27001.',
            details: {
                scope: 'Data Center & Aplikasi Layanan Publik',
                findings: [
                    { severity: 'Low', desc: 'Dokumentasi SOP backup perlu diperbarui minor.' },
                    { severity: 'Info', desc: 'Disarankan upgrade firewall firmware versi terbaru.' }
                ],
                chartData: [98, 2] // Compliant, Gap
            }
        },
        {
            id: 2,
            title: 'Audit Keamanan Internal PEMDI',
            type: 'Internal Rutin',
            date: '10 Feb 2024',
            status: 'Pass with Note',
            score: '85%',
            auditor: 'Tim CISO PEMDI',
            summary: 'Audit rutin kuartal I menunjukkan postur keamanan yang baik namun perlu hardening pada server legacy.',
            details: {
                scope: 'Server Infrastruktur & Endpoint Pegawai',
                findings: [
                    { severity: 'Medium', desc: '3 Server belum terpasang patch keamanan Januari.' },
                    { severity: 'Low', desc: 'Password policy di beberapa PC admin belum enforce 2FA.' }
                ],
                chartData: [85, 15]
            }
        },
        {
            id: 3,
            title: 'Audit IKASANDI (BSSN)',
            type: 'Government Audit',
            date: '05 Dec 2023',
            status: 'Baik',
            score: '3.45 / 4.00',
            auditor: 'BSSN',
            summary: 'Indeks Keamanan Informasi (KAMI) berada pada tingkat kepatuhan TINGGI.',
            details: {
                scope: 'Seluruh Layanan SPBE',
                findings: [],
                compliance: [
                    { area: 'Tata Kelola', score: 90 },
                    { area: 'Pengelolaan Risiko', score: 85 },
                    { area: 'Kerangka Kerja', score: 95 },
                    { area: 'Aset Informasi', score: 88 },
                    { area: 'Teknologi', score: 92 }
                ]
            }
        }
    ];

    const [selectedAudit, setSelectedAudit] = useState(audits[0]);

    return (
        <div className="security-container">
            {/* Header */}
            <div className="security-header">
                <div className="header-icon">
                    <ShieldCheck size={40} color="white" />
                </div>
                <div>
                    <h1>Pusat Audit Keamanan Siber</h1>
                    <p>Transparansi hasil audit dan status keamanan informasi PEMDI.</p>
                </div>
            </div>

            <div className="security-content">
                {/* Left: Audit List */}
                <div className="audit-list">
                    <h3>Riwayat Audit</h3>
                    <div className="audit-cards">
                        {audits.map(audit => (
                            <div
                                key={audit.id}
                                className={`audit-card ${selectedAudit.id === audit.id ? 'active' : ''}`}
                                onClick={() => setSelectedAudit(audit)}
                            >
                                <div className="ac-header">
                                    <FileCheck size={20} className="ac-icon" />
                                    <span className={`status-badge ${audit.status.replace(/\s/g, '-').toLowerCase()}`}>{audit.status}</span>
                                </div>
                                <h4>{audit.title}</h4>
                                <div className="ac-meta">
                                    <span>{audit.date}</span>
                                    <span>•</span>
                                    <span>{audit.type}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Audit Detail */}
                <div className="audit-detail">
                    <div className="detail-header">
                        <div>
                            <h2>{selectedAudit.title}</h2>
                            <span className="auditor-name">Auditor: {selectedAudit.auditor}</span>
                        </div>
                        <div className="score-box">
                            <span className="sc-label">Skor Audit</span>
                            <span className="sc-val">{selectedAudit.score}</span>
                        </div>
                    </div>

                    <div className="detail-body">
                        <section className="summary-section">
                            <h4>Ringkasan Eksekutif</h4>
                            <p>{selectedAudit.summary}</p>
                            <div className="scope-badge">
                                <strong>Lingkup:</strong> {selectedAudit.details.scope}
                            </div>
                        </section>

                        {selectedAudit.details.findings && selectedAudit.details.findings.length > 0 && (
                            <section className="findings-section">
                                <h4>Temuan & Rekomendasi</h4>
                                <ul className="findings-list">
                                    {selectedAudit.details.findings.map((find, idx) => (
                                        <li key={idx} className={`finding-item ${find.severity.toLowerCase()}`}>
                                            <AlertTriangle size={16} />
                                            <div>
                                                <span className="severity">{find.severity}:</span> {find.desc}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {selectedAudit.details.compliance && (
                            <section className="compliance-section">
                                <h4>Detail Kepatuhan Area</h4>
                                <div className="compliance-grid">
                                    {selectedAudit.details.compliance.map((comp, idx) => (
                                        <div key={idx} className="comp-item">
                                            <span className="comp-name">{comp.area}</span>
                                            <div className="comp-bar-bg">
                                                <div className="comp-bar-fill" style={{ width: `${comp.score}%` }}></div>
                                            </div>
                                            <span className="comp-score">{comp.score}%</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        <div className="action-buttons">
                            <button className="btn-action primary" onClick={() => alert("Mengunduh Laporan Lengkap PDF...")}>
                                <Download size={18} /> Unduh Laporan Lengkap
                            </button>
                            <button className="btn-action secondary">
                                <Calendar size={18} /> Jadwal Audit Berikutnya
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeamananSiberPage;
