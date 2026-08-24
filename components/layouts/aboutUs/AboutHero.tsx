"use client";

import { useGSAP } from "@gsap/react";
import { Box, Container, Typography } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EB_Garamond, Poppins, Romanesco } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const ebGaramond = EB_Garamond({ weight: ["400", "500", "600"], subsets: ["latin"] });
const romanesco = Romanesco({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: ["300", "400", "500", "600"], subsets: ["latin"] });

const AboutHero = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".about-hero-element",
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.15, 
        ease: "power3.out", 
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse"
        }
      }
    );
  }, { scope: container });

  return (
    <Box
      ref={container}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#EBEBE2", // Match navbar background
        pt: "90px", // Match exactly the navbar height
      }}
    >
      <Box sx={{ position: "relative", width: "100%", display: "flex", overflow: "hidden" }}>
        {/* Desktop Image */}
        <Box sx={{ width: "100%", display: { xs: "none", md: "block" } }}>
          <Image
            src="/images/aboutUs/desktopHero.webp"
            alt="About Us Hero Background Desktop"
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
            src="/images/aboutUs/mobileHero.webp"
            alt="About Us Hero Background Mobile"
            width={1080}
            height={1920}
            quality={100}
            style={{ width: "100%", height: "auto", display: "block" }}
            priority
          />
        </Box>

        {/* Dark Overlay Gradient */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 40%, rgba(0, 0, 0, 0) 100%)",
            zIndex: 1,
          }}
        />

        {/* Content Container positioned absolutely over the image */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
        <Container maxWidth="xl" sx={{ display: "flex", flexDirection: "column", px: { xs: 2, md: 8 } }}>
          <Box sx={{ maxWidth: "700px" }}>
            
            {/* Top Label */}
            <Box className="about-hero-element" sx={{ display: "flex", alignItems: "center", gap: "16px", mb: { xs: "15px", md: "30px" } }}>
              <Box sx={{ width: "40px", height: "1px", backgroundColor: "#D4AF37" }} />
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 500,
                  fontSize: { xs: "12px", md: "14px" },
                  letterSpacing: "3px",
                  color: "#D4AF37", // Gold
                  textTransform: "uppercase",
                }}
              >
                OUR STORY · SINCE 1989
              </Typography>
              <Box sx={{ width: "40px", height: "1px", backgroundColor: "#D4AF37" }} />
            </Box>

            {/* Main Headline */}
            <Box className="about-hero-element" sx={{ mb: { xs: "15px", md: "30px" } }}>
              <Typography
                sx={{
                  fontFamily: ebGaramond.style.fontFamily,
                  fontSize: { xs: "36px", sm: "48px", md: "84px" },
                  fontWeight: 500,
                  lineHeight: 1.1,
                  color: "#FFFFFF",
                }}
              >
                A legacy of
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: { xs: "8px", md: "15px" } }}>
                <Typography
                  sx={{
                    fontFamily: romanesco.style.fontFamily,
                    fontSize: { xs: "48px", sm: "60px", md: "110px" },
                    color: "#D4AF37", // gold hue
                    lineHeight: 0.8,
                    mt: { xs: "10px", md: "0" }
                  }}
                >
                  purity,
                </Typography>
                <Typography
                  sx={{
                    fontFamily: ebGaramond.style.fontFamily,
                    fontSize: { xs: "36px", sm: "48px", md: "84px" },
                    fontWeight: 500,
                    lineHeight: 1.1,
                    color: "#FFFFFF",
                  }}
                >
                  taste and trust.
                </Typography>
              </Box>
            </Box>

            {/* Description */}
            <Typography
              className="about-hero-element"
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 300,
                fontSize: { xs: "14px", md: "20px" },
                color: "rgba(255, 255, 255, 0.9)",
                lineHeight: 1.6,
                maxWidth: "650px",
              }}
            >
              For generations, Pahalwan Lassiwale has been a cornerstone of Aligarh's culinary heritage. We take pride in preserving the authentic flavours that have delighted families for decades.
            </Typography>

          </Box>
        </Container>
      </Box>
      </Box>
    </Box>
  );
};

export default AboutHero;
