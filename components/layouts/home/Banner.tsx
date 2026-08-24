"use client";

import { Box, Container, Typography } from "@mui/material";
import { EB_Garamond, Poppins } from "next/font/google";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const ebGaramond = EB_Garamond({ weight: "500", style: "italic", subsets: ["latin"] });
const poppins = Poppins({ weight: "400", style: "italic", subsets: ["latin"] });

export default function Banner() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      },
    });

    tl.fromTo(
      ".banner-content",
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(
      ".banner-line",
      { scaleY: 0 },
      { scaleY: 1, duration: 0.8, ease: "power3.out", stagger: 0.2 },
      "-=0.5"
    );
  }, { scope: container });

  return (
    <Box ref={container} sx={{ width: "100%", py: { xs: "40px", md: "80px" }, backgroundColor: "#EBEBE2" }}>
      <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "center", px: { xs: 2, md: 4 } }}>
        <Box
          className="banner-content"
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "1119px",
            minHeight: { xs: "auto", md: "392px" },
            backgroundColor: "#BA080F",
            overflow: "hidden", // ensures decorative lines don't overflow
            display: "flex",
            alignItems: "center",
            px: { xs: 4, md: 8 },
            py: { xs: 6, md: 0 },
            boxShadow: "0px 10px 30px rgba(186, 8, 15, 0.2)",
          }}
        >
          {/* Background Image Pattern */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: "url('/images/icons/madefreshbg.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 1,
              zIndex: 0,
            }}
          />

          {/* Decorative Yellow Lines */}
          {/* Vertical Line */}
          <Box
            className="banner-line"
            sx={{
              position: "absolute",
              right: { xs: "30px", md: "130px" },
              top: 0,
              bottom: 0,
              width: "16px",
              backgroundColor: "#F2F264",
              zIndex: 1,
              transformOrigin: "top center",
            }}
          />
          {/* Diagonal Line */}
          <Box
            className="banner-line"
            sx={{
              position: "absolute",
              right: { xs: "90px", md: "230px" },
              bottom: "-20px",
              width: "14px",
              height: { xs: "270px", md: "380px" },
              backgroundColor: "#F2F264",
              transform: "rotate(51deg)",
              transformOrigin: "bottom center",
              zIndex: 1,
            }}
          />

          {/* Content Area */}
          <Box sx={{ position: "relative", zIndex: 2, maxWidth: "773px", pr: { xs: "50px", sm: 0 } }}>
            <Typography
              sx={{
                fontFamily: ebGaramond.style.fontFamily,
                color: "#EFEFE6",
                fontSize: { xs: "36px", md: "54px" },
                fontWeight: 500,
                fontStyle: "italic",
                lineHeight: 1,
                mb: "24px",
              }}
            >
              Made Fresh. Served With Love.
            </Typography>
            
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                color: "#EFEFE6",
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.6, // slightly increased for readability
                maxWidth: "652px",
              }}
            >
              From classic desi mithai to irresistible sweet treats, every piece is prepared with quality ingredients and authentic flavours. Whether it's a celebration or a simple craving, there's always a reason to make life a little sweeter.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
