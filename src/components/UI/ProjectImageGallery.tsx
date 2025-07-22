"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CircleChevronRight } from "lucide-react";
import { CircleChevronLeft } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import { X } from "lucide-react";

interface GalleryProp {
  images: { url: string }[];
}

function ProjectImageGallery({ images }: GalleryProp) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  const prevImg = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const nextImg = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextImg,
    onSwipedRight: prevImg,
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    if (!autoPlay) return;
    const autoSlide = setInterval(
      () =>
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1)),
      3000
    );

    return () => clearInterval(autoSlide);
  }, [images.length, autoPlay]);

  const DotNavigation = () => (
    <div className=" flex gap-0.5 items-center   ">
      {images.map((_, i) => (
        <button
          key={i}
          className={`rounded-full w-2 h-2  cursor-pointer ${i == currentIndex ? "bg-[#737272] " : "bg-white"}`}
          onClick={() => setCurrentIndex(i)}
        />
      ))}
    </div>
  );

  return (
    <div className="w-full ">
      <div
        className="project-screenshots flex flex-col  relative w-full h-70 project-gradient rounded-xl cursor-pointer"
        {...swipeHandlers}
        onClick={() => {
          setIsModalOpen(true);
          setAutoPlay(false);
        }}
      >
        <Image
          key={currentIndex}
          className="object-contain p-1 rounded-xl "
          src={images[currentIndex].url}
          alt="project screenshot"
          fill
          sizes="30vw"
        />
      </div>
      <div className=" flex justify-center gap-4 mt-1">
        <button onClick={prevImg} className="">
          <CircleChevronLeft />
        </button>
        <DotNavigation />
        <button onClick={nextImg} className="">
          <CircleChevronRight />
        </button>
      </div>
      {isModalOpen && (
        <div
          className=" modal-overlay fixed w-full h-full inset-0 flex justify-center items-center z-20 bg-gray-800/30 backdrop-blur-sm "
          onClick={() => {
            setIsModalOpen(false);
            setAutoPlay(true);
          }}
        >
          <div
            className="modal-content flex justify-center max-w-5xl max-h-[90vh] p-2 m-auto"
            onClick={(e) => e.stopPropagation()}
            {...swipeHandlers}
          >
            <button onClick={prevImg} className="md:mx-4">
              <CircleChevronLeft />
            </button>
            <div className=" relative w-[85vw] h-[600px]">
              <Image
                className="object-contain rounded "
                src={images[currentIndex].url}
                alt="Project Image"
                fill
              />
              <button
                onClick={() => setIsModalOpen(false)}
                className="ml-4 cursor-pointer absolute top-0 right-0  -translate-y-8"
              >
                <X />
              </button>
              <div className="absolute -bottom-10 left-1/2">
                <DotNavigation />
              </div>
            </div>
            <button onClick={nextImg} className=" md:mx-4">
              <CircleChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectImageGallery;
