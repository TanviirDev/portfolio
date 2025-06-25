"use client";

import React, { useEffect, useState, useRef } from "react";
import { twJoin } from "tailwind-merge";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface FlipCardProps {
  direction: "x" | "y";
  className?: string;
  children?: React.ReactNode;
}

const FlipCard: React.FC<FlipCardProps> = ({
  direction = "x",
  className = "",
  children,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipcardRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile("ontouchstart" in window);
  }, []);

  // const isMobile = useMemo(() => "ontouchstart" in window, []);

  useGSAP(
    () => {
      gsap.to(flipcardRef.current, {
        [direction === "x" ? "rotationX" : "rotationY"]:
          isFlipped && isMobile ? 180 : 0,
        duration: 0,
      });
    },
    { dependencies: [isFlipped, isMobile] }
  );

  const handleClick = () => {
    setIsFlipped((prev) => !prev);
  };
  return (
    <div
      onClick={handleClick}
      className={`flipCardContainer w-full ${className}`}
    >
      <div
        ref={isMobile ? flipcardRef : null}
        className={twJoin(
          "flipCard  relative w-full h-full min-h-30",
          direction
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default FlipCard;
