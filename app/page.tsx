import AboutUs from "@/app/components/AboutUs";
import ContactUs from "@/app/components/ContactUs";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import React from "react";

export default function Home() {
  return (
    <>
      <div id="hero"><Hero /></div>
      <div id="about-us"><AboutUs /></div>
      <div id="services"><Services /></div>
      <div id="contact-us"><ContactUs /></div>
    </>
  );
}