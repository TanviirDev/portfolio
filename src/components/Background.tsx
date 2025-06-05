import React from "react";
import Image from "next/image";

const Background = () => {
  return (
    <div>
      <div className="absolute top-0 left-0">
        <Image src="/images/bg.png" alt="" width={400} height={400} />
      </div>
      <div className="absolute top-0 right-0">
        <Image src="/images/bg.png" alt="" width={400} height={400} />
      </div>
    </div>
  );
};

export default Background;
