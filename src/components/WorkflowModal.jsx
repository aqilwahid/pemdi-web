import React from 'react';
import { X, CheckCircle, Circle, ArrowRight } from 'lucide-react';
import './WorkflowModal.css';

const WorkflowModal = ({ isOpen, onClose, title, steps, currentStep, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="modal-header">
                    <h3>{title}</h3>
                    <button className="close-btn" onClick={onClose}><X size={20} /></button>
                </div>

                {/* Steps Progress */}
                <div className="modal-steps">
                    {steps.map((step, index) => {
                        const isCompleted = index < currentStep;
                        const isCurrent = index === currentStep;

                        return (
                            <div key={index} className={`step-item ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}`}>
                                <div className="step-icon">
                                    {isCompleted ? <CheckCircle size={16} /> : <Circle size={16} />}
                                </div>
                                <span className="step-label">{step}</span>
                                {index < steps.length - 1 && <div className="step-line"></div>}
                            </div>
                        );
                    })}
                </div>

                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default WorkflowModal;
