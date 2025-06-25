import React from "react";
import { twJoin } from "tailwind-merge";
interface FlipCardFaceProps {
  backFace?: "x" | "y";
  className?: string;
  children?: React.ReactNode;
}

function FlipCardFace({ backFace, className, children }: FlipCardFaceProps) {
  return (
    <div
      className={twJoin(
        `absolute top-0 left-0 w-full h-full min-h-30`,
        className,
        backFace ? `backFace ${backFace}` : "frontFace"
      )}
    >
      {children}
    </div>
  );
}

export default FlipCardFace;
