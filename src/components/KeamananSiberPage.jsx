import React from 'react';
import { ShieldCheck } from 'lucide-react';

const KeamananSiberPage = () => {
    return (
        <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
            <ShieldCheck size={64} style={{ marginBottom: '1rem', color: '#3b82f6' }} />
            <h1 style={{ color: '#1e293b' }}>Keamanan Siber</h1>
            <p>Halaman ini sedang dalam pengembangan.</p>
            <p>Akan memuat informasi terkait indeks keamanan informasi (KAMI), insiden siber, dan audit keamanan.</p>
        </div>
    );
};

export default KeamananSiberPage;
