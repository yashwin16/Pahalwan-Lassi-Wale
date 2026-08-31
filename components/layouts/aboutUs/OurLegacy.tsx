"use client";

import { Box, Typography } from "@mui/material";
import { DM_Sans, Marko_One } from "next/font/google";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const dmSans = DM_Sans({ weight: ["400", "500", "600", "700"], subsets: ["latin"] });
const markoOne = Marko_One({ weight: ["400"], subsets: ["latin"] });

const OurLegacy = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Title animation
    gsap.fromTo(".legacy-title",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: ".legacy-title", start: "top 85%", toggleActions: "play none none reverse" } }
    );
    
    // Texts stagger animation
    gsap.fromTo(".legacy-text",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, scrollTrigger: { trigger: ".legacy-text", start: "top 85%", toggleActions: "play none none reverse" } }
    );
    
    // Logos pop-in animation
    gsap.fromTo(".legacy-logo",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, stagger: 0.3, scrollTrigger: { trigger: ".legacy-logos-container", start: "top 80%", toggleActions: "play none none reverse" } }
    );
  }, { scope: containerRef });

  return (
    <Box
      ref={containerRef}
      sx={{
        width: "100%",
        backgroundColor: "#EBEBE2",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        pt: { xs: "60px", md: "80px" },
        pb: { xs: "60px", md: "80px" },
      }}
    >

      {/* Background Watermark */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.04, // 4% Opacity from Figma
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/images/icons/logo.webp"
          alt="Watermark Background"
          fill sizes="100vw"
          style={{ objectFit: "contain" }}
        />
      </Box>

      {/* Content */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1270px", // Exact Figma dimension
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: { xs: 2, sm: 4, md: 6, lg: 0 },
        }}
      >
        {/* Title: 310 x 64 */}
        <Typography
          className="legacy-title"
          variant="h2"
          sx={{
            fontFamily: markoOne.style.fontFamily,
            color: "#8F0006", // Hex from Figma
            fontSize: { xs: "32px", sm: "40px", md: "48px" },
            lineHeight: "100%",
            width: { xs: "auto", md: "310px" }, // Exact Figma dimension
            fontWeight: 400,
            mb: { xs: 3, sm: 4, md: "40px" },
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Our Legacy
        </Typography>

        <Typography
          className="legacy-text"
          variant="body1"
          sx={{
            fontFamily: dmSans.style.fontFamily,
            color: "#BA080F", // Hex from Figma
            fontSize: { xs: "16px", sm: "20px", md: "26px", lg: "35px" },
            textAlign: "center",
            lineHeight: { xs: "1.6", md: "1.5" },
            fontWeight: 400,
            mb: { xs: 4, sm: 5, md: "60px" },
            width: "100%",
            maxWidth: "1270px"
          }}
        >
          Our journey began in 1989, when Late Shri Harish Chandra Gupta started our lassi and sweets shop at Khai Dora, Jaiganj Road, Aligarh.
        </Typography>

        <Box className="legacy-logos-container" sx={{ 
          display: "flex", 
          flexDirection: { xs: "column", sm: "row" }, 
          alignItems: "center", 
          justifyContent: "space-between", 
          width: "100%",
          maxWidth: "900px", // To visually space them apart as in the design
          mb: { xs: 4, sm: 5, md: "40px" },
          gap: { xs: 4, sm: 0 }
        }}>
          {/* Left Old Logo: 318 x 179 */}
          <Box className="legacy-logo" sx={{ position: "relative", width: { xs: "200px", sm: "240px", md: "318px" }, height: { xs: "112px", sm: "135px", md: "179px" } }}>
            <Image 
              src="/images/icons/pahalwanOldLogo.webp" 
              alt="Pahalwan Old Logo" 
              fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "contain" }} 
            />
          </Box>
          
          {/* Right New Logo: 190 x 190 */}
          <Box className="legacy-logo" sx={{ position: "relative", width: { xs: "120px", sm: "150px", md: "190px" }, height: { xs: "120px", sm: "150px", md: "190px" } }}>
            <Image 
              src="/images/icons/logo.webp" 
              alt="Pahalwan New Logo" 
              fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "contain" }} 
            />
          </Box>
        </Box>

        <Typography
          className="legacy-text"
          variant="body1"
          sx={{
            fontFamily: dmSans.style.fontFamily,
            color: "#BA080F", // Hex from Figma
            fontSize: { xs: "16px", sm: "20px", md: "26px", lg: "35px" },
            textAlign: "center",
            lineHeight: { xs: "1.6", md: "1.5" },
            fontWeight: 400,
            mb: { xs: 2, sm: 3, md: 4 },
            width: "100%",
            maxWidth: "1270px"
          }}
        >
          What began as a small shop with a passion for authentic taste has grown over the years into two outlets. In 2022, we opened our Sasni Gate outlet and restaurant, continuing our journey while keeping the same commitment to quality, freshness, and traditional flavours.
        </Typography>

        <Typography
          className="legacy-text"
          variant="body1"
          sx={{
            fontFamily: dmSans.style.fontFamily,
            color: "#BA080F", // Hex from Figma
            fontSize: { xs: "16px", sm: "20px", md: "26px", lg: "35px" },
            textAlign: "center",
            lineHeight: { xs: "1.6", md: "1.5" },
            fontWeight: 400,
            mb: { xs: 4, sm: 5, md: "40px" },
            width: "100%",
          }}
        >
          For generations, we have been fortunate to earn the love and trust of our customers.
        </Typography>

        {/* Bottom Bolder Paragraph: 1190 x 114 */}
        <Box sx={{ width: "100%", maxWidth: "1190px", display: "flex", justifyContent: "center", mt: { xs: 1, sm: 2, md: "20px" } }}>
          <Typography
            className="legacy-text"
            variant="body1"
            sx={{
              fontFamily: markoOne.style.fontFamily,
              color: "#BA080F", // Hex from Figma
              fontSize: { xs: "18px", sm: "24px", md: "28px", lg: "35px" },
              fontWeight: 400,
              textAlign: "center",
              lineHeight: { xs: "1.6", md: "1.5" },
              width: "100%",
            }}
          >
            Today, we proudly carry forward the legacy that began in 1989 serving the same taste, with the same warmth.
          </Typography>
        </Box>

      </Box>
    </Box>
  );
};

export default OurLegacy;
