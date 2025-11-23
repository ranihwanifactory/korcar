export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: string;
  imageUrl: string;
  type: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  comment: string;
  avatarUrl: string;
}

export enum SearchStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
