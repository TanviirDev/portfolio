import React from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

interface ButtonProp {
  text?: string;
  className?: string;
  id?: string;
  image?: string;
}

const Button = ({ text, className, id, image }: ButtonProp) => {
  return (
    <a
      href=""
      className={twMerge("relative cursor-pointer", className)}
      id={id}
    >
      <div className="x-1 py-2 rounded-lg bg-black-200 flex justify-center items-center relative cursor-pointer overflow-hidden group">
        <div
          className="absolute   
        w-full h-full group-hover:size-8 rounded-lg group-hover:right-3 group-hover:rounded-full
         bg-white transition-all duration-500;"
        />
        <p
          className=" md:text-lg text-black transition-all duration-500
        group-hover:text-white group-hover:-translate-x-5 xl:translate-x-0 -translate-x-5"
        >
          {text}
        </p>
        {image && (
          <div
            className="group-hover:bg-white size-8 rounded-full absolute right-3 top-1/2 
        -translate-y-1/2 flex justify-center items-center overflow-hidden"
          >
            <Image
              src={image}
              alt="arrow down"
              width={24}
              height={24}
              className="size-5 xl:-translate-y-34 translate-y-0.5 animate-bounce group-hover:translate-y-0.5 transition-all duration-500"
            />
          </div>
        )}
      </div>
    </a>
  );
};

export default Button;
