"use client";

import { CataloContainerUI, FilterUI } from "@/components/ui";
import { Card } from "../card";
import { useDispatch, useSelector } from "@/store/store";
import {
  fetchProducts,
  getIsLoading,
  getProducts,
  getTotal,
} from "@/store/slices/productSlice";
import { Suspense, useEffect } from "react";
import { useFilters } from "@/hooks/use-filters";
import { useQuery, useQueryFilters } from "@/hooks/use-query";

export default function Catalog({
  type,
}: {
  type: "sneakers" | "accessories" | "clothes";
}) {
  const dispatch = useDispatch();
  const cards = useSelector(getProducts);
  const loading = useSelector(getIsLoading);
  const total = useSelector(getTotal);
  const filters = useFilters();

  useQueryFilters(filters);
  const f = useQuery(filters);
  useEffect(() => {
    dispatch(fetchProducts(f));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.take]);

  const handleTake = (value: number) => {
    filters.setTake("take", value);
    filters.setTake("page", 1);
  };

  const handlePage = (value: number) => {
    filters.setTake("page", value);
  };

  return (
    <>
      <div className="flex gap-20 w-full">
        <Suspense>
          <FilterUI type={type} filters={filters}></FilterUI>
        </Suspense>
        <CataloContainerUI
          total={total}
          onClickSize={handleTake}
          onClickPage={handlePage}
          page={filters.take.page}
          size={filters.take.take}
          loading={loading}
        >
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
