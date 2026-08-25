"use client";

import { useGSAP } from "@gsap/react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Box, Button, Container, Typography } from "@mui/material";
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
  { value: "100+", label: "VARIETIES" },
  { value: "DAILY", label: "MADE FRESH" },
  { value: "1989", label: "AUTHENTIC RECIPES" },
  { value: "100%", label: "VEGETARIAN" },
];

const ProductHero = () => {
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

  const handleScrollToProducts = () => {
    const element = document.getElementById("product-showcase");
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 78;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

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
        color: "#fff",
        overflow: "hidden", 
        pt: { xs: "80px", md: "90px" }, 
        pb: { xs: "20px", md: "20px" } 
      }}
    >
      {/* Background Image for Desktop */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          display: { xs: "none", md: "block" }
        }}
      >
        <Image
          src="/images/products/productsHerosection.webp"
          alt="Product Hero Background Desktop"
          fill sizes="100vw"
          quality={100}
          style={{ objectFit: "cover", objectPosition: "top center" }}
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
          display: { xs: "block", md: "none" }
        }}
      >
        <Image
          src="/images/products/productHerosectionMobile.webp"
          alt="Product Hero Background Mobile"
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
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(to right, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 0.1) 100%)",
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
                color: "#D4AF37", 
                textTransform: "uppercase",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              OUR SIGNATURE SELECTION
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
              Authentic taste
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: { xs: "8px", md: "15px" } }}>
              <Typography
                sx={{
                  fontFamily: romanesco.style.fontFamily,
                  fontSize: { xs: "44px", sm: "60px", md: "72px", lg: "90px" },
                  color: "#F69F9B", 
                  lineHeight: 0.8,
                  mt: { xs: "10px", md: "0" }
                }}
              >
                crafted,
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
                with pure love.
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
            Explore our range of traditional sweets, rich lassis, and savory snacks. Made fresh daily with the finest ingredients to bring you the true essence of Aligarh.
          </Typography>

          {/* Buttons */}
          <Box className="hero-element" sx={{ display: "flex", gap: "20px", flexWrap: "wrap", mb: { xs: "24px", md: "40px" } }}>
            <Button
              variant="contained"
              onClick={handleScrollToProducts}
              endIcon={<ArrowRightAltIcon />}
              sx={{
                backgroundColor: "#BA080F", 
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
              View All Products
            </Button>
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
            mt: "auto" 
          }}
        >
          {statsData.map((stat, idx) => (
            <Box key={idx} sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", md: "flex-start" }, minWidth: { xs: "40%", md: "auto" } }}>
              <Typography
                sx={{
                  fontFamily: ebGaramond.style.fontFamily,
                  fontSize: { xs: "28px", sm: "36px", md: "40px", lg: "44px" },
                  color: "#D4AF37", 
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
                  color: "rgba(255,255,255,0.7)",
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

export default ProductHero;
