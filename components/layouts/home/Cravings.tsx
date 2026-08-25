"use client";

import EastIcon from '@mui/icons-material/East';
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const cravingsData = [
  {
    title: "OUR LASSI",
    description: "Pahalwan Lassi Wale a famous Lassi Point known for its rich, creamy and\nrefreshing lassi in Aligarh.\nMade fresh with quality ingredients, every glass is thick and full of flavour.",
    image: "/images/cravings/pahalwanLassii.webp",
    link: "/lassi",
  },
  {
    title: "OUR SWEETS",
    description: "Experience the rich, authentic taste of our handcrafted Indian sweets.\nMade with pure ingredients and traditional recipes passed down through generations.",
    image: "/images/cravings/ourSweets.webp", // Placeholder image requested by user
    link: "/sweets",
  },
  {
    title: "OUR SNACKS",
    description: "Indulge in our freshly prepared traditional snacks, perfectly paired with our signature lassi.\nExperience the authentic taste of Aligarh in every bite.",
    image: "/images/cravings/ourSnacks.webp",
    link: "/snacks",
  },
  {
    title: "OUR RESTAURANT",
    description: "A comfortable and hygienic space for you and your family to enjoy our delicacies.\nWe pride ourselves on our warm hospitality and traditional ambiance.",
    image: "/images/cravings/restaurant1.webp",
    link: "/restaurant",
  }
];

const Cravings = () => {
  const containerRef = useRef<HTMLDivElement>(null);


  useGSAP(() => {
    const sections = gsap.utils.toArray(".craving-section") as HTMLElement[];

    // Main heading fade-in
    gsap.fromTo(
      ".cravings-main-heading",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".cravings-main-heading",
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      ".cravings-separator",
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".cravings-separator",
          start: "top 85%",
        },
      }
    );

    // Individual ScrollTriggers for each normal vertical section
    sections.forEach((section, index) => {
      const isEven = index % 2 === 0;
      const imageBox = section.querySelector(".image-box");
      const textBlock = section.querySelector(".text-block");

      // Initial state: image small, text pushed to left or right
      gsap.set(imageBox, { scale: 0.4, opacity: 0 });
      gsap.set(textBlock, { opacity: 0, x: isEven ? 100 : -100 });

      // Create a timeline tied to the scroll position of THIS section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%", // Animation starts when section top is at 85% of screen
          end: "top 30%",   // Animation ends when section top reaches 30% of screen
          scrub: 1,         // Smoothly link to scrollbar
        },
      });

      // Image scales up from 0.4 to 1 and fades in
      tl.to(imageBox, {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "none",
      })
      // Text slides in and fades in at the same time
      .to(textBlock, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "none",
      }, "<"); // "<" means start at exactly the same time as the previous animation
    });

  }, { scope: containerRef });

  return (
    <Box
      id="cravings"
      ref={containerRef}
      sx={{
        paddingTop: "100px",
        paddingBottom: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "hidden",
        backgroundColor: "#EBEBE2",
      }}
    >
      {/* Section Heading */}
      <Box className="cravings-main-heading">
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Marmelad', sans-serif",
            color: "#8F0006",
            fontSize: { xs: "36px", md: "48px" },
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          Something for Every Craving
        </Typography>
      </Box>

      {/* Simple Separator */}
      <Box 
        className="cravings-separator"
        sx={{ width: "96px", height: "2px", backgroundColor: "#FC9BA2", mt: "20px", mb: "80px", transformOrigin: "center" }} 
      />

      {/* The Wrapper that holds the normal vertical sections */}
      <Box 
        className="cravings-wrapper"
        sx={{ 
          width: "100%", 
          display: "flex",
          flexDirection: "column",
          gap: { xs: "80px", md: "150px" }, // Large gap between sections as they flow downwards
        }}
      >
        {cravingsData.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <Box
              key={index}
              className={`craving-section ${isEven ? "even-section" : "odd-section"}`}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "1119px",
                  minHeight: { xs: "auto", md: "447px" },
                  height: "auto",
                  display: "flex",
                  flexDirection: { xs: "column", md: isEven ? "row" : "row-reverse" },
                  alignItems: "center",
                  position: "relative",
                  px: { xs: 2, md: 0 }
                }}
              >
                {/* Image Side */}
                <Box
                  className="image-box"
                  sx={{
                    width: { xs: "100%", md: "45%", lg: "418px" },
                    height: { xs: "300px", md: "350px", lg: "418px" },
                    position: "relative",
                    flexShrink: 0,
                    borderRadius: "5px",
                    overflow: "hidden",
                    mb: { xs: "30px", md: "0" }
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </Box>

                {/* Text Side */}
                <Box
                  className="text-block"
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: { xs: "0", md: isEven ? "0 0 0 40px" : "0 40px 0 0", lg: isEven ? "0 0 0 105px" : "0 105px 0 0" },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: "'Marmelad', sans-serif",
                      color: "#8F0006",
                      fontSize: { xs: "32px", sm: "42px", md: "52px", lg: "64px" },
                      lineHeight: 1,
                      textTransform: "uppercase",
                      width: { md: "100%" },
                      marginBottom: "30px",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "'Pochaevsk', sans-serif",
                      color: "#000000",
                      fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "24px" },
                      lineHeight: { xs: "24px", md: "32px" },
                      width: { md: "100%" },
                      maxWidth: "830px",
                      marginBottom: "40px",
                      whiteSpace: { xs: "normal", md: "pre-line" },
                    }}
                  >
                    {item.description}
                  </Typography>

                  {/* Discover More Link */}
                  <Link href={item.link || "#"} style={{ textDecoration: 'none' }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        cursor: "pointer",
                        borderBottom: "1px solid #000000",
                        width: "fit-content",
                        paddingBottom: "4px",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "translateX(10px)",
                        },
                      }}
                    >
                      <Typography
                        variant="button"
                        sx={{
                          fontFamily: "'Ramaraja', serif",
                          color: "#000000",
                          fontSize: "35px",
                          lineHeight: "24px",
                          fontWeight: 400,
                          textTransform: "none",
                        }}
                      >
                        Discover More
                      </Typography>
                      <EastIcon sx={{ color: "#000000", fontSize: "35px" }} />
                    </Box>
                  </Link>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Cravings;
