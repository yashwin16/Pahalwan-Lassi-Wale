"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import { EB_Garamond, Poppins } from "next/font/google";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const ebGaramond = EB_Garamond({ weight: "500", style: "italic", subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });

export default function ProductPromo() {
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
      ".promo-content",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .fromTo(
      ".promo-line",
      { scaleX: 0 },
      { scaleX: 1, duration: 0.8, ease: "power3.out", stagger: 0.2 },
      "-=0.5"
    );
  }, { scope: container });

  return (
    <Box ref={container} sx={{ width: "100%", py: { xs: "60px", md: "80px" }, backgroundColor: "#EBEBE2" }}>
      <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "center", px: { xs: 2, md: 4 } }}>
        <Box
          className="promo-content"
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "1119px",
            minHeight: { xs: "auto", md: "360px" },
            // A rich, premium red gradient matching the website's brand colors
            background: "linear-gradient(135deg, #BA080F 0%, #700004 100%)",
            borderRadius: "20px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            px: { xs: 3, md: 8 },
            py: { xs: 6, md: 6 },
            boxShadow: "0px 15px 40px rgba(186, 8, 15, 0.3)",
          }}
        >
          {/* Subtle Background Pattern/Overlay */}
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
              opacity: 0.15,
              zIndex: 0,
            }}
          />

          {/* Top Decorative Line */}
          <Box
            className="promo-line"
            sx={{
              width: "120px",
              height: "2px",
              backgroundColor: "#F2F264", // Bright yellow for contrast on red
              mb: { xs: 3, md: 4 },
              zIndex: 1,
              transformOrigin: "center",
            }}
          />

          <Box sx={{ position: "relative", zIndex: 2, maxWidth: "800px" }}>
            <Typography
              sx={{
                fontFamily: ebGaramond.style.fontFamily,
                color: "#FFFFFF",
                fontSize: { xs: "28px", sm: "32px", md: "50px" },
                fontWeight: 500,
                fontStyle: "italic",
                lineHeight: 1.1,
                mb: "20px",
              }}
            >
              Make Every Occasion Special
            </Typography>
            
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                color: "#FFF1EB",
                fontSize: { xs: "14px", md: "16px" },
                fontWeight: 300,
                lineHeight: 1.7,
                mb: "32px",
                opacity: 0.9,
              }}
            >
              Looking for the perfect gift? Explore our premium sweet boxes, thoughtfully curated for weddings, festivals, and corporate gifting. Because nothing says 'celebration' better than the authentic taste of Pahalwan Lassiwale.
            </Typography>

            <Link href="/contact" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                endIcon={<ArrowRightAltIcon />}
                sx={{
                  backgroundColor: "#F2F264", 
                  color: "#8F0006",
                  borderRadius: "30px",
                  px: "32px",
                  py: "12px",
                  textTransform: "none",
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 600,
                  fontSize: "16px",
                  boxShadow: "none",
                  transition: "all 0.3s ease",
                  "&:hover": { backgroundColor: "#FFFFFF", color: "#BA080F", boxShadow: "0 8px 20px rgba(255,255,255,0.2)" }
                }}
              >
                Inquire for Bulk Orders
              </Button>
            </Link>
          </Box>

          {/* Bottom Decorative Line */}
          <Box
            className="promo-line"
            sx={{
              width: "120px",
              height: "2px",
              backgroundColor: "#F2F264",
              mt: 4,
              zIndex: 1,
              transformOrigin: "center",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
