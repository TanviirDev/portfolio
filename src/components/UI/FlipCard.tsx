import React, { ReactNode } from "react";
import Card from "@/components/UI/Card";

interface FlipCardProps {
  frontContent: ReactNode;
  backContent: ReactNode;
  className?: string;
  frontClassName?: string;
  backClassName?: string;
}

const FlipCard: React.FC<FlipCardProps> = ({
  frontContent,
  backContent,
  className = "",
  frontClassName = "",
  backClassName = "",
}) => {
  return (
    <div className={`flipCardContainer w-full h-full ${className}`}>
      <div className="flipCard relative w-full h-full min-h-40">
        <div
          className={`frontFace absolute top-0 left-0 w-full h-full min-h-40 ${frontClassName}`}
        >
          <Card className="gap-1.5 py-6 xl:items-start xl:pl-4 text-white-50 h-full">
            {frontContent}
          </Card>
        </div>
        <div
          className={`backFace absolute top-0 left-0 w-full h-full min-h-40 ${backClassName}`}
        >
          <Card className="gap-1.5 py-6 xl:items-start xl:px-4 text-white-50 h-full">
            {backContent}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
