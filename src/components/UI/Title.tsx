import React from "react";
import { twMerge } from "tailwind-merge";
interface TitleProp {
  title: string;
  className?: string;
}

function Title({ title, className = "" }: TitleProp) {
  return (
    <h1
      className={twMerge(
        "text-3xl text-center mb-8 font-bold xl:text-4xl",
        className
      )}
    >
      {title}
    </h1>
  );
}

export default Title;
