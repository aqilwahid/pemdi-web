import React, { useState } from 'react';
import { Ticket, Star, MessageCircle, AlertCircle, Phone, Mail, Clock, CheckCircle, Search, Users, Send } from 'lucide-react';
import WorkflowModal from './WorkflowModal';
import './DukunganPage.css';

const DukunganPage = () => {
    const [activeTab, setActiveTab] = useState('helpdesk'); // 'helpdesk', 'satisfaction', 'aspirasi'
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState('helpdesk'); // 'helpdesk' or 'public_report'
    const [modalStep, setModalStep] = useState(0);

    const helpdeskStats = [
        { label: 'Tiket Terbuka', value: 12, color: 'blue', icon: Ticket },
        { label: 'Sedang Proses', value: 5, color: 'orange', icon: Clock },
        { label: 'Selesai', value: 85, color: 'green', icon: CheckCircle },
        { label: 'Rata-rata Respon', value: '2 Jam', color: 'purple', icon: MessageCircle },
    ];

    const satisfactionStats = [
        { label: 'Indeks Kepuasan', value: '82/100', sub: 'Baik', color: 'green' },
        { label: 'Total Responden', value: '1,240', sub: 'Bulan Ini', color: 'blue' },
        { label: 'Rating Aplikasi', value: '4.5/5', sub: 'Dari 500 Review', color: 'yellow' },
    ];

    // Dummy Tickets Data
    const tickets = [
        { id: 'TKT-2024-001', subject: 'Gagal Upload Evidence Indikator 5', status: 'Open', priority: 'High', date: '2024-01-28' },
        { id: 'TKT-2024-002', subject: 'Pertanyaan teknis API Gateway', status: 'In Progress', priority: 'Medium', date: '2024-01-27' },
        { id: 'TKT-2024-003', subject: 'Permintaan akses user tambahan', status: 'Resolved', priority: 'Low', date: '2024-01-25' },
    ];

    // Dummy Community Reports
    const [communityReports, setCommunityReports] = useState([
        { id: 'RPT-W-001', subject: 'Layanan KTP Digital lambat diakses', category: 'Infrastruktur', status: 'Diterima', date: '2024-01-29', sender: 'Warga Sleman' },
        { id: 'RPT-W-002', subject: 'Usulan penambahan fitur pendaftaran UMKM', category: 'Fitur', status: 'Ditinjau', date: '2024-01-28', sender: 'Komunitas UMKM' },
        { id: 'RPT-W-003', subject: 'Tampilan kurang ramah disabilitas', category: 'Aksesibilitas', status: 'Selesai', date: '2024-01-25', sender: 'Anonim' },
    ]);

    // Activity C Workflow Steps (Helpdesk)
    const activityCSteps = [
        "Input Tiket",
        "Auto-Triage",
        "Assign Petugas",
        "Resolusi",
        "Survei Kepuasan"
    ];

    const handleCreateTicket = () => {
        setModalType('helpdesk');
        setModalStep(0);
        setIsModalOpen(true);
    };

    const handlePublicReport = () => {
        // Simulasi menambah laporan baru
        const newReport = {
            id: `RPT-W-00${communityReports.length + 1}`,
            subject: 'Laporan Baru dari Masyarakat (Simulasi)',
            category: 'Umum',
            status: 'Baru',
            date: new Date().toISOString().split('T')[0],
            sender: 'Masyarakat'
        };
        setCommunityReports([newReport, ...communityReports]);
        alert("Terima kasih! Laporan Anda telah tercatat di sistem Aspirasi Masyarakat.");
    };

    return (
        <div className="dukungan-container">
            <div className="dukungan-header">
                <h1>Dukungan & Kepuasan Pengguna</h1>
                <p>Pusat bantuan teknis dan monitoring kepuasan layanan PEMDI.</p>
            </div>

            {/* Navigation Tabs */}
            <div className="page-tabs">
                <button
                    className={`tab-btn ${activeTab === 'helpdesk' ? 'active' : ''}`}
                    onClick={() => setActiveTab('helpdesk')}
                >
                    <Ticket size={18} /> Helpdesk
                </button>
                <button
                    className={`tab-btn ${activeTab === 'satisfaction' ? 'active' : ''}`}
                    onClick={() => setActiveTab('satisfaction')}
                >
                    <Star size={18} /> Survei Kepuasan
                </button>
                <button
                    className={`tab-btn ${activeTab === 'aspirasi' ? 'active' : ''}`}
                    onClick={() => setActiveTab('aspirasi')}
                >
                    <Users size={18} /> Aspirasi Masyarakat
                </button>
            </div>

            {activeTab === 'helpdesk' && (
                <div className="tab-content helpdesk-view">
                    {/* Stats Grid */}
                    <div className="stats-grid">
                        {helpdeskStats.map((stat, idx) => (
                            <div key={idx} className={`stat-card-box ${stat.color}`}>
                                <div className="stat-icon">
                                    <stat.icon size={24} />
                                </div>
                                <div className="stat-info">
                                    <span className="stat-value">{stat.value}</span>
                                    <span className="stat-label">{stat.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Actions & List */}
                    <div className="content-section">
                        <div className="section-header-row">
                            <h3>Tiket Saya</h3>
                            <button className="btn-primary" onClick={handleCreateTicket}>
                                + Buat Tiket Baru
                            </button>
                        </div>

                        <div className="ticket-list">
                            <div className="ticket-header">
                                <span>ID Tiket</span>
                                <span>Subjek</span>
                                <span>Status</span>
                                <span>Prioritas</span>
                                <span>Tanggal</span>
                            </div>
                            {tickets.map(ticket => (
                                <div key={ticket.id} className="ticket-row" onClick={() => alert(`Detail tiket ${ticket.id}`)}>
                                    <span className="ticket-id">{ticket.id}</span>
                                    <span className="ticket-subject">{ticket.subject}</span>
                                    <span className={`status-pill ${ticket.status.toLowerCase().replace(' ', '-')}`}>{ticket.status}</span>
                                    <span className={`priority-text ${ticket.priority.toLowerCase()}`}>{ticket.priority}</span>
                                    <span className="ticket-date">{ticket.date}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="contact-info-row">
                        <div className="contact-card">
                            <Phone size={20} className="text-blue-600" />
                            <div>
                                <strong>Call Center</strong>
                                <p>1500-123 (24 Jam)</p>
                            </div>
                        </div>
                        <div className="contact-card">
                            <Mail size={20} className="text-blue-600" />
                            <div>
                                <strong>Email Support</strong>
                                <p>helpdesk@pemdi.go.id</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'satisfaction' && (
                <div className="tab-content satisfaction-view">
                    <div className="stats-grid">
                        {satisfactionStats.map((stat, idx) => (
                            <div key={idx} className={`stat-card-box ${stat.color}`}>
                                <div className="stat-info center">
                                    <span className="stat-value large">{stat.value}</span>
                                    <span className="stat-label">{stat.label}</span>
                                    <span className="stat-sub">{stat.sub}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="content-section">
                        <h3>Ulasan Terbaru</h3>
                        <div className="reviews-list">
                            <div className="review-item">
                                <div className="review-header">
                                    <span className="reviewer-name">Dinas Kominfo</span>
                                    <div className="stars">⭐⭐⭐⭐⭐</div>
                                </div>
                                <p className="review-text">Sistem sangat membantu dalam pemantauan SPBE. Fitur upload evidence mudah digunakan.</p>
                            </div>
                            <div className="review-item">
                                <div className="review-header">
                                    <span className="reviewer-name">Bappeda</span>
                                    <div className="stars">⭐⭐⭐⭐</div>
                                </div>
                                <p className="review-text">Tampilan dashboard informatif, namun mohon dipercepat load datanya saat trafik tinggi.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'aspirasi' && (
                <div className="tab-content aspirasi-view">
                    <div className="aspirasi-hero">
                        <div className="hero-text">
                            <h3>Suara Masyarakat</h3>
                            <p>Kanal partisipasi publik untuk menyampaikan kritik, saran, dan laporan terkait layanan digital pemerintahan.</p>
                        </div>
                        <button className="btn-primary-lg" onClick={handlePublicReport}>
                            <Send size={18} /> Simulasi Laporan Warga
                        </button>
                    </div>

                    <div className="content-section">
                        <h3>Daftar Aspirasi Masuk</h3>
                        <div className="ticket-list">
                            <div className="ticket-header">
                                <span>ID Laporan</span>
                                <span>Topik Aduan</span>
                                <span>Pengirim</span>
                                <span>Status</span>
                                <span>Tanggal</span>
                            </div>
                            {communityReports.map(report => (
                                <div key={report.id} className="ticket-row">
                                    <span className="ticket-id">{report.id}</span>
                                    <span className="ticket-subject">
                                        {report.subject}
                                        <br />
                                        <small style={{ color: '#6b7280' }}>Kategori: {report.category}</small>
                                    </span>
                                    <span>{report.sender}</span>
                                    <span className="status-pill open">{report.status}</span>
                                    <span className="ticket-date">{report.date}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Workflow Modal for Activity C (Helpdesk) */}
            <WorkflowModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={modalType === 'helpdesk' ? "Layanan Helpdesk & Tiket" : "Laporan Warga"}
                steps={activityCSteps}
                currentStep={modalStep}
            >
                <div className="activity-c-content">
                    {modalStep === 0 && (
                        <div className="step-form">
                            <p>Silakan isi detail permasalahan Anda.</p>
                            <div className="form-group">
                                <label>Kategori Masalah</label>
                                <select>
                                    <option>Teknis / Sistem Error</option>
                                    <option>Akses / Login</option>
                                    <option>Pertanyaan Umum</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Deskripsi</label>
                                <textarea rows="3" placeholder="Jelaskan masalah Anda..."></textarea>
                            </div>
                        </div>
                    )}
                    {modalStep > 0 && (
                        <div className="step-simulation">
                            <div className="simulation-icon">🤖</div>
                            <p>Sistem sedang memproses tiket Anda ke tahap: <strong>{activityCSteps[modalStep]}</strong></p>
                        </div>
                    )}

                    <div className="modal-actions-center">
                        <button className="btn-primary" onClick={() => {
                            if (modalStep < 4) setModalStep(modalStep + 1);
                            else setIsModalOpen(false);
                        }}>
                            {modalStep === 0 ? "Kirim Tiket" : (modalStep === 4 ? "Selesai" : "Simulasi Lanjut")}
                        </button>
                    </div>
                </div>
            </WorkflowModal>
        </div>
    );
};

export default DukunganPage;
