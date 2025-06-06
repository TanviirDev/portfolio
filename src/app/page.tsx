import Hero from "@/components/Hero";
import Background from "@/components/Background";

export default function Home() {
  return (
    <main className=" flex flex-col items-center overflow-hidden  m-auto">
      <Background />
      <Hero />
    </main>
  );
}
