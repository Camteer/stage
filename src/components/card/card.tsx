"use client";
import { FC, useState } from "react";
import { CardUI } from "@ui";
import { TCardUIProps } from "../ui/card/type";
import { useRouter } from "next/navigation";

export const Card: FC<TCardUIProps> = ({
  imageUrl,
  id,
  title,
  price,
  article,
  size,
  StatusLike,
}) => {
  const [showSize, setShowSize] = useState(false);
  const router = useRouter()
  const OnMouseEnter = () => {
    setShowSize(true);
  };

  const OnMouseLeave = () => {
    setShowSize(false);
  };

  const onHandleSelectSize = (size: string | number) => {
    router.push(`/products/${id}?size=${size}`)
  };

  return (
    <CardUI
      id={id}
      imageUrl={imageUrl}
      title={title}
      article={article}
      price={price}
      size={size}
      showSizes={showSize}
      StatusLike={StatusLike}
      onMouseEnter={OnMouseEnter}
      onMouseLeave={OnMouseLeave}
      onSizeEnter={onHandleSelectSize}
    />
  );
};
