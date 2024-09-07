import { CarouselBetter, Product } from "@/components";
import { Suspense } from "react";

export default function ProductPage() {
  return (
    <>
      <Suspense>
        <Product />
        <CarouselBetter />
      </Suspense>
    </>
  );
}
