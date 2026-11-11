"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";

/**
 * Motion tokens from DESIGN.md & SKILL.md:
 * - Duration scale: 100ms (0.1s), 150ms (0.15s), 200ms (0.2s), 250ms (0.25s),
 *   300ms (0.3s), 500ms (0.5s), 600ms (0.6s), 750ms (0.75s), 800ms (0.8s)
 * - Easing curves:
 *   - Enter / fadeInUp: cubic-bezier(0.22, 0.61, 0.24, 1)
 *   - Staggered reveal: cubic-bezier(0.25, 0.5, 0.5, 0.9)
 *   - Smooth deceleration: cubic-bezier(0.215, 0.61, 0.355, 1)
 * - Spacing grid: 5px base unit (all offsets, paddings, margins, gaps are multiples of 5px)
 */
const EASE_ENTER: [number, number, number, number] = [0.22, 0.61, 0.24, 1];
const EASE_REVEAL: [number, number, number, number] = [0.25, 0.5, 0.5, 0.9];
const EASE_DECEL: [number, number, number, number] = [0.215, 0.61, 0.355, 1];

const SISSI_GOOGLE_URL =
  "https://www.google.co.id/search?client=safari&hs=YpdB&channel=iphone_bm&sca_esv=3c68ee3254e36628&cs=1&output=search&kgmid=%2Fg%2F11zg4ct9g5&q=Sissi%20Heritage&shem=dlvs1%2Cepsd1%2Cesd2e%2Cltae%2Crimspwouoe%2Csdpie&shndl=30&source=sh%2Fx%2Floc%2Funi%2Fm1%2F1&kgs=095dba96212eaa79";

const galleryGridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const galleryItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_REVEAL,
    },
  },
};

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=85",
    alt: "Artisanal latte art served on a dark wooden table at Sissi Heritage",
  },
  {
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=85",
    alt: "Master barista crafting specialty espresso at Sissi Heritage Klungkung",
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85",
    alt: "Overhead view of single-origin pour-over coffee and espresso",
  },
  {
    src: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=800&q=85",
    alt: "Warm backlit shelves displaying roasted coffee jars and glassware",
  },
  {
    src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=85",
    alt: "Two signature iced specialty coffees in sunlit Sissi Heritage cafe",
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=85",
    alt: "Warm rustic interior of Sissi Heritage Klungkung with hanging lanterns",
  },
  {
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=800&q=85",
    alt: "Rustic stone and timber coffee bar counter in Klungkung",
  },
  {
    src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=800&q=85",
    alt: "Exterior entrance of Sissi Heritage in Semarapura, Klungkung",
  },
];

export default function HomePage() {
  const prefersReducedMotion = useReducedMotion();

  const fadeInUpProps = (delay = 0) => ({
    initial: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: prefersReducedMotion ? 0 : 0.75,
      delay: prefersReducedMotion ? 0 : delay,
      ease: EASE_ENTER,
    },
  });

  return (
    <div className="w-full bg-[#FFFFFF] text-[#1A1A1A]">
      {/* 1. HERO SECTION: Full-viewport Fixed-Background Curtain Reveal (matches L'Osteria scroll recording 1:1 on desktop & mobile) */}
      <section
        className="relative w-full h-screen min-h-[560px] overflow-hidden"
        style={{ clipPath: "inset(0)" }}
      >
        {/* Viewport-locked background layer clipped strictly to the Hero section bounds */}
        <div className="fixed inset-0 w-full h-full pointer-events-none select-none transform-gpu will-change-transform">
          <img
            src="/sissi-hero.jpg"
            alt="Sissi Heritage Klungkung facade and warm ambient lights"
            className="w-full h-full object-cover object-center rounded-none"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        {/* Bottom-left title moves up with the bottom edge of the Hero section over the fixed photo */}
        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="max-w-[1024px] mx-auto px-[25px] pb-[35px] md:pb-[40px]">
            <motion.h1
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.75,
                ease: EASE_DECEL,
              }}
              className="text-[30px] md:text-[35px] font-normal text-white leading-[1.2] tracking-[0.01em]"
            >
              Klungkung
            </motion.h1>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL INTRO STATEMENT (5px grid spacing: pt-[55px] pb-[50px] md:pt-[60px] md:pb-[55px]) */}
      <section className="w-full bg-[#FFFFFF] pt-[55px] pb-[50px] md:pt-[60px] md:pb-[55px]">
        <motion.div
          {...fadeInUpProps(0)}
          className="max-w-[1024px] mx-auto px-[25px]"
        >
          <p className="text-[20px] md:text-[23px] leading-[1.6] font-light text-[#2B2B2B] tracking-[0.01em]">
            Nestled in the historic cultural heart of Semarapura, Klungkung,
            Sissi Heritage redefines Bali&rsquo;s coffee culture with refined
            specialty roasts and understated heritage elegance. Thoughtfully
            designed interiors flow effortlessly with timeless architecture,
            offering a serene yet sophisticated ambiance.
          </p>
        </motion.div>
      </section>

      {/* 3. TWO-COLUMN FEATURE SECTION (5px grid: pb-[80px] md:pb-[95px], gap-[40px] md:gap-[50px]) */}
      <section className="w-full bg-[#FFFFFF] pb-[80px] md:pb-[95px]">
        <div className="max-w-[1024px] mx-auto px-[25px]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[40px] md:gap-[50px] items-start">
            {/* Left Portrait Image */}
            <motion.div {...fadeInUpProps(0)} className="md:col-span-6">
              <img
                src="/sissi-cup-feature.jpg"
                alt="Sissi Heritage specialty iced coffee cup under tropical sunlight"
                className="w-full aspect-[4/5] object-cover object-center rounded-none"
              />
            </motion.div>

            {/* Right Editorial Text & Outline Button (5px grid: pt-[5px] md:pt-[10px], mb-[20px], mb-[30px]) */}
            <motion.div
              {...fadeInUpProps(0.15)}
              className="md:col-span-6 pt-[5px] md:pt-[10px]"
            >
              <h2 className="text-[22px] md:text-[25px] leading-[1.35] tracking-[0.04em] uppercase font-normal text-[#1A1A1A] mb-[20px]">
                SISSI HERITAGE
                <br />
                KLUNGKUNG, BALI
              </h2>

              <p className="text-[16px] md:text-[17px] font-normal text-[#1A1A1A] mb-[20px]">
                Artisanal Coffee &amp; Heritage Comfort in the Heart of Semarapura
              </p>

              <p className="text-[15px] md:text-[16px] leading-[1.7] font-light text-[#494c4f] mb-[30px] max-w-[440px]">
                Located on Jl. Gajah Mada No.18 in Semarapura Tengah, Klungkung,
                Sissi Heritage offers an elevated specialty coffee, roastery, and
                artisanal kitchen experience. Warm heritage interiors meet
                relaxed island hospitality, creating the perfect setting for
                morning rituals, afternoon gatherings, and evening conversations.
              </p>

              <Link
                href="/about-us"
                className="inline-block border border-black bg-transparent text-[#1A1A1A] rounded-none px-[40px] py-[10px] text-[14px] font-normal tracking-[0.03em] hover:bg-[#1A1A1A] hover:text-white transition-colors duration-[250ms] ease-out"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. FULL-WIDTH OPENING HOURS BANNER (5px grid: h-[380px] md:h-[450px], mb-[10px], mb-[30px], px-[35px] py-[10px]) */}
      <section className="relative w-full h-[380px] md:h-[450px] overflow-hidden">
        <img
          src="/sissi-lamp-banner.jpg"
          alt="Warm woven pendant lamp and tropical plants at Sissi Heritage"
          className="w-full h-full object-cover object-center rounded-none"
        />
        <div className="absolute inset-0 bg-black/40" />

        <motion.div
          {...fadeInUpProps(0)}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-[25px] text-white"
        >
          <p className="text-[15px] md:text-[17px] uppercase tracking-[0.14em] font-normal mb-[10px]">
            NOW OPEN EVERYDAY
          </p>
          <h2 className="text-[35px] md:text-[45px] font-normal leading-[1.2] mb-[30px]">
            8am - 11pm
          </h2>
          <Link
            href="/menu"
            className="inline-block border border-black outline outline-1 outline-white/85 bg-transparent text-white rounded-none px-[35px] py-[10px] text-[14px] font-normal tracking-[0.03em] hover:bg-white hover:text-[#1A1A1A] transition-colors duration-[250ms] ease-out"
          >
            Our Menu
          </Link>
        </motion.div>
      </section>

      {/* 5. 8-IMAGE GALLERY GRID (5px grid: py-[80px] md:py-[95px], px-[25px], gap-[15px]) */}
      <section className="w-full bg-[#FFFFFF] py-[80px] md:py-[95px]">
        <div className="max-w-[1024px] mx-auto px-[25px]">
          <motion.div
            variants={prefersReducedMotion ? undefined : galleryGridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-[15px]"
          >
            {galleryImages.map((img) => (
              <motion.div
                key={img.src}
                variants={prefersReducedMotion ? undefined : galleryItemVariants}
                className="w-full aspect-[3/4] overflow-hidden rounded-none"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover rounded-none hover:scale-105 transition-transform duration-[700ms] ease-[cubic-bezier(0.22,0.61,0.24,1)]"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. FULL-WIDTH CTA BANNER (5px grid: h-[210px] md:h-[240px], mb-[15px], px-[30px] py-[10px]) */}
      <section className="relative w-full h-[210px] md:h-[240px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=2000&q=85"
          alt="Experience Sissi Heritage in Klungkung"
          className="w-full h-full object-cover rounded-none"
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          {...fadeInUpProps(0)}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-[25px] text-white"
        >
          <h2 className="text-[21px] md:text-[25px] font-normal tracking-[0.02em] mb-[15px]">
            Experience Sissi Heritage in Klungkung
          </h2>
          <Link
            href="/contact-us"
            className="inline-block border border-black outline outline-1 outline-white/75 bg-black/75 text-white rounded-none px-[30px] py-[10px] text-[13px] font-normal tracking-[0.03em] hover:bg-white hover:text-[#1A1A1A] transition-colors duration-[250ms] ease-out"
          >
            Book Your Table
          </Link>
        </motion.div>
      </section>

      {/* 7. MAP & CONTACT FORM SECTION (5px grid: pt-[80px] pb-[50px] md:pt-[95px] md:pb-[60px], gap-[40px] md:gap-[50px], field gap-[20px]) */}
      <section className="w-full bg-[#FFFFFF] pt-[80px] pb-[50px] md:pt-[95px] md:pb-[60px]">
        <div className="max-w-[1024px] mx-auto px-[25px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[50px] items-start">
            {/* Left: Google Map Embed for Sissi Heritage Klungkung (5px grid height: h-[350px] md:h-[370px]) */}
            <motion.div
              {...fadeInUpProps(0)}
              className="relative w-full h-[350px] md:h-[370px] border border-[#D5D5D5]"
            >
              <iframe
                title="Sissi Heritage Klungkung Location"
                src="https://maps.google.com/maps?q=Sissi+Heritage+Jl.+Gajah+Mada+No.18+Semarapura+Klungkung+Bali&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 rounded-none"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={SISSI_GOOGLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-[10px] left-[10px] z-10 bg-[#FFFFFF] border border-[#D5D5D5] px-[10px] py-[5px] text-[11px] font-normal text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors duration-[200ms]"
              >
                Open Sissi Heritage in Google &#8599;
              </a>
            </motion.div>

            {/* Right: Minimalist Underline Contact Form (5px grid: gap-[20px] between fields, py-[10px] inputs) */}
            <motion.form
              {...fadeInUpProps(0.15)}
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-[20px] pt-[5px]"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  aria-label="Name"
                  className="w-full border-0 border-b border-[#D5D5D5] focus:border-[#1A1A1A] bg-transparent py-[10px] text-[14px] text-[#1A1A1A] placeholder:text-[#999999] rounded-none focus:outline-none transition-colors duration-[200ms] ease-out"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  aria-label="Email"
                  className="w-full border-0 border-b border-[#D5D5D5] focus:border-[#1A1A1A] bg-transparent py-[10px] text-[14px] text-[#1A1A1A] placeholder:text-[#999999] rounded-none focus:outline-none transition-colors duration-[200ms] ease-out"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  aria-label="Message"
                  rows={4}
                  className="w-full border-0 border-b border-[#D5D5D5] focus:border-[#1A1A1A] bg-transparent py-[10px] text-[14px] text-[#1A1A1A] placeholder:text-[#999999] rounded-none focus:outline-none resize-y min-h-[110px] transition-colors duration-[200ms] ease-out"
                />
              </div>

              <div className="pt-[5px]">
                <button
                  type="submit"
                  className="w-full border border-black bg-transparent text-[#1A1A1A] rounded-none py-[10px] px-[15px] text-left text-[13px] font-normal tracking-[0.03em] hover:bg-[#1A1A1A] hover:text-white transition-colors duration-[250ms] ease-out cursor-pointer"
                >
                  Send Message
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
}
