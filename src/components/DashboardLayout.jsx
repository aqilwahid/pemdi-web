import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { LayoutDashboard } from 'lucide-react';

const DashboardLayout = ({ children, activePage, setActivePage }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="layout-container">
      {/* Sidebar Wrapper */}
      <aside className={`sidebar-wrapper ${isSidebarOpen ? 'open' : ''}`}>
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
      </aside>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>
      )}

      {/* Main Area */}
      <div className="main-wrapper">
        <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="content-area">
          {children}
        </main>
      </div>

      <style>{`
        .layout-container {
          display: flex;
          height: 100vh;
          overflow: hidden;
          position: relative;
        }
        
        /* Desktop: Sidebar is static relative to main wrapper */
        .sidebar-wrapper {
          width: 280px;
          background-color: var(--bg-sidebar);
          border-right: 1px solid #e5e7eb;
          overflow-y: auto;
          flex-shrink: 0;
          height: 100%;
          transition: transform 0.3s ease;
          z-index: 50;
        }

        .main-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          height: 100vh;
          overflow: hidden;
          width: 100%; /* Ensure full width */
        }

        .content-area {
          flex: 1;
          overflow-y: auto;
          background-color: #f8fafc; /* bg-body */
          padding: 20px;
        }
        
        /* Mobile Overlay */
        .sidebar-overlay {
            display: none;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .sidebar-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            transform: translateX(-100%); /* Hidden by default */
            box-shadow: 2px 0 10px rgba(0,0,0,0.1);
          }

          .sidebar-wrapper.open {
            transform: translateX(0); /* Show when open */
          }
          
          .sidebar-overlay {
            display: block;
            position: fixed;
            top: 0; 
            left: 0;
            right: 0; 
            bottom: 0;
            background: rgba(0,0,0,0.5);
            z-index: 40;
          }
        }
      `}</style>
    </div>
  );
};

export default DashboardLayout;
