import React from 'react';
import { LOCATIONS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export const Locations: React.FC = () => {
  return (
    <section id="itinerary" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold uppercase tracking-wider text-sm">Il Viaggio</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mt-2">
            Le 3 Tappe dell'Itinerario
          </h2>
        </div>

        <div className="space-y-24">
          {LOCATIONS.map((loc, index) => (
            <div 
              key={loc.id} 
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <img 
                    src={loc.image} 
                    alt={loc.name} 
                    className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <span className="bg-brand-gold px-3 py-1 rounded text-xs font-bold uppercase mb-2 inline-block">Tappa {index + 1}</span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-serif font-bold text-brand-dark mb-4">{loc.name}</h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {loc.description}
                </p>
                
                <div className="bg-ice-50 p-6 rounded-2xl border border-ice-100">
                  <h4 className="font-bold text-brand-dark mb-4 flex items-center gap-2">
                    Cosa faremo qui:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {loc.activities.map((act, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};