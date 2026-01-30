import React from 'react';
import MaturityOverview from './MaturityOverview';
import IndicatorsTable from './IndicatorsTable';
import RightSidebar from './RightSidebar';
import './DashboardContent.css';

const DashboardContent = ({ setActivePage }) => {
    return (
        <div className="dashboard-grid">
            {/* Left Column (Main Stats) */}
            <div className="left-column">
                <MaturityOverview />
                <IndicatorsTable />
            </div>

            {/* Right Column (Side Stats) */}
            <div className="right-column">
                <RightSidebar setActivePage={setActivePage} />
            </div>
        </div>
    );
};

export default DashboardContent;
