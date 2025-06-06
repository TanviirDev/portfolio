import React from "react";
import Image from "next/image";

const ApiAnimation = () => {
  return (
    <a
      href="https://storyset.com/technology"
      className="text-black pointer-events-none pointer-cursor-default text-center"
    >
      <Image
        src="/images/api-animation.svg"
        width={500}
        height={500}
        alt="coding"
        className=""
      />
      Technology illustrations by Storyset
    </a>
  );
};

export default ApiAnimation;
