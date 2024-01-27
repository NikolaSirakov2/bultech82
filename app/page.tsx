import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import React from "react";

export default function Home() {
  return (
    <>
      <Hero/>
      <AboutUs/>
      <Services/>
      <ContactUs/>
    </>
  );
}
