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
  product: TCard[];
  count: number;
};

import { Cart, CartItem, Product } from "@prisma/client";

export type CartItemDTO = CartItem & {
  productItem: Product;
};

export interface CartDTO extends Cart {
  items: CartItemDTO[];
}

export interface CreateCartItemValues {
  productItemId: number;
  size: number;
}

export interface CartUI {
  id: number | null;
  userId: number | null;
  totalAmount: number;
  items: CartItemDTO[]
}

export interface PaymentData {
  id: string;
  status: string;
  amount: Amount;
  description: string;
  recipient: Recipient;
  created_at: string;
  confirmation: Confirmation;
  test: boolean;
  paid: boolean;
  refundable: boolean;
  metadata: Metadata;
}

export interface Amount {
  value: string;
  currency: string;
}

export interface Recipient {
  account_id: string;
  gateway_id: string;
}

export interface Confirmation {
  type: string;
  confirmation_url: string;
}

export interface Metadata {
  order_id: string;
}

export type PaymentCallbackData = {
  type: string;
  event: string;
  object: {
    id: string;
    status: string;
    amount: { value: string; currency: 'RUB' };
    income_amount: { value: string; currency: 'RUB' };
    description: string;
    recipient: { account_id: string; gateway_id: string };
    payment_method: {
      type: string;
      id: string;
      saved: boolean;
      title: string;
    };
    captured_at: string;
    created_at: string;
    test: boolean;
    refunded_amount: { value: string; currency: 'RUB' };
    paid: boolean;
    refundable: true;
    metadata: { order_id: string };
    authorization_details: {
      rrn: string;
      auth_code: string;
    };
  };
};