import React, { useState } from 'react';
import { User, Shield, Lock, Bell, Globe, Save, Trash2, Plus } from 'lucide-react';
import './SettingsPage.css';

const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState('users');

    const users = [
        { id: 1, name: 'Andi Yuniantoro', email: 'andi@inixindo.co.id', role: 'Super Admin', status: 'Active' },
        { id: 2, name: 'Budi Santoso', email: 'budi.dev@pemdi.go.id', role: 'Developer', status: 'Active' },
        { id: 3, name: 'Siti Aminah', email: 'siti.admin@pemdi.go.id', role: 'Viewer', status: 'Inactive' },
    ];

    const roles = [
        { id: 'admin', name: 'Super Admin', desc: 'Full access to all system features' },
        { id: 'editor', name: 'Editor', desc: 'Can edit content but cannot change system settings' },
        { id: 'viewer', name: 'Viewer', desc: 'Read-only access' },
    ];

    return (
        <div className="settings-container">
            <div className="settings-header">
                <h1>Pengaturan & Akses</h1>
                <p>Kelola pengguna, peran, dan preferensi sistem PEMDI.</p>
            </div>

            <div className="settings-layout">
                {/* Sidebar Settings Nav */}
                <div className="settings-nav">
                    <button
                        className={`nav-btn ${activeTab === 'users' ? 'active' : ''}`}
                        onClick={() => setActiveTab('users')}
                    >
                        <User size={18} /> Manajemen Pengguna
                    </button>
                    <button
                        className={`nav-btn ${activeTab === 'roles' ? 'active' : ''}`}
                        onClick={() => setActiveTab('roles')}
                    >
                        <Shield size={18} /> Peran & Izin
                    </button>
                    <button
                        className={`nav-btn ${activeTab === 'security' ? 'active' : ''}`}
                        onClick={() => setActiveTab('security')}
                    >
                        <Lock size={18} /> Keamanan Sistem
                    </button>
                    <button
                        className={`nav-btn ${activeTab === 'notifications' ? 'active' : ''}`}
                        onClick={() => setActiveTab('notifications')}
                    >
                        <Bell size={18} /> Notifikasi
                    </button>
                </div>

                {/* Content Area */}
                <div className="settings-content">
                    {activeTab === 'users' && (
                        <div className="tab-pane">
                            <div className="pane-header">
                                <h3>Daftar Pengguna</h3>
                                <button className="btn-primary-sm"><Plus size={16} /> Tambah User</button>
                            </div>
                            <table className="settings-table">
                                <thead>
                                    <tr>
                                        <th>Nama</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Status</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr key={user.id}>
                                            <td className="fw-500">{user.name}</td>
                                            <td className="text-muted">{user.email}</td>
                                            <td><span className="badge-role">{user.role}</span></td>
                                            <td>
                                                <span className={`status-dot ${user.status.toLowerCase()}`}></span>
                                                {user.status}
                                            </td>
                                            <td>
                                                <button className="btn-icon-sm text-red"><Trash2 size={16} /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeTab === 'roles' && (
                        <div className="tab-pane">
                            <div className="pane-header">
                                <h3>Konfigurasi Role</h3>
                            </div>
                            <div className="roles-list">
                                {roles.map(role => (
                                    <div key={role.id} className="role-item">
                                        <div className="role-icon">
                                            <Shield size={24} />
                                        </div>
                                        <div className="role-info">
                                            <h4>{role.name}</h4>
                                            <p>{role.desc}</p>
                                        </div>
                                        <button className="btn-secondary-sm">Edit Izin</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'security' && (
                        <div className="tab-pane">
                            <h3>Keamanan</h3>
                            <div className="form-section">
                                <div className="form-group">
                                    <label>Kebijakan Password</label>
                                    <select>
                                        <option>Standar (Min 8 Karakter)</option>
                                        <option>Ketat (Simbol + Angka + Huruf Besar)</option>
                                    </select>
                                </div>
                                <div className="form-group checkbox-row">
                                    <input type="checkbox" defaultChecked />
                                    <label>Aktifkan 2FA untuk Admin</label>
                                </div>
                                <div className="form-group checkbox-row">
                                    <input type="checkbox" defaultChecked />
                                    <label>Log Aktivitas Login</label>
                                </div>
                                <button className="btn-primary-sm mt-4"><Save size={16} /> Simpan Perubahan</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
