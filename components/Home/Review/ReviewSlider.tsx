"use client";
import React from "react";
import ReviewCard from "./ReviewCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ReviewSlider = () => {
  return (
    <div className="w-full py-10">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
      >
        <ReviewCard
          image="/images/c2.jpg"
          name="Abraham David"
          role="Founder Kaptan"
          review="I was amazed by the quality of these crochet toys! The stitching is tight, and the materials feel premium. You can tell they are made with so much love and care. I’ve bought three so far, and I will definitely be coming back for more!"
        
        />
        <ReviewCard
          image="/images/c1.jpg"
          name="Rachel Joseph"
          role="CEO Hiyab"
          review="I was looking for a unique gift for my niece’s birthday, and I stumbled upon Adey's. I was so impressed by the quality of the toys that I bought one for my niece and one for myself. I love the attention to detail and the vibrant colors. I highly recommend Adey's!"
        />
        <ReviewCard
          image="/images/c3.jpeg"
          name="Sarah John"
          role="C0-Founder Dreams"
          review="I was amazed by the quality of these crochet toys! The stitching is tight, and the materials feel premium. You can tell they are made with so much love and care. I’ve bought three so far, and I will definitely be coming back for more!"
        />
      </Carousel>
    </div>
  );
};

export default ReviewSlider;
