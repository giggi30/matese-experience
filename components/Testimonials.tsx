import React from 'react';
import { REVIEWS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold">Cosa dicono di noi</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-gray-800 p-8 rounded-2xl relative">
              <Quote className="w-10 h-10 text-brand-gold/20 absolute top-6 right-6" />
              <div className="flex text-brand-gold mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-gray-300 italic mb-6">"{review.text}"</p>
              <div>
                <p className="font-bold text-white">{review.author}</p>
                <p className="text-xs text-gray-500 uppercase">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};