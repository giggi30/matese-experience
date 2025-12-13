import React from 'react';
import { ACCOMMODATIONS } from '../constants';
import { MapPin, Star, ExternalLink } from 'lucide-react';

export const Accommodation: React.FC = () => {
  return (
    <section id="sleep" className="py-20 bg-ice-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">
            Dove Dormire
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Abbiamo selezionato le migliori strutture per ogni tappa.
            Controlla la disponibilità direttamente su Booking per garantirti il miglior prezzo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACCOMMODATIONS.map((acc) => (
            <div key={acc.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={acc.image}
                  alt={acc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-blue-600 text-white text-sm font-bold px-2 py-1 rounded flex items-center gap-1">
                  {acc.rating} <span className="text-[10px] font-normal">/10</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-xs font-bold text-brand-gold uppercase tracking-wide">{acc.type}</span>
                    <h3 className="text-xl font-bold text-brand-dark">{acc.name}</h3>
                  </div>
                  <span className="text-gray-400 font-serif">{acc.priceLevel}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                  <MapPin className="w-4 h-4" />
                  {acc.distance}
                </div>

                <a
                  href={acc.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2 bg-blue-50 text-blue-700 font-semibold rounded-lg text-center hover:bg-blue-100 transition-colors flex items-center justify-center gap-2"
                >
                  Visualizza su Booking <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};