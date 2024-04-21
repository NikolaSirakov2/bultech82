import React from "react";

const AboutUs = () => {
  return (
    <section
      id="about-us"
      className="max-container padding-container flex flex-col gap-20 py-10 md:gap-28 lg:py-20"
    >
      <div className="flex flex-col md:flex-row gap-10 md:gap-12 xl:gap-16">
        <div className="flex flex-col gap-3 md:w-4/4">
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl xl:text-5xl">
            About Us
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
              Bultech 82 Ltd was established in 2023 in Plovdiv, which is the
              second largest city in the country and a center of the biggest
              industrial area in Bulgaria. As an OEM supplier, we are using
              various manufacturing processes and post-processing techniques to
              produce a wide range of parts used in machine building, furniture
              production, food industry, construction, and many other sectors.
            </p>
          </div>

          <div>
            <p className="text-1xl text-gray-600 md:text-1xl xl:text-2xl">
              No matter if your project needs a single part, a mass-produced
              item or you need to build a tool and develop a production process,
              Bultech 82 will help you achieve your goals, so don`t hesitate to
              contact us! We will be glad to check your requests and send you a
              feedback.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
