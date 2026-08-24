"use client";

import { Box, Container, Typography } from "@mui/material";
import { Marko_One } from "next/font/google";
import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const markoOne = Marko_One({ weight: "400", subsets: ["latin"] });

const varieties = [
  {
    title: "SWEETS",
    image: "/images/vareityOfRange/pahalwan_sweets.webp",
  },
  {
    title: "SAMOSA",
    image: "/images/vareityOfRange/pahalwan_samosa.webp",
  },
  {
    title: "KACHORI",
    image: "/images/vareityOfRange/kachori.webp",
  },
  {
    title: "KHASTA KACHORI",
    image: "/images/vareityOfRange/khastaKachori.webp",
  },
  {
    title: "SPECIAL LASSI",
    image: "/images/vareityOfRange/pahalwanLassi.webp",
  },
];

export default function Variety() {
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
      ".variety-title",
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(
      ".variety-underline",
      { scaleX: 0 },
      { scaleX: 1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo(
      ".variety-swiper",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.2"
    );
  }, { scope: container });

  return (
    <Box ref={container} sx={{ width: "100%", py: { xs: "60px", md: "100px" }, backgroundColor: "#EBEBE2" }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
        {/* Title Section */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: "60px" }}>
          <Typography
            className="variety-title"
            sx={{
              fontFamily: markoOne.style.fontFamily,
              color: "#8F0006",
              fontSize: { xs: "36px", md: "48px" },
              textAlign: "center",
              lineHeight: 1,
              mb: "16px",
            }}
          >
            Variety of Range
          </Typography>
          {/* Small Pink Underline */}
          <Box className="variety-underline" sx={{ width: "46px", height: "2px", backgroundColor: "#FFCCD5", transformOrigin: "center" }} />
        </Box>

        {/* Swiper Carousel */}
        <Box className="variety-swiper" sx={{ width: "100%" }}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              600: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 4,
              },
            }}
            style={{ paddingBottom: "10px", paddingTop: "10px" }}
          >
            {[...varieties, ...varieties].map((variety, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "311px", // matched from Figma screenshot
                    borderRadius: "16px",
                    border: "2px solid #B39402", // Gold border
                    overflow: "hidden", // ensures image stays within rounded corners
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                    }
                  }}
                >
                  {/* Background Image */}
                  <Image
                    src={variety.image}
                    alt={variety.title}
                    fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    unoptimized={true}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}
