import React from 'react';
import { PACKAGES, GROUP_PACKAGE } from '../constants';
import { Check, Star } from 'lucide-react';

export const Packages: React.FC = () => {
  return (
    <section id="packages" className="py-20 bg-brand-dark text-white relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Scegli la tua Experience</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Pacchetti chiari e tutto incluso per goderti solo il meglio del Matese.
          </p>
        </div>

        {/* Standard Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-gray-800/50 backdrop-blur-sm border ${pkg.highlight ? 'border-brand-gold ring-2 ring-brand-gold/20' : 'border-gray-700'} rounded-2xl p-8 flex flex-col hover:transform hover:-translate-y-2 transition-all duration-300`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-gold text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                  PIÙ SCELTO
                </div>
              )}
              <div className="mb-6">
                <span className="text-gray-400 text-sm uppercase tracking-wide">{pkg.subtitle}</span>
                <h3 className="text-2xl font-bold mt-1 mb-2">{pkg.title}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{pkg.price}</span>
                  <span className="text-gray-400">/persona</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <Check className="w-5 h-5 text-brand-gold shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-bold transition-colors ${pkg.highlight ? 'bg-brand-gold hover:bg-yellow-600 text-white' : 'bg-white text-brand-dark hover:bg-gray-100'}`}>
                Scegli Pacchetto
              </button>
            </div>
          ))}
        </div>

        {/* Group Special Section */}
        <div id="groups" className="relative rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl group scroll-mt-32">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="immagini/pacchetto natale.jpeg"
              alt="Natale sul Matese"
              className="w-full h-[500px] object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-emerald-900/80 mix-blend-multiply"></div>
          </div>


          <div className="absolute inset-0 flex items-center justify-center opacity-10 z-0 pointer-events-none">
            <Star className="w-96 h-96 text-white rotate-12" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="inline-block bg-teal-500/20 text-teal-300 font-bold px-3 py-1 rounded-full text-sm mb-4 backdrop-blur-sm border border-teal-500/30">
                TREND NATALE 2024
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
                {GROUP_PACKAGE.title}
              </h3>
              <p className="text-teal-50 text-lg mb-6 max-w-lg">
                Siete un gruppo di 8-20 persone? Abbiamo creato l'esperienza definitiva per divertirsi insieme.
                Prezzi agevolati, attività esclusive e zero stress organizzativo.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {GROUP_PACKAGE.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-teal-50 font-medium">
                    <div className="w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_10px_rgba(45,212,191,0.5)]"></div>
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center min-w-[280px] shadow-xl">
              <p className="text-sm text-teal-100 mb-2">A partire da</p>
              <p className="text-4xl font-bold text-white mb-6">€39<span className="text-lg font-normal text-teal-200">/persona</span></p>
              <button className="w-full py-3 bg-white text-teal-900 font-bold rounded-xl hover:bg-teal-50 transition-colors shadow-lg">
                Richiedi Disponibilità
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};