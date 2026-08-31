"use client";

import React, { useState } from "react";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Typography, TextField, InputAdornment, Container, Button, Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Maname, Inter, EB_Garamond, Ramaraja, Open_Sans, Signika } from "next/font/google";
import { menuData } from "../../../utils/generic-data";
import Image from "next/image";

const maname = Maname({ weight: "400", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const ebGaramond = EB_Garamond({ weight: ["400", "500", "600"], subsets: ["latin"] });
const ramaraja = Ramaraja({ weight: "400", subsets: ["latin"] });
const openSans = Open_Sans({ weight: "700", subsets: ["latin"] });
const signika = Signika({ weight: "500", subsets: ["latin"] });

const excludeCategories = ["Snacks", "Beverages"];
const allCategories = Array.from(new Set(menuData.map(item => item.category)))
  .filter(cat => !excludeCategories.includes(cat));

const topPills = ["Sweets", "Snacks", "Lassi", "Resturant"];

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

  return (
      <Box 
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
        px: "8px"
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
           {weights.map((weight, idx) => (
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
           ))}
        </Box>
      </Box>
    </Box>
  );
};

export default function SweetsCatalog() {
  const [activeFilter, setActiveFilter] = useState(allCategories[0]);

  const activeItems = menuData.filter(item => item.category === activeFilter);

  return (
    <Box sx={{ width: "100%", py: "40px", backgroundColor: "#EAE7DA", minHeight: "100vh", overflow: "hidden" }}>
      <Container maxWidth={false} sx={{ maxWidth: "1360px", mx: "auto", px: { xs: 2, md: "34px" } }}>
        
        {/* Top Navigation Pills (Separate pills matching latest Figma screenshot) */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: { xs: "10px", md: "40px" }, mb: "50px", flexWrap: "wrap", alignItems: "center" }}>
          <Link href="/" passHref style={{ textDecoration: 'none' }}>
            <Button
              sx={{
                width: "auto",
                minWidth: { xs: "80px", sm: "120px" },
                height: "32px", 
                padding: { xs: "0 12px", sm: "0 24px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#000000",
                fontFamily: inter.style.fontFamily,
                fontWeight: "500",
                fontSize: { xs: "14px", sm: "16px" },
                lineHeight: 1,
                textTransform: "none",
                border: "1.5px solid #93928B",
                borderRadius: "20px",
                backgroundColor: "transparent",
                gap: "6px",
                flexShrink: 0,
                "&:hover": {
                  backgroundColor: "rgba(0,0,0,0.08)",
                }
              }}
            >
              <ArrowBackIcon fontSize="small" />
              Home
            </Button>
          </Link>
          {topPills.map((pill, index) => (
            <Button
              key={index}
                sx={{
                  width: "auto",
                  minWidth: { xs: "80px", sm: "120px" },
                  height: "32px",
                  padding: { xs: "0 12px", sm: "0 24px" },
                  pt: "5px", // Visually balance the font's high baseline
                  color: "#000000",
                  fontFamily: ramaraja.style.fontFamily,
                  fontWeight: "400",
                  fontSize: { xs: "16px", sm: "24px" },
                  lineHeight: "24px",
                  textTransform: "none",
                  border: "1.5px solid #93928B",
                  borderRadius: "20px",
                  backgroundColor: pill === "Sweets" ? "rgba(0,0,0,0.05)" : "transparent",
                  flexShrink: 0,
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.08)",
                  }
                }}
            >
              {pill}
            </Button>
          ))}
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
              placeholder="Search what you want to eat..."
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
          <Box sx={{ 
            width: { xs: "100%", md: "250px" }, 
            flexShrink: 0,
            alignSelf: "flex-start", // Prevents stretching in flex row, allowing sticky to work
            position: "sticky",
            top: { xs: "89px", md: "100px" }, // Stick just below navbar on mobile
            zIndex: 10,
            backgroundColor: { xs: "#EAE7DA", md: "transparent" }, // Solid background on mobile to hide scrolling content underneath
            pt: { xs: "10px", md: "72px" },
            pb: { xs: "10px", md: 0 },
            borderBottom: { xs: "1px solid rgba(0,0,0,0.05)", md: "none" } // Optional divider on mobile
          }}>
            <Box sx={{ 
              display: "flex", 
              flexDirection: { xs: "row", md: "column" }, // Horizontal scroll on mobile
              overflowX: { xs: "auto", md: "visible" },
              gap: { xs: "20px", md: "25px" },
              "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar for sleek UI
              msOverflowStyle: "none",
              scrollbarWidth: "none"
            }}>
              {allCategories.map((cat, index) => (
                <Typography
                  key={index}
                  onClick={() => setActiveFilter(cat)}
                  sx={{
                    fontFamily: openSans.style.fontFamily,
                    fontWeight: "700",
                    fontSize: "20px",
                    letterSpacing: "1px",
                    color: activeFilter === cat ? "#444444" : "#888888",
                    cursor: "pointer",
                    whiteSpace: "nowrap", // Prevent breaking on mobile
                    transition: "color 0.2s ease",
                    "&:hover": { color: "#444444" }
                  }}
                >
                  {cat}
                </Typography>
              ))}
            </Box>
          </Box>

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
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }, gap: "30px" }}>
              {activeItems.length > 0 ? (
                activeItems.map((item, index) => (
                  <ProductCard key={index} item={item} />
                ))
              ) : (
                <Typography sx={{ color: "#7C7C7C", textAlign: "center", gridColumn: "1 / -1", py: 10 }}>No products found in this category.</Typography>
              )}
            </Box>

          </Box>
        </Box>
      </Container>
    </Box>
  );
}
