import React from 'react';
import { Search, Bell, HelpCircle, ChevronDown, User } from 'lucide-react';
import './Header.css';

const Header = () => {
    return (
        <header className="header-container">
            {/* Search */}
            <div className="search-bar">
                <Search size={18} className="search-icon" />
                <input type="text" placeholder="Seeked" />
            </div>

            {/* Actions */}
            <div className="header-actions">
                <button className="icon-btn">
                    <HelpCircle size={20} />
                </button>
                <button className="icon-btn notification">
                    <Bell size={20} />
                    <span className="badge">2</span>
                </button>

                {/* User Profile */}
                <div className="user-profile">
                    <div className="user-info-btn">
                        <span style={{ color: 'red', fontWeight: 'bold' }}>▶</span>
                        <span className="username">UBITUM</span>
                        <ChevronDown size={14} />
                    </div>
                    <div className="avatar">
                        <img src="https://inixindojogja.co.id/wp-content/uploads/2020/01/Andi-Yuniantoro.jpg" alt="User" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
