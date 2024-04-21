import React from "react";

function Services() {
  return (
    <section
      id="services"
      className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20"
    >
      <h1 className="text-4xl font-bold text-gray-800 md:text-5xl xl:text-5xl">
        Production Processes
      </h1>
      <div className="flex flex-col md:flex-row gap-10 md:gap-12 xl:gap-16">
        <div className="flex flex-col-reverse md:flex-col items-center space-y-4 md:items-start">
          <p className="text-1xl text-gray-600 md:text-1xl xl:text-2xl">
            Laser cutting and bending sheet, Marking laser, CNC and manual
            milling, CNC and manual turning, EDM
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
              Grinding, Tapping, Punching, Welding, Manual assembly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
