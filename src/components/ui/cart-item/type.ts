import { TSizes } from "@/lib/types";

export interface TCartItemUIProps {
  id: number;
  imageUrl: string;
  title: string;
  count: number;
  price: number;
  size: number;
  loading: boolean;
  article: number;
  increment: (data: { id: number; quantity: number }) => void;
  decrement: (data: { id: number; quantity: number }) => void;
  delete: (id: number) => void;
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
