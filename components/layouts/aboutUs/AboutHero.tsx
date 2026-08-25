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

const statsData = [
  { value: "1989", label: "FOUNDED" },
  { value: "35+", label: "YEARS OF TRUST" },
  { value: "100%", label: "AUTHENTIC" },
  { value: "1 Lakh+", label: "HAPPY CUSTOMERS" },
];

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
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#EBEBE2", // Match navbar background
        overflow: "hidden", 
        pt: { xs: "80px", md: "90px" }, 
        pb: { xs: "20px", md: "20px" } 
      }}
    >
      {/* Desktop Image */}
      <Box sx={{ position: "absolute", top: { xs: "80px", md: "90px" }, left: 0, width: "100%", height: { xs: "calc(100% - 80px)", md: "calc(100% - 90px)" }, zIndex: 0, display: { xs: "none", md: "block" } }}>
        <Image
          src="/images/aboutUs/heroDesktop.webp"
          alt="About Us Hero Background Desktop"
          fill sizes="100vw"
          quality={100}
          style={{ objectFit: "cover", objectPosition: "top center" }}
          priority
        />
      </Box>

      {/* Mobile Image */}
      <Box sx={{ position: "absolute", top: { xs: "80px", md: "90px" }, left: 0, width: "100%", height: { xs: "calc(100% - 80px)", md: "calc(100% - 90px)" }, zIndex: 0, display: { xs: "block", md: "none" } }}>
        <Image
          src="/images/aboutUs/mobileHero.webp"
          alt="About Us Hero Background Mobile"
          fill sizes="100vw"
          quality={100}
          style={{ objectFit: "cover", objectPosition: "top center" }}
          priority
        />
      </Box>

      {/* Dark Overlay Gradient */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "80px", md: "90px" },
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.4) 40%, rgba(0, 0, 0, 0) 100%)",
          zIndex: 1,
        }}
      />

      {/* Bottom Dark Overlay Gradient for Stats readability */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: { xs: "50%", md: "30%" },
          background: "linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0) 100%)",
          zIndex: 1,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", flexGrow: 1, px: { xs: 2, md: 8 } }}>
        <Box sx={{ maxWidth: "700px", mt: { xs: "20px", md: "50px" } }}>
          
          {/* Top Label */}
          <Box className="about-hero-element" sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", md: "flex-start" }, gap: "16px", mb: { xs: "10px", md: "16px" }, width: "100%" }}>
            <Box sx={{ display: { xs: "none", sm: "block" }, width: "40px", height: "1px", backgroundColor: "#D4AF37" }} />
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 500,
                fontSize: { xs: "10px", sm: "12px", md: "14px" },
                letterSpacing: { xs: "1px", sm: "2px", md: "3px" },
                color: "#D4AF37", // Gold
                textTransform: "uppercase",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              OUR STORY · SINCE 1989
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" }, width: "40px", height: "1px", backgroundColor: "#D4AF37" }} />
          </Box>

          {/* Main Headline */}
          <Box className="about-hero-element" sx={{ mb: { xs: "12px", md: "16px" } }}>
            <Typography
              sx={{
                fontFamily: ebGaramond.style.fontFamily,
                fontSize: { xs: "32px", sm: "44px", md: "56px", lg: "68px" },
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
                  fontSize: { xs: "44px", sm: "60px", md: "72px", lg: "90px" },
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
                  fontSize: { xs: "32px", sm: "44px", md: "56px", lg: "68px" },
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
              fontSize: { xs: "16px", md: "20px" },
              color: "rgba(255, 255, 255, 0.9)",
              lineHeight: 1.5,
              mb: { xs: "24px", md: "40px" },
              maxWidth: "650px",
            }}
          >
            For generations, Pahalwan Lassiwale has been a cornerstone of Aligarh's culinary heritage. We take pride in preserving the authentic flavours that have delighted families for decades.
          </Typography>

        </Box>

        {/* Bottom Stats Row */}
        <Box 
          className="about-hero-element"
          sx={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            width: "100%",
            flexWrap: "wrap",
            gap: { xs: "16px", md: "20px" },
            borderTop: "1px solid rgba(255,255,255,0.1)",
            pt: { xs: "16px", md: "20px" },
            mt: "auto" // pushes to the bottom
          }}
        >
          {statsData.map((stat, idx) => (
            <Box key={idx} sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", md: "flex-start" }, minWidth: { xs: "40%", md: "auto" } }}>
              <Typography
                sx={{
                  fontFamily: ebGaramond.style.fontFamily,
                  fontSize: { xs: "28px", sm: "36px", md: "40px", lg: "44px" },
                  color: "#D4AF37", // Gold
                  lineHeight: 1,
                  mb: "6px",
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontSize: { xs: "10px", md: "14px" },
                  fontWeight: 600,
                  letterSpacing: { xs: "1px", md: "1.5px" },
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                  textAlign: { xs: "center", md: "left" }
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default AboutHero;
