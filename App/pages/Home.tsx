import React from 'react';
import { Hero } from '../../components/Hero';
import { Experience } from '../../components/Experience';
import { Locations } from '../../components/Locations';
import { Packages } from '../../components/Packages';
import { Accommodation } from '../../components/Accommodation';
import { Food } from '../../components/Food';
import { Testimonials } from '../../components/Testimonials';

export const Home: React.FC = () => {
    return (
        <main>
            <Hero />
            <Experience />
            <Locations />
            <Packages />
            <Accommodation />
            <Food />
            <Testimonials />

            {/* Final CTA Section */}
            <section className="py-20 bg-brand-gold">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                        Pronto per partire?
                    </h2>
                    <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
                        I posti per i weekend di Dicembre e Gennaio si esauriscono in fretta.
                        Blocca il tuo pacchetto oggi stesso.
                    </p>
                    <a
                        href="#packages"
                        className="inline-block px-10 py-4 bg-white text-brand-gold font-bold text-xl rounded-full shadow-xl hover:bg-gray-100 transition-transform transform hover:-translate-y-1"
                    >
                        Scegli il tuo pacchetto
                    </a>
                </div>
            </section>
        </main>
    );
};
