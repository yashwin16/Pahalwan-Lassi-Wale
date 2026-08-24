"use client";

import { useGSAP } from "@gsap/react";
import EastIcon from '@mui/icons-material/East';
import { Box, Card, CardActionArea, CardContent, Container, Grid, Typography } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EB_Garamond, Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const ebGaramond = EB_Garamond({ weight: ["400", "500", "600"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["300", "400", "500"], subsets: ["latin"] });

const productCategories = [
  {
    title: "OUR LASSI",
    description: "Pahalwan Lassi Wale a famous Lassi Point known for its rich, creamy and refreshing lassi in Aligarh. Made fresh with quality ingredients, every glass is thick and full of flavour.",
    image: "/images/products/lassi_card.webp",
    link: "/lassi",
  },
  {
    title: "OUR SWEETS",
    description: "Experience the rich, authentic taste of our handcrafted Indian sweets. Made with pure ingredients and traditional recipes passed down through generations.",
    image: "/images/products/sweets.webp",
    link: "/sweets",
  },
  {
    title: "OUR SNACKS",
    description: "Indulge in our freshly prepared traditional snacks, perfectly paired with our signature lassi. Experience the authentic taste of Aligarh in every bite.",
    image: "/images/products/snacks.webp",
    link: "/snacks",
  },
  {
    title: "OUR RESTAURANT",
    description: "A comfortable and hygienic space for you and your family to enjoy our delicacies. We pride ourselves on our warm hospitality and traditional ambiance.",
    image: "/images/products/restaurant.webp",
    link: "/restaurant",
  }
];

const ProductShowcase = () => {
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
      ".showcase-heading",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    )
    .fromTo(
      ".showcase-card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" },
      "-=0.4"
    );
  }, { scope: container });

  return (
    <Box ref={container} id="product-showcase" sx={{ py: { xs: 8, md: 12 }, backgroundColor: "#EBEBE2" }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, md: 3 } }}>
        {/* Section Heading */}
        <Box sx={{ mb: { xs: 6, md: 10 }, display: "flex", flexDirection: "column", alignItems: "center", px: 2 }}>
          <Typography
            className="showcase-heading"
            variant="h2"
            sx={{
              fontFamily: ebGaramond.style.fontFamily,
              color: "#8F0006",
              fontSize: { xs: "36px", md: "56px" },
              fontWeight: 500,
              textAlign: "center",
              mb: { xs: 2, md: 3 },
              lineHeight: 1.1
            }}
          >
            Explore Our Delicacies
          </Typography>
          <Box 
            className="showcase-heading"
            sx={{ width: { xs: "60px", md: "100px" }, height: "3px", backgroundColor: "#D4AF37", borderRadius: "2px" }} 
          />
        </Box>

        <Grid container spacing={6}>
          {productCategories.map((item, index) => (
            <Grid className="showcase-card" size={{xs:12,md:6}} key={index}>
              <Card 
                elevation={0}
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(143, 0, 6, 0.1)',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 20px 40px rgba(143, 0, 6, 0.1)',
                  }
                }}
              >
                <CardActionArea component={Link} href={item.link || "#"} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '100%', flexGrow: 1 }}>
                  <Box sx={{ width: '100%', position: 'relative', overflow: 'hidden', aspectRatio: '16/9' }}>
                    <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: 'cover' }}
                        className="showcase-image"
                      />
                    </Box>
                    <style jsx global>{`
                      .showcase-image {
                        transition: transform 0.7s ease !important;
                      }
                      .showcase-card:hover .showcase-image {
                        transform: scale(1.05) !important;
                      }
                    `}</style>
                    {/* Gold overlay bar at the bottom of the image */}
                    <Box sx={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "4px", backgroundColor: "#D4AF37" }} />
                  </Box>
                  
                  <CardContent sx={{ p: { xs: 3, md: 5 }, flexGrow: 1, display: 'flex', flexDirection: 'column', width: "100%" }}>
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        fontFamily: ebGaramond.style.fontFamily,
                        color: "#8F0006",
                        fontSize: { xs: "28px", md: "32px" },
                        fontWeight: 600,
                        mb: { xs: 1, md: 2 },
                        textTransform: "uppercase",
                        letterSpacing: "1px"
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontFamily: poppins.style.fontFamily,
                        color: "#555555",
                        fontSize: { xs: "14px", md: "16px" },
                        fontWeight: 300,
                        lineHeight: { xs: 1.6, md: 1.8 },
                        mb: { xs: 3, md: 4 },
                        flexGrow: 1
                      }}
                    >
                      {item.description}
                    </Typography>
                    
                    {/* Discover More Link */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        width: "fit-content",
                        paddingBottom: "4px",
                        borderBottom: "1px solid #BA080F",
                        transition: "gap 0.3s ease",
                        "&:hover": {
                          gap: "16px",
                        }
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: poppins.style.fontFamily,
                          color: "#BA080F",
                          fontSize: "14px",
                          fontWeight: 500,
                          textTransform: "uppercase",
                          letterSpacing: "2px"
                        }}
                      >
                        Discover More
                      </Typography>
                      <EastIcon sx={{ color: "#BA080F", fontSize: "18px" }} />
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductShowcase;
