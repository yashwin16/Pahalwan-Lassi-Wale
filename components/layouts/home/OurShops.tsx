"use client";

import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const shopsData = [
  {
    image: "/images/outlets/outletSasnigate.webp",
    text: "1st floor of pahalwan lassi wale and sweets outlet,sasni gate chauraha, aligarh-202001",
  },
  {
    image: "/images/outlets/outletKhaiDora.webp",
    text: "Khai dora, jaiganj road, Aligarh-202001",
  },
];

const OurShops = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".ourshops-heading",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: ".ourshops-heading", start: "top 85%", toggleActions: "play reverse play reverse" } }
    );
    gsap.fromTo(".ourshops-divider",
      { scaleX: 0 },
      { scaleX: 1, duration: 1, scrollTrigger: { trigger: ".ourshops-divider", start: "top 85%", toggleActions: "play reverse play reverse" } }
    );
    gsap.fromTo(".ourshops-card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, scrollTrigger: { trigger: ".ourshops-card", start: "top 85%", toggleActions: "play reverse play reverse" } }
    );
  }, { scope: containerRef });

  return (
    <Box
      ref={containerRef}
      sx={{
        backgroundColor: "#EBEBE2", // Match global background
        paddingTop: "80px",
        paddingBottom: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Pattern */}
      <Box 
        sx={{ 
          position: "absolute", 
          top: 0, 
          left: 0, 
          width: "100%", 
          height: "100%", 
          zIndex: 0, 
          opacity: 0.1, // reduced opacity for cleaner look
          pointerEvents: "none",
        }}
      >
        <Image 
          src="/images/aboutUs/founderBg.webp" 
          alt="Our Shops Background Pattern" 
          fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
          style={{ objectFit: "cover" }} 
        />
      </Box>

      {/* Content Container */}
      <Box sx={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
        {/* Title */}
        <Typography
          className="ourshops-heading"
          variant="h2"
          sx={{
            fontFamily: "'Marko One', serif",
            color: "#8F0006",
            fontSize: "48px",
            fontWeight: 400,
            lineHeight: "100%",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Our Shops
        </Typography>

        {/* Separator */}
        <Box
          className="ourshops-divider"
          sx={{
            width: "60px",
            height: "2px",
            backgroundColor: "#BA080F", // Theme red
            marginBottom: "60px",
            transformOrigin: "center"
          }}
        />

        {/* Images Container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "30px", md: "60px" },
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            maxWidth: "1000px",
            padding: "0 20px",
          }}
        >
          {shopsData.map((shop, index) => (
            <Box
              className="ourshops-card"
              key={index}
              sx={{
                position: "relative",
                width: { xs: "100%", sm: "382px" },
                height: "524px",
                flexShrink: 0,
                borderRadius: "8px", // Added border radius
                overflow: "hidden",
                border: "2px solid #B39402", // Gold border matching Variety
              }}
            >
              <Image
                src={shop.image}
                alt="Shop Image"
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              {/* Text Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "67px",
                  backgroundColor: "rgba(139, 0, 6, 0.85)", // Deep red (#8F0006) at 85% opacity
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0 10px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "18px",
                    textAlign: "center",
                    color: "#FFF1EB",
                  }}
                >
                  {shop.text}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default OurShops;
