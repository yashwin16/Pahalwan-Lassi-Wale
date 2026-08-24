"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Box } from "@mui/material";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function PageLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const lassiRef = useRef<HTMLDivElement>(null);
  const [frame, setFrame] = useState(1);

  // Trigger loader on route changes
  useEffect(() => {
    setLoading(true);
    setFrame(1);
    
    // Cycle through 7 frames rapidly (150ms per frame)
    const interval = setInterval(() => {
      setFrame((prev) => (prev < 7 ? prev + 1 : 7)); // Stop at frame 7
    }, 150);

    // Maintain loader for 1.2 seconds to make it snappy
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [pathname, searchParams]);

  // Preload frames 1 to 7 to prevent flickering
  useEffect(() => {
    for (let i = 1; i <= 7; i++) {
      const img = new window.Image();
      img.src = `/images/lassiLoader/frames/frame${i}.webp`;
    }
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 9999, // Ensure it's on top of everything
            backgroundColor: "#EBEBE2", // Using the global theme background color
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ position: "relative", width: "150px", height: "300px" }}>
            <AnimatePresence mode="popLayout">
              <motion.div
                key={frame}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image
                  src={`/images/lassiLoader/frames/frame${frame}.webp`}
                  alt="Filling Lassi Glass"
                  fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
