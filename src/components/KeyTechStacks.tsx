import React from "react";
import { EmblaCarousel } from "./UI/emblaCarousel/EmblaCarousel";
import { getKeyTechStack } from "@/sanity/sanityQueries";

async function KeyTechStacks() {
  const keyTechStack = await getKeyTechStack();

  return (
    <section className="w-full mt-5 xl:mt-10 mb-5">
      <h1 className="text-center text-4xl font-bold mb-8">My Key Skills</h1>
      <div>
        <EmblaCarousel keyTechStacks={keyTechStack} />
      </div>
    </section>
  );
}

export default KeyTechStacks;
