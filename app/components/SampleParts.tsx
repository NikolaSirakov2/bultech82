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
    text: "Steel S235JR\nTurning, Milling\nZincing (not shown on the picture)",
    image: "/newElement6.jpg",
  },
  {
    name: "2",
    text: "Stainless Steel 304\nLaser cutting, CNC Bending, Manual deburring and cleaning\nElectropolishing",
    image: "/newElement1.jpg",
  },
  {
    name: "3",
    text: "Aluminium EN AW-5754\nLaser cutting, Deburring, Milling\nAnodising (black)",
    image: "/newElement2.jpg",
  },
  {
    name: "4",
    text: "Steel S235JR\nLaser cutting, CNC Bending, Manual deburring and cleaning\nPowder coating RAL 9005, high gloss",
    image: "/newElement3.jpg",
  },
  {
    name: "5",
    text: "Steel S235JR\nLaser cutting, CNC Milling, Tumbling\nZincing",
    image: "/newElement4.jpg",
  },
  {
    name: "6",
    text: "Aluminium EN AW-6082\nLaser cutting, Manual deburring and cleaning, Tapping\nAnodising (natural)",
    image: "/newElement5.jpg",
  },
];

type Sample = {
  name: string;
  text: string;
  image: string;
};

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
          width={500}
          height={50}
          className="object-cover object-center"
        />
        <p
          style={{ whiteSpace: "pre-line" }}
          className="text-sm text-gray-600 md:text-sm xl:text-sm"
        >
          {sample.text}
        </p>
      </div>
    </div>
  );
}

function SampleParts() {
  const [selectedSample, setSelectedSample] = useState<Sample | null>(null);

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
                {index !== samples.length - 1 && (
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 sm:hidden">
                    <Image
                      src="/scroll-right.svg"
                      alt="Scroll right"
                      width={24}
                      height={24}
                    />
                  </div>
                )}
                {index !== 0 && (
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 sm:hidden">
                    <Image
                      src="/scroll-right.svg"
                      alt="Scroll left"
                      width={24}
                      height={24}
                      className="transform rotate-180"
                    />
                  </div>
                )}
              </div>
              <p
                style={{ whiteSpace: "pre-line" }}
                className="text-sm text-gray-600 md:text-sm xl:text-sm"
              >
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
