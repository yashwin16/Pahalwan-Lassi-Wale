"use client";

import { useGSAP } from "@gsap/react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Box, Button, Container, Typography } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EB_Garamond, Poppins, Romanesco } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const ebGaramond = EB_Garamond({ weight: ["400", "500", "600"], subsets: ["latin"] });
const romanesco = Romanesco({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({ weight: ["300", "400", "500", "600"], subsets: ["latin"] });

const statsData = [
  { value: "1989", label: "FOUNDED" },
  { value: "2+", label: "OUTLETS" },
  { value: "100%", label: "VEGETARIAN" },
  { value: "₹300", label: "AVG. FOR TWO" },
];

const HeroSection = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".hero-element",
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
      id="home"
      ref={container}
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "#fff",
        overflow: "hidden", 
        pt: { xs: "80px", md: "90px" }, // account for navbar
        pb: { xs: "20px", md: "20px" } // padding for mobile when content stacks
      }}
    >
      {/* Background Image for Desktop */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          minHeight: "100%",
          zIndex: 0,
          display: { xs: "none", md: "block" },
        }}
      >
        <Image
          src="/images/home/heroSection.webp"
          alt="Hero Background Desktop"
          fill sizes="100vw"
          quality={100}
          style={{ objectFit: "cover", objectPosition: "right center" }}
          priority
        />
      </Box>

      {/* Background Image for Mobile */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          display: { xs: "block", md: "none" },
        }}
      >
        <Image
          src="/images/home/herosection1_mobile.webp"
          alt="Hero Background Mobile"
          fill sizes="(max-width: 768px) 100vw, 50vw"
          quality={100}
          style={{ objectFit: "cover", objectPosition: "top center" }}
          priority
        />
      </Box>

      {/* Dark Overlay Gradient (matches reference image's dark left side) */}
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

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", flexGrow: 1, px: { xs: 2, md: 8 } }}>
        <Box sx={{ maxWidth: "700px", mt: { xs: "20px", md: "50px" } }}>
          
          {/* Top Label */}
          <Box className="hero-element" sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "center", md: "flex-start" }, gap: "16px", mb: { xs: "10px", md: "16px" }, width: "100%" }}>
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
              PAHALWAN LASSI WALE & SWEETS · SINCE 1989
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" }, width: "40px", height: "1px", backgroundColor: "#D4AF37" }} />
          </Box>

          {/* Main Headline */}
          <Box className="hero-element" sx={{ mb: { xs: "12px", md: "16px" } }}>
            <Typography
              sx={{
                fontFamily: ebGaramond.style.fontFamily,
                fontSize: { xs: "32px", sm: "44px", md: "56px", lg: "68px" },
                fontWeight: 500,
                lineHeight: 1.1,
                color: "#FFFFFF",
              }}
            >
              Making traditions
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "15px" }}>
              <Typography
                sx={{
                  fontFamily: romanesco.style.fontFamily,
                  fontSize: { xs: "44px", sm: "60px", md: "72px", lg: "90px" },
                  color: "#F69F9B", // soft pinkish hue like in the reference
                  lineHeight: 0.8,
                  mt: { xs: "10px", md: "0" }
                }}
              >
                trendy,
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
                one bite at a time.
              </Typography>
            </Box>
          </Box>

          {/* Description */}
          <Typography
            className="hero-element"
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
            From our signature lassi to handcrafted mithai and the flavours our city loves — Pahalwan Lassiwale brings together a beloved heritage sweet shop and authentic taste under one roof, across Aligarh.
          </Typography>

          {/* Buttons */}
          <Box className="hero-element" sx={{ display: "flex", gap: "20px", flexWrap: "wrap", mb: { xs: "24px", md: "40px" } }}>
            <Link href="/product" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                endIcon={<ArrowRightAltIcon />}
                sx={{
                  backgroundColor: "#BA080F", // brand red
                  color: "#fff",
                  borderRadius: "30px",
                  px: "32px",
                  py: "12px",
                  textTransform: "none",
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 500,
                  fontSize: "16px",
                  boxShadow: "none",
                  "&:hover": { backgroundColor: "#99060c", boxShadow: "none" }
                }}
              >
                Explore our menu
              </Button>
            </Link>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                endIcon={<ArrowRightAltIcon />}
                sx={{
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  color: "#fff",
                  borderRadius: "30px",
                  px: "32px",
                  py: "12px",
                  textTransform: "none",
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 500,
                  fontSize: "16px",
                  "&:hover": { borderColor: "#fff", backgroundColor: "rgba(255,255,255,0.1)" }
                }}
              >
                Contact now
              </Button>
            </Link>
          </Box>
        </Box>

        {/* Bottom Stats Row */}
        <Box 
          className="hero-element"
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
                  fontSize: { xs: "12px", md: "14px" },
                  fontWeight: 600,
                  letterSpacing: "1.5px",
                  color: "rgba(255,255,255,0.7)",
                  textTransform: "uppercase",
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

export default HeroSection;
