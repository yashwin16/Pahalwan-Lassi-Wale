"use client";

import { useGSAP } from "@gsap/react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Container, InputBase, Paper, Typography } from "@mui/material";
import gsap from "gsap";
import { EB_Garamond, Inter, Maname, Open_Sans, Ramaraja, Signika } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { menuData } from "../../../utils/generic-data";

const maname = Maname({ weight: "400", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const ebGaramond = EB_Garamond({ weight: ["400", "500", "600"], subsets: ["latin"] });
const ramaraja = Ramaraja({ weight: "400", subsets: ["latin"] });
const openSans = Open_Sans({ weight: "700", subsets: ["latin"] });
const signika = Signika({ weight: "500", subsets: ["latin"] });



const topPills = ["Sweets", "Snacks", "Lassi", "Restaurant"];

// Product Card Component to handle individual state for weight selection
const ProductCard = ({ item }: { item: any }) => {
  const [selectedWeight, setSelectedWeight] = useState("250 gm");
  const weights = ["250 gm", "500 gm", "1 kg"];

  // Logic to determine price based on selected weight
  // Fallback to item.price, or default to 115.00
  const getPrice = () => {
    if (item.pricing) {
      // Map display strings to data keys if necessary, or just use them if they match
      const keyMap: Record<string, string> = {
        "250 gm": "250gm",
        "500 gm": "500gm",
        "1 kg": "1kg"
      };
      const key = keyMap[selectedWeight] || selectedWeight;
      if (item.pricing[key]) return item.pricing[key];
    }
    return item.price || "115.00";
  };

  const isMultiPrice = !!item.pricing;

  return (
      <Box 
        className="product-card-anim"
        sx={{ 
          width: { xs: "100%", sm: "282px" },
          maxWidth: "282px",
        height: "413px",
        backgroundColor: "#EFEFE6", // The bottom of the card is grey
        border: "3px solid #EAE5BD",
        borderRadius: "8px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        mx: "auto",
        boxSizing: "border-box",
        pt: "8px", // Creates the 11px-like visual padding inside the 282px box
        px: "8px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.05)",
        }
      }}
    >
      {/* White Image Container */}
      <Box sx={{ 
        width: "100%", 
        maxWidth: "260px",
        height: "260px", 
        backgroundColor: "#FFFFFF", 
        position: "relative",
        flexShrink: 0,
        zIndex: 2,
        borderRadius: "4px 4px 0 0" 
      }}>
        {item.image ? (
          <Box sx={{ position: "absolute", inset: "20px", bottom: "50px" }}>
             <Image
               src={item.image}
               alt={item.name}
               fill sizes="(max-width: 768px) 100vw, 33vw"
               style={{ objectFit: "contain" }}
             />
          </Box>
        ) : (
          <Box sx={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Typography sx={{ color: "#CCC", fontFamily: inter.style.fontFamily }}>No Image</Typography>
          </Box>
        )}
        
        {/* Upward Grey Curve (Concave) cutting DEEPER into the White Background */}
        <Box sx={{ 
          position: "absolute", 
          bottom: "-15px", // Raised to cut deeper into the white
          left: "-5%", 
          width: "110%", 
          height: "60px", // Increased height to make the curve more pronounced
          backgroundColor: "#EFEFE6", 
          borderRadius: "50%",
          zIndex: 1 
        }} />
      </Box>

      {/* Grey Product Details Section */}
      <Box sx={{ 
        width: "100%",
        maxWidth: "260px",
        flexGrow: 1, 
        backgroundColor: "#EFEFE6", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        pt: "25px", // Adjusted padding since the curve is deeper
        pb: "15px",
        zIndex: 2,
        position: "relative"
      }}>
        <Typography 
          sx={{ 
            fontFamily: inter.style.fontFamily, 
            fontWeight: "700", 
            fontSize: "12px", 
            color: "#7C7C7C",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            textAlign: "center",
            width: "100%",
            maxWidth: "230px"
          }}
        >
          {item.name}
        </Typography>

        <Typography 
          sx={{ 
            fontFamily: signika.style.fontFamily, 
            fontWeight: 500, 
            fontSize: "15px", 
            lineHeight: "18px",
            letterSpacing: "1px",
            color: "#EB2D3C", 
            mt: "8px"
          }}
        >
          ₹{getPrice()}
        </Typography>

        <Box sx={{ mt: "auto", display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", width: "100%" }}>
           {isMultiPrice ? (
             weights.map((weight, idx) => (
               <Box 
                 key={idx} 
                 onClick={() => setSelectedWeight(weight)}
                 sx={{
                    backgroundColor: selectedWeight === weight ? "#EB2D3C" : "rgba(235, 45, 60, 0.1)", // Highlight active, mute inactive
                    color: selectedWeight === weight ? "#FFF" : "#EB2D3C",
                    borderRadius: "4px",
                    width: "65px",
                    height: "25px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                    fontWeight: "700",
                    fontFamily: inter.style.fontFamily,
                    cursor: "pointer",
                    border: selectedWeight === weight ? "none" : "1px solid #EB2D3C",
                    transition: "all 0.2s ease"
                 }}>
                 {weight}
               </Box>
             ))
           ) : (
             <Box 
               sx={{
                  backgroundColor: "#EB2D3C",
                  color: "#FFF",
                  borderRadius: "4px",
                  padding: "0 15px",
                  height: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: "700",
                  fontFamily: inter.style.fontFamily,
                  border: "none",
                  textTransform: "capitalize"
               }}>
               {item.unit || "per piece"}
             </Box>
           )}
        </Box>
      </Box>
    </Box>
  );
};

interface CategoryCatalogProps {
  activeTopPill: string;
  allowedCategories: string[];
}

export default function CategoryCatalog({ activeTopPill, allowedCategories }: CategoryCatalogProps) {
  const availableCategories = Array.from(new Set(menuData.map(item => item.category)))
    .filter(cat => allowedCategories.includes(cat));
  const [activeFilter, setActiveFilter] = useState(availableCategories[0] || "");
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItems = menuData.filter(item => {
    if (searchQuery.trim() !== "") {
      return allowedCategories.includes(item.category) && item.name.toLowerCase().includes(searchQuery.toLowerCase());
    } else {
      return item.category === activeFilter;
    }
  });

  useGSAP(() => {
    gsap.fromTo(".product-card-anim", 
      { 
        opacity: 0, 
        y: 150, // Shorter distance ensures rendering doesn't drop frames
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.7, 
        stagger: 0.05, // Faster stagger for a tighter, smoother group appearance
        ease: "power2.out", 
        overwrite: "auto",
        clearProps: "transform",
        delay: 0.15 // Wait slightly to avoid clashing with the browser's smooth scroll engine
      }
    );
  }, { dependencies: [activeFilter, searchQuery], scope: containerRef, revertOnUpdate: true });

  const handleCategoryClick = (cat: string) => {
    setActiveFilter(cat);
    
    // Smooth scroll to the top of the catalog section
    if (containerRef.current) {
      const offset = 100; // Account for fixed navbar if any
      const topPos = containerRef.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: topPos,
        behavior: "smooth"
      });
    }
  };

  return (
    <Box ref={containerRef} sx={{ width: "100%", py: "40px", backgroundColor: "#EBEBE2", minHeight: "100vh" }}>
      <Container maxWidth={false} sx={{ maxWidth: "1360px", mx: "auto", px: { xs: 2, md: "34px" } }}>
        
        {/* Top Navigation Pills (Separate pills matching latest Figma screenshot) */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: { xs: "10px", md: "40px" }, mb: "50px", flexWrap: "wrap" }}>
          {topPills.map((pill, index) => {
            const href = pill === "Sweets" ? "/sweets" : pill === "Snacks" ? "/snacks" : pill === "Lassi" ? "/lassi" : "/restaurant";
            return (
              <Link href={href} key={index} passHref style={{ textDecoration: 'none' }}>
                <Button
                  sx={{
                    width: "auto",
                    minWidth: { xs: "80px", sm: "120px" },
                    height: "36px", 
                    padding: { xs: "0 12px", sm: "0 24px" },
                    pt: "4px", // Manually pushes the text DOWN to counter the font's high baseline
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: pill === activeTopPill ? "#FFFFFF" : "#000000",
                    fontFamily: ramaraja.style.fontFamily,
                    fontWeight: "400",
                    fontSize: { xs: "16px", sm: "24px" },
                    lineHeight: 1,
                    textTransform: "none",
                    border: pill === activeTopPill ? "1.5px solid #BA080F" : "1.5px solid #93928B",
                    borderRadius: "20px",
                    backgroundColor: pill === activeTopPill ? "#BA080F" : "transparent", 
                    flexShrink: 0,
                    "&:hover": {
                      backgroundColor: pill === activeTopPill ? "#99060C" : "rgba(0,0,0,0.08)",
                    }
                  }}
                >
                  {pill}
                </Button>
              </Link>
            );
          })}
        </Box>

        {/* Header: Category --- Search (Moved out of Main Content to align with Sidebar) */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px", mb: "40px", width: "100%", flexWrap: { xs: "wrap", md: "nowrap" } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "15px", flexGrow: 1, width: { xs: "100%", md: "auto" } }}>
            {/* Vertical Red Line */}
            <Box sx={{ width: "6px", height: "38px", backgroundColor: "#EB2D3C" }} />
            <Typography
              sx={{
                fontFamily: ebGaramond.style.fontFamily,
                color: "#EB2D3C",
                fontSize: "24px",
                fontWeight: "bold",
                whiteSpace: "nowrap"
              }}
            >
              Category
            </Typography>
            {/* Horizontal Red Line */}
            <Box sx={{ width: { xs: "30px", sm: "50px", md: "205px" }, height: "3px", backgroundColor: "#EB2D3C", ml: "10px" }} />
            {/* Horizontal Gold Line */}
            <Box sx={{ height: "3px", backgroundColor: "rgba(168, 146, 0, 0.28)", flexGrow: 1 }} />
          </Box>

          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              width: { xs: "100%", md: "298px" },
              height: "39px",
              border: "1.5px solid #93928B",
              borderRadius: "20px",
              backgroundColor: "transparent",
              boxShadow: "none",
              flexShrink: 0,
              px: "10px"
            }}
          >
            <SearchIcon sx={{ color: "rgba(0,0,0,0.61)", fontSize: "20px" }} />
            <InputBase
              placeholder="What you want..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                ml: 1,
                flex: 1,
                fontFamily: ramaraja.style.fontFamily,
                fontSize: "20px",
                color: "rgba(0,0,0,0.61)",
                display: "flex",
                alignItems: "center",
                "& input": {
                  padding: 0,
                  height: "auto",
                },
                "& input::placeholder": {
                  color: "rgba(0,0,0,0.61)",
                  opacity: 1,
                }
              }}
            />
          </Paper>
        </Box>

        {/* Sidebar & Main Content Layout */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: { xs: "20px", md: "40px" }, position: "relative" }}>
          
          {/* Left Sidebar */}
          {availableCategories.length > 1 ? (
            <Box sx={{ 
              width: { xs: "100%", md: "250px" }, 
              flexShrink: 0,
              alignSelf: "flex-start", // Prevents stretching in flex row, allowing sticky to work
              position: "sticky",
              top: { xs: "89px", md: "120px" }, // Sticking slightly lower so it doesn't touch navbar
              zIndex: 10,
              backgroundColor: { xs: "#EBEBE2", md: "transparent" }, 
              pt: { xs: "10px", md: "95px" }, // Pushed down to align perfectly with the top border of product cards
              pb: { xs: "10px", md: 0 },
              borderBottom: { xs: "1px solid rgba(0,0,0,0.05)", md: "none" } 
            }}>
              <Box sx={{ 
                display: "flex", 
                flexDirection: { xs: "row", md: "column" }, 
                overflowX: { xs: "auto", md: "visible" },
                gap: { xs: "20px", md: "25px" },
                "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for sleek UI
                msOverflowStyle: "none",
                scrollbarWidth: "none"
              }}>
                {availableCategories.map((cat, index) => (
                  <Box 
                    key={index} 
                    onClick={() => handleCategoryClick(cat)} 
                    sx={{ 
                      display: "flex", 
                      alignItems: "center", 
                      cursor: "pointer", 
                      gap: "12px",
                      position: "relative"
                    }}
                  >
                    {/* Active Indicator Line */}
                    <Box sx={{ 
                      width: "4px", 
                      height: "24px", 
                      backgroundColor: activeFilter === cat ? "#BA080F" : "transparent",
                      borderRadius: "0 4px 4px 0",
                      transition: "background-color 0.3s ease",
                      position: "absolute",
                      left: "-15px" // Places it slightly outside the text alignment
                    }} />
                    <Typography
                      sx={{
                        fontFamily: openSans.style.fontFamily,
                        fontWeight: "700",
                        fontSize: "20px",
                        letterSpacing: "1px",
                        color: activeFilter === cat ? "#BA080F" : "#888888",
                        whiteSpace: "nowrap", 
                        transition: "all 0.3s ease",
                        transform: activeFilter === cat ? "translateX(5px)" : "none", // Nudges selected text forward
                        "&:hover": { 
                          color: activeFilter === cat ? "#BA080F" : "#666666",
                          transform: activeFilter === cat ? "translateX(5px)" : "translateX(2px)"
                        }
                      }}
                    >
                      {cat}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          ) : (
            <Box sx={{ 
              width: { xs: "100%", md: "250px" }, 
              flexShrink: 0,
              alignSelf: "flex-start",
              position: "sticky",
              top: { xs: "89px", md: "100px" },
              pt: { xs: "10px", md: "146px" }, // Pushed down to align with product cards
              display: { xs: "none", md: "block" } // Hide on mobile, show on desktop to fill space
            }}>
              <Box sx={{ 
                backgroundColor: "#EB2D3C", 
                borderRadius: "12px", 
                p: "30px 20px", 
                color: "white", 
                textAlign: "center", 
                boxShadow: "0px 15px 35px rgba(235, 45, 60, 0.2)",
                position: "relative",
                overflow: "hidden"
              }}>
                {/* Decorative background circle */}
                <Box sx={{ 
                  position: "absolute", 
                  top: "-20px", 
                  right: "-20px", 
                  width: "100px", 
                  height: "100px", 
                  borderRadius: "50%", 
                  backgroundColor: "rgba(255,255,255,0.1)" 
                }} />
                
                <Typography sx={{ fontFamily: ebGaramond.style.fontFamily, fontSize: "28px", fontWeight: "bold", mb: "15px", position: "relative", zIndex: 1 }}>
                  100% Authentic
                </Typography>
                <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "15px", lineHeight: "1.6", position: "relative", zIndex: 1, opacity: 0.9 }}>
                  Experience the true taste of tradition with our freshly prepared, premium quality ingredients.
                </Typography>
              </Box>
            </Box>
          )}

          {/* Right Main Content */}
          <Box sx={{ flexGrow: 1 }}>

            {/* Products Title */}
            <Typography
              sx={{
                fontFamily: ebGaramond.style.fontFamily,
                color: "#312D2D",
                fontSize: "28px",
                fontWeight: "bold",
                textAlign: "center",
                mb: "40px"
              }}
            >
              Products
            </Typography>

            {/* Products Grid */}
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px" }}>
              {activeItems.length > 0 ? (
                activeItems.map((item) => (
                  <ProductCard key={item.name} item={item} />
                ))
              ) : (
                <Typography sx={{ color: "#7C7C7C", textAlign: "center", gridColumn: "1 / -1", py: 10 }}>No products found in this category.</Typography>
              )}
            </Box>

          </Box>
        </Box>

        {/* Disclaimer Moved Outside Flex Container */}
        <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "12px", color: "#888", mt: 6, mb: 2, textAlign: "center", width: "100%" }}>
          *Disclaimer: Images shown are for representational purposes only. Actual products may vary upon visit.
        </Typography>
      </Container>
    </Box>
  );
}
