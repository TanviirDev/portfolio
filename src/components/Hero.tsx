import Image from "next/image";
import { words } from "@/constants";
import Button from "./UI/Button";
import ApiAnimation from "./UI/ApiAnimation";

const Hero = () => {
  return (
    <section id="#hero" className="relative mt-6 xl:flex   ">
      <div className="flex flex-col justify-center md:w-full w-screen md:px- px-5 2xl:px-0 xl:w-1/2">
        <h1 className="animate-drop text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl flex flex-wrap  mb-4  pointer-events-none items-center">
          Hi, I am
          <span className=" inline-block overflow-hidden h-10 md:h-12 2xl:h-16 ml-1 sm:ml-2 ">
            <span className="headerAnimation flex flex-col ">
              {words.map((word) => (
                <span
                  key={word.text}
                  className="flex items-center pl-1 h-10 md:h-12 2xl:h-16"
                >
                  <Image
                    src={word.img}
                    alt={word.text}
                    width={24}
                    height={24}
                    className="bg-white rounded-full mr-1 sm:mr-2 md:size-8 2xl:size-10"
                  />
                  {word.text}
                </span>
              ))}
            </span>
          </span>
        </h1>
        <div className="animate-drop text-sm md:text-2xl mb-4 pointer-events-none ">
          Motivated and skilled Full-Stack Software Engineer with hands-on
          experience in designing, developing, and maintaining scalable software
          solutions. Currently expanding expertise in AI and machine learning.
        </div>
        <div className="flex justify-between ">
          <Button
            id="contactForm"
            text="Contact me "
            className="md:w-50 md:h-16 w-40 h-12 xl:hidden animate-fade-in uppercase"
            image="/images/arrow-down.svg"
          />
          <Button
            id="chat"
            text="Chat"
            className="md:w-40 md:h-16 w-30 h-12 mr-10 animate-fade-in uppercase"
            image="/images/bot-message-square.svg"
          />
        </div>
      </div>
      <div className="xl:grow flex justify-center">
        <ApiAnimation />
      </div>
    </section>
  );
};

export default Hero;
