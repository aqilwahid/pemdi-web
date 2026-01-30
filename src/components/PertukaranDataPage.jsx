import React, { useState } from 'react';
import { ChevronRight, Box, Zap, Database, Building, FileText, ArrowLeft, Download, Eye, Grid, List } from 'lucide-react';
import './PertukaranDataPage.css';

const PertukaranDataPage = () => {
    const [activeTab, setActiveTab] = useState('catalog'); // 'catalog' or 'api'

    // API Gateway State
    const [selectedResource, setSelectedResource] = useState('/penduduk');
    const [selectedMethod, setSelectedMethod] = useState('GET');
    const [testResponse, setTestResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Catalog State
    const [catalogView, setCatalogView] = useState('org_list'); // 'org_list', 'dataset_list', 'dataset_detail'
    const [selectedOrg, setSelectedOrg] = useState(null);
    const [selectedDataset, setSelectedDataset] = useState(null);

    // Mock Data - Organizations
    const organizations = [
        { id: 1, name: 'Dinas Pendidikan', count: 124, logo: '🎓', desc: 'Data pendidikan, sekolah, dan siswa.' },
        { id: 2, name: 'Dinas Kesehatan', count: 85, logo: '🏥', desc: 'Data rumah sakit, puskesmas, dan statistik kesehatan.' },
        { id: 3, name: 'Bappeda', count: 210, logo: '📊', desc: 'Data perencanaan pembangunan daerah.' },
        { id: 4, name: 'Diskominfo', count: 42, logo: '💻', desc: 'Data statistik sektoral dan infrastruktur digital.' },
        { id: 5, name: 'Dinas Sosial', count: 67, logo: '🤝', desc: 'Data penerima bantuan sosial dan kemiskinan.' },
        { id: 6, name: 'Dinas PU', count: 53, logo: '🏗️', desc: 'Data infrastruktur jalan, jembatan, dan tata ruang.' },
    ];

    // Mock Data - Datasets
    const datasets = [
        { id: 101, title: 'Jumlah Siswa per Sekolah Dasar 2024', orgId: 1, date: '29 Jan 2024', format: 'CSV', size: '2.4 MB', views: 1205 },
        { id: 102, title: 'Data Guru Bersertifikasi di Kabupaten Sleman', orgId: 1, date: '15 Jan 2024', format: 'XLSX', size: '1.1 MB', views: 850 },
        { id: 103, title: 'Angka Putus Sekolah Tingkat SMP 2023', orgId: 1, date: '20 Dec 2023', format: 'CSV', size: '0.5 MB', views: 2300 },
        { id: 201, title: 'Statistik Kasus DBD per Kecamatan', orgId: 2, date: '28 Jan 2024', format: 'CSV', size: '3.2 MB', views: 410 },
    ];

    const handleOrgClick = (org) => {
        setSelectedOrg(org);
        setCatalogView('dataset_list');
    };

    const handleDatasetClick = (dataset) => {
        setSelectedDataset(dataset);
        setCatalogView('dataset_detail');
    };

    // API Handlers (Preserved)
    const apiResources = [
        { path: '/', methods: [] },
        { path: '/penduduk', methods: ['GET', 'POST'], children: [{ path: '/{nik}', methods: ['GET', 'DELETE'] }] },
        { path: '/perizinan', methods: ['GET'], children: [{ path: '/status', methods: ['GET'] }] },
        { path: '/bansos', methods: ['GET', 'POST'] }
    ];

    const handleMethodClick = (path, method) => {
        setSelectedResource(path);
        setSelectedMethod(method);
        setTestResponse(null);
    };

    const runTest = () => {
        setIsLoading(true);
        setTestResponse(null);
        setTimeout(() => {
            setIsLoading(false);
            if (selectedResource === '/penduduk' && selectedMethod === 'GET') {
                setTestResponse({
                    status: 200, time: '124ms',
                    data: [{ nik: '347101...', nama: 'Budi Santoso' }, { nik: '347102...', nama: 'Siti Aminah' }]
                });
            } else {
                setTestResponse({ status: 200, time: '85ms', data: { message: `Success ${selectedMethod}` } });
            }
        }, 1000);
    };

    return (
        <div className="pertukaran-container">
            {/* Main Tabs */}
            <div className="pertukaran-tabs">
                <button
                    className={`p-tab-btn ${activeTab === 'catalog' ? 'active' : ''}`}
                    onClick={() => setActiveTab('catalog')}
                >
                    <Database size={18} /> Katalog Data (Open Data)
                </button>
                <button
                    className={`p-tab-btn ${activeTab === 'api' ? 'active' : ''}`}
                    onClick={() => setActiveTab('api')}
                >
                    <Zap size={18} /> Layanan API (Gateway)
                </button>
            </div>

            <div className="pertukaran-content">
                {/* ----------------- CATALOG VIEW ----------------- */}
                {activeTab === 'catalog' && (
                    <div className="catalog-view">
                        {/* Level 1: Organization List */}
                        {catalogView === 'org_list' && (
                            <div className="org-list-view">
                                <div className="view-header">
                                    <h2>Daftar Organisasi Perangkat Daerah</h2>
                                    <p>Pilih organisasi untuk melihat dataset yang tersedia.</p>
                                </div>
                                <div className="org-grid">
                                    {organizations.map(org => (
                                        <div key={org.id} className="org-card" onClick={() => handleOrgClick(org)}>
                                            <div className="org-logo">{org.logo}</div>
                                            <div className="org-info">
                                                <h3>{org.name}</h3>
                                                <p>{org.desc}</p>
                                                <span className="dataset-count">{org.count} Dataset</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Level 2: Dataset List */}
                        {catalogView === 'dataset_list' && selectedOrg && (
                            <div className="dataset-list-view">
                                <button className="btn-back" onClick={() => setCatalogView('org_list')}>
                                    <ArrowLeft size={16} /> Kembali ke Daftar Organisasi
                                </button>
                                <div className="org-hero">
                                    <div className="org-logo-lg">{selectedOrg.logo}</div>
                                    <div>
                                        <h2>{selectedOrg.name}</h2>
                                        <p>{selectedOrg.desc}</p>
                                    </div>
                                </div>
                                <div className="dataset-list">
                                    <h3>Dataset Tersedia</h3>
                                    {datasets.filter(d => d.orgId === selectedOrg.id).length > 0 ? (
                                        datasets.filter(d => d.orgId === selectedOrg.id).map(ds => (
                                            <div key={ds.id} className="dataset-row" onClick={() => handleDatasetClick(ds)}>
                                                <div className="ds-icon"><FileText size={24} color="#3b82f6" /></div>
                                                <div className="ds-info">
                                                    <h4>{ds.title}</h4>
                                                    <div className="ds-meta">
                                                        <span className="badge-fmt">{ds.format}</span>
                                                        <span>Updated: {ds.date}</span>
                                                        <span>Size: {ds.size}</span>
                                                    </div>
                                                </div>
                                                <div className="ds-arrow"><ChevronRight size={20} color="#cbd5e1" /></div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="empty-state">Belum ada dataset yang ditampilkan untuk simulasi ini.</div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Level 3: Dataset Detail */}
                        {catalogView === 'dataset_detail' && selectedDataset && (
                            <div className="dataset-detail-view">
                                <button className="btn-back" onClick={() => setCatalogView('dataset_list')}>
                                    <ArrowLeft size={16} /> Kembali ke {selectedOrg?.name}
                                </button>
                                <div className="detail-header">
                                    <h1>{selectedDataset.title}</h1>
                                    <div className="detail-badges">
                                        <span className="badge-fmt large">{selectedDataset.format}</span>
                                        <span className="view-count"><Eye size={14} /> {selectedDataset.views} Views</span>
                                    </div>
                                    <p className="detail-desc">
                                        Dataset ini berisi informasi lengkap mengenai {selectedDataset.title}.
                                        Data ini dikumpulkan secara berkala oleh {selectedOrg?.name} untuk keperluan transparansi publik dan analisis kebijakan.
                                    </p>
                                </div>

                                <div className="metadata-section">
                                    <h3>Metadata</h3>
                                    <table className="meta-table">
                                        <tbody>
                                            <tr><td>Organisasi</td><td>{selectedOrg?.name}</td></tr>
                                            <tr><td>Tanggal Update</td><td>{selectedDataset.date}</td></tr>
                                            <tr><td>Format</td><td>{selectedDataset.format}</td></tr>
                                            <tr><td>Ukuran File</td><td>{selectedDataset.size}</td></tr>
                                            <tr><td>Lisensi</td><td>Creative Commons Attribution</td></tr>
                                            <tr><td>Cakupan</td><td>Kabupaten/Kota</td></tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="action-section">
                                    <button className="btn-download" onClick={() => alert("Simulasi Download File...")}>
                                        <Download size={18} /> Unduh Dataset ({selectedDataset.size})
                                    </button>
                                    <button className="btn-preview" onClick={() => alert("Simulasi Preview Data...")}>
                                        <Grid size={18} /> Preview Data
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* ----------------- API GATEWAY VIEW (Previous) ----------------- */}
                {activeTab === 'api' && (
                    <div className="api-gateway-wrapper">
                        <div className="api-layout">
                            {/* Left: Resources Tree */}
                            <div className="resources-pane">
                                <div className="pane-title">Resources</div>
                                <div className="resource-tree">
                                    {apiResources.map((res, idx) => (
                                        <div key={idx} className="resource-item-group">
                                            <div className={`resource-path ${selectedResource === res.path ? 'active' : ''}`}>
                                                <span className="path-text">{res.path}</span>
                                            </div>
                                            <div className="method-list">
                                                {res.methods.map(method => (
                                                    <div key={method} className={`method-item ${method} ${selectedResource === res.path && selectedMethod === method ? 'selected' : ''}`}
                                                        onClick={() => handleMethodClick(res.path, method)}>
                                                        {method}
                                                    </div>
                                                ))}
                                            </div>
                                            {res.children && res.children.map((child, cIdx) => (
                                                <div key={cIdx} className="child-resource">
                                                    <div className="resource-path"><span className="path-text child">{child.path}</span></div>
                                                    <div className="method-list">
                                                        {child.methods.map(method => (
                                                            <div key={method} className={`method-item ${method} ${selectedResource === child.path && selectedMethod === method ? 'selected' : ''}`}
                                                                onClick={() => handleMethodClick(child.path, method)}>
                                                                {method}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Method Execution Pane */}
                            <div className="execution-pane">
                                <div className="execution-header">
                                    <h2>{selectedMethod} - {selectedResource}</h2>
                                    <span className="subtitle">Method Execution</span>
                                </div>
                                <div className="test-console">
                                    <div className="console-header"><h3>Test Console</h3></div>
                                    <div className="console-body">
                                        <button className="btn-test" onClick={runTest} disabled={isLoading}>
                                            {isLoading ? <>Running...</> : <><Zap size={16} fill="currentColor" /> Test</>}
                                        </button>
                                        {testResponse && (
                                            <div className="response-area">
                                                <div className="response-meta"><span className="status-code success">Status: {testResponse.status}</span><span className="latency">Time: {testResponse.time}</span></div>
                                                <div className="json-viewer"><pre>{JSON.stringify(testResponse.data, null, 2)}</pre></div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PertukaranDataPage;
