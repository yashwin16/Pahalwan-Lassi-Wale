"use client";

import { useGSAP } from "@gsap/react";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Marko_One } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const markoOne = Marko_One({ weight: "400", subsets: ["latin"] });

const founders = [
  { 
    name: "Mr. Manik Chandra Gupta", 
    title: "Co-founder", 
    image: "/images/aboutUs/pahalwanCofounder.webp",
    imgWidth: "272.57px",
    textWidth: "268px"
  },
  { 
    name: "Late Shri Harish Chandra Gupta", 
    title: "Founder", 
    image: "/images/aboutUs/pahalwanFounder.webp",
    imgWidth: "300px",
    textWidth: "331px"
  },
  { 
    name: "Mr Sushant Krishna Gupta", 
    title: "Proprietor", 
    image: "/images/aboutUs/pahalwanProperitor.webp",
    imgWidth: "273px",
    textWidth: "268px"
  },
];

const AboutUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".about-heading", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: ".about-heading", start: "top 85%", toggleActions: "play none none reverse" } }
    );
    gsap.fromTo(".about-divider", 
      { scaleX: 0 }, 
      { scaleX: 1, duration: 1, scrollTrigger: { trigger: ".about-divider", start: "top 85%", toggleActions: "play none none reverse" } }
    );
    gsap.fromTo(".about-intro", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: ".about-intro", start: "top 85%", toggleActions: "play none none reverse" } }
    );
    gsap.fromTo(".about-founder-heading", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: ".about-founder-heading", start: "top 85%", toggleActions: "play none none reverse" } }
    );

    gsap.fromTo(".founder-card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, scrollTrigger: { trigger: ".founder-card", start: "top 85%", toggleActions: "play none none reverse" } }
    );

    gsap.utils.toArray(".info-row").forEach((row: any) => {
      gsap.fromTo(row,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, scrollTrigger: { trigger: row, start: "top 85%", toggleActions: "play none none reverse" } }
      );
    });

    gsap.fromTo(".about-decor-left",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, stagger: 0.3, scrollTrigger: { trigger: containerRef.current, start: "top 80%", toggleActions: "play none none reverse" } }
    );
    gsap.fromTo(".about-decor-right",
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, stagger: 0.3, scrollTrigger: { trigger: containerRef.current, start: "top 80%", toggleActions: "play none none reverse" } }
    );
  }, { scope: containerRef });

  return (
    <Box
      id="about-us"
      ref={containerRef}
      sx={{
        width: "100%",
        backgroundColor: "#EBEBE2", // Match Cravings and global background
        position: "relative",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden", // Ensure decorations don't cause scroll
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1440px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: "150px", md: "180px" },
          pb: "60px",
        }}
      >
        {/* Top Left Decorative Image */}
        <Box
          className="about-decor-left"
          sx={{
            position: "absolute",
            top: { xs: "100px", md: "124px" },
            left: { xs: "10px", md: "34px" },
            width: { xs: "100px", md: "282px" },
            height: { xs: "100px", md: "249px" },
            zIndex: 1,
            opacity: { xs: 0.5, md: 1 },
            filter: "brightness(0) saturate(100%) invert(13%) sepia(89%) saturate(5796%) hue-rotate(349deg) brightness(87%) contrast(106%)",
          }}
        >
          <Image
            src="/images/icons/leftAbout.webp"
            alt="Decoration Top Left"
            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "contain" }}
          />
        </Box>

        {/* Top Right Decorative Image */}
        <Box
          className="about-decor-right"
          sx={{
            position: "absolute",
            top: { xs: "100px", md: "124px" },
            right: { xs: "10px", md: "34px" },
            width: { xs: "100px", md: "282px" },
            height: { xs: "100px", md: "249px" },
            zIndex: 1,
            opacity: { xs: 0.5, md: 1 },
            filter: "brightness(0) saturate(100%) invert(13%) sepia(89%) saturate(5796%) hue-rotate(349deg) brightness(87%) contrast(106%)",
          }}
        >
          <Image
            src="/images/icons/rightAbout.webp"
            alt="Decoration Top Right"
            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "contain" }}
          />
        </Box>

        {/* Content Container to keep it above decorations */}
        <Box sx={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
          {/* Main Heading */}
          <Typography
            className="about-heading"
            variant="h2"
            sx={{
              fontFamily: "'Marmelad', sans-serif",
              color: "#8F0006",
              fontSize: "48px",
              fontWeight: 400,
              mb: 1,
              zIndex: 2,
            }}
          >
            About Us
          </Typography>
          <Box className="about-divider" sx={{ width: "46px", height: "2px", backgroundColor: "#BA080F", mb: "40px", zIndex: 2, transformOrigin: "center" }} />

          {/* Intro Text */}
          <Typography
            className="about-intro"
            variant="body1"
            sx={{
              fontFamily: "'Pochaevsk', sans-serif",
              color: "#312D2D",
              fontSize: { xs: "18px", md: "24px" },
              textAlign: "center",
              width: { xs: "100%", md: "1162px" },
              height: { xs: "auto", md: "192px" },
              lineHeight: { xs: "28px", md: "24px" }, 
              mb: "60px",
              px: { xs: 2, md: 0 },
              zIndex: 2,
            }}
          >
            Pahalwan Lassiwale and Sweets are retailers and exporters of Sweets, Lassi, Gajak, Halwa Parantha and other related products since the year 1989. With the rich experience of our elders, we offer the cleanest and best quality products using the most modern technology to suits the contemporary taste. These latest developments however do not stop us from continuing the traditional tastes and recipes.
            <br /><br />
            Besides looking after the regular up gradation of the interiors this young team has developed recipes, which are being appreciated in whole district. The taste of each and every item is looked after personally by specialists to carry the rich tradition in to the forth generation.
          </Typography>

          {/* Founders Section Wrapper */}
          <Box sx={{ 
            position: "relative", 
            width: "100%", 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            py: "50px",
          }}>
            {/* Full-width Background without Golden Lines */}
            <Box sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: "100%",
              zIndex: -1,
            }} />
            
            {/* Background Pattern */}
            <Box 
              sx={{ 
                position: "absolute", 
                top: 0, 
                left: 0, 
                width: "100%", 
                height: "100%", 
                zIndex: -1, 
                opacity: 0.3 
              }}
            >
              <Image 
                src="/images/aboutUs/founderBg.webp" 
                alt="Founder Background Pattern" 
                fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                style={{ objectFit: "cover" }} 
              />
            </Box>

            {/* Founders Section Heading */}
            <Typography
              className="about-founder-heading"
              variant="h3"
              sx={{
                fontFamily: "'Marmelad', sans-serif",
                color: "#8F0006",
                fontSize: { xs: "28px", md: "36px" },
                width: { xs: "100%", md: "301px" },
                height: { xs: "auto", md: "43px" },
                textAlign: "center",
                lineHeight: { xs: "normal", md: "43px" }, 
                mb: 1,
                zIndex: 2,
              }}
            >
              Meet Our Founder
            </Typography>

            {/* Divider with Star (Top) */}
            <Box sx={{ display: "flex", alignItems: "center", mb: "60px", justifyContent: "center" }}>
              <Box sx={{ width: "231px", height: "2px", backgroundColor: "#BA080F" }} />
              <Box sx={{ mx: 2, width: "24px", height: "23px", position: "relative", filter: "brightness(0) saturate(100%) invert(13%) sepia(89%) saturate(5796%) hue-rotate(349deg) brightness(87%) contrast(106%)" }}>
                <Image src="/images/icons/aboutUsStar.webp" alt="Star" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "contain" }} />
              </Box>
              <Box sx={{ width: "231px", height: "2px", backgroundColor: "#BA080F" }} />
            </Box>
            
            {/* Founders Grid */}
            <Box sx={{ 
              display: "flex", 
              gap: { xs: "34px", md: "20px", lg: "0px" }, 
              flexWrap: { xs: "wrap", md: "nowrap" }, 
              justifyContent: { xs: "center", md: "space-around", lg: "space-between" }, 
              alignItems: "flex-start", 
              width: "100%", 
              maxWidth: "1090px", 
              mx: "auto",
              px: { xs: 2, md: 4, lg: 0 }
            }}>
              {founders.map((founder, idx) => (
                <FounderCard 
                  key={idx}
                  imageSrc={founder.image}
                  role={founder.title}
                  name={founder.name}
                />
              ))}
            </Box>

            {/* Divider with Star (Bottom of Founders) */}
            <Box sx={{ display: "flex", alignItems: "center", mt: "60px", justifyContent: "center" }}>
              <Box sx={{ width: "231px", height: "2px", backgroundColor: "#BA080F" }} />
              <Box sx={{ mx: 2, width: "24px", height: "23px", position: "relative", filter: "brightness(0) saturate(100%) invert(13%) sepia(89%) saturate(5796%) hue-rotate(349deg) brightness(87%) contrast(106%)" }}>
                <Image src="/images/icons/aboutUsStar.webp" alt="Star" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "contain" }} />
              </Box>
              <Box sx={{ width: "231px", height: "2px", backgroundColor: "#BA080F" }} />
            </Box>
          </Box>

          {/* Heritage Timeline Section (Our Motto, Products Variety, Employees) */}
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%", mt: { xs: "60px", md: "120px" }, px: { xs: 2, md: 8 }, mb: "100px", zIndex: 2, maxWidth: "1200px" }}>
            <InfoRow 
              index={0}
              title="Our Motto"
              description="Treating every individual customer as a very special and meeting their requirements to the best possible satisfaction is the motto of our shop. We will carry forward the goodwill of Pahalwan Lassi Wale further following the footsteps of our elders and constantly improvising the service, quality and taste of our products."
            />
            <InfoRow 
              index={1}
              title="Products Variety"
              description="It's a matter of pride that we produce more than 300 items everyday under one roof ranging from traditional Indian Sweets and other quality products. We are ready to service our guest's daily from 7.30 A.M and take pleasure in serving till 10 P.M hours every day, 7 days a week."
            />
            <InfoRow 
              index={2}
              title="Employees"
              description="We have Handpicked, well-trained and experienced Employees to look after the interests of our guests. Be it production unit team, counter sales team or the stewards in the service team, all feel pride in the association with us. You will find them very eager to assist you and to satisfy your needs to the best satisfaction, as per our tradition."
            />
          </Box>

          {/* Final Divider with Star */}
          <Box sx={{ display: "flex", alignItems: "center", mb: "60px", justifyContent: "center" }}>
            <Box sx={{ width: "231px", height: "2px", backgroundColor: "#BA080F" }} />
            <Box sx={{ mx: 2, width: "24px", height: "23px", position: "relative", filter: "brightness(0) saturate(100%) invert(13%) sepia(89%) saturate(5796%) hue-rotate(349deg) brightness(87%) contrast(106%)" }}>
              <Image src="/images/icons/aboutUsStar.webp" alt="Star" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "contain" }} />
            </Box>
            <Box sx={{ width: "231px", height: "2px", backgroundColor: "#BA080F" }} />
          </Box>

        </Box>

        {/* Bottom Left Decorative Image */}
        <Box
          className="about-decor-left"
          sx={{
            position: "absolute",
            bottom: "34px",
            left: { xs: "10px", md: "34px" },
            width: { xs: "100px", md: "282px" },
            height: { xs: "100px", md: "249px" },
            zIndex: 1,
            opacity: { xs: 0.5, md: 1 },
            transform: "scaleY(-1)", // Flip vertically to act as bottom corner
            filter: "brightness(0) saturate(100%) invert(13%) sepia(89%) saturate(5796%) hue-rotate(349deg) brightness(87%) contrast(106%)",
          }}
        >
          <Image
            src="/images/icons/leftAbout.webp"
            alt="Decoration Bottom Left"
            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "contain" }}
          />
        </Box>

        {/* Bottom Right Decorative Image */}
        <Box
          className="about-decor-right"
          sx={{
            position: "absolute",
            bottom: "34px",
            right: { xs: "10px", md: "34px" },
            width: { xs: "100px", md: "282px" },
            height: { xs: "100px", md: "249px" },
            zIndex: 1,
            opacity: { xs: 0.5, md: 1 },
            transform: "scaleY(-1)", // Flip vertically to act as bottom corner
            filter: "brightness(0) saturate(100%) invert(13%) sepia(89%) saturate(5796%) hue-rotate(349deg) brightness(87%) contrast(106%)",
          }}
        >
          <Image
            src="/images/icons/rightAbout.webp"
            alt="Decoration Bottom Right"
            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "contain" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

// Sub-component for Heritage Timeline Info Rows
const InfoRow = ({ title, description, index }: { title: string, description: string, index: number }) => {
  return (
    <Box 
      className="info-row" 
      sx={{ 
        display: "flex", 
        flexDirection: { xs: "column", md: "row" }, 
        position: "relative",
        gap: { xs: "20px", md: "80px" },
        pl: { xs: "30px", md: "60px" },
        pb: { xs: "40px", md: "80px" },
        "&:last-child": { pb: 0 },
      }}
    >
      {/* Vertical Timeline Line */}
      <Box 
        sx={{
          position: "absolute",
          left: 0,
          top: "10px",
          bottom: index === 2 ? "20px" : 0, // Ends before the bottom of the last item
          width: "2px",
          backgroundColor: "rgba(186, 8, 15, 0.2)",
        }}
      />
      {/* Timeline Dot */}
      <Box 
        className="timeline-dot"
        sx={{
          position: "absolute",
          left: "-7px",
          top: { xs: "12px", md: "15px" },
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          backgroundColor: "#BA080F",
          boxShadow: "0 0 0 4px rgba(186, 8, 15, 0.2)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.3)",
            boxShadow: "0 0 0 6px rgba(186, 8, 15, 0.3)",
          }
        }}
      />

      {/* Title Area */}
      <Box sx={{ width: { xs: "100%", md: "30%" }, position: "relative" }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Marmelad', sans-serif",
            color: "#8F0006",
            fontSize: { xs: "28px", md: "38px" },
            lineHeight: 1.1,
            position: "relative",
            zIndex: 2,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Marmelad', sans-serif",
            color: "rgba(186, 8, 15, 0.05)", // Very faint large number
            fontSize: "120px",
            lineHeight: 0.8,
            position: "absolute",
            top: "-40px",
            left: "-20px",
            zIndex: 1,
            display: { xs: "none", md: "block" }
          }}
        >
          0{index + 1}
        </Typography>
      </Box>

      {/* Description Area */}
      <Box sx={{ width: { xs: "100%", md: "70%" }, pt: { xs: 0, md: "5px" } }}>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Pochaevsk', sans-serif",
            color: "#444444",
            fontSize: { xs: "16px", md: "22px" },
            lineHeight: 1.8,
            letterSpacing: "0.2px",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

// Sub-component for Founder Card
const FounderCard = ({ imageSrc, role, name }: { imageSrc: string, role: string, name: string }) => {
  return (
    <Box
      className="founder-card"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Image Container matching precise Figma widths */}
      <Box
        sx={{
          position: "relative",
          width: "251.63px",
          height: "308.34px",
          borderRadius: "13px",
          overflow: "hidden",
        }}
      >
        <Image
          src={imageSrc}
          alt={name}
          fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
        />
      </Box>
      {/* Text Box matching precise Figma typography */}
      <Box
        sx={{
          width: "268px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: "8px", // Gap between image and text
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Pochaevsk', sans-serif",
            color: "#444444", 
            fontSize: "24px",
            textAlign: "center",
            lineHeight: "33px",
          }}
        >
          {role}
          <br />
          {name}
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutUs;
