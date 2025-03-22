import React from "react";
import { FaShoppingBag } from "react-icons/fa";

type Props = {
  id?: string; // Add this line
};

const Hero = ({ id }: Props) => {
  return (
    <div
      id={id}
      className="relative w-full h-screen flex justify-center flex-col bg-[#A67B5B] dark:bg-black "
    >
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Text Content */}
        <div data-aos="fade-up" className="text-left overflow-visible relative">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mt-6 mb-5 leading-[2.5rem] md:leading-[3.5rem]">
            Magical Toys,
            <br />
            Handmade with Love
          </h1>
          <p className="text-gray-300 text-xs md:text-base sm:text-sm font-medium mb-5">
            Our handcrafted crochet toys are a fusion of imagination and
            skill...
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-row space-x-4">
            <a
              href="#_"
              className="box-border relative z-30 inline-flex items-center justify-center w-auto px-5 py-2.5 overflow-hidden font-bold text-white dark:text-black transition-all duration-300 bg-[#6B4F3C] rounded-md cursor-pointer group ring-offset-2 ring-1 ring-[#8B5E3C] ring-offset-[#6B4F3C] hover:ring-offset-[#4B3621] ease focus:outline-none"
            >
              <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
              <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
              <span className="relative z-20 flex items-center text-sm">
                Buy Now
              </span>
            </a>
            <a
              href="#_"
              className="box-border relative z-30 inline-flex items-center justify-center w-auto px-5 py-2.5 overflow-hidden font-bold text-white dark:text-black transition-all duration-300 bg-[#D2B59B] rounded-md cursor-pointer group ring-offset-2 ring-1 ring-[#8B5E3C] ring-offset-[#D2B59B] ease focus:outline-none"
            >
              <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
              <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
              <span className="relative z-20 flex items-center text-sm">
                Explore More
              </span>
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div
          data-aos="zoom-in"
          data-aos-delay="150"
          className="mx-auto hidden xl:block"
        >
          <img
            src="/images/hero1.png"
            alt="hero"
            className="w-[430px] h-[430px] md:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
