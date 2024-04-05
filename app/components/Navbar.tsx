"use client";

import styles from "../styles/Navbar.module.css";
import { useState } from "react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/navLinks";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    if (window.innerWidth <= 524) {
      setIsMenuOpen(!isMenuOpen);
    }
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
        {NAV_LINKS.map((link) => (
          <a
            href={`#${link.href}`}
            key={link.key}
            className="text-xl text-gray-700 cursor-pointer pb-1.5 transition-all hover:font-bold"
            onClick={toggleMenu}
          >
            {link.label}
          </a>
        ))}
      </ul>

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
          {NAV_LINKS.map((link) => (
            <a
              href={`#${link.href}`}
              key={link.key}
              className="regular-16 text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold"
              onClick={toggleMenu}
            >
              {link.label}
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
