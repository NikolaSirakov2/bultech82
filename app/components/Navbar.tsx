"use client";

import styles from "../styles/Navbar.module.css";
import { useState } from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, NAV_LINKS_BG } from "@/constants/navLinks";
import { useLanguage } from "./LanguageContext";

const Navbar = () => {
  const { language: initialLanguage, setLanguage: setLanguageContext } = useLanguage();
  const [language, setLanguageState] = useState(() => localStorage.getItem('language') || initialLanguage);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const setLanguage = (newLanguage: string) => {
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
    setLanguageContext(newLanguage);
  };

  const toggleMenu = () => {
    if (window.innerWidth <= 524) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const toggleLanguage = () => {
    const newLanguage = language === "BG" ? "EN" : "BG";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/Bultech82_logo.svg" alt="logo" width={144} height={69} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {(language === "EN" ? NAV_LINKS_BG : NAV_LINKS).map((link) =>
          link.key === "6" ? (
            <Link
              href={link.href}
              key={link.key}
              className="text-xl text-gray-700 cursor-pointer pb-1.5 hover:font-bold"
            >
              {link.label}
            </Link>
          ) : (
            <a
              href={`#${link.href}`}
              key={link.key}
              className="text-xl text-gray-700 cursor-pointer pb-1.5 hover:font-bold"
              onClick={toggleMenu}
            >
              {link.label}
            </a>
          )
        )}
      </ul>

      <button
        onClick={toggleLanguage}
        className={`${styles["language-toggle"]} text-xl text-gray-700 cursor-pointer pb-1.5 hover:font-bold`}
      >
        {language}
      </button>

      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />
      <div
        ref={menuRef}
        className={`${styles["menu-container"]} ${
          isMenuOpen ? styles.open : ""
        }`}
      >
        <ul className={styles.menu}>
          {(language === "EN" ? NAV_LINKS_BG : NAV_LINKS).map((link) =>
            link.key === "6" ? (
              <Link href={link.href} key={link.key} passHref>
                <span
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                  className="regular-16 cursor-pointer pb-1.5"
                  onClick={toggleMenu}
                >
                  {link.label}
                </span>
              </Link>
            ) : (
              <a
                href={`#${link.href}`}
                key={link.key}
                className="regular-16 text-gray-50 cursor-pointer pb-1.5 hover:font-bold"
                onClick={toggleMenu}
              >
                {link.label}
              </a>
            )
          )}
          <li>
            <button
              onClick={toggleLanguage}
              className="regular-16 text-white cursor-pointer pb-1.5 hover:font-bold"
            >
              {language}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
