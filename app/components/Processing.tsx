import React from "react";

function Processing() {
  return (
    <section
      id="services"
      className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20"
    >
      <h1 className="text-4xl font-bold text-gray-800 md:text-5xl xl:text-5xl">
        Finishing processes
      </h1>
      <div className="flex flex-col md:flex-row gap-10 md:gap-12 xl:gap-16">
        <div className="flex flex-row gap-3 md:w-4/4">
          <div className="flex flex-col items-center space-y-4 md:flex-col">
            <div className="relative h-106 w-full md:w-3/4">
              <img
                src="/Image4.jpg"
                alt="Machine Parts"
                className="object-cover object-center h-full w-full"
              />
            </div>

            <p className="text-1xl text-gray-600 md:text-1xl xl:text-2xl">
              Anodizing, Electropolish, Powder coating, <br />Tampon printing/Pad
              printing
            </p>
          </div>

          <div className="flex flex-col items-center space-y-4 md:flex-col">
            <p className="text-1xl text-gray-600 md:text-1xl xl:text-2xl">
              Zincing, Nickel coating, Oxidation, Passivating, Phosphating
            </p>

            <div className="relative h-106 w-full md:w-3/4">
              <img
                src="/Image5.jpg"
                alt="Machine Parts"
                className="object-cover object-center h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Processing;
