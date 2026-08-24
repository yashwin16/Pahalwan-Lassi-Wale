"use client";

import React, { useState, useEffect } from "react";
import { Box, Container, Stack, Typography, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about-us", "cravings"];
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setActiveSection(sectionId);
    setMobileOpen(false); // Close drawer if open on mobile
    const element = document.getElementById(sectionId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 78; // offset for sticky navbar
      window.scrollTo({ top: y, behavior: "smooth" });
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  const navLinks = (
    <>
      <Link href="/" passHref style={{ textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
        <Typography
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            color: "#312D2D",
            fontSize: { xs: "32px", md: "16px" },
            borderBottom: pathname === "/" ? "2px solid #BA080F" : "2px solid transparent",
            pb: "2px",
            transition: "all 0.3s ease",
            "&:hover": { color: "#BA080F" }
          }}
        >
          Home
        </Typography>
      </Link>
      <Link href="/about" passHref style={{ textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
        <Typography 
          sx={{ 
            fontFamily: "'Inter', sans-serif", 
            fontWeight: 600, 
            color: "#312D2D", 
            fontSize: { xs: "32px", md: "16px" },
            borderBottom: pathname === "/about" ? "2px solid #BA080F" : "2px solid transparent",
            pb: "2px",
            transition: "all 0.3s ease",
            "&:hover": { color: "#BA080F" }
          }}
        >
          About Us
        </Typography>
      </Link>
      <Link href="/product" passHref style={{ textDecoration: "none" }} onClick={() => setMobileOpen(false)}>
        <Typography 
          sx={{ 
            fontFamily: "'Inter', sans-serif", 
            fontWeight: 600, 
            color: "#312D2D", 
            fontSize: { xs: "32px", md: "16px" },
            borderBottom: pathname === "/product" ? "2px solid #BA080F" : "2px solid transparent",
            pb: "2px",
            transition: "all 0.3s ease",
            "&:hover": { color: "#BA080F" }
          }}
        >
          Product
        </Typography>
      </Link>
    </>
  );

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#EBEBE2",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      }}
    >
      <Box
        sx={{
          height: "90px",
          width: "100%",
          maxWidth: "1440px",
          display: "flex",
          alignItems: "center",
          px: { xs: 2, md: 6 },
        }}
      >
        <Container maxWidth="xl" disableGutters>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {/* Left: Logo */}
            <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-start" }}>
              <Box sx={{ width: 150, height: 75, position: "relative" }}>
                <Image
                  src="/images/icons/logo.webp"
                  alt="Pahalwan Lassiwala Logo"
                  fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "contain", objectPosition: "left" }}
                />
              </Box>
            </Box>

            {/* Center: Navigation Links (Desktop) */}
            <Box sx={{ flex: 2, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
              <Stack direction="row" spacing={6} alignItems="center">
                {navLinks}
              </Stack>
            </Box>

            {/* Right: Contact Us (Desktop) */}
            <Box sx={{ flex: 1, display: { xs: "none", md: "flex" }, justifyContent: "flex-end" }}>
              <Link href="/contact" passHref style={{ textDecoration: "none" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", backgroundColor: "#BA080F", px: 3, py: 1.5, borderRadius: "4px", transition: "background 0.3s ease", "&:hover": { backgroundColor: "#8F0006" } }}>
                  <Typography sx={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "#FFFFFF", fontSize: "14px", letterSpacing: "1px", textTransform: "uppercase" }}>
                    Contact Us
                  </Typography>
                </Box>
              </Link>
            </Box>

            {/* Mobile Menu Icon */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={() => setMobileOpen(true)}
                sx={{ color: "#312D2D" }}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: { xs: "100%", sm: "400px" },
            backgroundColor: "#EBEBE2",
            display: "flex",
            flexDirection: "column",
            px: 4,
            py: 4,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 6 }}>
          <Box sx={{ width: 120, height: 60, position: "relative" }}>
            <Image
              src="/images/icons/logo.webp"
              alt="Pahalwan Lassiwala Logo"
              fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "contain", objectPosition: "left" }}
            />
          </Box>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: "#EA1B2C", p: 0 }}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>
        
        <Stack spacing={3} alignItems="flex-start" sx={{ width: "100%" }}>
          <Link href="/" passHref style={{ textDecoration: "none", width: "100%" }} onClick={() => setMobileOpen(false)}>
            <Typography sx={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: pathname === "/" ? "#BA080F" : "#312D2D", fontSize: "22px", pb: 2, borderBottom: "1px solid rgba(0,0,0,0.1)", transition: "all 0.3s ease" }}>
              Home
            </Typography>
          </Link>
          
          <Link href="/about" passHref style={{ textDecoration: "none", width: "100%" }} onClick={() => setMobileOpen(false)}>
            <Typography sx={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: pathname === "/about" ? "#BA080F" : "#312D2D", fontSize: "22px", pb: 2, borderBottom: "1px solid rgba(0,0,0,0.1)", transition: "all 0.3s ease" }}>
              About Us
            </Typography>
          </Link>
          
          <Link href="/product" passHref style={{ textDecoration: "none", width: "100%" }} onClick={() => setMobileOpen(false)}>
            <Typography sx={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: pathname === "/product" ? "#BA080F" : "#312D2D", fontSize: "22px", pb: 2, borderBottom: "1px solid rgba(0,0,0,0.1)", transition: "all 0.3s ease" }}>
              Product
            </Typography>
          </Link>
          
          <Link href="/contact" passHref style={{ textDecoration: "none", width: "100%", marginTop: "32px" }} onClick={() => setMobileOpen(false)}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", backgroundColor: "#BA080F", width: "100%", py: 2, borderRadius: "8px", transition: "background 0.3s ease", boxShadow: "0 4px 10px rgba(186,8,15,0.2)", "&:hover": { backgroundColor: "#8F0006" } }}>
              <Typography sx={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "#FFFFFF", fontSize: "16px", letterSpacing: "1px", textTransform: "uppercase" }}>
                Contact Us
              </Typography>
            </Box>
          </Link>
        </Stack>
      </Drawer>
    </Box>
  );
};

export default Navbar;
