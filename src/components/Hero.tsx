import Image from "next/image";
import { words } from "@/constants";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="relative mt-32 ">
      {/* OVERVIEW  */}
      <div className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5  ">
        <h1 className="text-2xl md:text-4xl  flex flex-wrap  mb-4  pointer-events-none items-center">
          Hi, I am
          <span className="slide inline-block overflow-hidden h-8 md:h-10 ">
            <span className="headerAnimation flex flex-col">
              {words.map((word) => (
                <span key={word.text} className="flex items-center pl-1">
                  <Image
                    src={word.img}
                    alt={word.text}
                    width={24}
                    height={24}
                    className="bg-white rounded-full mr-1 md:size-8"
                  />
                  {word.text}
                </span>
              ))}
            </span>
          </span>
        </h1>
        <div className="text-sm md:text-2xl mb-4 pointer-events-none">
          Motivated and skilled Full-Stack Software Engineer with hands-on
          experience in designing, developing, and maintaining scalable software
          solutions. Currently expanding expertise in AI and machine learning.
        </div>
        <div className="flex justify-between ">
          <Button
            text="Contact me "
            className="md:w-50 md:h-16 w-40 h-12 "
            id="contact-me"
            image="/images/arrow-down.svg"
          />
          <Button
            text="Chat"
            className="md:w-40 md:h-16 w-30 h-12 mr-10 "
            id="chat"
            image="/images/bot-message-square.svg"
          />
        </div>
      </div>

      {/* 3D ROOM */}
      <div>3d room</div>
    </section>
  );
};

export default Hero;
