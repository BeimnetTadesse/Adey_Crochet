"use client";
import React, { useState, useEffect } from "react";
import { navLinks } from "@/constant/constant";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";
import ThemeToggle from "@/components/Helper/ThemeToggle";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`transition-all duration-200 h-[12vh] z-[100] fixed w-full ${
        navBg ? "bg-[#A67B5B] dark:bg-black shadow-md" : ""
      }`}
    >
      <div className="flex items-center h-full justify-between sm:w-[80%] w-[90%] mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-white sm:text-3xl">Adey&apos;s</div>
        
        {/* Nav Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              onClick={(e) => {
                if (link.url.startsWith("#")) {
                  handleScroll(e, link.url.substring(1));
                }
              }}
            >
              <p className="text-white hover:text-[#6B4226] font-semibold transition-all duration-200">
                {link.label}
              </p>
            </Link>
          ))}
        </div>
        
        {/* Button & Theme Toggle */}
        <div className="flex items-center space-x-4">
          <a
          href="#contact"
          onClick={(e) => handleScroll(e, "contact")}
          className="box-border relative z-30 inline-flex items-center justify-center w-auto px-5 py-2.5 overflow-hidden font-bold text-white transition-all duration-300 bg-[#8B5E3C] rounded-md cursor-pointer group ring-offset-2 ring-1 ring-[#A67B5B] ring-offset-[#8B5E3C] hover:ring-offset-[#6B4226] ease focus:outline-none"
          >
          <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
          <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
          <span className="relative z-20 flex items-center text-sm">
         <FaShoppingBag className="mr-3 w-5 h-5" />
          Buy Now
          </span>
        </a>
          
          {/* Theme Toggle */}
          <ThemeToggle />
          
          {/* Mobile Menu Toggle */}
          <HiBars3BottomRight
            onClick={openNav}
            className="text-white w-8 h-8 cursor-pointer lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
