import React from "react";
import { EmblaCarousel } from "./UI/emblaCarousel/EmblaCarousel";
function KeyTechStacks() {
  return (
    <section className="w-full xl:mt-10">
      <h1 className="text-center text-4xl font-bold mb-8">My Key Skills</h1>
      <div>
        <EmblaCarousel />
      </div>
      <div className="mb-40"></div>
    </section>
  );
}

export default KeyTechStacks;
