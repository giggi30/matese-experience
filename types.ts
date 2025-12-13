export interface Activity {
  title: string;
  icon?: string;
}

export interface LocationData {
  id: string;
  name: string;
  description: string;
  activities: string[];
  image: string;
}

export interface PackageData {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  features: string[];
  isGroup?: boolean;
  highlight?: boolean;
}

export interface AccommodationData {
  id: string;
  locationId: string;
  name: string;
  type: string;
  rating: number;
  distance: string;
  image: string;
  priceLevel: string;
  bookingUrl: string;
}

export interface ReviewData {
  id: number;
  author: string;
  text: string;
  role: string;
  rating: number;
}