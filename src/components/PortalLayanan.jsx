import React, { useState } from 'react';
import { Search, User, Heart, GraduationCap, Briefcase, Calculator, Users, Building, Truck } from 'lucide-react';
import './PortalLayanan.css';

const services = [
    { id: 1, title: 'Kependudukan & Pencatatan Sipil', icon: User, desc: 'Layanan KTP Digital, KK, Akta Kelahiran, dan Identitas Kependudukan Digital (IKD).', traffic: 'High' },
    { id: 2, title: 'Layanan Kesehatan', icon: Heart, desc: 'BPJS Kesehatan, Antrian RS Online, dan Resume Medis (SatuSehat).', traffic: 'High' },
    { id: 3, title: 'Pendidikan & Kebudayaan', icon: GraduationCap, desc: 'Pendaftaran Sekolah (PPDB), KIP Kuliah, dan Data Dapodik.', traffic: 'Medium' },
    { id: 4, title: 'Perizinan Usaha (OSS)', icon: Briefcase, desc: 'Layanan perizinan berusaha berbasis risiko untuk UMKM dan Perusahaan.', traffic: 'High' },
    { id: 5, title: 'Perpajakan Daerah', icon: Calculator, desc: 'E-Samsat, PBB-P2, dan Pajak Restoran/Hotel.', traffic: 'Medium' },
    { id: 6, title: 'Bansos & Kesejahteraan', icon: Users, desc: 'Cek Bansos, DTKS, dan Program Keluarga Harapan.', traffic: 'High' },
    { id: 7, title: 'Tata Ruang & Perumahan', icon: Building, desc: 'Ijin Mendirikan Bangunan (PBG) dan Informasi Tata Ruang.', traffic: 'Low' },
    { id: 8, title: 'Transportasi & Dishub', icon: Truck, desc: 'Uji KIR, Trayek Angkutan, dan CCTV Lalu Lintas.', traffic: 'Medium' }
];

const PortalLayanan = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredServices = services.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="portal-container">
            {/* Hero / Header */}
            <div className="portal-header">
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
        </div>
    );
};

export default PortalLayanan;
