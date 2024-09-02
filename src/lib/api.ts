import { TCard, TCardResponse, TFiltersResponse } from "./types";

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
    .then((res) => checkResponse<TCard[]>(res))
    .then((data) => {
      return data;
    });

export const getProductIdApi = (id: number ) => 
  fetch(`${url}/products/${id}`)
    .then((res) => checkResponse<TCard>(res))
    .then((data) => {
      return data;
    });
;
