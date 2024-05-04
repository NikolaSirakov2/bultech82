import React, { useContext } from "react";
import style from "../styles/Hero.module.css";
import Image from "next/image";
import { LanguageContext } from "./LanguageContext";

function Hero() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Hero must be used within a LanguageProvider");
  }

  const { language } = context;

  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-8 md:gap-28 lg:py-20">
      <div className="flex flex-col gap-10 md:gap-12 xl:gap-16">
        
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl xl:text-6xl">
            {language === 'BG' ? 'Bultech82 Ltd' : 'Bultech82 ООД'}
          </h1>

          <h3
            className={`${style.h3SmallScreen} text-2xl text-gray-600 md:text-3xl xl:text-4xl`}
          >
            {language === 'BG' ? 'Bulgarian company for manufacturing technologies' : 'Българска компания за производствени технологии'}
          </h3>
        </div>

        <div className={style.imageContainer}>
          <Image src="/снимка 1.2.png" alt="Machine Parts" layout="fill" objectFit="cover" />
        </div>
      </div>
    </section>
  );
}

export default Hero;