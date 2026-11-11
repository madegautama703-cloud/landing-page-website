"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isLightHeader = pathname !== "/";

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-[1024px] mx-auto px-[25px] py-[25px] md:py-[30px] flex items-center justify-between">
        {/* Sissi Heritage Brand Mark on Left (5px grid: h-[45px] md:h-[50px]) */}
        <Link
          href="/"
          aria-label="Sissi Heritage Home"
          className="flex items-center group focus:outline-none transition-opacity duration-[200ms] ease-out hover:opacity-80"
        >
          <img
            src={isLightHeader ? "/sissi-logo-dark.png" : "/sissi-logo-white.png"}
            alt="Sissi Heritage"
            className="h-[45px] md:h-[50px] w-auto object-contain rounded-none"
          />
        </Link>

        {/* Desktop 5-Page Links on Right (5px grid: gap-[30px] lg:gap-[35px]) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-[30px] lg:gap-[35px]"
        >
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[15px] md:text-[16px] tracking-[0.02em] transition-opacity duration-[200ms] ease-out hover:opacity-75 ${
                  isLightHeader
                    ? isActive
                      ? "font-semibold text-[#6E5D53] opacity-100"
                      : "font-normal text-[#494c4f] opacity-95"
                    : isActive
                    ? "font-normal text-white opacity-100"
                    : "font-normal text-white opacity-95"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button (5px grid: p-[5px]) */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
          className={`md:hidden p-[5px] focus:outline-none ${
            isLightHeader ? "text-[#1A1A1A]" : "text-white"
          }`}
        >
          {mobileOpen ? (
            <X className="w-[25px] h-[25px]" />
          ) : (
            <Menu className="w-[25px] h-[25px]" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer (5px grid: px-[25px] py-[25px] gap-[15px]) */}
      {mobileOpen && (
        <div
          className={`md:hidden border-t px-[25px] py-[25px] ${
            isLightHeader
              ? "bg-[#FFFFFF] border-[#1A1A1A]/15"
              : "bg-[#1A1A1A]/95 border-white/15"
          }`}
        >
          <nav className="flex flex-col gap-[15px]">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`text-[17px] font-normal hover:opacity-75 transition-opacity duration-[200ms] ease-out tracking-[0.02em] ${
                  isLightHeader ? "text-[#1A1A1A]" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
