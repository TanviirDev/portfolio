import Hero from "@/components/Hero";
import Background from "@/components/Background";
import Highlights from "@/components/Highlights";
import FlipCard from "@/components/UI/FlipCard";

export default function Home() {
  return (
    <main className=" flex flex-col items-center overflow-hidden  m-auto">
      <Background />
      <Hero />
      <Highlights />
      <div className="flex flex-col w-[80%] gap-4 mx-auto mb-8 xl:flex-row xl:w-[90%] xl:gap-5">
        <FlipCard />
        <FlipCard />
        <FlipCard />
      </div>
    </main>
  );
}
