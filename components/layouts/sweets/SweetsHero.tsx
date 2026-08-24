"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Maname, Romanesco, EB_Garamond } from "next/font/google";

const maname = Maname({ weight: "400", subsets: ["latin"] });
const romanesco = Romanesco({ weight: "400", subsets: ["latin"] });
const ebGaramond = EB_Garamond({ weight: "500", style: "italic", subsets: ["latin"] });

export default function SweetsHero() {
  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", pt: "90px" }}>
      {/* Pink Banner */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "60px", md: "96px" },
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#BA080F", // Updated to brand red
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            opacity: 0.9, // Increased opacity as requested
            backgroundImage: "url('/images/icons/bgImage.webp')",
            backgroundRepeat: "repeat",
            backgroundSize: "contain", 
            backgroundPosition: "center",
          }}
        />

        {/* Left edge yellow lines */}
        <Box sx={{ position: "absolute", left: "-38px", top: 0, height: "100%", width: "96px", zIndex: 2 }}>
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="100" y2="100" stroke="#F2F264" strokeWidth="6" vectorEffect="non-scaling-stroke" />
            <line x1="0" y1="100" x2="100" y2="0" stroke="#F2F264" strokeWidth="6" vectorEffect="non-scaling-stroke" />
          </svg>
        </Box>

        {/* Right edge yellow lines */}
        <Box sx={{ position: "absolute", right: "-38px", top: 0, height: "100%", width: "96px", zIndex: 2 }}>
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="100" y2="100" stroke="#F2F264" strokeWidth="6" vectorEffect="non-scaling-stroke" />
            <line x1="0" y1="100" x2="100" y2="0" stroke="#F2F264" strokeWidth="6" vectorEffect="non-scaling-stroke" />
          </svg>
        </Box>
        
        <Typography
            sx={{
              fontFamily: maname.style.fontFamily,
              color: "#F9F9F9",
              fontSize: { xs: "40px", md: "64px" },
              textAlign: "center",
              zIndex: 2,
              position: "relative",
            }}
          >
          Sweets
        </Typography>
      </Box>

      {/* Hero Image Section */}
      {/* Hero Image Section */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          backgroundColor: "#EAE7DA"
        }}
      >
        {/* Desktop Image */}
        <Box sx={{ width: "100%", display: { xs: "none", md: "block" } }}>
          <Image
            src="/images/sweets/sweetsherosection.webp"
            alt="Sweets Hero Desktop Image"
            width={1920}
            height={1080}
            quality={100}
            style={{ width: "100%", height: "auto", display: "block" }}
            priority
          />
        </Box>

        {/* Mobile Image */}
        <Box sx={{ width: "100%", display: { xs: "block", md: "none" } }}>
          <Image
            src="/images/sweets/sweetsHeroMobile.webp"
            alt="Sweets Hero Mobile Image"
            width={1080}
            height={1920}
            quality={100}
            style={{ width: "100%", height: "auto", display: "block" }}
            priority
          />
        </Box>
      </Box>
    </Box>
  );
}
