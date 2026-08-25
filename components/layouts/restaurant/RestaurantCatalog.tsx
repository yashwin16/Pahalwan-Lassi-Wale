"use client";

import React, { useState } from "react";
import { Box, Typography, Container, Button, Paper, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Inter, Ramaraja, Maven_Pro, Open_Sans, EB_Garamond } from "next/font/google";
import { restroMenuData } from "../../../utils/restro-data";
import Image from "next/image";
import Link from "next/link";
import { MenuItem } from "../../../utils/generic-data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const inter = Inter({ subsets: ["latin"] });
const ramaraja = Ramaraja({ weight: "400", subsets: ["latin"] });
const mavenPro = Maven_Pro({ weight: ["500"], subsets: ["latin"] });
const openSans = Open_Sans({ weight: ["600", "700"], subsets: ["latin"] });
const ebGaramond = EB_Garamond({ weight: ["400", "500", "600"], subsets: ["latin"] });

const topPills = ["Sweets", "Snacks", "Lassi", "Restaurant"];

interface RestaurantCatalogProps {
  activeTopPill: string;
}

export default function RestaurantCatalog({ activeTopPill }: RestaurantCatalogProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Extract unique categories
  const categories = Array.from(new Set(restroMenuData.map(item => item.category))).filter(Boolean);
  
  const [activeCategory, setActiveCategory] = React.useState(categories[0] || "");
  const [searchQuery, setSearchQuery] = React.useState("");

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("category");
    if (cat && categories.includes(cat)) {
      setActiveCategory(cat);
    }
  }, [categories]);

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    setSearchQuery(""); // Clear search when clicking a category
    const params = new URLSearchParams(window.location.search);
    params.set("category", cat);
    window.history.replaceState(null, '', `?${params.toString()}`);
    
    // Scroll to products section with a small offset for fixed headers
    const productsSection = document.getElementById("products-section");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Filter items by active category or search query
  const activeItems = restroMenuData.filter(item => {
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      return item.name.toLowerCase().includes(query) || 
             (item.subCategory && item.subCategory.toLowerCase().includes(query)) ||
             (item.category && item.category.toLowerCase().includes(query));
    }
    return item.category === activeCategory;
  });
  
  // Extract unique subcategories for the active category (or search results)
  const subCategories = Array.from(new Set(activeItems.map(item => item.subCategory || item.category)));
  
  useGSAP(() => {
    // Initial load animations
    gsap.from(".top-pill", { y: -30, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" });
    gsap.from(".category-header", { x: -50, opacity: 0, duration: 0.8, ease: "power2.out" });
    gsap.from(".search-bar", { x: 50, opacity: 0, duration: 0.8, ease: "power2.out" });
    
    // Sidebar items
    gsap.from(".sidebar-item", {
      x: -30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.out",
      scrollTrigger: { trigger: ".sidebar-container", start: "top 80%" }
    });
  }, { scope: containerRef });

  useGSAP(() => {
    // Animate product blocks when category/search changes
    gsap.fromTo(".product-block", 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: "#products-section", start: "top 80%" }
      }
    );
  }, { scope: containerRef, dependencies: [activeCategory, searchQuery] });

  return (
    <Box ref={containerRef} sx={{ width: "100%", py: "40px", backgroundColor: "#EBEBE2", minHeight: "100vh", overflow: "hidden" }}>
      <Container maxWidth={false} sx={{ maxWidth: "1360px", mx: "auto", px: { xs: 2, md: "34px" } }}>
        
        {/* Top Navigation Pills */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: { xs: "8px", sm: "15px", md: "40px" }, mb: { xs: "30px", md: "50px" }, flexWrap: "wrap", px: { xs: 1, md: 0 } }}>
          {topPills.map((pill, index) => {
            const href = pill === "Sweets" ? "/sweets" : pill === "Snacks" ? "/snacks" : pill === "Lassi" ? "/lassi" : "/restaurant";
            return (
              <Link href={href} key={index} passHref style={{ textDecoration: 'none' }}>
                <Button
                  className="top-pill"
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
                    backgroundColor: pill === activeTopPill ? "rgba(0,0,0,0.05)" : "transparent",
                    flexShrink: 0,
                    "&:hover": {
                      backgroundColor: "rgba(0,0,0,0.08)",
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
        <Box sx={{ display: "flex", alignItems: "center", gap: { xs: "10px", md: "20px" }, mb: { xs: "25px", md: "40px" }, width: "100%", flexWrap: { xs: "wrap", md: "nowrap" } }}>
          <Box className="category-header" sx={{ display: "flex", alignItems: "center", gap: { xs: "8px", md: "15px" }, flexGrow: 1, width: { xs: "100%", md: "auto" } }}>
            {/* Vertical Red Line */}
            <Box sx={{ width: { xs: "4px", md: "6px" }, height: { xs: "28px", md: "38px" }, backgroundColor: "#EB2D3C" }} />
            <Typography
              sx={{
                fontFamily: ebGaramond.style.fontFamily,
                color: "#EB2D3C",
                fontSize: { xs: "20px", md: "24px" },
                fontWeight: "bold",
                whiteSpace: "nowrap"
              }}
            >
              Category
            </Typography>
            {/* Horizontal Red Line */}
            <Box sx={{ width: { xs: "30px", sm: "50px", md: "205px" }, height: "3px", backgroundColor: "#EB2D3C", ml: { xs: "5px", md: "10px" } }} />
            {/* Horizontal Gold Line */}
            <Box sx={{ height: "3px", backgroundColor: "rgba(168, 146, 0, 0.28)", flexGrow: 1 }} />
          </Box>

          <Paper
            className="search-bar"
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
              placeholder="Search what you want"
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

        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "40px", pt: 0 }}>
          {/* Left Sidebar - Categories */}
          <Box className="sidebar-container" sx={{ 
            width: { xs: "100%", md: "300px" }, 
            flexShrink: 0,
            position: { md: "sticky" },
            top: { md: "100px" },
            alignSelf: "flex-start",
            pt: { xs: 0, md: "42px" } // Aligns the first category text ("Our Specialities") with the "Products" heading
          }}>
            {categories.map((cat, idx) => {
              const isActive = cat === activeCategory;
              return (
                <React.Fragment key={idx}>
                  {cat === "Indian Main Course" && (
                    <Box sx={{ mt: 5, mb: 4 }}>
                       <Box sx={{ width: "80%", height: "1px", backgroundColor: "#000", mb: 2 }} />
                       <Typography sx={{ fontFamily: openSans.style.fontFamily, fontWeight: 700, fontSize: "14px", color: "#444", textTransform: "uppercase" }}>
                          MAIN COURSE
                       </Typography>
                    </Box>
                  )}
                  <Box 
                    className="sidebar-item"
                    onClick={() => handleCategoryClick(cat)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 3.5,
                      cursor: "pointer",
                      "&:hover": { opacity: 0.7 }
                    }}
                  >
                    {isActive && (
                      <Typography sx={{ mr: 2, fontFamily: openSans.style.fontFamily, fontWeight: 700, fontSize: "20px", color: "#444" }}>
                        {">"}
                      </Typography>
                    )}
                    <Typography 
                      sx={{ 
                        fontFamily: openSans.style.fontFamily, 
                        fontWeight: isActive ? 700 : 600, 
                        fontSize: isActive ? "20px" : "16px", 
                        color: "#444",
                        ml: isActive ? 0 : "25px",
                        letterSpacing: isActive ? "1px" : "0px"
                      }}
                    >
                      {cat}
                    </Typography>
                  </Box>
                </React.Fragment>
              );
            })}
          </Box>

          {/* Right Content - Subcategories and Items */}
          <Box id="products-section" sx={{ flexGrow: 1, border: "1px solid #E8E2B2", px: { xs: 1.5, sm: 3, md: 5 }, py: { xs: 3, md: 5 }, scrollMarginTop: "100px" }}>
            <Typography sx={{ fontFamily: inter.style.fontFamily, fontWeight: 700, fontSize: { xs: "24px", md: "28px" }, textAlign: "center", mb: { xs: 4, md: 6 }, color: "#222" }}>
               Products
            </Typography>

            {subCategories.map((subCat, idx) => {
              const isEven = idx % 2 === 0;
              const items = activeItems.filter(item => (item.subCategory || item.category) === subCat);
              
              // Find first item with image from the FULL dataset to use as subcategory image block
              const firstItemWithImage = restroMenuData.find(item => (item.subCategory || item.category) === subCat && item.image);
              const imageSrc = firstItemWithImage ? firstItemWithImage.image : null;
              
              return (
                <Box className="product-block" key={idx} sx={{ mb: { xs: "50px", md: "80px" } }}>
                  <Box sx={{ 
                    display: "flex", 
                    flexDirection: { xs: "column", md: isEven ? "row" : "row-reverse" }, 
                    gap: { xs: "30px", md: "60px" },
                    alignItems: "stretch",
                    justifyContent: "center"
                  }}>
                    {/* Image Block Wrapper */}
                    <Box sx={{ flex: 1, display: "flex", justifyContent: { xs: "center", md: isEven ? "flex-start" : "flex-end" }, width: "100%" }}>
                      {/* Image Block with Subcategory Heading */}
                      <Box sx={{ display: "flex", flexDirection: "column", flexShrink: 0, width: "100%", maxWidth: "303px", height: "100%" }}>
                        <Box sx={{ height: { xs: "auto", md: "48px" }, minHeight: "30px", display: "flex", alignItems: "flex-start", mb: { xs: 1, md: 0 }, justifyContent: { xs: "center", md: "flex-start" } }}>
                            <Typography 
                              sx={{ 
                                fontFamily: inter.style.fontFamily, 
                                fontWeight: 700, 
                                fontSize: { xs: "20px", md: "24px" }, 
                                lineHeight: { xs: "24px", md: "24px" },
                                color: "#222",
                                textAlign: { xs: "center", md: "left" } 
                              }}
                            >
                              {subCat}
                            </Typography>
                          </Box>
                        <Box sx={{ 
                          width: "100%",
                          height: { xs: "200px", md: "258px" },
                          position: "relative",
                          borderRadius: "10px",
                          overflow: "hidden",
                          backgroundColor: "rgba(0,0,0,0.06)",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                          my: "auto"
                        }}>
                          {imageSrc ? (
                             <Image src={imageSrc} alt={subCat} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "cover" }} />
                          ) : (
                             <Box sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                               <Typography sx={{ fontFamily: inter.style.fontFamily, color: "#888", fontSize: "14px", fontWeight: 500 }}>
                                 Image Placeholder
                               </Typography>
                             </Box>
                          )}
                        </Box>
                      </Box>
                    </Box>

                    {/* Items Block Wrapper */}
                    <Box sx={{ flex: 1, display: "flex", justifyContent: { xs: "center", md: isEven ? "flex-end" : "flex-start" }, width: "100%" }}>
                      {/* Items Block */}
                      <Box sx={{ width: "100%", maxWidth: { xs: "100%", sm: "400px", md: "400px" }, pt: { xs: 0, md: subCat !== "Other" ? "48px" : 0 }, px: { xs: 1, md: 0 } }}>
                        {/* Subheadings for Name and Price */}
                        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2, pb: 1, borderBottom: "2px solid rgba(0,0,0,0.05)", height: "32px", alignItems: "flex-end" }}>
                          <Typography sx={{ fontFamily: openSans.style.fontFamily, fontWeight: 700, fontSize: "14px", color: "#888", textTransform: "uppercase", lineHeight: "16px" }}>
                            Name
                          </Typography>
                          <Typography sx={{ fontFamily: openSans.style.fontFamily, fontWeight: 700, fontSize: "14px", color: "#888", textTransform: "uppercase", lineHeight: "16px" }}>
                            Price
                          </Typography>
                        </Box>
                        
                        {items.map((item, i) => (
                          <Box key={i} sx={{ display: "flex", justifyContent: "space-between", mb: { xs: 1.5, md: 2 }, alignItems: "center" }}>
                            <Typography sx={{ fontFamily: mavenPro.style.fontFamily, fontWeight: 500, fontSize: { xs: "18px", md: "22px" }, lineHeight: { xs: "24px", md: "32px" }, color: "#000000", pr: 2 }}>
                              {item.name}
                            </Typography>
                            <Typography sx={{ fontFamily: mavenPro.style.fontFamily, fontWeight: 500, fontSize: { xs: "18px", md: "22px" }, lineHeight: { xs: "24px", md: "32px" }, color: "#000000", ml: 1, flexShrink: 0 }}>
                              <span style={{ fontFamily: inter.style.fontFamily, fontWeight: 500, fontSize: "16px", marginRight: "2px" }}>₹</span>{item.price || 0}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              );
            })}
            <Typography sx={{ fontFamily: inter.style.fontFamily, fontSize: "12px", color: "#888", mt: 4, textAlign: "center", width: "100%" }}>
              *Disclaimer: Images shown are for representational purposes only. Actual products may vary upon visit.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
