import React from "react";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
type Props = {
  reverse: boolean; // Controls the order of image and text
  title: string; // The title to display in the section
  linkText: string; // Text for the link
  imageSrc: string; // Image source
  listItems: string[]; // List of features
  id?: string; // Add this line
};

const About = ({
  reverse,
  title,
  linkText,
  imageSrc,
  listItems,
  id,
}: Props) => {
  return (
    <div id={id} className="pb-0">
      <div
        className={`w-[80%] mx-auto flex flex-col lg:flex-row ${
          reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } gap-12 items-center`}
      >
        {/* Text Section */}
        <div className="flex-1 flex flex-col gap-4 self-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold dark:text-[#A67B5B]">
            {title}
          </h1>
          {/* List Section */}
          <div className="mt-10 space-y-8">
            {listItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-6 h-6 flex items-center justify-center rounded-full text-white bg-[#A67B5B]">
                  <FaCheck />
                </div>
                <p className="text-sm sm:text-base text-black dark:text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <a href="#_" className="text-[#A67B5B] hover:underline">
            {linkText}
          </a>
        </div>
        {/* Image Section */}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          className="flex-1"
        >
          <Image
            src={imageSrc}
            alt="About Us"
            width={380}
            height={380}
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
