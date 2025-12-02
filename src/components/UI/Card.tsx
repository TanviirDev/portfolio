import React from "react";
import { twMerge } from "tailwind-merge";

const Card = ({
  children,
  className,
  id,
}: {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}) => {
  return (
    <div
      id={id}
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
