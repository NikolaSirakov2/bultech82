import React, { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import Link from "next/link";

const ContactUs = () => {
  const { language: initialLanguage } = useLanguage();
  const [language, setLanguage] = useState(initialLanguage);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    setLanguage(savedLanguage || initialLanguage);
  }, [initialLanguage]);

  return (
    <section
      id="contacts"
      className="max-container padding-container flex flex-col gap-20 py-10 pb-16 md:gap-28 lg:py-20"
    >
      <div className="flex flex-col md:flex-row gap-10 md:gap-12 xl:gap-16">
        <div className="relative h-106 w-full md:w-1/2">
          <img
            src="/Trakia-Industrial-Zone.jpg"
            alt="Old Town"
            className="object-cover object-center h-full w-full"
          />
        </div>
        <div className="flex flex-col gap-3 md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl xl:text-6xl">
            {language === 'BG' ? 'Contact Us' : 'Контакти'}
          </h1>

          <p className="text-1xl text-gray-600 md:text-1xl xl:text-2xl">
            {language === 'BG' ? 'Plovdiv, Bulgaria.' : 'Пловдив, България'}
          </p>

          <p className="text-1xl text-gray-600 md:text-1xl xl:text-2xl">
            {language === 'BG' ? 'Trakia, Industrial Zone, 4023' : 'Тракия, Индустриална зона, 4023'}
          </p>

          <p className="text-1xl text-gray-600 md:text-1xl xl:text-2xl">
            {language === 'BG' ? '+359 88 999 25 65' : '+359 88 999 25 65'}
          </p>

          <p className="text-1xl text-gray-600 md:text-1xl xl:text-2xl">
            {language === 'BG' ? 'info@bultech82.com' : 'info@bultech82.com'}
          </p>

          <Link href="/request">
            <button type="button" className="bg-black text-white rounded-lg p-2 mb-4 w-full">
              {language === 'BG' ? 'Send us a message' : 'Изпратете запитване'}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;