'use client'
import { FC, useEffect } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from "@/store/store";
import { fetchCart, getCartItems } from "@/store/slices/cartSlice";


export const ButtonCart: FC = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  useEffect (()=>{
    dispatch(fetchCart())
  }, [])
  const cartItems = useSelector(getCartItems)
  return (
    <Button variant={"circle"} size={"icon"} className="relative" onClick={() => router.push('/cart')}>
        <Image
          className={cn("w-auto h-auto")}
          width={19}
          height={19}
          src={"/svg/bag.svg"}
          alt={"1"}
        />
        {cartItems.items.length ? <div className="absolute w-5 h-5 bg-red-500 rounded-full top-[-5px] right-[-5px]">{cartItems.items.length }</div>  : <></> }
      </Button>
  )
}