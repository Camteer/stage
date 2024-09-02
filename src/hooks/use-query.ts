import React from "react";
import { Filters } from "./use-filters";
import qs from "qs";
import { useRouter } from "next/navigation";

export const useQueryFilters = (filters: Filters) => {
  const isMounted = React.useRef(false);
  const router = useRouter();

  React.useEffect(() => {
    if (isMounted.current) {
      const params = {
        ...filters.prices,
        
        brands: Array.from(filters.brands),
        sizes: Array.from(filters.sizes),
        colors: Array.from(filters.colors),
        sale: Array.from(filters.sale),
        type: Array.from(filters.type),
        season: Array.from(filters.season),
      };

      const query = qs.stringify(params, {
        arrayFormat: "comma",
      });

      router.push(`?${query}`, {
        scroll: false,
      });
    }

    isMounted.current = true;
  }, [filters]);
};

export const useQuery = (filters: Filters) => {
  const params = {
    ...filters.prices,

    brands: Array.from(filters.brands),
    sizes: Array.from(filters.sizes),
    colors: Array.from(filters.colors),
    sale: Array.from(filters.sale),
    type: Array.from(filters.type),
    season: Array.from(filters.season),
  };

  const query = qs.stringify(params, {
    arrayFormat: "comma",
  });

  return query;
};
