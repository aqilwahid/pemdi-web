import React, { useState } from 'react';
import { Star, Users, ThumbsUp, MessageSquare, Send, Check, X } from 'lucide-react';
import './KepuasanPage.css';

const KepuasanPage = () => {
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
    const [reviews, setReviews] = useState([
        { id: 1, name: 'Budi Santoso', role: 'Masyarakat', date: '29 Jan 2024', rating: 5, comment: 'Sangat membantu untuk pengurusan surat pindah secara online. Hemat waktu!', helpful: 12 },
        { id: 2, name: 'Siti Aminah', role: 'Pegawai Kelurahan', date: '28 Jan 2024', rating: 4, comment: 'Tampilan dashboard bersih, tapi loading data penduduk kadang agak lambat di jam sibuk.', helpful: 8 },
        { id: 3, name: 'Ahmad Rizki', role: 'Developer', date: '25 Jan 2024', rating: 5, comment: 'Dokumentasi API lengkap, integrasi berjalan mulus.', helpful: 5 },
    ]);

    const [ratingStats, setRatingStats] = useState({
        average: 4.8,
        total: 1240,
        breakdown: [
            { label: 'Kemudahan Penggunaan', value: 4.9 },
            { label: 'Kecepatan Akses', value: 4.5 },
            { label: 'Kelengkapan Fitur', value: 4.7 },
            { label: 'Kualitas Pelayanan', value: 4.8 },
        ]
    });

    // Form State
    const [newReview, setNewReview] = useState({ rating: 0, comment: '', category: 'Umum' });

    const handleAddReview = () => {
        if (newReview.rating === 0) return alert("Mohon berikan rating bintang.");

        const review = {
            id: reviews.length + 1,
            name: 'Anda (Simulasi)',
            role: 'Masyarakat',
            date: 'Baru saja',
            rating: newReview.rating,
            comment: newReview.comment || 'Tidak ada komentar.',
            helpful: 0
        };

        setReviews([review, ...reviews]);
        setIsReviewModalOpen(false);
        setNewReview({ rating: 0, comment: '', category: 'Umum' });
        alert("Terima kasih! Ulasan Anda telah berhasil dikirim.");
    };

    return (
        <div className="kepuasan-container">
            {/* Header */}
            <div className="page-header">
                <div className="header-icon">
                    <Users size={32} />
                </div>
                <div className="header-text">
                    <h1>Kepuasan Pengguna</h1>
                    <p>Review Portal Layanan Digital Pemerintah</p>
                </div>
            </div>

            <div className="stats-section">
                {/* Main Rating Card */}
                <div className="rating-card main">
                    <div className="rating-number">{ratingStats.average}</div>
                    <div className="rating-stars">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={24} fill={i < Math.floor(ratingStats.average) ? "#F59E0B" : "none"} color="#F59E0B" />
                        ))}
                    </div>
                    <div className="total-reviews">dari {ratingStats.total.toLocaleString()} ulasan</div>
                </div>

                {/* Breakdown Card */}
                <div className="rating-card breakdown">
                    <h3>Komponen Penilaian</h3>
                    <div className="breakdown-list">
                        {ratingStats.breakdown.map((item, idx) => (
                            <div key={idx} className="breakdown-item">
                                <div className="breakdown-label">
                                    <span>{item.label}</span>
                                    <span>{item.value}</span>
                                </div>
                                <div className="progress-bar-bg">
                                    <div className="progress-bar-fill" style={{ width: `${(item.value / 5) * 100}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Reviews List Section */}
            <div className="reviews-section">
                <div className="section-header">
                    <h2>Ulasan Terbaru</h2>
                    <button className="btn-primary" onClick={() => setIsReviewModalOpen(true)}>
                        <MessageSquare size={16} /> Tulis Ulasan
                    </button>
                </div>

                <div className="reviews-list">
                    {reviews.map(review => (
                        <div key={review.id} className="review-card">
                            <div className="review-header">
                                <div className="reviewer-info">
                                    <div className="reviewer-avatar">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="reviewer-name">{review.name}</div>
                                        <div className="reviewer-role">{review.role}</div>
                                    </div>
                                </div>
                                <div className="review-meta">
                                    <div className="review-stars">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={14} fill={i < review.rating ? "#F59E0B" : "#e5e7eb"} color={i < review.rating ? "#F59E0B" : "#e5e7eb"} />
                                        ))}
                                    </div>
                                    <div className="review-date">{review.date}</div>
                                </div>
                            </div>
                            <div className="review-body">
                                <p>{review.comment}</p>
                            </div>
                            <div className="review-footer">
                                <button className="btn-action">
                                    <ThumbsUp size={14} /> Membantu ({review.helpful})
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Review Modal */}
            {isReviewModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content review-modal">
                        <div className="modal-header">
                            <h3>Tulis Ulasan Anda</h3>
                            <button className="btn-close" onClick={() => setIsReviewModalOpen(false)}>
                                <X size={20} />
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group center">
                                <label>Berikan Rating</label>
                                <div className="star-rating-input">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            size={32}
                                            className="star-btn"
                                            fill={star <= newReview.rating ? "#F59E0B" : "none"}
                                            color={star <= newReview.rating ? "#F59E0B" : "#cbd5e1"}
                                            onClick={() => setNewReview({ ...newReview, rating: star })}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Komentar</label>
                                <textarea
                                    placeholder="Ceritakan pengalaman Anda menggunakan layanan ini..."
                                    rows="4"
                                    value={newReview.comment}
                                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                                ></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn-secondary" onClick={() => setIsReviewModalOpen(false)}>Batal</button>
                            <button className="btn-primary" onClick={handleAddReview}>
                                <Send size={16} /> Kirim Ulasan
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default KepuasanPage;
