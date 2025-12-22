import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { PACKAGES, LOCATIONS, ACCOMMODATIONS, GROUP_PACKAGE } from '../../constants';
import { Calendar, Users, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export const Purchase: React.FC = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const initialPackageId = searchParams.get('package');

    // State
    const [selectedPackageId, setSelectedPackageId] = useState<string | null>(initialPackageId);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        date: '',
        guests: 2,
        notes: ''
    });
    const [selectedLocationId, setSelectedLocationId] = useState<string>('');
    const [selectedAccommodationId, setSelectedAccommodationId] = useState<string>('');
    const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Derive selected package data
    const selectedPackage = [...PACKAGES, GROUP_PACKAGE].find(p => p.id === selectedPackageId);

    // Effects
    useEffect(() => {
        if (initialPackageId) {
            setSelectedPackageId(initialPackageId);
        }
    }, [initialPackageId]);

    // Reset location/activities when package changes
    useEffect(() => {
        setSelectedLocationId('');
        setSelectedActivities([]);
        // For packages that include specific locations automatically, we could pre-select them here
        // But for now, we'll keep it simple and let the user/logic decide
    }, [selectedPackageId]);

    // Handlers
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleActivityToggle = (activity: string) => {
        setSelectedActivities(prev =>
            prev.includes(activity)
                ? prev.filter(a => a !== activity)
                : [...prev, activity]
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('Booking Data:', {
            package: selectedPackage,
            user: formData,
            location: selectedLocationId,
            accommodation: selectedAccommodationId,
            activities: selectedActivities
        });

        alert('Richiesta inviata con successo! Ti contatteremo presto per la conferma.');
        navigate('/');
        setIsSubmitting(false);
    };

    // Helper to determine available locations based on package
    const getAvailableLocations = () => {
        if (!selectedPackage) return [];

        // Logic based on package type (assumed from ID or properties)
        if (selectedPackage.id === 'pkg-1') {
            // Assaggio: User chooses 1 location
            return LOCATIONS;
        } else if (selectedPackage.id === 'pkg-2') {
            // Weekend: Lago + Campitello
            return LOCATIONS.filter(l => l.id === 'lago' || l.id === 'campitello');
        } else {
            // Experience / Group: All locations
            return LOCATIONS;
        }
    };

    // Helper to decide if we need to show location selector (for single location packages)
    const needsLocationSelection = selectedPackage?.id === 'pkg-1';

    return (
        <div className="pt-24 pb-20 bg-ice-50 min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-serif font-bold text-brand-dark mb-4">Prenota la tua Experience</h1>
                    <p className="text-gray-600">Compila il modulo per richiedere la disponibilità.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">

                    {/* 1. Package Selection Summary */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-brand-dark mb-6 flex items-center gap-2">
                            <span className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                            Il Pacchetto Scelto
                        </h2>

                        {selectedPackage ? (
                            <div className="flex flex-col md:flex-row gap-6 items-start p-4 bg-ice-50 rounded-xl border border-brand-gold/20">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-brand-dark">{selectedPackage.title}</h3>
                                    <p className="text-gray-500 text-sm mb-2">{selectedPackage.subtitle}</p>
                                    <div className="flex gap-4 text-sm font-medium text-gray-700">
                                        <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {selectedPackage.duration}</span>
                                        <span className="flex items-center gap-1 font-bold text-brand-gold">{selectedPackage.price}</span>
                                    </div>
                                </div>
                                <Link
                                    to="/#packages"
                                    className="text-sm text-blue-600 hover:underline"
                                >
                                    Cambia Pacchetto
                                </Link>
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <p className="text-gray-500 mb-4">Nessun pacchetto selezionato</p>
                                <Link
                                    to="/#packages"
                                    className="bg-brand-gold text-white px-6 py-2 rounded-lg font-bold"
                                >
                                    Scegli un Pacchetto
                                </Link>
                            </div>
                        )}
                    </div>

                    {selectedPackage && (
                        <>
                            {/* 2. Personal Details */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <h2 className="text-2xl font-bold text-brand-dark mb-6 flex items-center gap-2">
                                    <span className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                                    I Tuoi Dati
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
                                        <input
                                            required
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Cognome</label>
                                        <input
                                            required
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Telefono</label>
                                        <input
                                            required
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Data Preferita</label>
                                        <input
                                            required
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Numero Partecipanti</label>
                                        <div className="relative">
                                            <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                            <input
                                                required
                                                type="number"
                                                min="1"
                                                name="guests"
                                                value={formData.guests}
                                                onChange={handleInputChange}
                                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 3. Location Selection (Conditional) */}
                            {needsLocationSelection && (
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                    <h2 className="text-2xl font-bold text-brand-dark mb-6 flex items-center gap-2">
                                        <span className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                                        Scegli la Tappa
                                    </h2>
                                    <p className="text-gray-600 mb-6">Il pacchetto "Assaggio del Matese" prevede una sola tappa. Dove vuoi andare?</p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {LOCATIONS.map(loc => (
                                            <div
                                                key={loc.id}
                                                onClick={() => setSelectedLocationId(loc.id)}
                                                className={`cursor-pointer rounded-xl overflow-hidden border-2 transition-all ${selectedLocationId === loc.id ? 'border-brand-gold ring-2 ring-brand-gold/20' : 'border-transparent hover:border-gray-200'}`}
                                            >
                                                <div className="h-32 bg-gray-200 relative">
                                                    <img src={loc.image} alt={loc.name} className="w-full h-full object-cover" />
                                                    {selectedLocationId === loc.id && (
                                                        <div className="absolute inset-0 bg-brand-gold/20 flex items-center justify-center">
                                                            <CheckCircle2 className="w-10 h-10 text-white drop-shadow-md" />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="p-4 bg-white">
                                                    <h4 className="font-bold text-brand-dark">{loc.name}</h4>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* 4. Accommodation */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <h2 className="text-2xl font-bold text-brand-dark mb-6 flex items-center gap-2">
                                    <span className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">{needsLocationSelection ? '4' : '3'}</span>
                                    Dove vuoi dormire?
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {ACCOMMODATIONS.map(acc => (
                                        <div
                                            key={acc.id}
                                            onClick={() => setSelectedAccommodationId(acc.id)}
                                            className={`cursor-pointer border rounded-xl overflow-hidden transition-all ${selectedAccommodationId === acc.id ? 'border-brand-gold ring-2 ring-brand-gold/20 shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
                                        >
                                            <div className="h-40 relative">
                                                <img src={acc.image} alt={acc.name} className="w-full h-full object-cover" />
                                                {selectedAccommodationId === acc.id && (
                                                    <div className="absolute top-2 right-2 bg-brand-gold text-white rounded-full p-1">
                                                        <CheckCircle2 className="w-5 h-5" />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="p-4">
                                                <span className="text-xs font-bold text-brand-gold uppercase">{acc.type}</span>
                                                <h3 className="font-bold text-brand-dark mb-1">{acc.name}</h3>
                                                <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                                                    <MapPin className="w-3 h-3" /> {acc.distance}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 5. Activities */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <h2 className="text-2xl font-bold text-brand-dark mb-6 flex items-center gap-2">
                                    <span className="bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">{needsLocationSelection ? '5' : '4'}</span>
                                    Scegli le Attività
                                </h2>
                                <p className="text-gray-600 mb-6">Seleziona le attività a cui vuoi partecipare per ogni tappa.</p>

                                <div className="space-y-8">
                                    {getAvailableLocations().map(loc => {
                                        // Filter based on selection if needed
                                        if (needsLocationSelection && selectedLocationId && loc.id !== selectedLocationId) return null;
                                        if (needsLocationSelection && !selectedLocationId) return null;

                                        return (
                                            <div key={loc.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                                                <h3 className="font-bold text-lg text-brand-dark mb-4 flex items-center gap-2">
                                                    <MapPin className="w-5 h-5 text-brand-gold" />
                                                    {loc.name}
                                                </h3>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                    {loc.activities.map((act, i) => (
                                                        <label key={i} className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors">
                                                            <input
                                                                type="checkbox"
                                                                checked={selectedActivities.includes(act)}
                                                                onChange={() => handleActivityToggle(act)}
                                                                className="mt-1 w-4 h-4 text-brand-gold rounded focus:ring-brand-gold"
                                                            />
                                                            <span className="text-sm text-gray-700">{act}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
                                    {needsLocationSelection && !selectedLocationId && (
                                        <p className="text-gray-500 italic">Seleziona prima una tappa sopra per vedere le attività.</p>
                                    )}
                                </div>
                            </div>

                            {/* 6. Notes & Submit */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <h2 className="text-2xl font-bold text-brand-dark mb-6">Note Aggiuntive</h2>
                                <textarea
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleInputChange}
                                    rows={3}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-gold focus:border-transparent mb-8"
                                    placeholder="Intolleranze, richieste speciali..."
                                ></textarea>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-brand-gold hover:bg-yellow-600 text-white font-bold rounded-xl text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 transform active:scale-95"
                                >
                                    {isSubmitting ? (
                                        'Invio in corso...'
                                    ) : (
                                        <>
                                            Completa la Richiesta <ArrowRight className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                                <p className="text-center text-xs text-gray-400 mt-4">
                                    Cliccando su completa, invierai una richiesta di disponibilità non vincolante.
                                </p>
                            </div>
                        </>
                    )}

                </form>
            </div>
        </div>
    );
};
