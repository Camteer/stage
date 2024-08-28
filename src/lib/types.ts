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
