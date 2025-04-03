import { Url } from "next/dist/shared/lib/router/router";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inci_name?: string;
  rating: number;
  process_number?: string;
  composition?: string;
  pdf_link: Url;
  video_url: Url;
}