import React, { useState } from 'react';
import { FileText, Download, Calendar, Filter, Printer, FileSpreadsheet, FileIcon } from 'lucide-react';
import './PelaporanPage.css';

const PelaporanPage = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('2024');
    const [selectedType, setSelectedType] = useState('all');

    const reports = [
        { id: 'RPT-2024-001', title: 'Laporan Kematangan SPBE Q1 2024', date: '2024-03-31', type: 'Quarterly', size: '2.4 MB' },
        { id: 'RPT-2023-FIN', title: 'Laporan Tahunan Transformasi Digital 2023', date: '2023-12-31', type: 'Annual', size: '15.8 MB' },
        { id: 'RPT-2024-002', title: 'Laporan Monitoring Infrastruktur Januari', date: '2024-01-31', type: 'Monthly', size: '1.2 MB' },
        { id: 'RPT-SURVEY-01', title: 'Analisis Survei Kepuasan Pengguna Semester 1', date: '2023-07-15', type: 'Ad-hoc', size: '5.5 MB' },
        { id: 'RPT-AUDIT-SEC', title: 'Audit Keamanan Siber & Insiden', date: '2023-11-20', type: 'Audit', size: '8.9 MB' },
    ];

    const generateReport = (format) => {
        alert(`Memulai proses generate laporan dalam format ${format}... \nSimulasi: File akan terunduh otomatis setelah selesai.`);
    };

    return (
        <div className="pelaporan-container">
            <div className="pelaporan-header">
                <h1>Pelaporan & Ekspor Data</h1>
                <p>Unduh dokumen laporan kinerja, statistik, dan arsip audit PEMDI.</p>
            </div>

            {/* Actions / Filter Bar */}
            <div className="actions-bar">
                <div className="filters">
                    <div className="filter-group">
                        <Calendar size={18} className="text-gray" />
                        <select value={selectedPeriod} onChange={(e) => setSelectedPeriod(e.target.value)}>
                            <option value="2024">Tahun 2024</option>
                            <option value="2023">Tahun 2023</option>
                            <option value="2022">Tahun 2022</option>
                        </select>
                    </div>
                    <div className="filter-group">
                        <Filter size={18} className="text-gray" />
                        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                            <option value="all">Semua Tipe Laporan</option>
                            <option value="Annual">Tahunan</option>
                            <option value="Quarterly">Triwulan</option>
                            <option value="Monthly">Bulanan</option>
                            <option value="Audit">Audit</option>
                        </select>
                    </div>
                </div>

                <div className="quick-actions">
                    <button className="btn-action primary" onClick={() => generateReport('PDF')}>
                        <Printer size={18} /> Print Rekap
                    </button>
                    <button className="btn-action success" onClick={() => generateReport('Excel')}>
                        <FileSpreadsheet size={18} /> Export Excel
                    </button>
                </div>
            </div>

            {/* Reports List */}
            <div className="reports-section">
                <h3>Arsip Laporan</h3>
                <div className="reports-list">
                    {reports.map((report) => (
                        <div key={report.id} className="report-item">
                            <div className="report-icon">
                                <FileText size={24} />
                            </div>
                            <div className="report-info">
                                <div className="report-title">{report.title}</div>
                                <div className="report-meta">
                                    <span className="meta-tag">{report.type}</span>
                                    <span>• {report.date}</span>
                                    <span>• {report.size}</span>
                                </div>
                            </div>
                            <div className="report-actions">
                                <button className="btn-icon" title="Download PDF" onClick={() => alert(`Download PDF: ${report.title}`)}>
                                    <FileIcon size={18} className="text-red" />
                                </button>
                                <button className="btn-icon" title="Download Excel" onClick={() => alert(`Download Excel: ${report.title}`)}>
                                    <FileSpreadsheet size={18} className="text-green" />
                                </button>
                                <button className="btn-download" onClick={() => alert(`Downloading ${report.title}...`)}>
                                    <Download size={16} /> Unduh
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom Report Generator Widget */}
            <div className="custom-report-widget">
                <div className="widget-content">
                    <h3>Buat Laporan Kustom</h3>
                    <p>Pilih indikator dan parameter spesifik untuk membuat laporan khusus sesuai kebutuhan instansi Anda.</p>
                    <button className="btn-secondary-block" onClick={() => alert("Membuka wizard pembuatan laporan kustom...")}>
                        Konfigurasi Laporan Kustom &rarr;
                    </button>
                </div>
                <div className="widget-image">
                    {/* Abstract illustration placeholder using CSS */}
                    <div className="abstract-chart">
                        <div className="bar b1"></div>
                        <div className="bar b2"></div>
                        <div className="bar b3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PelaporanPage;
