export type TSizes = {
  id: number;
  name: number;
};

export type TTypes = {
  id: number;
  name: string;
};

export type TBrands = {
  id: number;
  name: string;
};
export type TColors = {
  id: number;
  name: string;
  type: string;
};
export type TSeasons = {
  id: number;
  name: string;
};

export type TFiltersResponse = {
  sizes: TSizes[];
  types: TTypes[];
  brands: TBrands[];
  colors: TColors[];
  seasons: TSeasons[];
};

export type TCard = {
  id: number;
  image: string[];
  name: string;
  description: string;
  price: number;
  categoryId: number;
  seasonId: number;
  brandId: number;
  sale: boolean;

  StatusLike: boolean;

  season: TSeasons;
  size: TSizes[];
  brand: TSeasons;
  type: TTypes[];
  color: TColors[];
  categories: {};
};

export type TCardResponse = {
  data: TCard[];
  total: number;
};

import { Cart, CartItem, Product } from "@prisma/client";

export type CartItemDTO = CartItem & {
  productItem: Product 
};

export interface CartDTO extends Cart {
  items: CartItemDTO[];
}

export interface CreateCartItemValues {
  productItemId: number;
  size: number;
}
