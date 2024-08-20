"use client";
import { FC, useState } from "react";
import { CardUI } from "@ui";

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

  const OnMouseEnter = () => {
    setShowSize(true);
  };

  const OnMouseLeave = () => {
    setShowSize(false);
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
      OnMouseEnter={OnMouseEnter}
      OnMouseLeave={OnMouseLeave}
    />
  );
};
