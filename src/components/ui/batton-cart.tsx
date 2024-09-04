'use client'
import { FC } from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from 'next/navigation'


export const ButtonCart: FC = () => {
  const router = useRouter()
  return (
    <Button variant={"circle"} size={"icon"} onClick={() => router.push('/cart')}>
        <Image
          className={cn("w-auto h-auto")}
          width={19}
          height={19}
          src={"/svg/bag.svg"}
          alt={"1"}
        />
      </Button>
  )
}