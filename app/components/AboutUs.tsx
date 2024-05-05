import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";

const AboutUs = () => {
  const { language: initialLanguage } = useLanguage();
  const [language, setLanguage] = useState(initialLanguage);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    setLanguage(savedLanguage || initialLanguage);
  }, [initialLanguage]);

  return (
    <section
      id="about-us"
      className="max-container padding-container flex flex-col gap-20 py-10 md:gap-28 lg:py-20"
    >
      <div className="flex flex-col md:flex-row gap-10 md:gap-12 xl:gap-16">
        <div className="flex flex-col gap-3 md:w-4/4">
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl xl:text-5xl">
            {language === "BG" ? "About Us" : "За нас"}
          </h1>

          <div className="flex flex-col md:flex-row gap-4 md:gap-0">
            <div className="relative h-106 w-full md:w-4/4">
              <img
                src="/Bultech82_logo.svg"
                alt="Machine Parts"
                className="object-cover object-center h-full w-full"
              />
            </div>

            <p className="text-1xl text-gray-600 md:text-1xl xl:text-2xl">
              {language === "BG"
                ? "Bultech 82 Ltd was established in Plovdiv, Bulgaria, in 2023.As an OEM supplier, we are using various manufacturing processes and post-processing techniques to produce a wide range of parts used in machine building, furniture production, food industry, construction, and many other sectors."
                : "Бултех 82 ЕООД е основана в Пловдив, през 2023.Като OEM доставчик, ние използваме различни производствени и довършителни процеси за да реализираме широка гама от детайли за машиностроенето, мебелната индустрия, хранително-вкусовата промишленост, строителството и много други сектори."}
            </p>
          </div>

          <div>
            <p className="text-1xl text-gray-600 md:text-1xl xl:text-2xl">
              {language === "BG"
                ? "No matter if your project needs a single part or a mass-produced item, Bultech 82 will help you achieve your goals. We will be glad to consult you and offer you the most suitable solution for your needs."
                : "Без значение дали вашият проект се нуждае от единична част или от масово производство на детайл, Бултех 82 ще ви помогне да постигнете целите си.С удоволствие ще ви консултираме и ще ви предложим най-подходящото решение за вашите нужди."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
