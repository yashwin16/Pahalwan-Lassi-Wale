"use client";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Footer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",
        width: "100%",
        backgroundColor: "#EBEBE2", // Match the global background used in homepage and about us
        paddingTop: "150px", 
        display: "block",
        margin: 0,
        paddingBottom: 0,
        marginBottom: 0,
      }}
    >
      {/* Top Part of Footer */}
      <Box
        sx={{
          background: "linear-gradient(180deg, #DA393F 0%, #BA080F 100%)",
          paddingTop: { xs: "30px", md: "60px" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          margin: 0,
          paddingBottom: 0,
          marginBottom: 0,
        }}
      >
        {/* Overlapping Logo */}
        <Box
          className="footer-logo"
          sx={{
            position: "absolute",
            top: { xs: "-60px", md: "-83px" },
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: "120px", md: "167px" },
            height: { xs: "120px", md: "167px" },
            zIndex: 10,
          }}
        >
          <Image
            src="/images/icons/logo.webp"
            alt="Pahalwan Lassiwale Logo"
            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "contain" }}
          />
        </Box>

        <Container maxWidth="xl" sx={{ px: { xs: 2, md: 8 }, pb: "40px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "100%",
              gap: { xs: "40px", md: "0" },
            }}
          >
            {/* Column 1: Links */}
            <Box className="footer-column" sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Link href="/about" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    fontFamily: "'Ramaraja', serif",
                    fontSize: "24px",
                    lineHeight: "1",
                    color: "#EBEBE2",
                    cursor: "pointer",
                  }}
                >
                  About Us
                </Typography>
              </Link>
              <Link href="/contact" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    fontFamily: "'Ramaraja', serif",
                    fontSize: "24px",
                    lineHeight: "1",
                    color: "#EBEBE2",
                    cursor: "pointer",
                  }}
                >
                  Contact Us
                </Typography>
              </Link>
            </Box>

            {/* Column 2: Hours */}
            <Box className="footer-column" sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Typography
                sx={{
                  fontFamily: "'Ramaraja', serif",
                  fontSize: "24px",
                  lineHeight: "1",
                  color: "#EBEBE2",
                }}
              >
                Hours
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <Box sx={{ display: "flex", gap: "24px" }}>
                  <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", color: "#FFF1EB", width: "90px" }}>
                    Weekdays
                  </Typography>
                  <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", color: "#FFF1EB" }}>
                    07:30 AM - 10:00PM
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: "24px", alignItems: "center" }}>
                  <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: "14px", color: "#FFF1EB", width: "90px" }}>
                    Any Query ?
                  </Typography>
                  <Link href="/contact" style={{ textDecoration: "none" }}>
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        color: "#FFF1EB",
                        textDecoration: "underline",
                        cursor: "pointer",
                      }}
                    >
                      CONTACT
                    </Typography>
                  </Link>
                </Box>
              </Box>
            </Box>

            {/* Spacer for Logo in the center (only on desktop) */}
            <Box sx={{ display: { xs: "none", md: "block" }, width: "220px" }} />

            {/* Column 3: Order Us On */}
            <Box className="footer-column" sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Typography
                sx={{
                  fontFamily: "'Ramaraja', serif",
                  fontSize: "24px",
                  lineHeight: "1",
                  color: "#EBEBE2",
                }}
              >
                Order Us On
              </Typography>
              <Box sx={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <a href="https://www.swiggy.com/direct/brand/153714?source=swiggy-direct&subSource=generic" target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
                  <Box sx={{ position: "relative", width: "90px", height: "30px", backgroundColor: "#FC8019", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", transition: "opacity 0.3s", "&:hover": { opacity: 0.9 } }}>
                    <Image src="/images/icons/swiggy.webp" alt="Swiggy" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "contain", padding: "6px" }} unoptimized={true} />
                  </Box>
                </a>
                <a href="https://link.zomato.com/xqzv/rshare?id=478197173056308a" target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
                  <Box sx={{ position: "relative", width: "90px", height: "30px", backgroundColor: "#E23744", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", transition: "opacity 0.3s", "&:hover": { opacity: 0.9 } }}>
                    <Image src="/images/icons/zomato.webp" alt="Zomato" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "contain", padding: "6px" }} unoptimized={true} />
                  </Box>
                </a>
              </Box>
            </Box>

            {/* Column 4: Follow Us */}
            <Box className="footer-column" sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Typography
                sx={{
                  fontFamily: "'Ramaraja', serif",
                  fontSize: "24px",
                  lineHeight: "1",
                  color: "#EBEBE2",
                }}
              >
                Follow Us
              </Typography>
              <Box sx={{ display: "flex", gap: "16px" }}>
                <a href="https://www.facebook.com/share/14m3FRormnw/" target="_blank" rel="noopener noreferrer" style={{ color: "#FFF1EB", display: "flex" }}>
                  <FacebookIcon sx={{ fontSize: "32px", cursor: "pointer", transition: "color 0.3s", "&:hover": { color: "#FFFFFF" } }} />
                </a>
                <a href="https://www.instagram.com/pahalwanlassiwale?utm_source=qr&igsi=MXkxeHllbGVkcnBzYg==" target="_blank" rel="noopener noreferrer" style={{ color: "#FFF1EB", display: "flex" }}>
                  <InstagramIcon sx={{ fontSize: "32px", cursor: "pointer", transition: "color 0.3s", "&:hover": { color: "#FFFFFF" } }} />
                </a>
              </Box>
            </Box>
          </Box>
        </Container>

        {/* Bottom Text Strip with distinct shade */}
        <Box
          sx={{
            width: "100%",
            height: "68px", 
            background: "linear-gradient(180deg, #8F0006 0%, #700004 100%)", 
            boxShadow: "inset 0px 1px 0px rgba(255, 255, 255, 0.4)", 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 0,
            padding: 0,
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Ramaraja', serif",
              fontSize: { xs: "24px", md: "48px" },
              color: "#EBEBE2",
              letterSpacing: { xs: "1px", md: "2px" },
              lineHeight: 1,
              textAlign: "center",
              width: "100%",
              m: 0,
              p: 0,
            }}
          >
            Pahalwan Lassi Wale & Sweets
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
