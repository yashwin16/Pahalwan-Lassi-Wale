"use client";

import { useGSAP } from "@gsap/react";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";
import { EB_Garamond, Maname, Romanesco } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";

const maname = Maname({ weight: "400", subsets: ["latin"] });
const romanesco = Romanesco({ weight: "400", subsets: ["latin"] });
const ebGaramond = EB_Garamond({ weight: "500", style: "italic", subsets: ["latin"] });

interface CategoryHeroProps {
  title: string;
  desktopImage?: string;
  mobileImage?: string;
}

export default function CategoryHero({ title, desktopImage, mobileImage }: CategoryHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(containerRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    });
  }, { scope: containerRef });

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
          backgroundColor: "#BA080F", // Brand red
          overflow: "hidden",
          mb: { xs: "15px", md: "30px" }, // Gap between banner and image
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            opacity: 0.9,
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
              fontSize: { xs: "32px", md: "64px" },
              lineHeight: 1,
              pb: { xs: "15px", md: "40px" }, // Visual adjustment for font baseline
              textAlign: "center",
              zIndex: 2,
              position: "relative",
            }}
          >
          {title}
        </Typography>
      </Box>

      {/* Background and Layout Container */}
      <Box
        ref={containerRef}
        sx={{
          width: "100%",
          display: "flex",
          backgroundColor: "#EBEBE2"
        }}
      >
        {/* Desktop Image */}
        {desktopImage && (
          <Box sx={{ width: "100%", display: { xs: "none", md: "block" } }}>
            <Image
              src={desktopImage}
              alt={`${title} Hero Desktop Image`}
              width={1920}
              height={1080}
              quality={100}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
          </Box>
        )}

        {/* Mobile Image */}
        {mobileImage && (
          <Box sx={{ width: "100%", display: { xs: "block", md: "none" } }}>
            <Image
              src={mobileImage}
              alt={`${title} Hero Mobile Image`}
              width={1080}
              height={1920}
              quality={100}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}
