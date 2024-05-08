import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";

function Services() {
  const { language } = useLanguage();

  return (
    <section
      id="services"
      className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20"
    >
      <h1 className="text-4xl font-bold text-gray-800 md:text-5xl xl:text-5xl">
        {language === 'BG' ? 'Production Processes' : 'Процеси на изработка'}
      </h1>
      <div className="flex flex-col md:flex-row gap-10 md:gap-12 xl:gap-16">
        <div className="flex flex-col-reverse md:flex-col items-center space-y-4 md:items-start">
          <p className="text-1xl text-gray-600 md:text-1xl xl:text-2xl">
            {language === 'BG' ? 'Laser cutting and bending sheet, Marking laser, CNC and manual milling, CNC and manual turning, EDM' : 'Лазерно рязане и огъване, Лазерно маркиране, ЦПУ и ръчно фрезоване, ЦПУ и ръчно струговане, Ерозия'}
          </p>

          <div className="relative h-106 w-full md:w-3/4">
            <img
              src="/снимка 2.1.png"
              alt="Machine Parts"
              className="object-cover object-center h-full w-full"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:w-full">
          <div className="flex flex-col items-center space-y-4 md:flex-col md:items-start">
            <div className="relative h-106 w-full md:w-full">
              <img
                src="/снимка 3.1.png"
                alt="Machine Parts"
                className="object-cover object-center h-full w-full"
              />
            </div>

            <p className="text-1xl text-gray-600 md:text-1xl xl:text-2xl">
              {language === 'BG' ? 'Grinding, Tapping, Punching, Welding, Manual assembly' : 'Шлайфане, Резбонарязване, Шанцоване, Заваряване, Ръчно сглобяване'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;