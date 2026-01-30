import React from 'react';
import './MaturityOverview.css';

const MaturityOverview = () => {
    return (
        <div className="overview-card">
            <div className="card-header">
                <h2>Dashboard Maturitas PEMDI</h2>
                <button className="close-btn">×</button>
            </div>

            <div className="stats-grid">
                {/* Main Score */}
                <div className="stat-circle-box">
                    <div className="progress-ring-container">
                        <div className="progress-ring" style={{ '--p': 53, '--c': '#F59E0B' }}></div>
                        <div className="score-text">
                            <span className="big-score">53</span>
                            <span className="small-score">/100</span>
                            <span className="label">Progress</span>
                        </div>
                    </div>
                </div>

                {/* Level Trend */}
                <div className="stat-trend-box">
                    <div className="status-badge-row">
                        <span className="status-badge in-progress">In Progress</span>
                    </div>
                    <div className="chart-placeholder">
                        <div className="chart-line"></div>
                        <span className="chart-label">Level</span>
                    </div>

                    <div className="progress-bar-row">
                        <div className="progress-info">
                            <span>Bukti/Progress: Total 2025</span>
                            <span className="percentage">60%</span>
                        </div>
                        <div className="progress-track">
                            <div className="progress-fill" style={{ width: '60%' }}></div>
                        </div>
                    </div>
                </div>

                {/* Pie Chart (Simulated) */}
                <div className="stat-pie-box">
                    <div className="pie-container">
                        <div className="pie-chart"></div> {/* CSS Conic Gradient Pie */}
                    </div>
                    <div className="pie-labels">
                        <span>A. Tata Kelola</span>
                        <span>B. Penyelenggara</span>
                        <span>C. Data</span>
                        <span>E. Keamanan</span>
                        <span>E. Teknologi</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MaturityOverview;
