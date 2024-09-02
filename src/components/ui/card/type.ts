import { TSizes } from "@/lib/types";

export interface TCardUIProps {
  id: number;
  imageUrl: string;
  title: string;
  
  price: number;
  size: TSizes[];
  
  season?: string;
  color?: string;
  categories?: string;
  brand?: string;
  sale?: boolean;
  
  article: number;
  StatusLike: boolean;
  showSizes?: boolean;
  className?: string;
  OnMouseEnter?: () => void;
  OnMouseLeave?: () => void;
}


export interface CardData {
  id: string;
  imageUrl: string;
  title: string;
  article: number;
  price: number;
  size: number[];
  StatusLike: boolean;
}
