import Hero from "@/components/Hero";
import Background from "@/components/Background";
import Highlights from "@/components/Highlights";

export default function Home() {
  return (
    <main className=" flex flex-col items-center overflow-hidden  m-auto">
      <Background />
      <Hero />
      <Highlights />
    </main>
  );
}
