"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Motion & Easing Tokens from DESIGN.md & SKILL.md
 * - Scroll Reveal Curve (Smooth Content Entrance): cubic-bezier(0.22, 0.61, 0.24, 1)
 * - Image & Media Reveal: cubic-bezier(0.25, 0.5, 0.5, 0.9)
 */
const EASE_ENTER: [number, number, number, number] = [0.22, 0.61, 0.24, 1];
const EASE_REVEAL: [number, number, number, number] = [0.25, 0.5, 0.5, 0.9];

interface GalleryPhoto {
  src: string;
  alt: string;
}

/**
 * 30 Vertical Portrait Gallery Photos (3 Columns x 10 Rows)
 * Replicating 100% the composition, visual rhythm, and sequence of Gallery reference
 * for Sissi Heritage in Klungkung, Bali.
 */
const GALLERY_PHOTOS: GalleryPhoto[] = [
  // Row 1
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=85",
    alt: "Warm candlelit espresso bar and rustic stone archways at Sissi Heritage Klungkung",
  },
  {
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=85",
    alt: "Overhead artisanal sourdough focaccia on a dark wooden table",
  },
  {
    src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=800&q=85",
    alt: "Classic entrance doorway at Sissi Heritage Klungkung with warm glowing interior",
  },

  // Row 2
  {
    src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85",
    alt: "Artisanal Maritozzo brioche bun with vanilla cream on a white plate",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=85",
    alt: "Friends gathered around a rustic wooden table enjoying morning coffee and brunch",
  },
  {
    src: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=85",
    alt: "Signature citrus espresso spritz in a stemmed glass against a textured stone wall",
  },

  // Row 3
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85",
    alt: "Rustic roastery corner with woven coffee basket, bottles and vintage scale",
  },
  {
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=85",
    alt: "Limestone wall sconce and vintage framed sketch inside Sissi Heritage",
  },
  {
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=85",
    alt: "Warm golden-lit café dining room with wooden tables and arches",
  },

  // Row 4
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=85",
    alt: "Artisan serving freshly baked sourdough and specialty coffee at a wooden table",
  },
  {
    src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=85",
    alt: "Small-batch bottled cold brew and reserve coffee collection on a wooden shelf",
  },
  {
    src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=85",
    alt: "Sunlit verandah terrace seating at Sissi Heritage Klungkung",
  },

  // Row 5
  {
    src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=85",
    alt: "Overhead view of guest enjoying artisanal brunch plate at a round wooden table",
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=85",
    alt: "Open-air courtyard seating with Sissi Heritage terrace tables under timber pergola",
  },
  {
    src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=85",
    alt: "Illuminated stone archway bar displaying botanical syrups, carafes and glassware",
  },

  // Row 6
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=85",
    alt: "Overhead wooden table spread of freshly baked sourdough, iced citrus coffee and brunch",
  },
  {
    src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=800&q=85",
    alt: "Vintage hanging sign and warm lantern outside Sissi Heritage Klungkung",
  },
  {
    src: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=800&q=85",
    alt: "Two guests browsing the vintage parchment coffee menu at a sunlit table",
  },

  // Row 7
  {
    src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=85",
    alt: "Friends toasting glasses of espresso shakerato and cold brew tonic over brunch",
  },
  {
    src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=85",
    alt: "Intimate evening coffee toast framed by tropical foliage and warm café lights",
  },
  {
    src: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=85",
    alt: "Overhead artisanal plate served alongside a cup of rich crema espresso on dark wood",
  },

  // Row 8
  {
    src: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=85",
    alt: "Close-up of freshly baked golden Maritozzi and Bomboloni filled with espresso cream",
  },
  {
    src: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=85",
    alt: "Homemade Tiramisù all'Espresso plated on white porcelain over a dark wood table",
  },
  {
    src: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&w=800&q=85",
    alt: "Artisan baker tending the copper-domed sourdough oven at Sissi Heritage",
  },

  // Row 9
  {
    src: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=800&q=85",
    alt: "Ceremonial matcha latte, cascara spritz and brunch dishes on a rustic table",
  },
  {
    src: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=85",
    alt: "Overhead shot of artisanal hazelnut and cacao sourdough focaccia on a wooden board",
  },
  {
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=85",
    alt: "Sunlit stone wall, linen curtains and vintage framed prints at Sissi Heritage Klungkung",
  },

  // Row 10
  {
    src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=85",
    alt: "Overhead shot of Affogato al Caffè in a wide white porcelain bowl on dark wood",
  },
  {
    src: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=85",
    alt: "High-angle view of baristas crafting espresso and filter coffee behind the marble counter",
  },
  {
    src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=85",
    alt: "Overhead flat-lay of five white ceramic plates with assorted cornetti and maritozzi",
  },
];

export default function GalleryPage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-full bg-[#FFFFFF] text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-[#FFFFFF]">
      {/* =====================================================================
          GALLERY 3-COLUMN UNFRAMED PHOTO GRID (30 Portrait Photos: 3x10)
          (5px grid: max-w-[780px] mx-auto px-[25px] pt-[120px] md:pt-[135px] pb-[65px] md:pb-[80px] gap-[10px])
         ===================================================================== */}
      <section className="max-w-[780px] mx-auto px-[25px] pt-[120px] md:pt-[135px] pb-[65px] md:pb-[80px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[10px]">
          {GALLERY_PHOTOS.map((photo, idx) => {
            const colIndex = idx % 3;
            return (
              <motion.div
                key={photo.src}
                initial={
                  prefersReducedMotion
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 20, scale: 0.98 }
                }
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.65,
                  delay: colIndex * 0.08,
                  ease: colIndex % 2 === 0 ? EASE_REVEAL : EASE_ENTER,
                }}
                className="w-full aspect-[3/4] overflow-hidden rounded-none bg-[#eeeeee]"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading={idx < 6 ? "eager" : "lazy"}
                  className="w-full h-full object-cover rounded-none transition-transform duration-[700ms] ease-out hover:scale-105"
                />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Subtle Bottom Divider before Global Footer */}
      <div className="max-w-[780px] mx-auto px-[25px]">
        <div className="w-full border-t border-[#d5d5d5]/60" />
      </div>
    </div>
  );
}
