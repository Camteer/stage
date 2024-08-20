import React, { FC } from "react";

type ArrowProps = {
  direction?: "left" | "right";
};

export const Arrow: FC<ArrowProps> = ({ direction }) => {
  return (
    <div className={direction ? "right" : "rotate-180"}>
      <svg
        width="15"
        height="33"
        viewBox="0 0 15 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-[] hover:fill-red-800"
      >
        <path
          d="M0.939148 17.72C0.385563 17.0009 0.385563 15.9991 0.939148 15.28L11.4152 1.67123C12.5799 0.158264 15 0.981884 15 2.89122L15 30.1088C15 32.0181 12.5799 32.8417 11.4152 31.3288L0.939148 17.72Z"
          className="fill-[#B3C0D2] hover:fill-[#FF1818] 	transition"
        />
      </svg>
    </div>
  );
};
