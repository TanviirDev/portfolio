"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Card from "@/components/UI/Card";
import Image from "next/image";
import { KeyTechStack } from "@/types";
// import { keyTechStacks } from "@/constants";

interface EmblaCarouselProp {
  keyTechStacks: KeyTechStack[];
}

export function EmblaCarousel({ keyTechStacks }: EmblaCarouselProp) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container justify-around xl:justify-center  ">
        {keyTechStacks.map((e) => (
          <div key={e.id} className="embla__slide ">
            <Card className=" h-full w-full gap-8 2xl:gap-12  ">
              <div className="mt-10 flex-1">
                <Image
                  className="w-24 h-24 object-cover"
                  src={e.img}
                  width={100}
                  height={100}
                  alt="Node JS"
                />
              </div>

              <div className="mb-10 flex-1  ">
                {e.stack.map((e, i) => (
                  <p className="2xl:text-lg text-white-50" key={i}>
                    {" "}
                    {e}
                  </p>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
