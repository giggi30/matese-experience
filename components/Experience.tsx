import React from 'react';
import { CalendarCheck, Users, Map } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-ice-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">
            Un'Esperienza Senza Pensieri
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Abbiamo progettato un viaggio modulare in 3 tappe fisse. Non devi preoccuparti dell'organizzazione:
            scegli la durata e goditi il Matese. Ideale per chi cerca un'avventura autentica ma comoda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Map,
              title: "Itinerario Ottimizzato",
              desc: "Tre tappe strategiche per vedere il meglio del Matese senza stressare gli spostamenti."
            },
            {
              icon: Users,
              title: "Ideale per Gruppi",
              desc: "Attività pensate per la convivialità: dai giochi sulla neve alle grandi tavolate."
            },
            {
              icon: CalendarCheck,
              title: "Tutto Organizzato",
              desc: "Dalle attività ai suggerimenti per dormire, abbiamo già selezionato il meglio per te."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-ice-100 text-center">
              <div className="w-16 h-16 bg-ice-100 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};