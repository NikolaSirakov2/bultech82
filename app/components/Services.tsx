import React from "react";
// import { PRODUCTION_PROCESSES, POST_PROCESSING } from "../../constants";

const services = [
  { name: "Laser Cutting", image: "/LaserCutting.jpg" },
  { name: "Bending", image: "/Bending.jpg" },
  { name: "Welding", image: "/Welding.jpg" },
  { name: "Deburring", image: "/Deburring.jpg" },
];

function Services() {
  return (
    <section
      id="services"
      className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20"
    >
      <h2 className="text-4xl font-bold mb-4">Production Processes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
      </div>

      <h2 className="text-4xl font-bold mt-8 mb-4">Post Processing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
      </div>
    </section>
  );
}

export default Services;
