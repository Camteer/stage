interface TCardUIProps {
  id: string;
  imageUrl: string;
  title: string;
  article: number;
  price: number;
  size: number[];
  StatusLike: boolean;
  season?: string;
  color?: string;
  categories?: string;
  brand?: string;
  sale?: boolean;
  showSizes?: boolean;
  className?: string;
  OnMouseEnter?: () => void;
  OnMouseLeave?: () => void;
}


interface CardData {
  id: string;
  imageUrl: string;
  title: string;
  article: number;
  price: number;
  size: number[];
  StatusLike: boolean;
}
