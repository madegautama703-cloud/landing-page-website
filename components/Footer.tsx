import Link from "next/link";

const BRAND_MAPS_URL = "https://maps.google.com/?q=Bali,Indonesia";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FFFFFF] text-[#1A1A1A] py-[50px] md:py-[60px]">
      <div className="max-w-[1024px] mx-auto px-[25px] flex flex-col md:flex-row items-center justify-between gap-[25px]">
        {/* Left: Your Brand Logo (5px grid: h-[35px]) */}
        <Link
          href="/"
          aria-label="Your Brand Home"
          className="flex items-center hover:opacity-80 transition-opacity duration-[200ms] ease-out"
        >
          <img
            src="/your-brand-dark.png"
            alt="Your Brand"
            className="h-[35px] w-auto object-contain rounded-none"
          />
        </Link>

        {/* Center: Copyright Notice */}
        <p className="text-[13px] md:text-[14px] font-light text-[#494c4f] tracking-[0.02em] text-center">
          Copyright &copy; 2026 &ndash; Your Brand. All Rights Reserved
        </p>

        {/* Right: Location & Social Icons (5px grid: gap-[10px], w-[30px] h-[30px], w-[15px] h-[15px]) */}
        <div className="flex items-center gap-[10px]">
          <a
            href={BRAND_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Your Brand Location"
            className="w-[30px] h-[30px] rounded-full bg-[#8C7A6B] text-white flex items-center justify-center hover:bg-[#1A1A1A] transition-colors duration-[200ms] ease-out"
          >
            {/* Map Pin / Location Icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-[15px] h-[15px]"
              aria-hidden="true"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-[30px] h-[30px] rounded-full bg-[#8C7A6B] text-white flex items-center justify-center hover:bg-[#1A1A1A] transition-colors duration-[200ms] ease-out"
          >
            {/* Instagram Icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-[15px] h-[15px]"
              aria-hidden="true"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
