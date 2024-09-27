import { Faq, CardBlog, CarouselBetter } from "@/components";
import { BestProducts } from "@/components/best-products/best-products";
import { Brands } from "@/components/brands/brands";

export default function Home() {
  return (
    <>
      <BestProducts />
      <CarouselBetter />
      <Faq></Faq>
      <CardBlog></CardBlog>
      <Brands />
    </>
  );
}
