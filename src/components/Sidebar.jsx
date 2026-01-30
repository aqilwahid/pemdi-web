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
    Users
} from 'lucide-react';
import WorkflowModal from './WorkflowModal'; // Import logic-only if needed, or keep for Activity B
import './Sidebar.css';

const Sidebar = ({ activePage, setActivePage }) => {
    // Activity B Modal State (Local to Sidebar as it's a specific flow)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalStep, setModalStep] = useState(0);

    const handleNavClick = (itemName) => {
        setActivePage(itemName);

        // Activity B Trigger Removed (Moved to Page)
    };

    // Activity B Steps
    const activityBSteps = [
        "Request Data",
        "Admin Check",
        "Owner Approval",
        "API Key Generated",
        "Go Live"
    ];

    return (
        <div className="sidebar-container">
            {/* Brand */}
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

            {/* Menu */}
            <nav className="nav-menu">
                <div
                    className={`nav-item ${activePage === 'Dasbor PEMDI' ? 'active' : ''}`}
                    onClick={() => handleNavClick('Dasbor PEMDI')}
                >
                    <LayoutDashboard size={20} />
                    <span>Dasbor PEMDI</span>
                </div>

                <div
                    className={`nav-item ${activePage === 'Kelola 20 Indikator' ? 'active' : ''}`}
                    onClick={() => handleNavClick('Kelola 20 Indikator')}
                >
                    <ListChecks size={20} />
                    <span>Kelola 20 Indikator</span>
                    <ChevronDown size={16} className={`ml-auto ${activePage === 'Kelola 20 Indikator' ? 'rotate-180' : ''}`} />
                </div>

                {/* Submenu for Indikator - Only show when active */}
                {activePage === 'Kelola 20 Indikator' && (
                    <div className="sub-menu">
                        <div className="sub-header">
                            <span className="grid-icon">::</span>
                            <span>Aspek A-2</span>
                        </div>
                        <ul>
                            <li onClick={(e) => { e.stopPropagation(); alert("Filter: Tata Kelola"); }}>1. Tata Kelola</li>
                            <li onClick={(e) => { e.stopPropagation(); alert("Filter: Penyelenggara"); }}>2. Penyelenggara</li>
                            <li onClick={(e) => { e.stopPropagation(); alert("Filter: Data"); }}>3. Data</li>
                            <li onClick={(e) => { e.stopPropagation(); alert("Filter: Keamanan"); }}>4. Keamanan</li>
                            <li onClick={(e) => { e.stopPropagation(); alert("Filter: Teknologi"); }}>5. Teknologi</li>
                        </ul>
                    </div>
                )}

                <div
                    className={`nav-item ${activePage === 'Portal Layanan Digital' ? 'active' : ''}`}
                    onClick={() => handleNavClick('Portal Layanan Digital')}
                >
                    <Globe size={20} />
                    <span>Portal Layanan Digital</span>
                </div>
                <div
                    className={`nav-item ${activePage === 'Pertukaran Data' ? 'active' : ''}`}
                    onClick={() => handleNavClick('Pertukaran Data')}
                >
                    <ArrowLeftRight size={20} />
                    <span>Pertukaran Data</span>
                </div>
                <div
                    className={`nav-item ${activePage === 'Kepuasan Pengguna' ? 'active' : ''}`}
                    onClick={() => handleNavClick('Kepuasan Pengguna')}
                >
                    <Users size={20} />
                    <span>Kepuasan Pengguna</span>
                </div>
                <div
                    className={`nav-item ${activePage === 'Pelaporan & Ekspor' ? 'active' : ''}`}
                    onClick={() => handleNavClick('Pelaporan & Ekspor')}
                >
                    <FileText size={20} />
                    <span>Pelaporan & Ekspor</span>
                </div>
                <div
                    className={`nav-item ${activePage === 'Pengaturan & Akses' ? 'active' : ''}`}
                    onClick={() => handleNavClick('Pengaturan & Akses')}
                >
                    <Settings size={20} />
                    <span>Pengaturan & Akses</span>
                </div>
            </nav>

            <div className="sidebar-footer">
                <div className="nav-item help" onClick={() => alert("Buka Help Center")}>
                    <HelpCircle size={20} />
                    <span>Help Center</span>
                </div>
            </div>

            {/* Workflow Modal for Activity B Removed (Replaced by PertukaranDataPage) */}
        </div>
    );
};

export default Sidebar;
