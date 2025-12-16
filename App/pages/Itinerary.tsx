import React from 'react';
import { ArrowLeft, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const stops = [
    {
        name: 'Bocca della Selva',
        desc: 'Immersi nei boschi, punto di partenza ideale.',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11993.45607066927!2d14.4965825!3d41.3323086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133a6f1d072f8a4b%3A0x6b6e4d46115e6129!2sBocca%20della%20Selva%2C%2082032%20Cusano%20Mutri%20BN!5e0!3m2!1sit!2sit!4v1703080000000!5m2!1sit!2sit'
    },
    {
        name: 'Lago del Matese',
        desc: 'Lo specchio d’acqua più alto d’Italia.',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23986.91214150821!2d14.4093906!3d41.4082216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133a7024c0817c8b%3A0x863372c36667500d!2sLago%20del%20Matese!5e0!3m2!1sit!2sit!4v1703080000000!5m2!1sit!2sit'
    },
    {
        name: 'Campitello Matese',
        desc: 'Cuore pulsante del divertimento invernale.',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11985.39487779774!2d14.3986422!3d41.3857644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133a7071676f6259%3A0x507722a07c1340a6!2sCampitello%20Matese%2C%20CB!5e0!3m2!1sit!2sit!4v1703080000000!5m2!1sit!2sit'
    }
];

export const Itinerary: React.FC = () => {
    return (
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4">
                <Link to="/" className="inline-flex items-center text-brand-gold font-bold mb-8 hover:underline">
                    <ArrowLeft className="mr-2 w-5 h-5" />
                    Torna alla Home
                </Link>

                <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6 text-center">
                    L'Itinerario Ottimizzato
                </h1>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto text-center mb-16">
                    Scopri le tre tappe fondamentali del tuo viaggio nel Matese.
                    Abbiamo studiato questo percorso per minimizzare gli spostamenti e massimizzare l'esperienza.
                </p>

                <div className="space-y-20">
                    {stops.map((stop, index) => (
                        <div key={index} className="flex flex-col lg:flex-row gap-10 items-start">
                            <div className="lg:w-1/3">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-brand-gold text-white rounded-full flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                                        {index + 1}
                                    </div>
                                    <h2 className="text-3xl font-bold text-brand-dark">{stop.name}</h2>
                                </div>
                                <p className="text-gray-600 text-lg mb-6 pl-14">
                                    {stop.desc}
                                </p>
                                <div className="pl-14">
                                    <a
                                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stop.name)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center bg-brand-dark text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
                                    >
                                        <MapPin className="mr-2 w-5 h-5" />
                                        Ottieni indicazioni
                                    </a>
                                </div>
                            </div>
                            <div className="lg:w-2/3 w-full h-[400px] bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-ice-100">
                                <iframe
                                    src={stop.mapSrc}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`Mappa di ${stop.name}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
