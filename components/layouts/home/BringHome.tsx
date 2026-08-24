"use client";

import React, { useRef } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { EB_Garamond, Poppins, Open_Sans } from "next/font/google";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const ebGaramond = EB_Garamond({ weight: "500", style: "italic", subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });
const openSans = Open_Sans({ weight: "700", subsets: ["latin"] });

export default function BringHome() {
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
      ".bringhome-text",
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" }
    )
    .fromTo(
      ".bringhome-image",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.6"
    );
  }, { scope: container });

  return (
    <Box ref={container} sx={{ width: "100%", py: { xs: "60px", md: "100px" }, backgroundColor: "#EBEBE2" }}>
      <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "center", px: { xs: 2, md: 4 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "1119px",
            gap: "40px",
          }}
        >
          {/* Left Side: Text and Buttons */}
          <Box sx={{ width: { xs: "100%", md: "624px" }, flexShrink: 0, textAlign: { xs: "center", md: "left" } }}>
            <Typography
              className="bringhome-text"
              sx={{
                fontFamily: ebGaramond.style.fontFamily,
                color: "#DA393F",
                fontSize: { xs: "40px", md: "54px" },
                lineHeight: 1.1,
                mb: "20px",
                whiteSpace: { md: "nowrap" },
              }}
            >
              Bring Home the Sweetness!
            </Typography>
            <Typography
              className="bringhome-text"
              sx={{
                fontFamily: poppins.style.fontFamily,
                color: "#F37A14",
                fontSize: { xs: "16px", md: "24px" },
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: { xs: "32px", md: "44px" },
                letterSpacing: "1px",
                mb: "40px",
                maxWidth: "624px",
              }}
            >
              Order your favorite mithai and treats online,
              <br />
              delivered fresh to your doorstep.
            </Typography>

            <Box className="bringhome-text" sx={{ display: "flex", gap: "20px", justifyContent: { xs: "center", md: "flex-start" }, flexWrap: "wrap" }}>
              <Button
                href="https://www.swiggy.com/direct/brand/153714?source=swiggy-direct&subSource=generic"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                sx={{
                  backgroundColor: "#FC8019",
                  borderRadius: "10px",
                  width: { xs: "100%", sm: "276px" },
                  height: "61px",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#e37013",
                    boxShadow: "none",
                  },
                }}
              >
                <Box sx={{ position: "relative", width: "130px", height: "30px" }}>
                  <Image src="/images/icons/swiggy.webp" alt="Swiggy" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "contain" }} unoptimized={true} />
                </Box>
              </Button>
              <Button
                href="https://link.zomato.com/xqzv/rshare?id=478197173056308a"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                sx={{
                  backgroundColor: "#E23744",
                  borderRadius: "10px",
                  width: { xs: "100%", sm: "276px" },
                  height: "61px",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#cc2d39",
                    boxShadow: "none",
                  },
                }}
              >
                <Box sx={{ position: "relative", width: "130px", height: "30px" }}>
                  <Image src="/images/icons/zomato.webp" alt="Zomato" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "contain" }} unoptimized={true} />
                </Box>
              </Button>
            </Box>
          </Box>

          {/* Right Side: Image */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: { xs: "center", md: "flex-end" }, width: "100%" }}>
            <Box
              className="bringhome-image"
              sx={{
                position: "relative",
                width: { xs: "100%", md: "419px" },
                height: { xs: "auto", md: "550px" },
                aspectRatio: { xs: "419/550", md: "auto" },
                borderRadius: "70px",
                overflow: "hidden",
                boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Image
                src="/images/home/bringHome.webp"
                alt="Delivery Boy"
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover", objectPosition: "top center" }}
                unoptimized={true}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
