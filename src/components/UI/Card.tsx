import React from "react";
import { twMerge } from "tailwind-merge";

const Card = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-col bg-zinc-900 justify-center items-center w-full text-center rounded-xl ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
