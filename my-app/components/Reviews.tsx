"use client";

import { useState } from 'react';

export default function Reviews({ smjestajId, rating, totalReviews }: { smjestajId: number, rating: number, totalReviews: number }) {
    const [showReviewForm, setShowReviewForm] = useState(false);
    const [newReview, setNewReview] = useState({ rating: 5, comment: '' });

    // Dummy recenzije
    const reviews = [
        { id: 1, name: 'Luka', date: 'Listopad 2024', comment: 'Fantastičan smještaj! Lokacija je odlična, a domaćin je bio jako ljubazan i uslužan. Svakako preporučujem.', rating: 5, avatar: 'L' },
        { id: 2, name: 'Mia', date: 'Kolovoz 2024', comment: 'Prekrasno uređeno i jako čisto. Sve je bilo onako kako je prikazano na slikama. Vratit ćemo se sigurno.', rating: 5, avatar: 'M' },
        { id: 3, name: 'Ivan', date: 'Srpanj 2024', comment: 'Sve je bilo super, osim što je Wi-Fi povremeno bio spor. Ali osim toga, odličan boravak!', rating: 4, avatar: 'I' },
        { id: 4, name: 'Ana', date: 'Svibanj 2024', comment: 'Savršeno mjesto za odmor. Mirno, tiho i jako ugodno.', rating: 5, avatar: 'A' }
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Ovdje bi išla logika za slanje recenzije na backend
        alert('Recenzija poslana! Hvala vam.');
        setShowReviewForm(false);
        setNewReview({ rating: 5, comment: '' });
    };

    return (
        <div className="py-8" id="recenzije">
            <div className="flex items-center gap-2 mb-8 border-t border-gray-200 pt-8">
                <span className="text-yellow-500 text-2xl">★</span>
                <h2 className="text-2xl font-extrabold text-gray-900">{rating} • {totalReviews} recenzija</h2>
            </div>

            {/* Grid recenzija */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mb-8">
                {reviews.map(review => (
                    <div key={review.id} className="flex flex-col gap-3">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-800 text-lg">
                                {review.avatar}
                            </div>
                            <div>
                                <h4 className="font-extrabold text-gray-900">{review.name}</h4>
                                <p className="text-sm text-gray-500 font-medium">{review.date}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mb-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <span key={i} className={`text-sm ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}>★</span>
                            ))}
                        </div>
                        <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                    </div>
                ))}
            </div>

            {/* Gumb za formu */}
            <div className="mt-6">
                {!showReviewForm ? (
                    <button
                        onClick={() => setShowReviewForm(true)}
                        className="border-2 border-gray-900 text-gray-900 font-bold px-6 py-3 rounded-xl hover:bg-gray-50 transition"
                    >
                        Napiši recenziju
                    </button>
                ) : (
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mt-4 max-w-2xl">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Kako vam je bilo?</h3>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Ocjena</label>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setNewReview({ ...newReview, rating: star })}
                                            className={`text-2xl ${star <= newReview.rating ? 'text-yellow-500' : 'text-gray-300'} hover:scale-110 transition-transform`}
                                        >
                                            ★
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Vaš komentar</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={newReview.comment}
                                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                                    className="w-full border border-gray-300 rounded-xl p-3 text-gray-900 bg-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                    placeholder="Podijelite svoje iskustvo s ovim smještajem..."
                                ></textarea>
                            </div>
                            <div className="flex gap-3 mt-2">
                                <button type="submit" className="bg-gray-900 text-white font-bold px-6 py-2 rounded-xl hover:bg-gray-800 transition">
                                    Pošalji
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowReviewForm(false)}
                                    className="border border-gray-300 text-gray-700 font-bold px-6 py-2 rounded-xl hover:bg-gray-100 transition"
                                >
                                    Odustani
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}
