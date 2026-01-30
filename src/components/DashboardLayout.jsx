import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { LayoutDashboard } from 'lucide-react';

const DashboardLayout = ({ children, activePage, setActivePage }) => {
  return (
    <div className="layout-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
      </aside>

      {/* Main Area */}
      <div className="main-wrapper">
        <Header />
        <main className="content-area">
          {children}
        </main>
      </div>

      <style>{`
        .layout-container {
          display: grid;
          grid-template-columns: 260px 1fr;
          height: 100vh;
          overflow: hidden;
        }
        
        .sidebar {
          background-color: var(--bg-sidebar);
          border-right: 1px solid #e5e7eb;
          overflow-y: auto;
        }

        .main-wrapper {
          display: flex;
          flex-direction: column;
          height: 100vh;
          overflow: hidden;
        }

        .content-area {
          flex: 1;
          overflow-y: auto;
          background-color: var(--bg-body);
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

export default DashboardLayout;
