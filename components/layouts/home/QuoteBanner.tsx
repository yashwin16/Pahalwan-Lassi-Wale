"use client";

import React, { useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import { Marko_One } from "next/font/google";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const markoOne = Marko_One({ weight: "400", subsets: ["latin"] });

export default function QuoteBanner() {
  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".quote-item",
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 90%",
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
        minHeight: "150px",
        background: "linear-gradient(90deg, #DA393F 0%, #BA080F 100%)",
        display: "flex",
        alignItems: "center",
        py: { xs: "24px", md: 0 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: { xs: "20px", md: "60px" },
            alignItems: "center",
          }}
        >
          {[
            { icon: "🎉", text: "Festivals" },
            { icon: "💍", text: "Weddings" },
            { icon: "🎁", text: "Gifting" },
            { icon: "🏢", text: "Corporate Events" },
            { icon: "🎊", text: "Family Celebrations" },
          ].map((item, index) => (
            <Box key={index} className="quote-item" sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Typography sx={{ fontSize: { xs: "20px", md: "26px" } }}>{item.icon}</Typography>
              <Typography
                sx={{
                  fontFamily: markoOne.style.fontFamily,
                  color: "#FFFFFF",
                  fontSize: { xs: "16px", md: "26px" },
                  fontWeight: 400,
                }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
