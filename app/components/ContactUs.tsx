import React from "react";
import Button from "../../helpers/Button";

const ContactUs = () => {
  return (
    <section
      id="contacts"
      className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20"
    >
      <div className="flex flex-col md:flex-row gap-10 md:gap-12 xl:gap-16">
        <div className="relative h-106 w-full md:w-1/2">
          <img
            src="/OldTown.jpg"
            alt="Old Town"
            className="object-cover object-center h-full w-full"
          />
        </div>
        <div className="flex flex-col gap-3 md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 md:text-5xl xl:text-6xl">
            Contact Us
          </h1>

          <p className="text-1xl text-gray-600 md:text-1xl xl:text-2xl">
            Plovdiv, Bulgaria.
          </p>

          <p className="text-1xl text-gray-600 md:text-1xl xl:text-2xl">
            Trakia, Industrial Zone, 4023
          </p>

          <p className="text-1xl text-gray-600 md:text-1xl xl:text-2xl">
            +359892440113
          </p>

          <p className="text-1xl text-gray-600 md:text-1xl xl:text-2xl">
            info@bultech82.com
          </p>

          <Button>Send us a message</Button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
