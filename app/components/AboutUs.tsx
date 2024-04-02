import React from "react";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20"
    >
      <div className="flex flex-col md:flex-row gap-10 md:gap-12 xl:gap-16">
        <div className="flex flex-col gap-3 md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl xl:text-6xl">
            About Us
          </h1>

          <p className="text-1xl text-gray-600 md:text-1xl xl:text-2xl">
            Bultech 82 Ltd was established in Plovdiv, Bulgaria, in 2023.As an
            OEM supplier, we are using various manufacturing processes and
            post-processing techniques to produce a wide range of parts used in
            machine building, furniture production, food industry, construction,
            and many other sectors.
          </p>

          <p className="text-1xl text-gray-600 md:text-1xl xl:text-2xl">
            No matter if your project needs a single part or a mass-produced
            item, Bultech 82 will help you achieve your goals. We will be glad
            to check your requests.
          </p>
        </div>

        <div className="relative h-106 w-full md:w-1/2">
          <img
            src="/LatheMachine.jpg"
            alt="Machine Parts"
            className="object-cover object-center h-full w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
