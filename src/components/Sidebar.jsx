import React, { useState } from 'react';
import {
    LayoutDashboard,
    ListChecks,
    Globe,
    ArrowLeftRight,
    Headphones,
    FileText,
    Settings,
    HelpCircle,
    ChevronDown,
    Users,
    ShieldCheck,
    Cpu,
    GraduationCap,
    Database
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ activePage, setActivePage }) => {
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);

    const handleNavClick = (itemName) => {
        setActivePage(itemName);
    };

    const handleDashboardClick = () => {
        setIsDashboardOpen(!isDashboardOpen);
        // If opening, we can optionally set active page, but usually sub-item sets it.
        // If closing, we keep current page active.
    };

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="brand">
                    <div className="brand-logo">
                        <div className="logo-placeholder">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Garuda_Pancasila%2C_Coat_of_Arms_of_Indonesia.svg/1920px-Garuda_Pancasila%2C_Coat_of_Arms_of_Indonesia.svg.png" alt="Garuda" style={{ width: '27px', height: '27px' }} />
                        </div>
                        <div className="brand-text">
                            <h1>PEMDI</h1>
                            <span>Pemerintahan Digital</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="nav-menu">
                {/* 1. Dashboard Dropdown */}
                <div
                    className={`nav-item ${activePage === 'Dasbor PEMDI' || activePage === 'Status 20 Indikator' ? 'active' : ''}`}
                    onClick={handleDashboardClick}
                >
                    <LayoutDashboard size={20} />
                    <span>Dashboard PEMDI</span>
                    <ChevronDown size={16} style={{ marginLeft: 'auto', transform: isDashboardOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </div>

                {isDashboardOpen && (
                    <div className="nav-sub-menu" style={{ marginLeft: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <div
                            className={`nav-item sub ${activePage === 'Dasbor PEMDI' ? 'sub-active' : ''}`}
                            onClick={() => setActivePage('Dasbor PEMDI')}
                            style={{ fontSize: '0.9rem', color: activePage === 'Dasbor PEMDI' ? '#2563eb' : '#64748b', cursor: 'pointer', padding: '0.3rem 0' }}
                        >
                            <span>Status 20 Indikator</span>
                        </div>
                    </div>
                )}

                {/* 2. Portal Layanan Digital */}
                <div
                    className={`nav-item ${activePage === 'Portal Layanan Digital' ? 'active' : ''}`}
                    onClick={() => handleNavClick('Portal Layanan Digital')}
                >
                    <Globe size={20} />
                    <span>Portal Layanan Digital</span>
                </div>

                {/* 3. Portal Data */}
                <div
                    className={`nav-item ${activePage === 'Portal Data' ? 'active' : ''}`}
                    onClick={() => handleNavClick('Portal Data')}
                >
                    <Database size={20} />
                    <span>Portal Data</span>
                </div>

                {/* 4. Keamanan Siber */}
                <div
                    className={`nav-item ${activePage === 'Keamanan Siber' ? 'active' : ''}`}
                    onClick={() => handleNavClick('Keamanan Siber')}
                >
                    <ShieldCheck size={20} />
                    <span>Keamanan Siber</span>
                </div>

                {/* 5. Teknologi Digital */}
                <div
                    className={`nav-item ${activePage === 'Teknologi Digital' ? 'active' : ''}`}
                    onClick={() => handleNavClick('Teknologi Digital')}
                >
                    <Cpu size={20} />
                    <span>Teknologi Digital</span>
                </div>

                {/* 6. SDM & Budaya Digital */}
                <div
                    className={`nav-item ${activePage === 'SDM & Budaya Digital' ? 'active' : ''}`}
                    onClick={() => handleNavClick('SDM & Budaya Digital')}
                >
                    <GraduationCap size={20} />
                    <span>SDM & Budaya Digital</span>
                </div>

                {/* 7. Kepuasan Pengguna */}
                <div
                    className={`nav-item ${activePage === 'Kepuasan Pengguna' ? 'active' : ''}`}
                    onClick={() => handleNavClick('Kepuasan Pengguna')}
                >
                    <Users size={20} />
                    <span>Kepuasan Pengguna</span>
                </div>
            </div>

            <div className="sidebar-footer">
                <div className="nav-item help" onClick={() => alert("Buka Help Center")}>
                    <HelpCircle size={20} />
                    <span>Help Center</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
