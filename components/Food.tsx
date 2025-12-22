import React from 'react';

export const Food: React.FC = () => {
  return (
    <section id="sapori-matese" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-6">
              I Sapori del Matese
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              L'inverno qui ha il sapore della convivialità. I nostri pacchetti includono soste gastronomiche
              in locali selezionati che offrono solo prodotti a Km0.
            </p>
            <ul className="space-y-4">
              {[
                { title: "Caciocavallo Impiccato", desc: "Formaggio locale fuso lentamente sulla brace, con bruschette." },
                { title: "Arrosto di Vitello con provola e funghi porcini", desc: "Il calore del bosco in un piatto." },
                { title: "Tagliatelle con porcini, salsiccia e tartufo del Matese", desc: "L'oro nero delle nostre terre, accompagnato da tagliatelle locali." }
              ].map((item, i) => (
                <li key={i} className="border-l-4 border-brand-gold pl-4">
                  <h4 className="font-bold text-brand-dark text-lg">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <div className="mt-8">
              <img
                src="immagini/caciocavallo.jpeg"
                className="rounded-2xl object-cover w-full h-80 shadow-lg hover:scale-[1.02] transition-transform duration-500"
                alt="Caciocavallo Impiccato"
              />
            </div>
            <div className="space-y-4">
              <img
                src="immagini/arrosto di vitello.jpg"
                className="rounded-2xl object-cover w-full h-40 shadow-lg hover:scale-[1.02] transition-transform duration-500"
                alt="vitello arrosto"
              />
              <img
                src="immagini/tagliatelle.jpg"
                className="rounded-2xl object-cover w-full h-40 shadow-lg hover:scale-[1.02] transition-transform duration-500"
                alt="Tartufo del Matese"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};