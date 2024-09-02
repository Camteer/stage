"use client";

import { CataloContainerUI, FilterUI } from "@/components/ui";
import { Card } from "../card";
import { useDispatch, useSelector } from "@/store/store";
import { fetchProducts, getIsLoading, getProducts } from "@/store/slices/productSlice";
import { useEffect } from "react";
import { useFilters } from "@/hooks/use-filters";
import { useQuery, useQueryFilters } from "@/hooks/use-query";

export default function Catalog({
  type,
}: {
  type: "sneakers" | "accessories" | "clothes";
}) {
  const dispatch = useDispatch();
  const cards = useSelector(getProducts);
  const loading = useSelector(getIsLoading)
  const filters = useFilters();

  useQueryFilters(filters);

  useEffect(() => {
    dispatch(fetchProducts(useQuery(filters)));
  }, [filters.prices.take]);

  const handleTake = (value: number) => {
    filters.setPrices("take", value);
  };

  return (
    <>
      <div className="flex gap-20 w-full">
        <FilterUI type={type}></FilterUI>
        <CataloContainerUI onClickSize={handleTake} size={filters.prices.take} loading={loading}>
          {cards.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.image[0]}
              title={card.name}
              article={12345}
              price={card.price}
              size={card.size}
              StatusLike={false}
              id={card.id}
            />
          ))}
        </CataloContainerUI>
      </div>
    </>
  );
}
