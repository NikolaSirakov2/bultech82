import React from "react";

const AboutUs = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20">
      <div className="flex flex-col gap-10 md:gap-12 xl:gap-16">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl xl:text-6xl">
            About Us
          </h1>

          <p className="text-1xl text-gray-600 md:text-1xl xl:text-2xl">
            Bultech 82 Ltd was established in Plovdiv, Bulgaria, in 2023. Using
            various manufacturing processes and post-processing techniques, the
            company offers the production of a wide range of parts used in
            machine building, furniture production, the food industry,
            construction, and many other sectors.
          </p>

          <p className="text-1xl text-gray-600 md:text-1xl xl:text-2xl">
            Our goal is to provide customers with the necessary production
            methods,post-processing and suitable packaging to deliver parts in
            perfect condition to their final destination, meeting each
            customer's specific requests.
          </p>
        </div>

        <div className="relative h-96 w-full">
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
