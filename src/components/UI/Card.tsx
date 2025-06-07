import React from "react";
import { twMerge } from "tailwind-merge";

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-col bg-black-200 justify-center item-center w-full text-center rounded-xl ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
