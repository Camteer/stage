'use client'
import { CataloContainerUI, FilterUI } from "@/components/ui";
import { Card } from "../card";
import { useDispatch, useSelector } from "@/store/store";
import { fetchProducts, getProducts } from "@/store/slices/productSlice";
import { useEffect } from "react";

export default function Catalog({
  type,
}: {
  type: "sneakers" | "accessories" | "clothes";
}) {
  const cardData = [
    {
      _id: 67,
      id: "1",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1y5qhi3TMhu7L3DyaJpPuxtqxVuRFpgqeaA&s",
      title: "КРОССОВКИ ADIDAS EQT SUPPORT ADV PK",
      article: 19666,
      price: 3290,
      size: [35, 36, 37, 38, 39, 40, 41, 42],
      StatusLike: false,
      season: "winter",
      color: "red",
      categories: "men",
      brand: "addidas",
      sale: false,
    },
    {
      _id: 78,
      id: "2",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1y5qhi3TMhu7L3DyaJpPuxtqxVuRFpgqeaA&s",
      title: "КРОССОВКИ ADIDAS EQT SUPPORT ADV PK",
      article: 19666,
      price: 3290,
      size: [35, 36, 37, 38, 39, 40, 41, 42],
      StatusLike: false,
      season: "winter",
      color: "red",
      categories: "men",
      brand: "addidas",
      sale: false,
    },
    {
      _id: 78073,
      id: "3",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1y5qhi3TMhu7L3DyaJpPuxtqxVuRFpgqeaA&s",
      title: "КРОССОВКИ ADIDAS EQT SUPPORT ADV PK",
      article: 19666,
      price: 3290,
      size: [35, 36, 37, 38, 39, 40, 41, 42],
      StatusLike: false,
      season: "winter",
      color: "red",
      categories: "men",
      brand: "addidas",
      sale: false,
    },
    {
      _id: 890,
      id: "4",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1y5qhi3TMhu7L3DyaJpPuxtqxVuRFpgqeaA&s",
      title: "КРОССОВКИ ADIDAS EQT SUPPORT ADV PK",
      article: 19666,
      price: 3290,
      size: [35, 36, 37, 38, 39, 40, 41, 42],
      StatusLike: false,
      season: "winter",
      color: "red",
      categories: "men",
      brand: "addidas",
      sale: false,
    },
    {
      _id: 9680,
      id: "5",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1y5qhi3TMhu7L3DyaJpPuxtqxVuRFpgqeaA&s",
      title: "КРОССОВКИ ADIDAS EQT SUPPORT ADV PK",
      article: 19666,
      price: 3290,
      size: [35, 36, 37, 38, 39, 40, 41, 42],
      StatusLike: false,
      season: "winter",
      color: "red",
      categories: "men",
      brand: "addidas",
      sale: false,
    },
    {
      _id: 9580,
      id: "6",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1y5qhi3TMhu7L3DyaJpPuxtqxVuRFpgqeaA&s",
      title: "КРОССОВКИ ADIDAS EQT SUPPORT ADV PK",
      article: 19666,
      price: 3290,
      size: [35, 36, 37, 38, 39, 40, 41, 42],
      StatusLike: false,
      season: "winter",
      color: "red",
      categories: "men",
      brand: "addidas",
      sale: false,
    },
    {
      _id: 9480,
      id: "7",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1y5qhi3TMhu7L3DyaJpPuxtqxVuRFpgqeaA&s",
      title: "КРОССОВКИ ADIDAS EQT SUPPORT ADV PK",
      article: 19666,
      price: 3290,
      size: [35, 36, 37, 38, 39, 40, 41, 42],
      StatusLike: false,
      season: "winter",
      color: "red",
      categories: "men",
      brand: "addidas",
      sale: false,
    },
    {
      _id: 9380,
      id: "8",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1y5qhi3TMhu7L3DyaJpPuxtqxVuRFpgqeaA&s",
      title: "КРОССОВКИ ADIDAS EQT SUPPORT ADV PK",
      article: 19666,
      price: 3290,
      size: [35, 36, 37, 38, 39, 40, 41, 42],
      StatusLike: false,
      season: "winter",
      color: "red",
      categories: "men",
      brand: "addidas",
      sale: false,
    },
    {
      _id: 9280,
      id: "9",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1y5qhi3TMhu7L3DyaJpPuxtqxVuRFpgqeaA&s",
      title: "КРОССОВКИ ADIDAS EQT SUPPORT ADV PK",
      article: 19666,
      price: 3290,
      size: [35, 36, 37, 38, 39, 40, 41, 42],
      StatusLike: false,
      season: "winter",
      color: "red",
      categories: "men",
      brand: "addidas",
      sale: false,
    },
    {
      _id: 9180,
      id: "10",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1y5qhi3TMhu7L3DyaJpPuxtqxVuRFpgqeaA&s",
      title: "КРОССОВКИ ADIDAS EQT SUPPORT ADV PK",
      article: 19666,
      price: 3290,
      size: [35, 36, 37, 38, 39, 40, 41, 42],
      StatusLike: false,
      season: "winter",
      color: "red",
      categories: "men",
      brand: "addidas",
      sale: false,
    },
  ];

  const dispatch = useDispatch()
  const cards = useSelector(getProducts)
  useEffect(()=> {
    dispatch(fetchProducts())
  }, [])
  console.log(cards, 11)
  return (
    <>
      <div className="flex gap-20 w-full">
        <FilterUI type={type}></FilterUI>
        <CataloContainerUI>
          {cardData.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              article={card.article}
              price={card.price}
              size={card.size}
              StatusLike={card.StatusLike}
              id={card.id}
            />
          ))}
        </CataloContainerUI>
      </div>
    </>
  );
}
