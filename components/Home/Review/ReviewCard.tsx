"use client";
import React from "react";
import { BsQuote } from "react-icons/bs";
import Image from "next/image";

type Props = {
  image: string;
  name: string;
  role: string;
  review: string;
};

const ReviewCard = ({ image, name, role, review }: Props) => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white p-8 rounded-lg shadow-lg max-w-xl mx-auto text-center">
      {/* Quote Icon */}
      <BsQuote className="w-16 h-16 text-[#A67B5B] mx-auto mb-6" />

      {/* Review Text with Padding */}
      <p className="text-lg font-light leading-relaxed px-6 mb-6">
        {review}
      </p>

      {/* Profile Section */}
      <div className="flex flex-col items-center">
        <Image
          src={image}
          alt={name}
          width={90}
          height={90}
          className="rounded-full border-4 border-[#A67B5B] object-cover"
        />

        {/* Name and Role */}
        <h1 className="text-xl font-semibold mt-4">{name}</h1>
        <h2 className="text-gray-400">{role}</h2>
      </div>
    </div>
  );
};

export default ReviewCard;
