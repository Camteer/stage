"use client";
import { FC, useEffect } from "react";
import { ProductUI } from "../ui/product";
import { Container } from "../container";
import { useDispatch, useSelector } from "@/store/store";
import {
  fetchProductId,
  getIsLoading,
  getProductId,
} from "@/store/slices/productSlice";

import { useParams } from "next/navigation";
import { fetchCartAdd } from "@/store/slices/cartSlice";
import { CreateCartItemValues } from "@/lib/types";

export const Product: FC = () => {
  const product = useSelector(getProductId);
  const loading = useSelector(getIsLoading);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductId(Number(id)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const sizes: number[] = [];
  product.size.forEach((item) => {
    sizes.push(item.name);
  });
  const handelAddItem = (data: CreateCartItemValues) => {
    dispatch(fetchCartAdd(data));
  };
  return (
    <>
      <Container className="">

          {" "}
          <ProductUI
            id={Number(id)}
            title={product.name}
            article={12345}
            addItem={handelAddItem}
            images={product.image}
            prise={product.price}
            sizes={sizes}
            categories={product.type[0]?.name}
            model={product.brand.name}
            season={product.season.name}
            color={product.color[0]?.name}
            description={product.description}
            about={product.description}
            loading={loading}
          ></ProductUI>

      </Container>
    </>
  );
};
