"use client";

import React, { useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import { Maven_Pro, Poppins } from "next/font/google";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const mavenPro = Maven_Pro({ weight: "500", subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"] });

const reviewsData = [
  {
    text: '"Everything is very Delicious of this Shop. I loved them."',
    author: "Afzal Gaur (Dreamless Devdas)",
    rating: 5,
    platform: "Zomato"
  },
  {
    text: '"The food here is absolutely fresh and the quality is top-notch! A wonderful experience overall."',
    author: "Shivani Goswami",
    rating: 5,
    platform: "Zomato"
  },
  {
    text: '"Great place! The food is always fresh and tastes amazing. Definitely a positive experience."',
    author: "Meherkhan7085",
    rating: 4,
    platform: "Zomato"
  },
  {
    text: '"Good. Food, service aur atmosphere sabko 5/5 diya."',
    author: "JiyaurRehman Bjp",
    rating: 5,
    platform: "Restaurant Guru"
  },
  {
    text: '"The sweets were average, but their lassi is simply the best in town! Highly recommend trying the Kesar Badam Lassi."',
    author: "Manu Sharma",
    rating: 3,
    platform: "Restaurant Guru"
  },
];

export default function Reviews() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      }
    });

    tl.fromTo(
      ".reviews-title",
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(
      ".reviews-swiper",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.4"
    );
  }, { scope: container });

  return (
    <Box ref={container} sx={{ width: "100%", py: { xs: "60px", md: "100px" }, backgroundColor: "#EBEBE2", overflow: "hidden" }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
        {/* Title Section */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: "60px" }}>
          <Typography
            className="reviews-title"
            sx={{
              fontFamily: mavenPro.style.fontFamily,
              color: "#F37A14",
              fontSize: { xs: "36px", md: "48px" },
              fontWeight: 500,
              lineHeight: "40px",
              textAlign: "center",
            }}
          >
            Your love keeps us serving more.
          </Typography>
        </Box>

        {/* Swiper Carousel */}
        <Box className="reviews-swiper" sx={{ width: "100%" }}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
          >
            {reviewsData.map((review, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    width: "100%",
                    height: "302px",
                    boxSizing: "border-box", // Ensure padding doesn't increase width causing overlap
                    border: "2px solid #EFEFE6", 
                    borderRadius: "8px",
                    position: "relative",
                    padding: "70px 40px 40px", // Extra top padding for the quote icon
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between", // Space text and author name appropriately
                    alignItems: "center",
                    backgroundColor: "#FAF9F5", // Slightly lighter than the page background (#F2F1ED)
                  }}
                >
                  {/* Comment Icon */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "24px",
                      left: "24px",
                      width: "40px",
                      height: "40px",
                      borderRadius: "20px",
                      background: "linear-gradient(135deg, #ED325B 0%, #F58634 100%)",
                      border: "5px solid #EFEFE6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxSizing: "border-box",
                    }}
                  >
                    <Box sx={{ position: "relative", width: "16px", height: "16px" }}>
                      <Image
                        src="/images/icons/CommentIcon.webp"
                        alt="Quote Icon"
                        fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: "contain" }}
                        unoptimized={true}
                      />
                    </Box>
                  </Box>

                  {/* Review Text */}
                  <Typography
                    sx={{
                      fontFamily: poppins.style.fontFamily,
                      fontStyle: "italic",
                      fontSize: "14px",
                      color: "#666666",
                      textAlign: "center",
                      lineHeight: "26px",
                    }}
                  >
                    {review.text}
                  </Typography>

                  {/* Author Name, Stars, and Platform */}
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                    <Box sx={{ display: "flex", gap: "2px" }}>
                      {[...Array(5)].map((_, i) => (
                        i < review.rating ? (
                          <StarIcon key={i} sx={{ color: "#F37A14", fontSize: "18px" }} />
                        ) : (
                          <StarBorderIcon key={i} sx={{ color: "#F37A14", fontSize: "18px" }} />
                        )
                      ))}
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: poppins.style.fontFamily,
                        fontWeight: 700,
                        fontSize: "16px",
                        color: "#222222",
                        textAlign: "center"
                      }}
                    >
                      {review.author}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: poppins.style.fontFamily,
                        fontSize: "12px",
                        color: "#888888",
                        textAlign: "center",
                        textTransform: "uppercase",
                        letterSpacing: "1px"
                      }}
                    >
                      via {review.platform}
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}
