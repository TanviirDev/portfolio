import React from "react";
import Image from "next/image";
import img from "../../../public/images/api-animation.svg";

const ApiAnimation = () => {
  return (
    <a
      href="https://storyset.com/technology"
      className="text-black pointer-events-none pointer-cursor-default text-center"
    >
      <Image src={img} alt="full-stack" className="" />
      Technology illustrations by Storyset
    </a>
  );
};

export default ApiAnimation;
