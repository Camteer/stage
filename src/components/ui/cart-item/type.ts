import { TSizes } from "@/lib/types";

export interface TCartItemUIProps {
  id: number;
  imageUrl: string;
  title: string;
  count: number
  price: number;
  size: number;

  article: number;

  className?: string;
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
