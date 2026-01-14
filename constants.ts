import { LocationData, PackageData, AccommodationData, ReviewData } from './types';

export const LOCATIONS: LocationData[] = [
  {
    id: 'bocca',
    name: 'Bocca della Selva',
    description: 'Immersi nei boschi, dove il tempo si ferma. Il punto di partenza ideale per connettersi con la natura incontaminata.',
    activities: ['Giro a cavallo', 'Bar-ristorante tipico', 'Noleggio MTB elettriche', 'Picnic con area BBQ attrezzata'],
    image: '/immagini/bocca della selva.jpeg'
  },
  {
    id: 'lago',
    name: 'Lago del Matese',
    description: 'Lo specchio d’acqua più alto d’Italia, un luogo magico dove il cielo tocca le montagne.',
    activities: ['Picnic vista lago', 'Giro in barca a remi (meteo permettendo)', 'Giochi di gruppo all’aperto', 'Passeggiate fotografiche'],
    image: '/immagini/pettone e io.JPG'
  },
  {
    id: 'campitello',
    name: 'Campitello Matese',
    description: 'Il cuore pulsante del divertimento invernale, tra sci, buona cucina e adrenalina.',
    activities: ['Sci con impianti di risalita', 'Ristorante Km0 (Tartufo e Funghi)', 'Giochi sulla neve', 'Giro in Quad di gruppo'],
    image: '/immagini/campitello matese.jpeg'
  }
];

export const PACKAGES: PackageData[] = [
  {
    id: 'pkg-1',
    title: 'Assaggio del Matese',
    subtitle: 'Esperienza Giornaliera',
    duration: '1 Giorno',
    price: '€69',
    features: ['1 Tappa a scelta', 'Pranzo Tipico incluso', 'Attività guidata pomeridiana', 'Assistenza in loco'],
    highlight: false
  },
  {
    id: 'pkg-2',
    title: 'Weekend in montagna',
    subtitle: 'Il Best Seller per Coppie',
    duration: '2 Giorni',
    price: '€189',
    features: ['2 Tappe (Lago + Campitello)', 'Pernottamento incluso (1 notte)', 'Cena tipica + Pranzi', 'Noleggio attrezzatura base'],
    highlight: true
  },
  {
    id: 'pkg-3',
    title: 'Matese Experience Completa',
    subtitle: 'Immersione Totale',
    duration: '3 Giorni',
    price: '€349',
    features: ['Tour completo delle 3 tappe', '2 Notti in Chalet/Hotel', 'Tutte le attività incluse', 'Degustazione prodotti locali'],
    highlight: false
  }
];

export const CHRISTMAS_PACKAGE: PackageData = {
  id: 'pkg-christmas',
  title: 'Christmas Group Experience',
  subtitle: 'Ideale per 8-20 persone',
  duration: 'Personalizzabile',
  price: 'da €329/persona',
  features: ['Sconti riservati per gruppi', 'Attività esclusive (Gara Quad, BBQ privato)', 'Area riservata al ristorante', '2 Pernottamenti inclusi'],
  isGroup: true
};

export const SUMMER_PACKAGE: PackageData = {
  id: 'pkg-summer',
  title: 'Summer Group Experience',
  subtitle: 'Fuga dal Caldo (Gruppi 8-20)',
  duration: '3 Giorni',
  price: '€299',
  features: ['3 Tappe (Full Experience)', '2 Pernottamenti inclusi', 'Attività estive outdoor', 'Degustazioni e relax'],
  isGroup: true
};

export const ACCOMMODATIONS: AccommodationData[] = [
  {
    id: 'acc-1',
    locationId: 'bocca',
    name: 'Bocca della Selva',
    type: 'Appartamenti Gilardi',
    rating: 9.7,
    distance: '1 minuto a piedi',
    image: '/immagini/gilardi apartments.jpg',
    priceLevel: '€€',
    bookingUrl: 'https://www.booking.com/Share-eP1SFBn'
  },
  {
    id: 'acc-2',
    locationId: 'lago',
    name: 'Lago del Matese',
    type: 'Chalet vista lago',
    rating: 9.4,
    distance: '1km dal lago',
    image: '/immagini/chalet vista lago.jpg',
    priceLevel: '€',
    bookingUrl: 'https://www.booking.com/Share-PIHCjft'
  },
  {
    id: 'acc-3',
    locationId: 'campitello',
    name: 'Campitello',
    type: 'La Pinetina',
    rating: 9.0,
    distance: 'Accesso diretto alle piste',
    image: '/immagini/la pinetina.jpg',
    priceLevel: '€€€',
    bookingUrl: 'https://www.booking.com/Share-VnjcZVi'
  }
];

export const REVIEWS: ReviewData[] = [
  {
    id: 1,
    author: "Marco & Giulia",
    role: "Coppia",
    text: "Un weekend indimenticabile. L'organizzazione è stata perfetta, non abbiamo dovuto pensare a nulla se non a divertirci.",
    rating: 5
  },
  {
    id: 2,
    author: "Gruppo 'Gli Sciatori'",
    role: "Gruppo di 12 amici",
    text: "Il pacchetto gruppi è una salvezza! Abbiamo fatto il giro in Quad e la mangiata al rifugio. Torneremo sicuramente.",
    rating: 5
  },
  {
    id: 3,
    author: "Famiglia Esposito",
    role: "Famiglia con bambini",
    text: "Bellissima esperienza anche per i bambini. Bocca della Selva è incantata con la neve. Ottimo cibo.",
    rating: 4
  }
];