import AboutUs from "@/app/components/AboutUs";
import ContactUs from "@/app/components/ContactUs";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import React from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <ContactUs />
    </>
  );
}
