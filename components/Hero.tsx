import React from "react";

function Hero() {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {/* Left */}

      <div className="flex flex-col gap-10 md:gap-12 xl:gap-16">
        {/* Title */}

        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl xl:text-6xl">
            Bultech82 Ltd
          </h1>

          <h3 className="text-2xl text-gray-600 md:text-3xl xl:text-4xl">
            Bulgarian company for manufacturing technologies
          </h3>
        </div>

        {/* Buttons */}

        <div className="flex flex-col gap-4 md:flex-row">
          <button className="btn btn-primary">Get Started</button>

          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
