"use client";
import React, { useState } from "react";
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

function CardModal({ sample, onClose }: { sample: any; onClose: any }) {
  return (
    <div
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="bg-white p-4 rounded shadow-lg items-center">
        <Image
          src={sample.image}
          alt={sample.name}
          width={800}
          height={100}
          className="object-cover object-center"
        />
        <p className="text-1xl text-gray-600 md:text-1xl xl:text-2xl">
          {sample.text}
        </p>
      </div>
    </div>
  );
}

function SampleParts() {
  const [selectedSample, setSelectedSample] = useState(null);

  return (
    <div className="mx-auto max-w-screen-lg relative">
      {selectedSample && (
        <CardModal
          sample={selectedSample}
          onClose={() => setSelectedSample(null)}
        />
      )}
      <h1 className="text-4xl font-bold text-gray-800 md:text-5xl xl:text-5xl pl-4">
        Some sample parts
      </h1>
      <Carousel>
        <CarouselPrevious />
        <CarouselContent className="overflow-visible p-4">
          {samples.map((sample, index) => (
            <CarouselItem
              key={sample.name}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 border transform transition-transform duration-200 outline-transparent outline-2 mr-2 hover:scale-105 hover:cursor-pointer"
              onMouseDown={() => setSelectedSample(sample)}
            >
              <div className="w-full h-96 relative">
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
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 sm:hidden">
        <Image
          src="/scroll-right.svg"
          alt="Scroll right"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
}

export default SampleParts;
