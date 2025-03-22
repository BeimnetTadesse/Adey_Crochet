"use client";

import React, { useEffect } from "react";
import Hero from "./Hero";
import Features from "./Features";
import About from "./About";
import Review from "./Review/Review";
import Contact from "./Contact";
import Footer from "./Footer";  

import AOS from "aos";
import "aos/dist/aos.css"; 

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero id="home"/>
      <Features id="features"/>
      
      {/* First About Section (Image on Right) */}
      <About id="about"
        reverse={true}
        linkText="Learn More"
        title="Crafted with Care"
        imageSrc="/images/about2.png"
        listItems={[
          "Premium Quality Organic Cotton",
          "Vibrant & Long-Lasting Hand-Dyed Colors",
          "Uniquely Handcrafted with Love & Care",
          "Custom & Personalized Embroidered Designs",
        ]}
      />

      {/* Second About Section (Image on Left) */}
      <About
        reverse={false}
        linkText="Shop Now"
        title="Made with Love & Joy"
        imageSrc="/images/about1.png"
        listItems={[
          "Lightweight & Travel-Friendly",
          "Hand-Stitched for Durability",
          "Inspired by Nature & Whimsy",
          "Hypoallergenic & Child-Safe",
        ]}
      />

      <Review id="testimonials"/>
      <Contact id="contact"/>
      <Footer/> 
    </div>
  );
};

export default Home;
