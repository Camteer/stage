import { cn } from "@/lib/utils";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { FC } from "react";
import style from "./orders.module.scss";

export const OrdersUI: FC<TOrders> = ({ id, data, count, total, pending }) => {
  return (
    <div
      className={cn(
        "flex justify-between h-[59px] items-center rounded-full px-5",
        style.order
      )}
    >
      <p className="font-normal text-[18px] leading-[22px] w-[85px]">{id}</p>
      <p className="font-normal text-[18px] leading-[22px] w-[112px]">{data}</p>
      <p className="font-normal text-[18px] leading-[22px] w-[20px]">{count}</p>
      <p className="font-normal text-[18px] leading-[22px] w-[84px]">{total}</p>
      <Checkbox
        value={"value"}
        checked={pending}
        className="rounded-[5px] w-[33px] h-[33px]  border-[#B3C0D2] border-[3px] cursor-default data-[state=checked]:bg-[red] data-[state=checked]:border-[red] flex justify-center items-center"
      >
        {pending ? <Check className="h-4 w-4 stroke-white " /> : <></>}{" "}
      </Checkbox>
    </div>
  );
};
