import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const samples = [
  {
    name: "1",
    text: "Steel part, produced by turning, milling and zincing",
    image: "/image6.jpg",
  },
  {
    name: "2",
    text: "Aluminum part, produced by laser cutting, tapping and anodizing",
    image: "/newElement1.jpg",
  },
  {
    name: "3",
    text: "Steel part, produced by laser cutting, tapping and zincing",
    image: "/newElement2.jpg",
  },
  {
    name: "4",
    text: "Steel part, produced by laser cutting, milling, tumbling and zincing",
    image: "/newElement3.jpg",
  },
  {
    name: "5",
    text: "Stainless steel part, produced by laser cutting, bending and electropolishing",
    image: "/newElement4.jpg",
  },
  {
    name: "6",
    text: "Steel part, produced by turning, milling and zincing",
    image: "/newElement5.jpg",
  },
];

function SampleParts() {
  return (
    <div className="mx-auto max-w-screen-lg">
      <h1 className="text-4xl font-bold text-gray-800 md:text-5xl xl:text-5xl pl-4">
        Some sample parts
      </h1>
      <Carousel>
        <CarouselPrevious />
        <CarouselContent className="overflow-visible p-4">
          {samples.map((sample) => (
            <CarouselItem
              key={sample.name}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 border transform transition-transform duration-200 outline-transparent outline-2 mr-2 hover:scale-150 hover:z-50"
              style={{ backdropFilter: "blur(5px)" }}
            >
              <div className="w-full h-64 relative">
                <Image
                  src={sample.image}
                  alt={sample.name}
                  layout="fill"
                  className="absolute object-cover object-center"
                />
              </div>
              <p className="text-1xl text-gray-600 md:text-1xl xl:text-2xl">
                {sample.text}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default SampleParts;
