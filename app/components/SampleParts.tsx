import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

const samples = [
  { name: "1", text: "Steel part, produced by turning, milling and zincing", image: "/image6.jpg" },
  { name: "2", text: "Aluminum part, produced by laser cutting, tapping and anodizing",  image: "/image7.jpg" },
  { name: "3", text: "Steel part, produced by laser cutting, tapping and zincing",  image: "/image8.jpg" },
  { name: "4", text: "Steel part, produced by laser cutting, milling, tumbling and zincing", image: "/image9.jpg" },
  { name: "5", text: "Stainless steel part, produced by laser cutting, bending and electropolishing", image: "/image10.jpg" },
  { name: "6", text: "Steel part, produced by turning, milling and zincing", image: "/image11.png" },
];

function SampleParts() {
  return (
<div className="mx-auto max-w-screen-lg">
<h1 className="text-4xl font-bold text-gray-800 md:text-5xl xl:text-5xl">
        Some sample parts
      </h1>
  <Carousel>
    <CarouselPrevious />
    <CarouselContent className="overflow-visible p-4">
      {samples.map((sample) => (
        <CarouselItem key={sample.name} className="w-1/3 border transform transition-transform duration-200 outline-transparent outline-2 mr-2">
          <Image src={sample.image} alt={sample.name} width={500} height={300} className="object-cover object-center" />
          <p className="text-1xl text-gray-600 md:text-1xl xl:text-2xl">{sample.text}</p>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselNext />
  </Carousel>
</div>
  );
}

export default SampleParts;