import React, { useState } from 'react';
import DashboardLayout from './components/DashboardLayout';
import DashboardContent from './components/DashboardContent';
import PortalLayanan from './components/PortalLayanan';
import PertukaranDataPage from './components/PertukaranDataPage';
import KepuasanPage from './components/KepuasanPage';
import KeamananSiberPage from './components/KeamananSiberPage';
import TeknologiDigitalPage from './components/TeknologiDigitalPage';
import SDMBudayaPage from './components/SDMBudayaPage';
// Deprecated imports removed

function App() {
  // Default to 'Kelola 20 Indikator' to match previous default state
  const [activePage, setActivePage] = useState('Kelola 20 Indikator');

  const renderContent = () => {
    switch (activePage) {
      case 'Portal Layanan Digital':
        return <PortalLayanan />;
      case 'Portal Data': // Was Pertukaran Data
        return <PertukaranDataPage />;
      case 'Keamanan Siber':
        return <KeamananSiberPage />;
      case 'Teknologi Digital':
        return <TeknologiDigitalPage />;
      case 'SDM & Budaya Digital':
        return <SDMBudayaPage />;
      case 'Kepuasan Pengguna':
        return <KepuasanPage />;
      case 'Dasbor PEMDI':
      default:
        // Currently Dasbor and Kelola Indikator use the same view
        return <DashboardContent setActivePage={setActivePage} />;
    }
  };

  return (
    <DashboardLayout activePage={activePage} setActivePage={setActivePage}>
      {renderContent()}
    </DashboardLayout>
  );
}

export default App;
