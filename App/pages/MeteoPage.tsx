import React, { useState, useEffect } from 'react';
import { Cloud, CloudRain, CloudSnow, Sun, CloudSun, Wind, Droplets, Calendar } from 'lucide-react';

interface WeatherData {
    daily: {
        time: string[];
        weathercode: number[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
    };
}

const LOCATIONS = [
    { name: 'Campitello Matese', lat: 41.46259915280073, long: 14.39198323078051 },
    { name: 'Lago del Matese', lat: 41.41338239697734, long: 14.388993860809766 },
    { name: 'Bocca della Selva', lat: 41.3785603390768, long: 14.499676883775267 },
];

export const MeteoPage: React.FC = () => {
    const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0]);
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);
            setError('');
            try {
                const response = await fetch(
                    `https://api.open-meteo.com/v1/forecast?latitude=${selectedLocation.lat}&longitude=${selectedLocation.long}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin`
                );
                if (!response.ok) throw new Error('Errore nel caricamento dei dati meteo');
                const data = await response.json();
                setWeatherData(data);
            } catch (err) {
                setError('Impossibile caricare le previsioni meteo');
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [selectedLocation]);

    const getWeatherIcon = (code: number) => {
        if (code === 0) return <Sun className="w-12 h-12 text-yellow-500" />;
        if (code >= 1 && code <= 3) return <CloudSun className="w-12 h-12 text-yellow-400" />;
        if (code >= 45 && code <= 48) return <Cloud className="w-12 h-12 text-gray-500" />;
        if (code >= 51 && code <= 67) return <CloudRain className="w-12 h-12 text-blue-500" />;
        if (code >= 71 && code <= 77) return <CloudSnow className="w-12 h-12 text-sky-200" />;
        if (code >= 80 && code <= 82) return <CloudRain className="w-12 h-12 text-blue-600" />;
        if (code >= 95) return <Wind className="w-12 h-12 text-purple-500" />;
        return <CloudSun className="w-12 h-12 text-gray-400" />; // Fallback
    };

    const getWeatherDescription = (code: number) => {
        if (code === 0) return 'Soleggiato';
        if (code >= 1 && code <= 3) return 'Parz. Nuvoloso';
        if (code >= 45 && code <= 48) return 'Nebbia';
        if (code >= 51 && code <= 67) return 'Pioggia';
        if (code >= 71 && code <= 77) return 'Neve';
        if (code >= 80 && code <= 82) return 'Rovesci';
        if (code >= 95) return 'Temporale';
        return 'Variabile';
    };

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return new Intl.DateTimeFormat('it-IT', { weekday: 'short', day: 'numeric', month: 'short' }).format(date);
    };

    return (
        <div className="pt-24 pb-16 bg-ice-50 min-h-screen">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-serif text-brand-dark font-bold text-center mb-12">
                    Previsioni Meteo
                </h1>

                {/* Location Tabs */}
                <div className="flex flex-wrapjustify-center gap-4 mb-12 overflow-x-auto pb-4 scrollbar-hide">
                    <div className="flex p-1 bg-white rounded-full shadow-md mx-auto">
                        {LOCATIONS.map((loc) => (
                            <button
                                key={loc.name}
                                onClick={() => setSelectedLocation(loc)}
                                className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap ${selectedLocation.name === loc.name
                                        ? 'bg-brand-dark text-white shadow-sm'
                                        : 'text-gray-600 hover:text-brand-dark hover:bg-gray-50'
                                    }`}
                            >
                                {loc.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Weather Grid */}
                <div className="max-w-6xl mx-auto">
                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-dark"></div>
                        </div>
                    ) : error ? (
                        <div className="text-center text-red-500 bg-red-50 p-4 rounded-lg">
                            {error}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                            {weatherData?.daily.time.map((time, index) => (
                                <div
                                    key={time}
                                    className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col items-center justify-between gap-4 border border-gray-100 ${index === 0 ? 'bg-blue-50 border-blue-100 ring-2 ring-blue-100' : ''}`}
                                >
                                    <div className="text-center">
                                        <p className={`text-sm font-semibold uppercase tracking-wider ${index === 0 ? 'text-blue-600' : 'text-gray-500'}`}>
                                            {index === 0 ? 'Oggi' : formatDate(time)}
                                        </p>
                                        {index === 0 && <span className="text-xs text-blue-400 font-medium">In tempo reale</span>}
                                    </div>

                                    <div className="flex flex-col items-center gap-2 my-2">
                                        {getWeatherIcon(weatherData.daily.weathercode[index])}
                                        <span className="text-sm font-medium text-gray-700">
                                            {getWeatherDescription(weatherData.daily.weathercode[index])}
                                        </span>
                                    </div>

                                    <div className="w-full flex justify-between items-center text-sm font-medium border-t border-gray-100 pt-3">
                                        <span className="text-blue-600 flex items-center gap-1">
                                            Min {Math.round(weatherData.daily.temperature_2m_min[index])}°
                                        </span>
                                        <span className="text-brand-gold flex items-center gap-1">
                                            Max {Math.round(weatherData.daily.temperature_2m_max[index])}°
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="text-center mt-12 text-sm text-gray-400">
                    Dati meteo forniti da Open-Meteo API
                </div>
            </div>
        </div>
    );
};
