import React, { useState } from 'react';
import { FileText, ChevronRight, Upload, Check } from 'lucide-react';
import WorkflowModal from './WorkflowModal';
import { indicatorsData } from '../data/indicators';
import './IndicatorsTable.css';

const IndicatorsTable = () => {
    // Initialize state with imported data
    const [indicators, setIndicators] = useState(indicatorsData);

    const [isTableView, setIsTableView] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentStep, setModalStep] = useState(0);
    const [selectedIndicator, setSelectedIndicator] = useState(null);
    const [workflowStatus, setWorkflowStatus] = useState(''); // 'validating', 'success'

    // Workflow Steps for Activity A (Evidence Upload)
    const activityASteps = [
        "Upload Evidence",
        "Tagging & Meta",
        "Auto-Validasi",
        "Review Admin",
        "Verified"
    ];

    const toggleView = () => {
        setIsTableView(!isTableView);
    };

    const handleEvidenceClick = (item) => {
        setSelectedIndicator(item);
        setModalStep(0);
        setWorkflowStatus('');
        setIsModalOpen(true);
    };

    const updateIndicatorStatus = (id) => {
        setIndicators(prev => prev.map(item =>
            item.id === id ? { ...item, status: 'Implemented', progress: 100 } : item
        ));
    };

    const handleNextStep = () => {
        if (currentStep < activityASteps.length - 1) {
            setModalStep(currentStep + 1);

            // Simulate logic for specific steps
            if (currentStep === 1) {
                // Moving to Validation
                setWorkflowStatus('validating');
                // Simulate delay
                setTimeout(() => {
                    setWorkflowStatus('success');
                }, 2000);
            }

            // If moving to Final Step (Verified), update the actual indicator status
            if (currentStep === 3) { // 3 is Review Admin, Next is 4 (Verified)
                if (selectedIndicator) {
                    updateIndicatorStatus(selectedIndicator.id);
                }
            }

        } else {
            setIsModalOpen(false);
        }
    };

    const getStatusClass = (status) => {
        switch (status) {
            case 'Implemented': return 'status-badge implemented';
            case 'In Progress': return 'status-badge in-progress';
            case 'Planned': return 'status-badge planned';
            default: return 'status-badge';
        }
    };

    return (
        <div className="indicators-table-container">
            <div className="table-header-actions">
                <h2>Status 20 Indikator</h2>
                <button className="btn-toggle" onClick={toggleView}>
                    {isTableView ? "Switch to Grid" : "Switch to Table"}
                </button>
            </div>

            <div className={`indicators-content ${isTableView ? 'list-view' : 'grid-view'}`}>
                {indicators.map((item) => (
                    <div key={item.id} className="indicator-card">
                        <div className="indicator-header">
                            <div className="indicator-title">
                                <span className="id-num">{item.id}.</span>
                                <span>{item.name}</span>
                            </div>
                            <span className={getStatusClass(item.status)}>{item.status}</span>
                        </div>

                        <div className="progress-bar-container">
                            <div className="progress-bar-fill" style={{ width: `${item.progress}%` }}></div>
                        </div>
                        <div className="progress-text">{item.progress}% Completed</div>

                        <div className="evidence-section">
                            <h4>Evidence:</h4>
                            {item.evidence.length > 0 ? (
                                <ul className="evidence-list">
                                    {item.evidence.map((ev, index) => (
                                        <li key={index} className="evidence-item" onClick={() => alert(`Opening ${ev.name}`)}>
                                            <FileText size={14} className="icon-blue" />
                                            <span className="ev-name">{ev.name}</span>
                                            {ev.status === 'Terverifikasi' && <Check size={14} className="icon-green" />}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div className="no-evidence">Belum ada evidence</div>
                            )}
                        </div>

                        <div className="action-footer">
                            <button className="btn-primary-outline" onClick={() => handleEvidenceClick(item)}>
                                <Upload size={14} /> Lampirkan Evidence
                            </button>
                            <button className="btn-text">
                                Detail <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Workflow Modal for Activity A */}
            <WorkflowModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={`Upload Evidence - ${selectedIndicator?.name}`}
                steps={activityASteps}
                currentStep={currentStep}
            >
                <div className="activity-a-content">
                    {currentStep === 0 && (
                        <div className="step-content upload-step">
                            <div className="upload-zone">
                                <Upload size={48} className="text-gray-400" />
                                <p>Drag & drop file atau klik untuk upload</p>
                                <button className="btn-secondary" onClick={() => alert('Simulasi: File dipilih')}>Pilih File</button>
                            </div>
                        </div>
                    )}
                    {currentStep === 1 && (
                        <div className="step-content tagging-step">
                            <div className="form-group">
                                <label>Nama Dokumen</label>
                                <input type="text" defaultValue={selectedIndicator?.name ? `Evidence for ${selectedIndicator.name}` : ''} />
                            </div>
                            <div className="form-group">
                                <label>Tipe Evidence</label>
                                <select>
                                    <option>Kebijakan (SK/Pergub)</option>
                                    <option>Laporan Teknis</option>
                                    <option>Dokumentasi Sistem</option>
                                </select>
                            </div>
                        </div>
                    )}
                    {currentStep === 2 && (
                        <div className="step-content validation-step">
                            {workflowStatus === 'validating' ? (
                                <div className="loading-state">
                                    <div className="spinner"></div>
                                    <p>Sistem sedang memvalidasi format dan metadata...</p>
                                </div>
                            ) : (
                                <div className="success-state">
                                    <Check size={48} className="text-green-500" />
                                    <p>Validasi Otomatis Berhasil!</p>
                                </div>
                            )}
                        </div>
                    )}
                    {currentStep === 3 && (
                        <div className="step-content review-step">
                            <p>Menunggu persetujuan Admin PEMDI...</p>
                            <div className="admin-simulation">
                                <small>*Simulasi: Klik Lanjut untuk auto-approve oleh Admin*</small>
                            </div>
                        </div>
                    )}
                    {currentStep === 4 && (
                        <div className="step-content verified-step">
                            <h4 className="text-green-600">Terverifikasi</h4>
                            <p>Evidence telah diterima dan status indikator diperbarui.</p>
                        </div>
                    )}

                    <div className="modal-actions">
                        <button className="btn-text" onClick={() => setIsModalOpen(false)}>Batal</button>
                        <button className="btn-primary" onClick={handleNextStep}>
                            {currentStep === activityASteps.length - 1 ? "Tutup" : "Lanjut"}
                        </button>
                    </div>
                </div>
            </WorkflowModal>
        </div>
    );
};

export default IndicatorsTable;
