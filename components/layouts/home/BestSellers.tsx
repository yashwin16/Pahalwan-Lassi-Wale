"use client";

import { Box, Container, Typography } from "@mui/material";
import { EB_Garamond, Open_Sans, Poppins } from "next/font/google";
import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const ebGaramond = EB_Garamond({ weight: "500", style: "italic", subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500", "600"], subsets: ["latin"] });
const openSans = Open_Sans({ weight: "700", subsets: ["latin"] });

const bestSellersData = [
  {
    title: "GAJAK",
    image: "/images/home/bestsellers/bestgazak.webp",
  },
  {
    title: "KACHORI",
    image: "/images/home/bestsellers/bestKachori.webp",
  },
  {
    title: "LASSI",
    image: "/images/home/bestsellers/bestLassi.webp",
  },
  {
    title: "RABRI FALUDA",
    image: "/images/home/bestsellers/bestfaluda.webp",
  },
  {
    title:"CHHENA SWEETS",
    image:"/images/home/bestsellers/chhena.webp"
  }
];

export default function BestSellers() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        toggleActions: "play reverse play reverse",
      }
    });

    tl.fromTo(
      ".bestseller-title",
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(
      ".bestseller-subtitle",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo(
      ".bestseller-swiper",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.2"
    );
  }, { scope: container });

  return (
    <Box ref={container} sx={{ width: "100%", py: { xs: "60px", md: "100px" }, backgroundColor: "#EBEBE2", overflow: "hidden" }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
        {/* Title Section */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: "50px", textAlign: "center" }}>
          <Typography
            className="bestseller-title"
            sx={{
              fontFamily: ebGaramond.style.fontFamily,
              color: "#8F0006",
              fontSize: { xs: "40px", md: "69px" },
              lineHeight: 1,
              mb: "16px",
            }}
          >
            Our Best Sellers
          </Typography>
          <Typography
            className="bestseller-subtitle"
            sx={{
              fontFamily: poppins.style.fontFamily,
              color: "#F37A14", // Match the exact orange subtitle color from Figma
              fontSize: { xs: "16px", md: "20px" }, // Updated font size to match Figma
              fontWeight: 500,
              fontStyle: "italic", // Added italic to match screenshot
              maxWidth: "800px",
            }}
          >
            Favorite bestsellers, where quality meets tradition in every bite. Handpicked favorites guaranteed to delight.
          </Typography>
        </Box>

        {/* Swiper Carousel */}
        <Box className="bestseller-swiper" sx={{ width: "100%", pb: "20px" }}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              600: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            style={{ paddingBottom: "10px", paddingTop: "10px" }}
          >
            {[...bestSellersData, ...bestSellersData].map((item, index) => (
              <SwiperSlide key={index}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "330/277", // Updated aspect ratio to match Figma (330x277)
                      borderRadius: "20px", // Updated border radius to match Figma
                      overflow: "hidden",
                      mb: "20px",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.03)",
                      },
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                      unoptimized={true}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: openSans.style.fontFamily, // Changed to Open Sans
                      color: "#444444", // Changed to #444444
                      fontSize: { xs: "18px", md: "24px" }, // Changed to 24px
                      fontWeight: 700, // Changed to Bold
                      letterSpacing: "1px", // Changed letter spacing
                      textTransform: "uppercase",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}
