import React, { useState } from 'react';
import { Cpu, Server, Globe, Database, ArrowRight, CheckCircle2, Circle, Clock, AlertCircle } from 'lucide-react';
import './TeknologiDigitalPage.css';

const TeknologiDigitalPage = () => {
    const [activeTab, setActiveTab] = useState('apps'); // 'apps' or 'infra'
    const [selectedId, setSelectedId] = useState(1);

    // Mock Data: Applications & SDLC
    const applications = [
        {
            id: 1, name: 'SIMPEG PEMDI', version: 'v2.4.0', type: 'Internal',
            desc: 'Sistem Informasi Kepegawaian Daerah terintegrasi.',
            tech: ['React', 'Node.js', 'PostgreSQL'],
            sdlc: [
                { stage: 'Planning', status: 'completed', date: 'Jan 2023', details: 'Requirement gathering finished. BRD approved.' },
                { stage: 'Development', status: 'completed', date: 'Mar 2023', details: 'Core modules developed. API integration done.' },
                { stage: 'Testing', status: 'completed', date: 'Apr 2023', details: 'UAT passed with 98% success rate.' },
                { stage: 'Deployment', status: 'active', date: 'May 2023', details: 'Live in Production. Monitoring active.' }
            ]
        },
        {
            id: 2, name: 'Portal Warga (SatuPintu)', version: 'v1.1.2', type: 'Public',
            desc: 'Aplikasi layanan publik satu pintu untuk warga.',
            tech: ['Next.js', 'Golang', 'Redis'],
            sdlc: [
                { stage: 'Planning', status: 'completed', date: 'Jun 2023', details: 'User journey mapping finalized.' },
                { stage: 'Development', status: 'active', date: 'On-going', details: 'Mobile app responsive fixes in progress.' },
                { stage: 'Testing', status: 'pending', date: '-', details: 'Scheduled for next month.' },
                { stage: 'Deployment', status: 'pending', date: '-', details: '-' }
            ]
        },
        {
            id: 3, name: 'E-Budgeting', version: 'v3.0', type: 'Internal',
            desc: 'Sistem perencanaan anggaran daerah.',
            tech: ['Java Spring', 'Oracle', 'Angular'],
            sdlc: [
                { stage: 'Planning', status: 'completed', date: '2022', details: 'Regulatory compliance checks done.' },
                { stage: 'Development', status: 'completed', date: '2022', details: 'Legacy migration complete.' },
                { stage: 'Testing', status: 'completed', date: '2022', details: 'Security audit passed.' },
                { stage: 'Maintenance', status: 'active', date: 'Now', details: 'Quarterly patching and optimization.' }
            ]
        }
    ];

    // Mock Data: Infrastructure
    const infrastructure = [
        {
            id: 101, name: 'Data Center Utama', type: 'On-Premise',
            desc: 'Pusat data tier-3 yang melayani seluruh OPD.',
            specs: '42 Racks, Dual Power, Cooling n+1',
            utilization: {
                cpu: 65,
                storage: 78,
                bandwidth: 45
            },
            hosted_systems: ['SIMPEG', 'E-Budgeting', 'Website Dinas']
        },
        {
            id: 102, name: 'Cloud Gateway (AWS)', type: 'Hybrid Cloud',
            desc: 'Gateway untuk layanan publik skala besar dan backup.',
            specs: 'AWS Jakarta Region, Direct Connect 1gbps',
            utilization: {
                cpu: 30,
                storage: 45,
                bandwidth: 60
            },
            hosted_systems: ['Portal Warga', 'SatuSehat Integration', 'CDN Assets']
        },
        {
            id: 103, name: 'Fiber Optic Backbone', type: 'Network',
            desc: 'Jaringan intra pemerintah menghubungkan 45 OPD.',
            specs: 'FO 10Gbps Ring Topology',
            utilization: {
                cpu: 0, // Not applicable
                storage: 0,
                bandwidth: 82
            },
            hosted_systems: ['Intranet', 'VoIP Government', 'CCTV Traffic']
        }
    ];

    // Helper to get current list based on tab
    const currentList = activeTab === 'apps'
        ? applications
        : infrastructure.map(i => ({ ...i, id: i.id - 100 })); // Remap ID slightly for logic if needed, but actually let's just use separate logic or reset selectedId

    // Select item logic
    const selectedItem = activeTab === 'apps'
        ? applications.find(a => a.id === selectedId) || applications[0]
        : infrastructure.find(i => i.id === selectedId) || infrastructure[0];

    // Reset selection when tab changes
    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setSelectedId(tab === 'apps' ? 1 : 101);
    };

    return (
        <div className="tech-page">
            {/* Header */}
            <header className="tech-header">
                <div className="th-content">
                    <h1>Teknologi & Infrastruktur Digital</h1>
                    <p>Dokumentasi teknis, siklus pengembangan aplikasi, dan status infrastruktur.</p>
                </div>
                <div className="tech-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'apps' ? 'active' : ''}`}
                        onClick={() => handleTabChange('apps')}
                    >
                        <Globe size={18} /> Aplikasi & SDLC
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'infra' ? 'active' : ''}`}
                        onClick={() => handleTabChange('infra')}
                    >
                        <Server size={18} /> Infrastruktur
                    </button>
                </div>
            </header>

            <div className="doc-layout">
                {/* Left Sidebar (Doc Navigation) */}
                <aside className="doc-sidebar">
                    <h3>{activeTab === 'apps' ? 'Daftar Aplikasi' : 'Daftar Infrastruktur'}</h3>
                    <ul className="doc-nav">
                        {activeTab === 'apps' ? (
                            applications.map(app => (
                                <li
                                    key={app.id}
                                    className={selectedId === app.id ? 'active' : ''}
                                    onClick={() => setSelectedId(app.id)}
                                >
                                    <span className="nav-icon"><Cpu size={14} /></span>
                                    {app.name}
                                </li>
                            ))
                        ) : (
                            infrastructure.map(infra => (
                                <li
                                    key={infra.id}
                                    className={selectedId === infra.id ? 'active' : ''}
                                    onClick={() => setSelectedId(infra.id)}
                                >
                                    <span className="nav-icon"><Database size={14} /></span>
                                    {infra.name}
                                </li>
                            ))
                        )}
                    </ul>
                </aside>

                {/* Main Content Area */}
                <main className="doc-content">
                    {/* APP DETAIL VIEW */}
                    {activeTab === 'apps' && selectedItem && (
                        <div className="content-wrapper">
                            <div className="content-header">
                                <h2>{selectedItem.name} <span className="version-badge">{selectedItem.version}</span></h2>
                                <span className={`type-badge ${selectedItem.type.toLowerCase()}`}>{selectedItem.type}</span>
                            </div>
                            <p className="item-desc">{selectedItem.desc}</p>

                            <div className="tech-stack">
                                <strong>Tech Stack:</strong>
                                {selectedItem.tech.map(t => <span key={t} className="tech-chip">{t}</span>)}
                            </div>

                            <hr className="divider" />

                            <h3>Software Development Life Cycle (SDLC)</h3>
                            <div className="sdlc-timeline">
                                {selectedItem.sdlc.map((stage, idx) => (
                                    <div key={idx} className={`sdlc-step ${stage.status}`}>
                                        <div className="step-marker">
                                            {stage.status === 'completed' && <CheckCircle2 size={20} />}
                                            {stage.status === 'active' && <Clock size={20} className="spinning" />}
                                            {stage.status === 'pending' && <Circle size={20} />}
                                        </div>
                                        <div className="step-content">
                                            <h4>{stage.stage}</h4>
                                            <span className="step-date">{stage.date}</span>
                                            <p>{stage.details}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* INFRA DETAIL VIEW */}
                    {activeTab === 'infra' && selectedItem && (
                        <div className="content-wrapper">
                            <div className="content-header">
                                <h2>{selectedItem.name}</h2>
                                <span className="type-badge infra">{selectedItem.type}</span>
                            </div>
                            <p className="item-desc">{selectedItem.desc}</p>

                            <div className="specs-box">
                                <strong>Spesifikasi:</strong> {selectedItem.specs}
                            </div>

                            <hr className="divider" />

                            <h3>Pemanfaatan & Kapasitas</h3>
                            <div className="utilization-grid">
                                <div className="util-card">
                                    <span className="util-label">CPU / Compute</span>
                                    <div className="progress-bar">
                                        <div className="fill" style={{ width: `${selectedItem.utilization.cpu}%`, background: selectedItem.utilization.cpu > 80 ? '#ef4444' : '#3b82f6' }}></div>
                                    </div>
                                    <span className="util-val">{selectedItem.utilization.cpu}% Used</span>
                                </div>
                                <div className="util-card">
                                    <span className="util-label">Storage</span>
                                    <div className="progress-bar">
                                        <div className="fill" style={{ width: `${selectedItem.utilization.storage}%`, background: selectedItem.utilization.storage > 80 ? '#ef4444' : '#10b981' }}></div>
                                    </div>
                                    <span className="util-val">{selectedItem.utilization.storage}% Used</span>
                                </div>
                                <div className="util-card">
                                    <span className="util-label">Network Bandwidth</span>
                                    <div className="progress-bar">
                                        <div className="fill" style={{ width: `${selectedItem.utilization.bandwidth}%`, background: selectedItem.utilization.bandwidth > 80 ? '#fbbf24' : '#8b5cf6' }}></div>
                                    </div>
                                    <span className="util-val">{selectedItem.utilization.bandwidth}% Load</span>
                                </div>
                            </div>

                            <h3>Hosted Systems</h3>
                            <div className="hosted-list">
                                {selectedItem.hosted_systems.map(sys => (
                                    <div key={sys} className="host-item">
                                        <Server size={16} /> {sys}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default TeknologiDigitalPage;
