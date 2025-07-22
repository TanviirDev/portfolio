import React from "react";
import { MoveUpRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface LinkProp {
  text: string;
  link: string;
  className?: string;
}

function Link({ text, link, className }: LinkProp) {
  return (
    <div className={twMerge("flex text-[#CBACF9]", className)}>
      <a href={link} target="_blank" className="">
        {text}
      </a>
      <MoveUpRight className=" p-0.5" />
    </div>
  );
}

export default Link;
