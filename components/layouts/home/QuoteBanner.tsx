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
        minHeight: { xs: "100px", md: "150px" },
        background: "linear-gradient(90deg, #DA393F 0%, #BA080F 100%)",
        display: "flex",
        alignItems: "center",
        py: { xs: "32px", md: "40px", lg: 0 },
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "center", lg: "space-between" },
            flexWrap: { xs: "wrap", lg: "nowrap" },
            gap: { xs: "20px", sm: "30px", md: "40px", lg: "10px" },
            alignItems: "center",
            width: "100%",
          }}
        >
          {[
            { icon: "🎉", text: "Festivals" },
            { icon: "💍", text: "Weddings" },
            { icon: "🎁", text: "Gifting" },
            { icon: "🏢", text: "Corporate Events" },
            { icon: "🎊", text: "Family Celebrations" },
          ].map((item, index) => (
            <Box key={index} className="quote-item" sx={{ display: "flex", alignItems: "center", gap: { xs: "8px", sm: "12px" } }}>
              <Typography sx={{ fontSize: { xs: "20px", sm: "24px", md: "26px", lg: "30px" } }}>{item.icon}</Typography>
              <Typography
                sx={{
                  fontFamily: markoOne.style.fontFamily,
                  color: "#FFFFFF",
                  fontSize: { xs: "16px", sm: "18px", md: "22px", lg: "24px" },
                  fontWeight: 400,
                  whiteSpace: "nowrap"
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
