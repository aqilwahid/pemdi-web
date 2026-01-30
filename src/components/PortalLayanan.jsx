import React, { useState } from 'react';
import { Search, User, Heart, GraduationCap, Briefcase, Calculator, Users, Building, Truck, X, Key, CreditCard } from 'lucide-react';
import './PortalLayanan.css';

const services = [
    { id: 1, title: 'Kependudukan & Pencatatan Sipil', icon: User, desc: 'Layanan KTP Digital, KK, Akta Kelahiran, dan Identitas Kependudukan Digital (IKD).', traffic: 'High', users: '1.2M' },
    { id: 2, title: 'Layanan Kesehatan', icon: Heart, desc: 'BPJS Kesehatan, Antrian RS Online, dan Resume Medis (SatuSehat).', traffic: 'High', users: '850k' },
    { id: 3, title: 'Pendidikan & Kebudayaan', icon: GraduationCap, desc: 'Pendaftaran Sekolah (PPDB), KIP Kuliah, dan Data Dapodik.', traffic: 'Medium', users: '450k' },
    { id: 4, title: 'Perizinan Usaha (OSS)', icon: Briefcase, desc: 'Layanan perizinan berusaha berbasis risiko untuk UMKM dan Perusahaan.', traffic: 'High', users: '320k' },
    { id: 5, title: 'Perpajakan Daerah', icon: Calculator, desc: 'E-Samsat, PBB-P2, dan Pajak Restoran/Hotel.', traffic: 'Medium', users: '125k' },
    { id: 6, title: 'Bansos & Kesejahteraan', icon: Users, desc: 'Cek Bansos, DTKS, dan Program Keluarga Harapan.', traffic: 'High', users: '2.1M' },
    { id: 7, title: 'Tata Ruang & Perumahan', icon: Building, desc: 'Ijin Mendirikan Bangunan (PBG) dan Informasi Tata Ruang.', traffic: 'Low', users: '15k' },
    { id: 8, title: 'Transportasi & Dishub', icon: Truck, desc: 'Uji KIR, Trayek Angkutan, dan CCTV Lalu Lintas.', traffic: 'Medium', users: '80k' }
];

const PortalLayanan = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [user, setUser] = useState(null); // { name: 'John Doe', digitalId: 'DID-...' }

    // Modal States - Default to Login Open if not authenticated
    const [showLogin, setShowLogin] = useState(true);
    const [showRegister, setShowRegister] = useState(false);

    // Form States
    const [regName, setRegName] = useState('');
    const [regNIK, setRegNIK] = useState('');
    const [loginID, setLoginID] = useState('');
    const [loginPass, setLoginPass] = useState('');

    const filteredServices = services.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleRegister = (e) => {
        e.preventDefault();
        if (regName && regNIK) {
            // Simulate Digital ID generation
            const newDigitalId = `DID-2024-${Math.floor(1000 + Math.random() * 9000)}`;
            alert(`Pendaftaran Berhasil!\nDigital ID Anda: ${newDigitalId}\nSilakan Login.`);

            // Auto fill login for convenience
            setLoginID(newDigitalId);
            setShowRegister(false);
            setShowLogin(true);
        } else {
            alert("Mohon lengkapi Nama dan NIK.");
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (loginID && loginPass) {
            // Simulate Login
            setUser({
                name: "Warga Digital", // In real app, would fetch from DB based on ID
                digitalId: loginID
            });
            setShowLogin(false);
        } else {
            alert("Mohon masukkan Digital ID dan Password.");
        }
    };

    const handleLogout = () => {
        setUser(null);
        setLoginID('');
        setLoginPass('');
        setShowLogin(true); // Force login again
    };

    return (
        <div className="portal-container">
            {/* Header with Auth */}
            <div className="portal-header">
                <div className="auth-corner">
                    {user ? (
                        <div className="user-status">
                            <span className="welcome-text">Halo, <strong>{user.name}</strong></span>
                            <span className="digital-id-badge">{user.digitalId}</span>
                            <button className="btn-logout" onClick={handleLogout}>Keluar</button>
                        </div>
                    ) : (
                        <div className="auth-buttons">
                            {/* Hidden when blocking auth is active */}
                        </div>
                    )}
                </div>

                <h1>Portal Layanan Digital Pemerintah</h1>
                <p>Akses seluruh layanan publik digital dalam satu pintu terintegrasi.</p>

                <div className="portal-search">
                    <Search className="search-icon" size={20} />
                    <input
                        type="text"
                        placeholder="Cari layanan (misal: KTP, Ijin Usaha, BPJS)..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Service Grid */}
            <div className="services-grid">
                {filteredServices.length > 0 ? (
                    filteredServices.map((service) => (
                        <div key={service.id} className="service-card" onClick={() => alert(`Membuka layanan: ${service.title}`)}>
                            <div className="card-icon">
                                <service.icon size={28} />
                                <span className="user-count-badge" title="Jumlah Pengguna">
                                    <Users size={12} /> {service.users}
                                </span>
                            </div>
                            <div className="card-content">
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </div>
                            <div className="card-footer">
                                <span className={`traffic-badge ${service.traffic.toLowerCase()}`}>
                                    ● {service.traffic} Traffic
                                </span>
                                <span className="action-link">Akses Layanan &rarr;</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-results">
                        <p>Layanan tidak ditemukan.</p>
                    </div>
                )}
            </div>

            {/* Login Modal */}
            {showLogin && (
                <div className="modal-overlay">
                    <div className="modal-box">
                        {/* No Close Button for Mandatory Auth */}
                        <h2>Masuk ke Portal</h2>
                        <p>Silakan masukkan Digital ID dan Password Anda.</p>
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <label>Digital ID</label>
                                <div className="input-icon-wrapper">
                                    <CreditCard size={18} className="input-icon" />
                                    <input
                                        type="text"
                                        placeholder="Contoh: DID-2024-XXXX"
                                        value={loginID}
                                        onChange={e => setLoginID(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <div className="input-icon-wrapper">
                                    <Key size={18} className="input-icon" />
                                    <input
                                        type="password"
                                        placeholder="Masukkan password..."
                                        value={loginPass}
                                        onChange={e => setLoginPass(e.target.value)}
                                    />
                                </div>
                            </div>
                            <button type="submit" className="btn-submit">Masuk</button>
                        </form>
                        <div className="modal-footer">
                            Belum punya akun? <span className="link" onClick={() => { setShowLogin(false); setShowRegister(true); }}>Daftar di sini</span>
                        </div>
                    </div>
                </div>
            )}

            {/* Register Modal */}
            {showRegister && (
                <div className="modal-overlay">
                    <div className="modal-box">
                        {/* No Close Button */}
                        <h2>Pendaftaran Baru</h2>
                        <p>Lengkapi data diri untuk mendapatkan Digital ID.</p>
                        <form onSubmit={handleRegister}>
                            <div className="form-group">
                                <label>Nama Lengkap</label>
                                <div className="input-icon-wrapper">
                                    <User size={18} className="input-icon" />
                                    <input
                                        type="text"
                                        placeholder="Nama sesuai KTP"
                                        value={regName}
                                        onChange={e => setRegName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>NIK (Nomor Induk Kependudukan)</label>
                                <div className="input-icon-wrapper">
                                    <CreditCard size={18} className="input-icon" />
                                    <input
                                        type="text"
                                        placeholder="16 digit NIK"
                                        value={regNIK}
                                        onChange={e => setRegNIK(e.target.value)}
                                    />
                                </div>
                            </div>
                            <button type="submit" className="btn-submit">Daftar Sekarang</button>
                        </form>
                        <div className="modal-footer">
                            Sudah punya akun? <span className="link" onClick={() => { setShowRegister(false); setShowLogin(true); }}>Masuk</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PortalLayanan;
