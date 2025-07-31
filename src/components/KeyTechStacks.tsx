import React from "react";
import { EmblaCarousel } from "./UI/emblaCarousel/EmblaCarousel";
import Title from "./UI/Title";
import { getKeyTechStack } from "@/sanity/sanityQueries";

async function KeyTechStacks() {
  const keyTechStack = await getKeyTechStack();

  return (
    <section id="skills" className="w-full mt-5 xl:mt-10 mb-5">
      <Title title="Key Skills"></Title>
      <div>
        <EmblaCarousel keyTechStacks={keyTechStack} />
      </div>
    </section>
  );
}

export default KeyTechStacks;
