"use client";

import Link from "next/link";
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

const BRAND_MAPS_URL = "https://maps.google.com/?q=Bali,Indonesia";

export default function AboutUsPage() {
  const prefersReducedMotion = useReducedMotion();

  const revealUp = (delay = 0) => ({
    initial: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.65, delay, ease: EASE_ENTER },
  });

  const mediaReveal = (delay = 0) => ({
    initial: prefersReducedMotion
      ? { opacity: 1, scale: 1 }
      : { opacity: 0, scale: 0.98 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.7, delay, ease: EASE_REVEAL },
  });

  return (
    <div className="w-full bg-[#FFFFFF] text-[#1A1A1A] selection:bg-[#1A1A1A] selection:text-[#FFFFFF]">
      {/* =====================================================================
          1. ABOUT US INTRO + 2 SIDE-BY-SIDE PORTRAIT PHOTOS
          (5px grid: max-w-[780px] px-[25px] pt-[140px] md:pt-[165px] pb-[55px] md:pb-[65px])
         ===================================================================== */}
      <section className="max-w-[780px] mx-auto px-[25px] pt-[140px] md:pt-[165px]">
        <motion.div
          initial={
            prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_DECEL }}
        >
          <h1 className="text-[25px] md:text-[30px] font-normal tracking-[0.06em] uppercase text-[#1A1A1A] text-center mb-[20px]">
            ABOUT US
          </h1>

          <p className="text-[13px] md:text-[14px] font-light leading-[1.75] text-[#1A1A1A] text-justify mb-[35px] md:mb-[40px]">
            Born from a passion for specialty coffee and timeless design, Your
            Brand is more than a coffee house—it&rsquo;s a sensory homecoming.
            Nestled in the vibrant heart of Bali, we have created an intimate
            sanctuary where classic craftsmanship meets the rich single-origin
            harvests of the archipelago. Our tables serve as a gathering place
            for the community and travelers alike, where every cup is a
            celebration of family, history, and the simple, timeless joy of
            sharing coffee and freshly baked bread together.
          </p>
        </motion.div>

        {/* 2-Column Side-by-Side Unframed Photos (5px grid: gap-[20px]) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
          <motion.div
            {...mediaReveal(0.05)}
            className="w-full aspect-[3/4] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85"
              alt="Guests browsing the menu at Your Brand Coffee House"
              className="w-full h-full object-cover rounded-none"
            />
          </motion.div>

          <motion.div
            {...mediaReveal(0.15)}
            className="w-full aspect-[3/4] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=85"
              alt="Rustic stone-walled Your Brand interior with warm chandelier and espresso bar"
              className="w-full h-full object-cover rounded-none"
            />
          </motion.div>
        </div>

        {/* Thin Horizontal Divider (5px grid: my-[50px] md:my-[60px]) */}
        <div className="w-full border-t border-[#d5d5d5]/70 my-[50px] md:my-[60px]" />
      </section>

      {/* =====================================================================
          2. UNIQUE COFFEE EXPERIENCE (2-Column Split: Left Text, Right Tall Photo)
          (5px grid: max-w-[780px] px-[25px] pb-[55px] md:pb-[70px] gap-[30px])
         ===================================================================== */}
      <section className="max-w-[780px] mx-auto px-[25px] pb-[55px] md:pb-[70px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] items-start">
          {/* Left Column: Heading + 2 Justified Paragraphs */}
          <motion.div {...revealUp(0)} className="flex flex-col pr-[0px] md:pr-[10px]">
            <h2 className="text-[14px] md:text-[15px] font-normal tracking-[0.06em] uppercase text-[#1A1A1A] mb-[15px]">
              UNIQUE COFFEE EXPERIENCE
            </h2>

            <div className="flex flex-col gap-[15px] text-[13px] md:text-[14px] font-light leading-[1.75] text-[#1A1A1A] text-justify">
              <p>
                Savouring a cup at Your Brand is a sensory journey through
                artisanal roasting, where the scent of highland Arabica beans
                freshly roasted in our small-batch drum roaster fills the air.
                Our flagship space offers a distinct atmosphere, from the warm,
                artisan-styled espresso bar to the theatrical pour of our
                signature filter brews and homemade tiramisù.
              </p>
              <p>
                We blend architectural grandeur with intimate, sunlit corners to
                create a welcoming sanctuary for the finest coffee and brunch
                experience. It is a sensory journey where the art of the roast
                is as captivating as the timeless space in which it is served.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Tall Vertical Portrait Photo */}
          <motion.div
            {...mediaReveal(0.1)}
            className="w-full aspect-[3/4] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=85"
              alt="Artisan serving freshly crafted coffee and sourdough pastry at Your Brand"
              className="w-full h-full object-cover rounded-none"
            />
          </motion.div>
        </div>
      </section>

      {/* =====================================================================
          3. EXPERTISE IN + 2 PARAGRAPHS + 3-COLUMN PHOTO GRID
          (5px grid: max-w-[780px] px-[25px] pb-[45px] md:pb-[55px])
         ===================================================================== */}
      <section className="max-w-[780px] mx-auto px-[25px] pb-[45px] md:pb-[55px]">
        <motion.div {...revealUp(0)} className="mb-[35px] md:mb-[40px]">
          <h2 className="text-[14px] md:text-[15px] font-normal tracking-[0.06em] uppercase text-[#1A1A1A] mb-[15px]">
            EXPERTISE IN
          </h2>

          <div className="flex flex-col gap-[15px] text-[13px] md:text-[14px] font-light leading-[1.75] text-[#1A1A1A]">
            <p>
              Our mastery lies in the patience of our signature small-batch
              roasting profiles and 48-hour fermented sourdough viennoiserie,
              resulting in a rich, velvety crema and flaky golden crust that are
              hallmarks of true craft. We are artisans of the handmade, roasting
              specialty lots and baking fresh cornetti daily using traditional
              techniques and timeless recipes passed down through generations.
            </p>
            <p>
              By meticulously sourcing prized single-origin beans alongside
              classic culinary ingredients and the freshest local produce, we
              ensure every cup and plate at Your Brand is a testament to quality
              and balance. For us, the perfect espresso isn&rsquo;t just a
              drink—it is a science, an art, and our team&rsquo;s labor of
              love.
            </p>
          </div>
        </motion.div>

        {/* 3-Column Unframed Vertical Photos (5px grid: gap-[20px]) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[20px]">
          <motion.div
            {...mediaReveal(0)}
            className="w-full aspect-[3/4] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=85"
              alt="Signature citrus espresso tonic in a stemmed glass at Your Brand"
              className="w-full h-full object-cover rounded-none"
            />
          </motion.div>

          <motion.div
            {...mediaReveal(0.1)}
            className="w-full aspect-[3/4] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85"
              alt="Artisanal Maritozzo brioche bun filled with vanilla bean cream"
              className="w-full h-full object-cover rounded-none"
            />
          </motion.div>

          <motion.div
            {...mediaReveal(0.2)}
            className="w-full aspect-[3/4] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=85"
              alt="Freshly baked artisanal sourdough focaccia and roasted coffee on dark wood"
              className="w-full h-full object-cover rounded-none"
            />
          </motion.div>
        </div>
      </section>

      {/* =====================================================================
          4. FULL-WIDTH ARCHITECTURAL BANNER ("Experience Your Brand" + "Our Menu")
          (5px grid: h-[180px] md:h-[210px] mb-[55px] md:mb-[65px])
         ===================================================================== */}
      <section className="relative w-full h-[180px] md:h-[210px] overflow-hidden mb-[55px] md:mb-[65px]">
        <img
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=2000&q=85"
          alt="Warm rustic stone window and archway at Your Brand"
          className="w-full h-full object-cover rounded-none"
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          {...revealUp(0)}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-[25px]"
        >
          <h2 className="text-[18px] md:text-[22px] font-normal text-white tracking-[0.02em] mb-[15px]">
            Experience Your Brand
          </h2>
          <Link
            href="/menu"
            className="inline-block border border-white/85 px-[35px] py-[5px] text-[12px] md:text-[13px] font-normal text-white rounded-none hover:bg-white hover:text-[#1A1A1A] transition-colors duration-[250ms] ease-out"
          >
            Our Menu
          </Link>
        </motion.div>
      </section>

      {/* =====================================================================
          5. OUR LOCATION (Flagship Location)
          (5px grid: max-w-[780px] px-[25px] pb-[60px] md:pb-[75px])
         ===================================================================== */}
      <section className="max-w-[780px] mx-auto px-[25px] pb-[60px] md:pb-[75px]">
        <motion.h2
          {...revealUp(0)}
          className="text-[25px] md:text-[30px] font-normal tracking-[0.06em] uppercase text-[#1A1A1A] text-center mb-[35px] md:mb-[45px]"
        >
          OUR LOCATION
        </motion.h2>

        <motion.div
          {...revealUp(0.05)}
          className="grid grid-cols-1 md:grid-cols-12 gap-[30px] items-start"
        >
          {/* Left Column: Location Details */}
          <div className="md:col-span-5 flex flex-col">
            <h3 className="text-[16px] md:text-[18px] font-normal tracking-[0.05em] uppercase text-[#1A1A1A] mb-[10px]">
              YOUR BRAND FLAGSHIP
            </h3>

            <p className="text-[13px] md:text-[14px] font-light leading-[1.65] text-[#494c4f] mb-[20px]">
              Timeless elegance with warm artisanal comfort in the heart of
              town &mdash; perfect for slow morning coffees, relaxed brunch
              gatherings, and intimate evening conversations.
            </p>

            <div className="flex flex-col gap-[10px] text-[13px] md:text-[14px] font-light text-[#1A1A1A] mb-[25px]">
              <div>
                <span className="font-semibold uppercase tracking-[0.04em] text-[11px] text-[#55595c] block">
                  Address
                </span>
                <span>Jl. Raya Utama No. 18, Bali, Indonesia</span>
              </div>

              <div>
                <span className="font-semibold uppercase tracking-[0.04em] text-[11px] text-[#55595c] block">
                  Opening Hours
                </span>
                <span>Open Daily &bull; 8:00 AM &ndash; 11:00 PM</span>
              </div>
            </div>

            <div>
              <a
                href={BRAND_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[#1A1A1A] px-[25px] py-[10px] text-[12px] md:text-[13px] font-normal tracking-[0.03em] text-[#1A1A1A] rounded-none hover:bg-[#1A1A1A] hover:text-white transition-colors duration-[250ms] ease-out"
              >
                Open in Google Maps &#8599;
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Google Map */}
          <div className="md:col-span-7">
            <div className="relative w-full aspect-[4/3] overflow-hidden border border-[#d5d5d5] bg-[#eeeeee]">
              <iframe
                title="Your Brand Map"
                src="https://maps.google.com/maps?q=Bali,Indonesia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={BRAND_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-[10px] left-[10px] z-10 bg-[#FFFFFF] border border-[#d5d5d5] px-[10px] py-[5px] text-[10px] font-normal text-[#2575fc] shadow-none hover:opacity-85 transition-opacity duration-[150ms]"
              >
                Open in Maps &#8599;
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Subtle Divider before Global Footer (5px grid: mt-[55px] md:mt-[65px]) */}
        <div className="w-full border-t border-[#d5d5d5]/70 mt-[55px] md:mt-[65px]" />
      </section>
    </div>
  );
}
