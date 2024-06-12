"use client";
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useLanguage } from "./LanguageContext";

const samples = [
  {
    name: "1",
    text: "Material: Steel S235JR\nProduction process: Turning, Milling\nPost process: Zincing (not shown on the picture)",
    textBG: "Материал: Стомана S235JR\nПроцес на производство: Токарене, Фрезоване\nПоследваща обработка: Поцинковане (не е показано на снимката)",
    image: "/newElement6.jpg",
  },
  {
    name: "2",
    text: "Material: Stainless Steel 304\nProduction process: Laser cutting, CNC Bending, Manual deburring and cleaning\nPost process: Electropolishing",
    textBG: "Материал: Неръждаема стомана 304\nПроцес на производство: Лазерно рязане, CNC Буксиране, Ръчно обелване и почистване\nПоследваща обработка: Електрополиране",
    image: "/newElement1.jpg",
  },
  {
    name: "3",
    text: "Material: Aluminium EN AW-5754\nProduction process: Laser cutting, Deburring, Milling\nPost process: Anodising (black)",
    textBG: "Материал: Алуминий EN AW-5754\nПроцес на производство: Лазерно рязане, Обелване, Фрезоване\nПоследваща обработка: Анодиране (черно)",
    image: "/newElement2.jpg",
  },
  {
    name: "4",
    text: "Material: Steel S235JR\nProduction process: Laser cutting, CNC Bending,\nManual deburring and cleaning\nPost process: Powder coating RAL 9005, high gloss",
    textBG: "Материал: Стомана S235JR\nПроцес на производство: Лазерно рязане, CNC Буксиране,\nРъчно обелване и почистване\nПоследваща обработка: Прахово боядисване RAL 9005, висок блясък",
    image: "/newElement3.jpg",
  },
  {
    name: "5",
    text: "Material: Steel S235JR\nProduction process: Laser cutting, CNC Milling, Tumbling\nPost process: Zincing",
    textBG: "Материал: Стомана S235JR\nПроцес на производство: Лазерно рязане, CNC Фрезоване, Полиране\nПоследваща обработка: Поцинковане",
    image: "/newElement4.jpg",
  },
  {
    name: "6",
    text: "Material: Aluminium EN AW-6082\nProduction process: Laser cutting, Manual deburring and cleaning, Tapping\nPost process: Anodising (natural)",
    textBG: "Материал: Алуминий EN AW-6082\nПроцес на производство: Лазерно рязане, Ръчно обелване и почистване, Резбоване\nПоследваща обработка: Анодиране (естествен)",
    image: "/newElement5.jpg",
  },
];

type Sample = {
  name: string;
  text: string;
  image: string;
};

function CardModal({ sample, onClose }: { sample: any; onClose: any }) {
  const { language } = useLanguage();
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
          {language === "BG" ? sample.text : sample.textBG}
        </p>
      </div>
    </div>
  );
}

function SampleParts() {
  const [selectedSample, setSelectedSample] = useState<Sample | null>(null);
  const { language } = useLanguage();

  return (
    <div className="mx-auto max-w-screen-lg relative">
      {selectedSample && (
        <CardModal
          sample={selectedSample}
          onClose={() => setSelectedSample(null)}
        />
      )}
      <h1 className="text-4xl font-bold text-gray-800 md:text-5xl xl:text-5xl pl-4">
        {language === "BG" ? "Some sample parts" : "Примерни детайли"}
      </h1>
      <Carousel>
        <CarouselPrevious />
        <CarouselContent className="overflow-visible p-4">
          {samples.map((sample, index) => (
            <CarouselItem
              key={sample.name}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 transform transition-transform duration-200 outline-transparent outline-2 mr-2 hover:scale-105 hover:cursor-pointer" // Adjusted card size
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
                className="text-lg text-gray-600 md:text-xl xl:text-xl"
              >
                {language === "BG" ? sample.text : sample.textBG}
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
