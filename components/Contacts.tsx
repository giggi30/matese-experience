import React from 'react';
import { Mail, Phone, Clock, Send } from 'lucide-react';

export const Contacts: React.FC = () => {
    return (
        <section id="contacts" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-dark mb-4">
                        Contattaci
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Siamo qui per rispondere a tutte le tue domande. Scrivici o chiamaci per organizzare la tua esperienza perfetta nel Matese.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-2xl font-bold font-serif text-brand-dark mb-6">Informazioni di Contatto</h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-brand-dark/10 p-3 rounded-full">
                                        <Mail className="w-6 h-6 text-brand-dark" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Email</h4>
                                        <p className="text-gray-600">info@mateseexperience.it</p>
                                        <p className="text-sm text-gray-500 mt-1">Rispondiamo entro 24 ore</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-brand-dark/10 p-3 rounded-full">
                                        <Phone className="w-6 h-6 text-brand-dark" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Telefono</h4>
                                        <p className="text-gray-600">+39 123 456 7890</p>
                                        <p className="text-sm text-gray-500 mt-1">Lun-Ven, 9:00 - 18:00</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="bg-brand-dark/10 p-3 rounded-full">
                                        <Clock className="w-6 h-6 text-brand-dark" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Orari</h4>
                                        <p className="text-gray-600">Lunedì - Venerdì: 9:00 - 18:00</p>
                                        <p className="text-gray-600">Sabato: 9:00 - 13:00</p>
                                        <p className="text-sm text-gray-500 mt-1">Domenica chiusi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold font-serif text-brand-dark mb-6">Inviaci un Messaggio</h3>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none transition-all"
                                        placeholder="Il tuo nome"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefono</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none transition-all"
                                        placeholder="Il tuo numero"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none transition-all"
                                    placeholder="tua@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Messaggio</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-dark focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="Scrivi qui il tuo messaggio..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-brand-dark text-white font-bold py-4 rounded-lg hover:bg-gray-800 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
                            >
                                Invia Messaggio
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
