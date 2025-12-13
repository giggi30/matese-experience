import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="immagini/homepage sfondo.jpeg"
          alt="Matese Inverno"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/40 to-brand-dark/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="mb-6 inline-block animate-fade-in-up">
        </div>
        
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up delay-100">
          Vivi l’inverno sul Matese:<br />
          <span className="text-brand-gold">Natura, Neve e Convivialità</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200">
          Pacchetti di 1, 2 o 3 giorni tra Bocca della Selva, Lago del Matese e Campitello Matese.
          Un'esperienza organizzata, semplice e indimenticabile.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <a
            href="#packages"
            className="px-8 py-4 bg-brand-gold hover:bg-yellow-600 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-brand-gold/30"
          >
            Scopri i pacchetti <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#itinerary"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-bold text-lg transition-all"
          >
            Guarda l'itinerario
          </a>
        </div>
      </div>

    </section>
  );
};