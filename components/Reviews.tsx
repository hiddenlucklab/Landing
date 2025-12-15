import React from 'react';
import { REVIEWS } from '../constants';
import { Quote } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-beige-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 text-dark">
          실제 고객님들의 이야기
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div key={review.id} className="glass-card p-8 rounded-2xl relative hover:bg-white transition duration-300">
              <Quote className="absolute top-6 left-6 text-mint/30 transform scale-150" size={32} />
              <div className="relative z-10 pt-6">
                <p className="text-gray-700 leading-relaxed mb-6 font-serif italic text-lg">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mint to-peach opacity-80"></div>
                  <div>
                    <p className="text-sm font-bold text-dark">{review.author}</p>
                    <p className="text-xs text-gray-500">{review.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;