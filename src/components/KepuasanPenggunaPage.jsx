import React, { useState } from 'react';
import { Star, MessageSquare, ThumbsUp, Send, User, ChevronLeft, Filter } from 'lucide-react';
import './KepuasanPenggunaPage.css';

const KepuasanPenggunaPage = () => {
    // Mock Data: Services
    const services = [
        { id: 1, name: 'Layanan Kesehatan (Puskesmas)', rating: 4.5, count: 128, icon: '🏥', category: 'Kesehatan' },
        { id: 2, name: 'Administrasi Kependudukan', rating: 4.2, count: 345, icon: '🆔', category: 'Kependudukan' },
        { id: 3, name: 'Perizinan Usaha (OSS)', rating: 3.8, count: 89, icon: '💼', category: 'Perizinan' },
        { id: 4, name: 'Layanan Pendidikan', rating: 4.7, count: 210, icon: '🎓', category: 'Pendidikan' },
        { id: 5, name: 'Bantuan Sosial', rating: 4.0, count: 156, icon: '🤝', category: 'Sosial' },
        { id: 6, name: 'Layanan Darurat 112', rating: 4.8, count: 56, icon: '🚑', category: 'Darurat' },
        { id: 7, name: 'Pajak Daerah', rating: 3.5, count: 98, icon: '💰', category: 'Keuangan' },
        { id: 8, name: 'Kebersihan & Taman', rating: 4.1, count: 77, icon: '🌳', category: 'Lingkungan' }
    ];

    // Mock Data: Reviews (Global for now, filtered by view)
    const [reviews, setReviews] = useState([
        { id: 101, user: 'Budi Santoso', serviceId: 1, serviceName: 'Layanan Kesehatan (Puskesmas)', rating: 5, comment: 'Pelayanan sangat cepat dan ramah. Antrian online sangat membantu!', date: '2 hari yang lalu', likes: 12 },
        { id: 102, user: 'Siti Aminah', serviceId: 2, serviceName: 'Administrasi Kependudukan', rating: 4, comment: 'Proses urus KTP lancar, tapi ruang tunggu agak panas.', date: '3 hari yang lalu', likes: 5 },
        { id: 103, user: 'Anonim', serviceId: 3, serviceName: 'Perizinan Usaha (OSS)', rating: 3, comment: 'Sistem sering down saat jam kerja. Mohon diperbaiki.', date: '1 minggu yang lalu', likes: 8 },
        { id: 104, user: 'Rina', serviceId: 1, serviceName: 'Layanan Kesehatan (Puskesmas)', rating: 4, comment: 'Dokter ramah, tapi farmasi agak lama antri obat.', date: '3 hari yang lalu', likes: 2 }
    ]);

    const [viewMode, setViewMode] = useState('list'); // 'list' or 'detail'
    const [selectedService, setSelectedService] = useState(null);

    // Form State
    const [inputRating, setInputRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [comment, setComment] = useState('');

    const filteredReviews = selectedService
        ? reviews.filter(r => r.serviceId === selectedService.id)
        : [];

    const handleServiceClick = (service) => {
        setSelectedService(service);
        setViewMode('detail');
        // Reset form
        setInputRating(0);
        setComment('');
    };

    const handleBack = () => {
        setSelectedService(null);
        setViewMode('list');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedService || !inputRating || !comment) {
            alert("Mohon lengkapi rating dan komentar.");
            return;
        }

        const newReview = {
            id: Date.now(),
            user: 'Warga Digital',
            serviceId: selectedService.id,
            serviceName: selectedService.name,
            rating: inputRating,
            comment: comment,
            date: 'Baru saja',
            likes: 0
        };

        setReviews([newReview, ...reviews]);

        setInputRating(0);
        setComment('');
        alert("Terima kasih! Review Anda telah dikirim.");
    };

    return (
        <div className="satisfaction-page">
            {/* Header */}
            <header className="sp-header">
                <div>
                    <h1>Kepuasan Pengguna</h1>
                    <p>Suara warga untuk pelayanan publik yang lebih baik.</p>
                </div>
            </header>

            <div className="sp-content-v2">
                {/* VIEW: SERVICE GRID LIST */}
                {viewMode === 'list' && (
                    <div className="service-grid-view">
                        <div className="sg-header">
                            <h2>Daftar Layanan Publik</h2>
                            <div className="sg-filter">
                                <Filter size={16} /> Filter Kategori
                            </div>
                        </div>
                        <div className="services-grid">
                            {services.map(s => (
                                <div key={s.id} className="service-card-v2" onClick={() => handleServiceClick(s)}>
                                    <div className="sc-icon-lg">{s.icon}</div>
                                    <div className="sc-info">
                                        <h3>{s.name}</h3>
                                        <span className="sc-cat">{s.category}</span>
                                    </div>
                                    <div className="sc-stats">
                                        <div className="stat-rating">
                                            <Star size={18} fill="#F59E0B" stroke="#F59E0B" />
                                            <span>{s.rating}</span>
                                        </div>
                                        <span className="stat-reviews">{s.count} Ulasan</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* VIEW: SERVICE DETAIL & REVIEWS */}
                {viewMode === 'detail' && selectedService && (
                    <div className="service-detail-view">
                        <button className="btn-back-link" onClick={handleBack}>
                            <ChevronLeft size={20} /> Kembali ke Daftar Layanan
                        </button>

                        <div className="sd-layout">
                            {/* Left: Info & Form */}
                            <div className="sd-left">
                                <div className="sd-header-card">
                                    <div className="sd-icon">{selectedService.icon}</div>
                                    <div>
                                        <h2>{selectedService.name}</h2>
                                        <div className="sd-badge rating">
                                            <Star size={16} fill="white" stroke="white" /> {selectedService.rating} / 5.0
                                        </div>
                                    </div>
                                </div>

                                <div className="review-form-card">
                                    <h3><MessageSquare size={18} /> Berikan Ulasan Anda</h3>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label>Rating Pelayanan</label>
                                            <div className="star-input-lg">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <Star
                                                        key={star}
                                                        size={32}
                                                        className="star-btn"
                                                        fill={(hoverRating || inputRating) >= star ? "#F59E0B" : "none"}
                                                        stroke={(hoverRating || inputRating) >= star ? "#F59E0B" : "#cbd5e1"}
                                                        onMouseEnter={() => setHoverRating(star)}
                                                        onMouseLeave={() => setHoverRating(0)}
                                                        onClick={() => setInputRating(star)}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label>Komentar</label>
                                            <textarea
                                                rows="4"
                                                className="sp-textarea"
                                                placeholder="Bagikan pengalaman Anda..."
                                                value={comment}
                                                onChange={(e) => setComment(e.target.value)}
                                            ></textarea>
                                        </div>

                                        <button type="submit" className="btn-submit">
                                            <Send size={16} /> Kirim Ulasan
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* Right: Reviews List */}
                            <div className="sd-right">
                                <h3>Ulasan Pengguna ({filteredReviews.length})</h3>
                                {filteredReviews.length > 0 ? (
                                    <div className="reviews-feed">
                                        {filteredReviews.map(review => (
                                            <div key={review.id} className="review-card">
                                                <div className="rc-header">
                                                    <div className="rc-user">
                                                        <div className="user-avatar"><User size={18} /></div>
                                                        <div>
                                                            <span className="user-name">{review.user}</span>
                                                            <span className="review-date">{review.date}</span>
                                                        </div>
                                                    </div>
                                                    <div className="rc-rating">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                size={14}
                                                                fill={i < review.rating ? "#F59E0B" : "none"}
                                                                stroke={i < review.rating ? "#F59E0B" : "#cbd5e1"}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                                <p className="rc-comment">"{review.comment}"</p>
                                                <div className="rc-footer">
                                                    <button className="btn-like">
                                                        <ThumbsUp size={14} /> {review.likes}
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="empty-reviews">
                                        <p>Belum ada ulasan untuk layanan ini. Jadilah yang pertama!</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default KepuasanPenggunaPage;
