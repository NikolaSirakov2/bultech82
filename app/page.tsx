"use client"
import AboutUs from "@/app/components/AboutUs";
import ContactUs from "@/app/components/ContactUs";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import Processing from "@/app/components/Processing";
import SampleParts from "@/app/components/SampleParts";
import Navbar from "@/app/components/Navbar"; 
import React from "react";
import { LanguageProvider } from "./components/LanguageContext";

// ...

export default function App() {
  return (
    <LanguageProvider>
      <>
        <Navbar /> 
        <div id="hero"><Hero /></div>
        <div id="about-us"><AboutUs /></div>
        <div id="production-processes"><Services /></div>
        <div id="post-processing"><Processing /></div>
        <div id="sample-parts"><SampleParts /></div>
        <div id="contact-us"><ContactUs /></div>
      </>
    </LanguageProvider>
  );
}