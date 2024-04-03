"use client";
import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const samples = [
  { name: "1", text: "Steel part, produced by turning, milling and zincing", image: "/image6.jpg" },
  { name: "2", text: "Aluminum part, produced by laser cutting, tapping and anodizing",  image: "/image7.jpg" },
  { name: "3", text: "Steel part, produced by laser cutting, tapping and zincing",  image: "/image8.jpg" },
  { name: "4", text: "Steel part, produced by laser cutting, milling, tumbling and zincing", image: "/image9.jpg" },
  { name: "5", text: "Stainless steel part, produced by laser cutting, bending and electropolishing", image: "/image10.jpg" },
  { name: "6", text: "Steel part, produced by turning, milling and zincing", image: "/image11.png" },
];

function SampleParts() {
  const [sliderRef, slider] = useKeenSlider({
    spacing: 15,
    slidesPerView: 2,
    centered: true,
    loop: true,
    mode: "free-snap",
    dragStart: () => {
      setIsDragging(true);
    },
    dragEnd: () => {
      setIsDragging(false);
    },
  });
  const [isDragging, setIsDragging] = useState(false);

  return (
    <section
      id="services"
      className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20"
    >
      <h2 className="text-4xl font-bold mt-8 mb-4">Some Sample Parts</h2>
      <div ref={sliderRef} className={`keen-slider ${isDragging ? "is-dragging" : ""}`}>
        {samples.map((sample) => (
          <div key={sample.name} className="keen-slider__slide relative group border-2 border-gray-300 rounded-md p-2">
            <img src={sample.image} alt={sample.name} className="object-cover object-center h-64 w-120" />
            <p className="text-1xl text-gray-600 md:text-1xl xl:text-2xl group-hover:scale-105 transition-transform duration-200 ease-in-out">{sample.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SampleParts;