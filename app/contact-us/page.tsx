"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Motion & Easing Tokens from DESIGN.md & SKILL.md
 * - Scroll Reveal Curve (Smooth Content Entrance): cubic-bezier(0.22, 0.61, 0.24, 1)
 * - Image & Media Reveal: cubic-bezier(0.25, 0.5, 0.5, 0.9)
 * - Decelerate Out: cubic-bezier(0.215, 0.61, 0.355, 1)
 */
const EASE_ENTER: [number, number, number, number] = [0.22, 0.61, 0.24, 1];
const EASE_REVEAL: [number, number, number, number] = [0.25, 0.5, 0.5, 0.9];
const EASE_DECEL: [number, number, number, number] = [0.215, 0.61, 0.355, 1];

const SISSI_GOOGLE_URL =
  "https://www.google.co.id/search?client=safari&hs=YpdB&channel=iphone_bm&sca_esv=3c68ee3254e36628&cs=1&output=search&kgmid=%2Fg%2F11zg4ct9g5&q=Sissi%20Heritage&shem=dlvs1%2Cepsd1%2Cesd2e%2Cltae%2Crimspwouoe%2Csdpie&shndl=30&source=sh%2Fx%2Floc%2Funi%2Fm1%2F1&kgs=095dba96212eaa79";

export default function ContactUsPage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-full bg-[#FFFFFF] text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-[#FFFFFF]">
      {/* =====================================================================
          MAIN CONTACT US CONTAINER (Single Location: Sissi Heritage Klungkung)
          (5px grid: max-w-[900px] mx-auto px-[25px] pt-[135px] md:pt-[155px] pb-[65px] md:pb-[85px])
         ===================================================================== */}
      <section className="max-w-[900px] mx-auto px-[25px] pt-[135px] md:pt-[155px] pb-[65px] md:pb-[85px]">
        {/* 1. Left-Aligned Heading, Subtitle & Contact Details for Klungkung */}
        <motion.div
          initial={
            prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE_DECEL }}
          className="mb-[35px] md:mb-[40px]"
        >
          <h1 className="text-[30px] md:text-[35px] font-normal tracking-[0.03em] uppercase text-[#867561] leading-[1.15] mb-[15px]">
            CONTACT US
          </h1>

          <p className="text-[15px] md:text-[17px] font-normal text-[#494c4f] leading-[1.5] mb-[25px]">
            Have a question or planning a visit to Sissi Heritage in Klungkung?
            Get in touch with us &mdash; we&rsquo;re ready to help.
          </p>

          {/* Instagram, Email & Location Row (5px grid: gap-[25px] sm:gap-[80px]) */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-[20px] sm:gap-[80px]">
            <div className="flex flex-col">
              <span className="text-[13px] md:text-[14px] font-semibold text-[#55595c] leading-[1.4]">
                Instagram
              </span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] md:text-[14px] font-light text-[#55595c] hover:text-[#1A1A1A] transition-colors duration-[200ms] mt-[2px]"
              >
                @sissiheritage
              </a>
            </div>

            <div className="flex flex-col">
              <span className="text-[13px] md:text-[14px] font-semibold text-[#55595c] leading-[1.4]">
                Email
              </span>
              <a
                href="mailto:info@sissiheritage.com"
                className="text-[13px] md:text-[14px] font-light text-[#55595c] hover:text-[#1A1A1A] transition-colors duration-[200ms] mt-[2px]"
              >
                info@sissiheritage.com
              </a>
            </div>

            <div className="flex flex-col">
              <span className="text-[13px] md:text-[14px] font-semibold text-[#55595c] leading-[1.4]">
                Location
              </span>
              <a
                href={SISSI_GOOGLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] md:text-[14px] font-light text-[#55595c] hover:text-[#1A1A1A] transition-colors duration-[200ms] mt-[2px]"
              >
                Jl. Gajah Mada No.18, Semarapura Tengah, Klungkung, Bali
              </a>
            </div>
          </div>
        </motion.div>

        {/* 2. Single Location Showcase & Interactive Map for Klungkung, Bali (5px grid: gap-[10px]) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
          {/* Left: Single Location Hero Tile ("Experience Sissi Heritage in Klungkung") */}
          <motion.div
            initial={
              prefersReducedMotion
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, y: 20, scale: 0.99 }
            }
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: EASE_ENTER }}
            className="relative w-full aspect-[10/11] overflow-hidden rounded-none group"
          >
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85"
              alt="Sissi Heritage in Semarapura, Klungkung, Bali"
              className="w-full h-full object-cover rounded-none transition-transform duration-[700ms] ease-out group-hover:scale-105"
            />

            {/* Warm Dark Overlay for Crisp White Serif Legibility */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-[300ms]" />

            {/* Centered Sissi Heritage Klungkung Title, Subtitle & Ghost Button */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-[25px] text-center">
              <img
                src="/sissi-logo-white.png"
                alt="Sissi Heritage"
                className="h-[45px] w-auto object-contain mb-[15px] rounded-none"
              />
              <h2 className="text-[20px] lg:text-[24px] font-semibold text-white tracking-[0.01em] leading-[1.25] mb-[5px]">
                Experience Sissi Heritage in Klungkung
              </h2>
              <p className="text-[12px] md:text-[13px] font-light text-white/90 mb-[20px]">
                Jl. Gajah Mada No.18, Semarapura Tengah &bull; Open Daily 8am
                &ndash; 11pm
              </p>

              <a
                href={SISSI_GOOGLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white/80 bg-black/40 px-[30px] py-[5px] text-[12px] md:text-[13px] font-medium text-white rounded-none hover:bg-white hover:text-[#1A1A1A] transition-colors duration-[250ms] ease-out"
              >
                Book Your Table
              </a>
            </div>
          </motion.div>

          {/* Right: Embedded Google Map of Sissi Heritage Klungkung */}
          <motion.div
            initial={
              prefersReducedMotion
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, y: 20, scale: 0.99 }
            }
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.08, ease: EASE_REVEAL }}
            className="relative w-full aspect-[10/11] overflow-hidden rounded-none border border-[#d5d5d5] bg-[#eeeeee]"
          >
            <iframe
              title="Sissi Heritage Klungkung Bali Map"
              src="https://maps.google.com/maps?q=Sissi+Heritage+Jl.+Gajah+Mada+No.18+Semarapura+Klungkung+Bali&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 rounded-none"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={SISSI_GOOGLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-[10px] left-[10px] z-10 bg-[#FFFFFF] border border-[#d5d5d5] px-[10px] py-[5px] text-[11px] font-normal text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors duration-[200ms]"
            >
              Open Sissi Heritage in Google &#8599;
            </a>
          </motion.div>
        </div>
      </section>

      {/* Subtle Bottom Divider before Global Footer */}
      <div className="max-w-[900px] mx-auto px-[25px]">
        <div className="w-full border-t border-[#d5d5d5]/60" />
      </div>
    </div>
  );
}
