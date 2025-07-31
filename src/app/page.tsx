import Hero from "@/components/Hero";
import Background from "@/components/Background";
import Highlights from "@/components/Highlights";
import KeyTechStacks from "@/components/KeyTechStacks";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import NavBar from "@/components/NavBar";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className=" flex flex-col items-center  m-auto">
      <NavBar />
      <Background />
      <Hero />
      <Highlights />
      <KeyTechStacks />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
