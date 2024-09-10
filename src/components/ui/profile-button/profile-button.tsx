"use client";

import { cn } from "@/lib/utils";
import { Button } from "../button";
import Image from "next/image";
import { FC } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const ProfileButton: FC = ({}) => {
  const { data: session } = useSession();
  const router = useRouter()
  return (
    <>
      {!session ? (
        <Button variant={"circle"} size={"icon"} onClick={() => router.push('/login')}>
          <Image
            className={cn("w-auto h-auto")}
            width={19}
            height={19}
            src={"/svg/user.svg"}
            alt={"1"}
          />
        </Button>
      ) : (
        <Button variant={"circle"} size={"icon"} onClick={() => router.push('/profile')}>
          <Image
            className={cn("w-auto h-auto")}
            width={19}
            height={19}
            src={"/svg/user.svg"}
            alt={"1"}
          />
        </Button>
      )}
    </>
  );
};
