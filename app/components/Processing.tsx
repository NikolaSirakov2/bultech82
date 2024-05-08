import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";

function Processing() {
  const { language } = useLanguage();

  return (
    <section
      id="services"
      className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20"
    >
      <h1 className="text-4xl font-bold text-gray-800 md:text-5xl xl:text-5xl">
        {language === 'BG' ? 'Finishing processes' : 'Довършителни процеси'}
      </h1>
      <div className="flex flex-col md:flex-row gap-10 md:gap-12 xl:gap-16">
        <div className="flex flex-col-reverse md:flex-col items-center space-y-4 md:items-start">
          <p className="text-1xl text-gray-600 md:text-1xl xl:text-2xl">
            {language === 'BG' ? 'Anodizing, Electropolish, Powder coating, ' : 'Анодиране, Електрополиране, Прахово боядисване,'}<br />
            {language === 'BG' ? 'Tampon printing/Pad printing' : 'Тампон печат'}
          </p>

          <div className="relative h-106 w-full md:w-3/4">
            <img
              src="/снимка 4.1.png"
              alt="Machine Parts"
              className="object-cover object-center h-full w-full"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 md:w-full">
          <div className="flex flex-col items-center space-y-4 md:flex-col md:items-start">
            <div className="relative h-106 w-full md:w-full">
              <img
                src="/снимка 5.1.png"
                alt="Machine Parts"
                className="object-cover object-center h-full w-full"
              />
            </div>

            <p className="text-1xl text-gray-600 md:text-1xl xl:text-2xl">
              {language === 'BG' ? 'Zincing, Nickel coating, Oxidation, Passivating, Phosphating' : 'Поцинковане, Никелиране, Оксидация, Пасивация, Фосфатиране'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Processing;