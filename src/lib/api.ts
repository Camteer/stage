import {
  CartUI,
  CreateCartItemValues,
  TCard,
  TCardResponse,
  TFiltersResponse,
  UserOrders,
} from "./types";

const url = process.env.NEXT_PUBLIC_API_URL;

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export const getFiltersApi = () =>
  fetch(`${url}/filters`)
    .then((res) => checkResponse<TFiltersResponse>(res))
    .then((data) => {
      return data;
    });

export const getProductsApi = (query: string = "") =>
  fetch(`${url}/products?${query}`)
    .then((res) => checkResponse<TCardResponse>(res))
    .then((data) => {
      return data;
    });

export const getProductIdApi = (id: number) =>
  fetch(`${url}/products/${id}`)
    .then((res) => checkResponse<TCard>(res))
    .then((data) => {
      return data;
    });

export const getCartApi = () =>
  fetch(`${url}/cart`)
    .then((res) => checkResponse<CartUI>(res))
    .then((data) => {
      return data;
    });

export const CartItemApi = (data: CreateCartItemValues) =>
  fetch(`${url}/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => checkResponse<CartUI>(res))
    .then((data) => {
      return data;
    });

export const changeCartItemCountApi = ({
  id,
  quantity,
}: {
  id: number;
  quantity: number;
}) =>
  fetch(`${url}/cart/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ quantity }),
  })
    .then((res) => checkResponse<CartUI>(res))
    .then((data) => {
      return data;
    });

export const deleteCartItemApi = (id: number) =>
  fetch(`${url}/cart/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => checkResponse<CartUI>(res))
    .then((data) => {
      return data;
    });

export const VerifiendUserApi = (code: string) =>
  fetch(`${url}/auth/verifiend?code=${code}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

export const getUserOrderApi = () =>
  fetch(`${url}/orders`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => checkResponse<UserOrders>(res))
    .then((data) => {
      return data;
    });
