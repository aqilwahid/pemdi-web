import React, { useState } from 'react';
import { GraduationCap, Users, Calendar, FileText, ChevronRight, Award, User, Clock, CheckCircle } from 'lucide-react';
import './SdmBudayaPage.css';

const SdmBudayaPage = () => {
    const [activeTab, setActiveTab] = useState('competency'); // 'competency' or 'meetings'
    const [selectedCompetency, setSelectedCompetency] = useState(null);
    const [selectedMeeting, setSelectedMeeting] = useState(null);

    // Mock Data: Competencies
    const competencies = [
        {
            id: 1, name: 'TOGAF © Certification', category: 'Enterprise Architecture', count: 5,
            icon: '🏛️',
            holders: [
                { name: 'Budi Santoso', dept: 'Diskominfo', year: '2023' },
                { name: 'Siti Aminah', dept: 'Bappeda', year: '2022' },
                { name: 'Ahmad Rizki', dept: 'Diskominfo', year: '2023' },
                { name: 'Dewi Lestari', dept: 'Pusdatin', year: '2024' },
                { name: 'Eko Prasetyo', dept: 'IT Sec', year: '2021' }
            ]
        },
        {
            id: 2, name: 'PMP (Project Management Pro)', category: 'Management', count: 8,
            icon: '📊',
            holders: [
                { name: 'Rina Wati', dept: 'Bappeda', year: '2022' },
                { name: 'Joko Susilo', dept: 'Sekda', year: '2023' },
                { name: 'Andi Wijaya', dept: 'Diskominfo', year: '2021' },
                { name: 'Maya Sari', dept: 'Dinas PU', year: '2023' },
                { name: 'Fajar Nugraha', dept: 'Dinas Pendidikan', year: '2024' },
                { name: 'Citra Kirana', dept: 'Diskominfo', year: '2022' },
                { name: 'Doni Tata', dept: 'UPT Digital', year: '2023' },
                { name: 'Hesti P', dept: 'Bappeda', year: '2023' }
            ]
        },
        {
            id: 3, name: 'CISA - IT Auditor', category: 'Security & Audit', count: 3,
            icon: '🔒',
            holders: [
                { name: 'Eko Prasetyo', dept: 'IT Sec', year: '2022' },
                { name: 'Dian Sastro', dept: 'Inspektorat', year: '2023' },
                { name: 'Bambang P', dept: 'Diskominfo', year: '2024' }
            ]
        },
        {
            id: 4, name: 'Google Data Analytics', category: 'Data Science', count: 12,
            icon: '📈',
            holders: [
                { name: 'Tim Data 1', dept: 'Diskominfo', year: '2023' },
                { name: 'Tim Startu', dept: 'Bappeda', year: '2024' },
                // ... simplified for demo
            ]
        },
        {
            id: 5, name: 'Certified Scrum Master', category: 'Agile', count: 6,
            icon: '🔄',
            holders: [
                { name: 'Agile Coach', dept: 'Diskominfo', year: '2023' },
                { name: 'PO Satu', dept: 'Layanan Publik', year: '2023' }
            ]
        }
    ];

    // Mock Data: Meetings
    const meetings = [
        {
            id: 101, title: 'Rapat Koordinasi SPBE Triwulan I', date: '15 Jan 2024', time: '09:00 - 11:30',
            participants: 45,
            location: 'Aula Bappeda & Zoom',
            minutes: `
                1. Pembukaan oleh Kepala Dinas Kominfo.
                2. Evaluasi indeks SPBE tahun 2023 mencapai predikat 'Baik'.
                3. Rencana integrasi data sektoral ditargetkan rampung Q2 2024.
                4. Kendala infrastruktur di kecamatan terpencil akan diatasi dengan pengadaan Starlink.
                5. Penutupan dan doa bersama.
            `
        },
        {
            id: 102, title: 'Workshop Keamanan Informasi ASN', date: '02 Feb 2024', time: '13:00 - 15:00',
            participants: 120,
            location: 'Webinar Zoom',
            minutes: `
                1. Materi awareness phising dan social engineering.
                2. Demo serangan siber sederhana.
                3. Sosialisasi kebijakan password baru (wajib ganti tiap 3 bulan).
                4. Sesi tanya jawab antusias, banyak pertanyaan soal OTP.
            `
        },
        {
            id: 103, title: 'Sinkronisasi Arsitektur Aplikasi', date: '12 Feb 2024', time: '10:00 - 12:00',
            participants: 15,
            location: 'R. Rapat Diskominfo',
            minutes: `
                1. Review arsitektur microservices Portal Warga.
                2. Kesepakatan penggunaan Gateway API terpusat.
                3. Standardisasi JSON response format untuk semua OPD.
                4. Next action: Draft teknis API Spec selesai dalam 1 minggu.
            `
        }
    ];

    const handleCompetencyClick = (comp) => {
        setSelectedCompetency(comp);
    };

    const handleMeetingClick = (meet) => {
        setSelectedMeeting(meet);
    };

    return (
        <div className="sdm-page">
            {/* Header */}
            <header className="sdm-header">
                <div>
                    <h1>SDM & Budaya Digital</h1>
                    <p>Pemetaan kompetensi digital ASN dan rekam jejak kolaborasi.</p>
                </div>
                <div className="sdm-tabs">
                    <button
                        className={`sdm-tab-btn ${activeTab === 'competency' ? 'active' : ''}`}
                        onClick={() => { setActiveTab('competency'); setSelectedCompetency(null); }}
                    >
                        <Award size={18} /> Peta Kompetensi
                    </button>
                    <button
                        className={`sdm-tab-btn ${activeTab === 'meetings' ? 'active' : ''}`}
                        onClick={() => { setActiveTab('meetings'); setSelectedMeeting(null); }}
                    >
                        <Users size={18} /> Digital Culture (Meeting)
                    </button>
                </div>
            </header>

            <div className="sdm-content">
                {/* ---------------- COMPETENCY MAP VIEW ---------------- */}
                {activeTab === 'competency' && (
                    <div className="competency-view">
                        <div className="comp-grid">
                            {competencies.map(comp => (
                                <div
                                    key={comp.id}
                                    className={`comp-card ${selectedCompetency?.id === comp.id ? 'active' : ''}`}
                                    onClick={() => handleCompetencyClick(comp)}
                                >
                                    <div className="cc-header">
                                        <span className="cc-icon">{comp.icon}</span>
                                        <span className="cc-count">{comp.count} SDM</span>
                                    </div>
                                    <h3>{comp.name}</h3>
                                    <span className="cc-cat">{comp.category}</span>
                                </div>
                            ))}
                        </div>

                        {/* Detail Side Panel */}
                        <div className={`comp-detail-panel ${selectedCompetency ? 'open' : ''}`}>
                            {selectedCompetency ? (
                                <>
                                    <div className="cd-header">
                                        <h2>{selectedCompetency.name}</h2>
                                        <span className="cd-count-lg">{selectedCompetency.count} People Certified</span>
                                    </div>
                                    <div className="cd-list">
                                        <h3>Daftar Pemegang Sertifikasi</h3>
                                        {selectedCompetency.holders.map((holder, idx) => (
                                            <div key={idx} className="holder-item">
                                                <div className="holder-avatar">
                                                    <User size={20} />
                                                </div>
                                                <div className="holder-info">
                                                    <strong>{holder.name}</strong>
                                                    <span>{holder.dept} • {holder.year}</span>
                                                </div>
                                            </div>
                                        ))}
                                        {selectedCompetency.holders.length < selectedCompetency.count && (
                                            <div className="more-holders">
                                                + {selectedCompetency.count - selectedCompetency.holders.length} others...
                                            </div>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <div className="empty-selection">
                                    <Award size={48} color="#e2e8f0" />
                                    <p>Pilih kompetensi di kiri untuk melihat daftar SDM.</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* ---------------- MEETING RECORDS VIEW ---------------- */}
                {activeTab === 'meetings' && (
                    <div className="meetings-view">
                        <div className="meetings-list">
                            <h3>Riwayat Pertemuan</h3>
                            {meetings.map((meet) => (
                                <div
                                    key={meet.id}
                                    className={`meeting-card ${selectedMeeting?.id === meet.id ? 'active' : ''}`}
                                    onClick={() => handleMeetingClick(meet)}
                                >
                                    <div className="mc-date">
                                        <Calendar size={14} /> {meet.date}
                                    </div>
                                    <h4>{meet.title}</h4>
                                    <div className="mc-meta">
                                        <span><Users size={12} /> {meet.participants} Peserta</span>
                                        <span><Clock size={12} /> {meet.time}</span>
                                    </div>
                                    <ChevronRight className="mc-arrow" size={16} />
                                </div>
                            ))}
                        </div>

                        {/* Meeting Detail (Minutes) */}
                        <div className="meeting-detail">
                            {selectedMeeting ? (
                                <div className="md-content">
                                    <div className="md-header">
                                        <span className="md-date">{selectedMeeting.date} • {selectedMeeting.time}</span>
                                        <h1>{selectedMeeting.title}</h1>
                                        <div className="md-badges">
                                            <span className="md-badge participants"><Users size={14} /> {selectedMeeting.participants} Participants</span>
                                            <span className="md-badge location">📍 {selectedMeeting.location}</span>
                                        </div>
                                    </div>

                                    <div className="md-minutes">
                                        <h3><FileText size={18} /> Notulen Meeting</h3>
                                        <div className="minutes-text">
                                            {selectedMeeting.minutes.trim().split('\n').map((line, i) => (
                                                <p key={i}>{line.trim()}</p>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="md-actions">
                                        <button className="btn-print" onClick={() => alert("Printing minutes...")}>Cetak Notulen</button>
                                    </div>
                                </div>
                            ) : (
                                <div className="empty-selection">
                                    <FileText size={48} color="#e2e8f0" />
                                    <p>Pilih pertemuan untuk melihat notulen.</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SdmBudayaPage;
