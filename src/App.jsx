import React, { useState } from 'react';
import DashboardLayout from './components/DashboardLayout';
import DashboardContent from './components/DashboardContent';
import PortalLayanan from './components/PortalLayanan';
import PertukaranDataPage from './components/PertukaranDataPage';
import KepuasanPage from './components/KepuasanPage';
// import DukunganPage from './components/DukunganPage'; // Deprecated
import PelaporanPage from './components/PelaporanPage';
import SettingsPage from './components/SettingsPage';

function App() {
  // Default to 'Kelola 20 Indikator' to match previous default state
  const [activePage, setActivePage] = useState('Kelola 20 Indikator');

  const renderContent = () => {
    switch (activePage) {
      case 'Portal Layanan Digital':
        return <PortalLayanan />;
      case 'Pertukaran Data':
        return <PertukaranDataPage />;
      case 'Kepuasan Pengguna':
        return <KepuasanPage />;
      case 'Pelaporan & Ekspor':
        return <PelaporanPage />;
      case 'Pengaturan & Akses':
        return <SettingsPage />;
      case 'Dasbor PEMDI':
      case 'Kelola 20 Indikator':
      default:
        // Currently Dasbor and Kelola Indikator use the same view
        return <DashboardContent />;
    }
  };

  return (
    <DashboardLayout activePage={activePage} setActivePage={setActivePage}>
      {renderContent()}
    </DashboardLayout>
  );
}

export default App;
