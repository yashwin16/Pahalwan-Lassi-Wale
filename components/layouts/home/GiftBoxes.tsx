"use client";

import React, { useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Poppins, EB_Garamond, Marko_One } from "next/font/google";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const poppins = Poppins({ weight: "400", style: "italic", subsets: ["latin"] });
const ebGaramond = EB_Garamond({ weight: "500", style: "italic", subsets: ["latin"] });
const markoOne = Marko_One({ weight: "400", subsets: ["latin"] });

export default function GiftBoxes() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
        toggleActions: "play reverse play reverse",
      }
    });

    tl.fromTo(
      ".gift-image",
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(
      ".gift-content",
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "<" // Start at same time as image
    )
    .fromTo(
      ".gift-text",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power2.out" },
      "-=0.5"
    );
  }, { scope: container });

  return (
    <Box ref={container} sx={{ width: "100%", py: "60px", display: "flex", justifyContent: "center", backgroundColor: "#EBEBE2", overflow: "hidden" }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1420px", // Accommodating 691px * 2
          px: { xs: "20px", md: "34px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            maxWidth: "1344px", // Updated to exactly match 1344px from Figma
            borderRadius: "0 0 20px 20px",
            overflow: "hidden",
          }}
        >
          {/* Top Wavy Edge Overlay (Exported from Figma) */}
          <Box
            sx={{
              position: "absolute",
              top: "-1px",
              left: "-1%",
              width: "102%",
              height: "41px",
              zIndex: 10,
              backgroundImage: "url('/images/home/imgCorner.webp')",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          />
          {/* Left Side: Image */}
          <Box
            className="gift-image"
            sx={{
              position: "relative",
              width: { xs: "100%", md: "50%" },
              height: { xs: "300px", sm: "400px", md: "500px", lg: "670px" },
            }}
          >
            <Image
              src="/images/home/mithaisharing.webp"
              alt="Sharing Mithai"
              fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </Box>

          {/* Right Side: Red Content Box with bgImage */}
          <Box
            className="gift-content"
            sx={{
              width: { xs: "100%", md: "50%" },
              backgroundColor: "#BA080F",
              backgroundImage: "url('/images/icons/bgImage.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "right", // Right aligned as per Figma
              p: { xs: "40px 20px", md: "60px 40px", lg: "60px 80px" },
              minHeight: { xs: "auto", md: "500px", lg: "670px" },
            }}
          >
            <Typography
              className="gift-text"
              sx={{
                fontFamily: ebGaramond.style.fontFamily,
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: { xs: "32px", sm: "40px", md: "48px", lg: "54px" },
                color: "#EFEFE6",
                mb: "20px",
                lineHeight: 1,
                width: "100%",
                whiteSpace: { xs: "normal", lg: "nowrap" },
              }}
            >
              Sweetness, Made to Share
            </Typography>

            <Typography
              className="gift-text"
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontStyle: "italic",
                fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "24px" },
                color: "#FFFFFF",
                maxWidth: "526px",
                mb: { xs: "60px", md: "100px" },
                lineHeight: { xs: "28px", md: "36px", lg: "44px" },
                fontWeight: 400,
                width: "100%",
              }}
            >
              Celebrate the little moments, share a box of happiness, and make every day a little sweeter.
            </Typography>

            <Typography
              className="gift-text"
              sx={{
                fontFamily: ebGaramond.style.fontFamily,
                fontStyle: "italic",
                fontSize: { xs: "24px", sm: "28px", md: "32px" },
                color: "#EFEFE6",
                mb: "20px",
                fontWeight: 500,
                lineHeight: 1,
                width: "100%",
                maxWidth: "526px",
                textAlign: "center", // Visual center for button group
              }}
            >
              for Bulk Order or Gift Boxes
            </Typography>

            <Box className="gift-text" sx={{ width: "100%", maxWidth: "526px", display: "flex", justifyContent: "center" }}>
              <Link href="/contact" passHref style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#FFFFFF",
                    color: "#BA080F",
                    fontFamily: markoOne.style.fontFamily,
                    fontWeight: 400,
                    fontSize: { xs: "20px", sm: "24px", md: "28px", lg: "32px" },
                    textTransform: "none",
                    borderRadius: "10px",
                    width: { xs: "180px", sm: "220px", md: "270px" },
                    height: { xs: "44px", md: "48px", lg: "56px" },
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "#F0F0F0",
                      boxShadow: "none",
                    },
                  }}
                >
                  Contact
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
