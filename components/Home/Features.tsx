import React from "react";
import {
  FaHeart,
  FaBoxOpen,
  FaGift,
  FaHandshake,
  FaThLarge,
  FaHandHoldingHeart,
} from "react-icons/fa";

const featureData = [
  {
    title: "Handmade with Love",
    description:
      "Each crochet toy is lovingly handmade with care and attention to detail, ensuring a unique product for your loved ones.",
    icon: <FaHeart className="w-12 h-12 text-[#A67B5B] mx-auto" />,
  },

  {
    title: "New Arrivals",
    description:
      "Be the first to know about our latest creations and exclusive collections.",
    icon: <FaBoxOpen className="w-12 h-12 text-[#A67B5B] mx-auto" />,
  },

  {
    title: "Custom Orders",
    description:
      "Chat with us to create custom crochet toys tailored to your preferences and ideas.",
    icon: <FaThLarge className="w-12 h-12 text-[#A67B5B] mx-auto" />,
  },
  {
    title: "Gift Wrapping",
    description:
      "Make your gift extra special with our beautiful gift wrapping options, perfect for any occasion.",
    icon: <FaGift className="w-12 h-12 text-[#A67B5B] mx-auto" />,
  },
  {
    title: "Quality Materials",
    description:
      "Our crochet toys are crafted from high-quality materials, ensuring softness and long-lasting beauty.",
    icon: <FaHandHoldingHeart className="w-12 h-12 text-[#A67B5B] mx-auto" />,
  },

  {
    title: "Eco-Friendly",
    description:
      "Our toys are made from eco-friendly materials, ensuring a greener planet for future generations.",
    icon: <FaHandshake className="w-12 h-12 text-[#A67B5B] mx-auto" />,
  },
];

type Props = {
  id?: string;
};

const Features = ({ id }: Props) => {
  return (
    <div id={id} className="py-20">
      <div className="w-[80%] mx-auto grid grid-cols-1 mt-20 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {featureData.map((feature, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-anchor-placement="top-center"
            key={index}
            className="text-center"
          >
            {feature.icon}
            <h1 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
              {feature.title}
            </h1>
            <p className="text-sm text-gray-600 mt-2  dark:text-white">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
