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

interface MenuItem {
  name: string;
  desc: string;
  price: string;
  tag?: string;
}

/* ============================================================================
 * ORNAMENTAL SVG GRAPHICS (1:1 Vintage Menu Sheet Ornaments)
 * ========================================================================== */

function BrandCrestFlourish({
  color = "#1A1A1A",
  width = 180,
}: {
  color?: string;
  width?: number;
}) {
  return (
    <svg
      width={width}
      height="15"
      viewBox="0 0 180 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
      aria-hidden="true"
    >
      <line x1="5" y1="7.5" x2="62" y2="7.5" stroke={color} strokeWidth="0.7" />
      <line x1="118" y1="7.5" x2="175" y2="7.5" stroke={color} strokeWidth="0.7" />
      <path
        d="M65 7.5C70 3.5 76 3.5 81 7.5C76 11.5 70 11.5 65 7.5Z"
        stroke={color}
        strokeWidth="0.7"
      />
      <path
        d="M99 7.5C104 3.5 110 3.5 115 7.5C110 11.5 104 11.5 99 7.5Z"
        stroke={color}
        strokeWidth="0.7"
      />
      <path
        d="M84 7.5C86.5 2.5 93.5 2.5 96 7.5C93.5 12.5 86.5 12.5 84 7.5Z"
        stroke={color}
        strokeWidth="0.85"
      />
      <circle cx="90" cy="7.5" r="1.5" fill={color} />
      <circle cx="62" cy="7.5" r="1" fill={color} />
      <circle cx="118" cy="7.5" r="1" fill={color} />
    </svg>
  );
}

function SheetHeaderFlourish() {
  return (
    <div className="flex flex-col items-center mb-[20px]">
      <svg
        width="170"
        height="20"
        viewBox="0 0 170 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <line x1="10" y1="10" x2="55" y2="10" stroke="#1A1A1A" strokeWidth="0.75" />
        <line x1="115" y1="10" x2="160" y2="10" stroke="#1A1A1A" strokeWidth="0.75" />
        <path
          d="M58 10C63 4 70 4 75 10C70 16 63 16 58 10Z"
          stroke="#1A1A1A"
          strokeWidth="0.8"
        />
        <path
          d="M95 10C100 4 107 4 112 10C107 16 100 16 95 10Z"
          stroke="#1A1A1A"
          strokeWidth="0.8"
        />
        <path
          d="M77 10C80 2 90 2 93 10C90 18 80 18 77 10Z"
          stroke="#1A1A1A"
          strokeWidth="1"
        />
        <circle cx="85" cy="10" r="2" fill="#1A1A1A" />
        <circle cx="54" cy="10" r="1.2" fill="#1A1A1A" />
        <circle cx="116" cy="10" r="1.2" fill="#1A1A1A" />
      </svg>
    </div>
  );
}

function SheetFooterFlourish() {
  return (
    <div className="flex flex-col items-center mt-[25px] pt-[10px]">
      <svg
        width="170"
        height="18"
        viewBox="0 0 170 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <line x1="15" y1="9" x2="58" y2="9" stroke="#1A1A1A" strokeWidth="0.7" />
        <line x1="112" y1="9" x2="155" y2="9" stroke="#1A1A1A" strokeWidth="0.7" />
        <path
          d="M62 9C66 4.5 72 4.5 76 9C72 13.5 66 13.5 62 9Z"
          stroke="#1A1A1A"
          strokeWidth="0.75"
        />
        <path
          d="M94 9C98 4.5 104 4.5 108 9C104 13.5 98 13.5 94 9Z"
          stroke="#1A1A1A"
          strokeWidth="0.75"
        />
        <circle cx="85" cy="9" r="2.2" fill="#1A1A1A" />
      </svg>
      <div className="flex items-center justify-center gap-[15px] mt-[5px] text-[8px] tracking-[0.08em] text-[#494c4f] uppercase">
        <span>Sissi Heritage Klungkung</span>
        <span>&bull;</span>
        <span>@sissiheritage</span>
        <span>&bull;</span>
        <span>All prices in IDR thousands, subject to service &amp; tax</span>
      </div>
    </div>
  );
}

function MenuQrCodeSvg() {
  const matrix = [
    [1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0],
    [1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0],
    [0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1],
    [1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0],
    [0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1],
    [1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0],
    [0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1],
    [1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0],
    [1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1],
    [1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0],
    [1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1],
    [1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1],
    [1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0],
    [1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1],
  ];

  return (
    <svg
      width="110"
      height="110"
      viewBox="0 0 21 21"
      shapeRendering="crispEdges"
      className="mx-auto w-[110px] h-[110px]"
      aria-label="QR Code for Sissi Heritage Full Menu"
    >
      {matrix.map((row, rIdx) =>
        row.map((cell, cIdx) =>
          cell === 1 ? (
            <rect
              key={`${rIdx}-${cIdx}`}
              x={cIdx}
              y={rIdx}
              width="1"
              height="1"
              fill="#1A1A1A"
            />
          ) : null
        )
      )}
    </svg>
  );
}

/* ============================================================================
 * REUSABLE MENU ROW & CATEGORY BLOCKS (5px Baseline Grid)
 * ========================================================================== */

function MenuSheetRow({ item }: { item: MenuItem }) {
  return (
    <div className="relative py-[5px] text-center">
      {/* Centered Dish/Coffee Title & Description */}
      <div className="px-[45px] md:px-[60px]">
        <h4 className="text-[12px] md:text-[13px] font-semibold tracking-[0.03em] text-[#1A1A1A] leading-[1.25]">
          {item.name}
        </h4>
        <p className="text-[10px] md:text-[11px] font-light italic text-[#494c4f] leading-[1.3] mt-[2px]">
          {item.desc}
        </p>
      </div>

      {/* Right-Aligned Price & Tiny Dietary/Roast Marker */}
      <div className="absolute right-0 top-[5px] flex items-center gap-[5px] text-[11px] md:text-[12px] font-normal text-[#1A1A1A]">
        {item.tag && (
          <span className="inline-flex items-center justify-center w-[12px] h-[12px] border border-[#1A1A1A]/50 text-[7px] font-medium leading-none">
            {item.tag}
          </span>
        )}
        <span className="tabular-nums">{item.price}</span>
      </div>
    </div>
  );
}

function MenuCategoryHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-[10px]">
      <h3 className="text-[16px] md:text-[18px] font-bold tracking-[0.08em] uppercase text-[#1A1A1A] leading-[1.15]">
        {title}
      </h3>
      {subtitle && (
        <p className="text-[10px] md:text-[11px] font-light italic text-[#494c4f] mt-[2px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function LeftCalloutNote({
  topText,
  bottomText,
}: {
  topText: string;
  bottomText: string;
}) {
  return (
    <div className="hidden sm:flex flex-col items-center justify-center border border-[#1A1A1A]/70 px-[10px] py-[5px] text-center w-[75px]">
      <span className="text-[7px] uppercase tracking-[0.08em] text-[#494c4f] leading-[1.2]">
        {topText}
      </span>
      <span className="text-[9px] font-semibold italic text-[#1A1A1A] leading-[1.2] mt-[2px]">
        {bottomText}
      </span>
    </div>
  );
}

/* ============================================================================
 * MENU DATA (Sissi Heritage Klungkung - 6 Classic Sheets)
 * ========================================================================== */

const SHEET_1_ESPRESSO: MenuItem[] = [
  {
    name: "Espresso Singolo",
    desc: "Single shot of our signature Sissi Heritage house blend with dark cocoa, roasted hazelnut & sweet crema",
    price: "35",
  },
  {
    name: "Espresso Doppio",
    desc: "Double extraction of slow-roasted Arabica beans, rich body and velvety finish",
    price: "45",
  },
  {
    name: "Macchiato Tradizionale",
    desc: "Classic espresso stained with a delicate dollop of silky steamed milk foam",
    price: "40",
    tag: "V",
  },
  {
    name: "Piccolo Cortado",
    desc: "Ristretto shot balanced with warm textured milk served in a 100ml fluted glass",
    price: "45",
  },
  {
    name: "Cappuccino Classico",
    desc: "Double espresso layered with airy steamed organic milk and dusted with raw cacao",
    price: "50",
    tag: "V",
  },
  {
    name: "Caffè Latte Artigianale",
    desc: "Smooth house espresso poured over velvety micro-foam milk, served hot or over crystal ice",
    price: "55",
  },
  {
    name: "Flat White Ristretto",
    desc: "Double ristretto shot topped with thin, glossy textured milk for an intense coffee forward cup",
    price: "55",
  },
  {
    name: "Marocchino al Cioccolato",
    desc: "Layered shot of espresso, artisanal Valrhona dark cocoa ganache and frothed milk",
    price: "60",
    tag: "V",
  },
  {
    name: "Affogato al Caffè",
    desc: "Artisanal Madagascar vanilla bean gelato drowned in a piping hot double espresso",
    price: "65",
    tag: "V",
  },
  {
    name: "Shakerato Classico",
    desc: "Double espresso vigorously hand-shaken with cane sugar and ice, strained into a chilled coupe",
    price: "55",
  },
];

const SHEET_1_FILTER: MenuItem[] = [
  {
    name: "Bali Kintamani Natural",
    desc: "Hand-poured V60 filter with bright notes of blood orange, wild honey and hibiscus flower",
    price: "60",
    tag: "V",
  },
  {
    name: "Aceh Gayo Wine Process",
    desc: "Anaerobic fermentation offering deep blackcurrant aroma, dark plum and cacao nib finish",
    price: "65",
    tag: "V",
  },
  {
    name: "Flores Bajawa Washed",
    desc: "High-altitude volcanic Arabica with sweet caramel, toasted almond and tobacco leaf nuances",
    price: "60",
    tag: "V",
  },
  {
    name: "Ethiopia Yirgacheffe Kochere",
    desc: "Delicate floral jasmine bouquet, bergamot tea and Meyer lemon acidity",
    price: "75",
    tag: "V",
  },
  {
    name: "Colombia Huila Reserva",
    desc: "Balanced sweetness of cane sugar, red apple and silky milk chocolate body",
    price: "75",
    tag: "V",
  },
];

const SHEET_2_SIGNATURE_COFFEE: MenuItem[] = [
  {
    name: "Sissi Heritage Espresso Tonic",
    desc: "Double ristretto floated over botanical quinine tonic, dehydrated blood orange & rosemary sprig",
    price: "65",
    tag: "V",
  },
  {
    name: "Crema di Cocco Cold Brew",
    desc: "18-hour slow-steeped Kintamani cold brew crowned with whipped young coconut cream & palm nectar",
    price: "65",
  },
  {
    name: "Caffè alla Nocciola",
    desc: "Espresso layered with house-roasted hazelnut praline paste and textured milk",
    price: "70",
    tag: "N",
  },
  {
    name: "Semarapura Spiced Pandan Latte",
    desc: "Aromatic Balinese pandan leaf reduction infused with cold-pressed espresso and creamy milk",
    price: "65",
  },
];

const SHEET_2_VIENNOISERIE: MenuItem[] = [
  {
    name: "Cornetto Classico",
    desc: "Flaky laminated brioche croissant glazed with orange blossom honey, served warm",
    price: "45",
    tag: "V",
  },
  {
    name: "Cornetto al Pistacchio",
    desc: "Hand-rolled cornetto generously filled with roasted pistachio diplomat cream",
    price: "60",
    tag: "N",
  },
  {
    name: "Pain au Chocolat Valrhona",
    desc: "Crisp French butter pastry folded around two batons of 70% dark Guanaja chocolate",
    price: "55",
    tag: "V",
  },
  {
    name: "Maritozzo con la Panna",
    desc: "Traditional sweet brioche bun split and filled to the brim with vanilla bean whipped cream",
    price: "55",
  },
  {
    name: "Almond Frangipane Bostock",
    desc: "Toasted brioche soaked in espresso-rum syrup, baked with almond cream and sliced almonds",
    price: "60",
    tag: "N",
  },
  {
    name: "Bombolone alla Crema Pasticcera",
    desc: "Artisanal sourdough doughnut dusted in cinnamon sugar with warm vanilla custard core",
    price: "50",
    tag: "V",
  },
  {
    name: "Sfogliatella Riccia",
    desc: "Crisp shell-shaped pastry filled with sweet ricotta, candied citrus peel and cinnamon",
    price: "55",
    tag: "V",
  },
  {
    name: "Truffle & Wild Mushroom Danish",
    desc: "Savoury laminated pastry baked with sautéed forest mushrooms, taleggio cheese and black truffle oil",
    price: "65",
    tag: "V",
  },
];

const SHEET_2_BRUNCH: MenuItem[] = [
  {
    name: "Uova al Tartufo & Sourdough",
    desc: "Soft folded organic eggs on charred levain toast with black truffle butter and aged Parmigiano",
    price: "110",
    tag: "V",
  },
  {
    name: "Avocado, Burrata & Pomodorini",
    desc: "Crushed Hass avocado, creamy burrata, heirloom cherry tomatoes & basil oil on sourdough",
    price: "125",
    tag: "V",
  },
  {
    name: "Heritage Eggs Benedict Royale",
    desc: "Poached free-range eggs, smoked beef brisket and espresso-butter hollandaise on toasted brioche",
    price: "135",
  },
  {
    name: "Ricotta & Fig Brioche French Toast",
    desc: "Thick-cut caramelized brioche topped with whipped lemon ricotta, fresh figs and espresso maple syrup",
    price: "115",
    tag: "V",
  },
];

const SHEET_3_FOCACCIA: MenuItem[] = [
  {
    name: "Schiacciata Mortadella & Pistacchio",
    desc: "Warm rosemary focaccia filled with artisanal mortadella, stracciatella and crushed pistachio",
    price: "120",
    tag: "N",
  },
  {
    name: "Panino Smoked Beef & Rucola",
    desc: "Crisp ciabatta layered with cured beef, mozzarella, wild rocket and sun-dried tomato",
    price: "130",
  },
  {
    name: "Caprese Classica al Pesto",
    desc: "Fior di latte mozzarella, vine-ripened heirloom tomatoes and basil pesto on sourdough focaccia",
    price: "105",
    tag: "V",
  },
];

const SHEET_3_PLATES: MenuItem[] = [
  {
    name: "Burrata Artigianale & Focaccia",
    desc: "Whole 150g creamy burrata served with slow-roasted cherry tomatoes, extra virgin olive oil & warm bread",
    price: "145",
    tag: "V",
  },
  {
    name: "Tagliere del Roaster",
    desc: "Curated board of aged cheeses, cured meats, marinated olives, honeycomb and sourdough",
    price: "185",
  },
  {
    name: "Arancini al Ragù & Mozzarella",
    desc: "Crisp golden saffron risotto balls stuffed with slow-braised beef ragù and smoked provola",
    price: "95",
  },
  {
    name: "Calamari Fritti & Limone",
    desc: "Lightly dusted crispy squid rings with charred lemon and roasted garlic aioli",
    price: "110",
  },
  {
    name: "Patate Arrosto al Rosmarino",
    desc: "Oven-roasted baby potatoes tossed with sea salt, crushed garlic and fresh garden rosemary",
    price: "65",
    tag: "V",
  },
  {
    name: "Insalata Rucola, Pere & Noci",
    desc: "Crisp rocket leaves, poached pear, candied walnuts, shaved Parmigiano & balsamic glaze",
    price: "95",
    tag: "N",
  },
];

const SHEET_3_DOLCI: MenuItem[] = [
  {
    name: "Tiramisù Sissi Heritage all'Espresso",
    desc: "Savoiardi biscuits soaked in our signature double espresso, layered with organic mascarpone crema",
    price: "85",
    tag: "V",
  },
  {
    name: "Torta Caprese al Cioccolato & Caffè",
    desc: "Flourless dark chocolate and roasted almond cake infused with ristretto, served with vanilla cream",
    price: "85",
    tag: "N",
  },
  {
    name: "Panna Cotta alla Vaniglia Bourbon",
    desc: "Silky Madagascar vanilla bean cream topped with wild berry compote and espresso crumble",
    price: "75",
  },
  {
    name: "Cannoli Siciliani Tradizionali",
    desc: "Crisp pastry shells filled to order with sweet ricotta, dark chocolate chips & candied orange",
    price: "80",
    tag: "V",
  },
  {
    name: "Gelato & Sorbetto Artigianale",
    desc: "Two scoops of house-churned gelato: Roasted Espresso, Pistachio, Stracciatella or Lemon Sorbet",
    price: "65",
    tag: "V",
  },
];

const SHEET_4_ROASTERY_BEANS: MenuItem[] = [
  {
    name: "Miscela della Casa 'Klungkung' (250g)",
    desc: "Signature Sissi Heritage blend of 70% Bali & 30% Flores Arabica — dark chocolate, roasted almond, molasses",
    price: "145",
    tag: "V",
  },
  {
    name: "Miscela 'Semarapura Reserve' Dark Roast (250g)",
    desc: "Traditional full-bodied roast profile — bold body, smoky cedar, bittersweet cocoa crema",
    price: "150",
    tag: "V",
  },
  {
    name: "Bali Kintamani Ulian Natural (250g)",
    desc: "Single estate whole beans — tropical jackfruit, mandarin orange and wildflower honey",
    price: "165",
    tag: "V",
  },
  {
    name: "Sumatra Mandheling Pantan Musara (250g)",
    desc: "Wet-hulled highland Arabica — sweet pipe tobacco, clove spice and syrupy dark chocolate finish",
    price: "170",
    tag: "V",
  },
  {
    name: "Toraja Sapan Highlands Washed (250g)",
    desc: "High-grown Sulawesi lot — brown sugar, grapefruit zest and silky medium-full body",
    price: "175",
    tag: "V",
  },
  {
    name: "Flores Manggarai Honey Process (250g)",
    desc: "Sun-dried on raised beds — roasted hazelnut, dulce de leche and ripe red plum",
    price: "165",
    tag: "V",
  },
  {
    name: "Java Preanger Malabar Estate (250g)",
    desc: "Classic heritage estate coffee — jasmine tea aroma, sweet cane and clean citrus finish",
    price: "165",
    tag: "V",
  },
  {
    name: "Papua Wamena Organic Highland (250g)",
    desc: "Untouched mountain forest Arabica — floral caramel, macadamia nut and gentle acidity",
    price: "180",
    tag: "V",
  },
  {
    name: "Ethiopia Guji Shakiso Natural (250g)",
    desc: "Imported micro-lot — wild strawberry, peach nectar and Earl Grey bergamot finish",
    price: "220",
    tag: "V",
  },
  {
    name: "Colombia El Paraiso Double Anaerobic (250g)",
    desc: "Experimental thermal shock process — rosewater, lychee and white chocolate sweetness",
    price: "240",
    tag: "V",
  },
  {
    name: "Decaf Colombia Swiss Water Process (250g)",
    desc: "99.9% caffeine-free chemical-free water decaffeination — sweet malt, cinnamon and milk chocolate",
    price: "185",
    tag: "V",
  },
  {
    name: "Sissi Heritage Drip Bag Gift Box (10 Sachets)",
    desc: "Individually nitrogen-flushed single-serve pour-over filters featuring our favourite Nusantara origins",
    price: "160",
    tag: "V",
  },
  {
    name: "Bottled Black Cold Brew Concentrate (500ml)",
    desc: "Small-batch 20-hour cold extraction in an apothecary glass bottle — yields 5 servings over ice",
    price: "135",
    tag: "V",
  },
  {
    name: "Bottled Creamy Oat Milk Latte (300ml)",
    desc: "Ready-to-drink double ristretto blended with barista oat milk and a touch of organic palm sugar",
    price: "65",
    tag: "V",
  },
];

const SHEET_5_NON_COFFEE: MenuItem[] = [
  {
    name: "Uji Ceremonial Matcha Latte",
    desc: "First-harvest stone-ground Kyoto green tea whisked to order with steamed milk",
    price: "65",
    tag: "V",
  },
  {
    name: "Artisanal Hojicha Roasted Tea Latte",
    desc: "Charcoal-roasted Japanese green tea offering warm notes of toasted rice, caramel and cocoa",
    price: "60",
    tag: "V",
  },
  {
    name: "Cioccolata Calda Artigianale",
    desc: "Thick, velvety hot chocolate crafted with melted 70% Valrhona dark couverture",
    price: "65",
    tag: "V",
  },
  {
    name: "Spiced Masala Chai Latte",
    desc: "House-simmered black Assam tea with crushed green cardamom, cinnamon bark, ginger and star anise",
    price: "55",
    tag: "V",
  },
  {
    name: "Cascara Botanical Sparkling Tea",
    desc: "Sun-dried coffee cherry husks steeped with hibiscus flower, wild honey and sparkling spring water",
    price: "55",
    tag: "V",
  },
];

const SHEET_5_TEA_INFUSIONS: MenuItem[] = [
  {
    name: "Earl Grey Imperiale",
    desc: "Whole-leaf Darjeeling black tea scented with cold-pressed Calabrian bergamot oil",
    price: "50",
    tag: "V",
  },
  {
    name: "Chamomile & Lavender Blossom",
    desc: "Caffeine-free whole Egyptian chamomile flowers blended with French lavender buds",
    price: "50",
    tag: "V",
  },
  {
    name: "Jasmine Silver Needle White Tea",
    desc: "Delicate spring tea buds layered seven times with fresh midnight-blooming jasmine flowers",
    price: "55",
    tag: "V",
  },
  {
    name: "Peppermint & Lemongrass Tisane",
    desc: "Refreshing organic garden mint leaves with crushed Balinese lemongrass stalks",
    price: "45",
    tag: "V",
  },
];

const SHEET_6_VEGAN_ESPRESSO: MenuItem[] = [
  {
    name: "Oat Milk Cappuccino",
    desc: "Double shot house espresso topped with micro-foamed barista edition oat milk",
    price: "60",
    tag: "V",
  },
  {
    name: "Roasted Almond Flat White",
    desc: "Double ristretto balanced with house-pressed almond milk",
    price: "65",
    tag: "V",
  },
];

const SHEET_6_VEGAN_ELIXIRS: MenuItem[] = [
  {
    name: "Golden Turmeric & Coconut Latte",
    desc: "Organic Balinese yellow turmeric root, black pepper, cinnamon and steamed coconut milk",
    price: "60",
    tag: "V",
  },
  {
    name: "Iced Matcha & Coconut Cloud",
    desc: "Pure ceremonial matcha floated over chilled young coconut water and dairy-free coconut foam",
    price: "65",
    tag: "V",
  },
  {
    name: "Cacao & Maca Espresso Smoothie",
    desc: "Cold brew espresso blended with frozen banana, raw cacao nibs, Peruvian maca and oat milk",
    price: "75",
    tag: "V",
  },
];

const SHEET_6_VEGAN_PASTRY: MenuItem[] = [
  {
    name: "Plant-Based Cornetto Integrale",
    desc: "Whole-wheat sourdough cornetto laminated with plant butter and organic agave glaze",
    price: "50",
    tag: "V",
  },
  {
    name: "Roasted Mushroom & Herb Focaccia",
    desc: "48-hour fermented sourdough focaccia topped with thyme mushrooms, confit garlic & olive oil",
    price: "95",
    tag: "V",
  },
  {
    name: "Smashed Avocado & Hemp Seed Bruschetta",
    desc: "Charred country sourdough, seasoned avocado, cherry tomatoes, toasted hemp seeds & lemon",
    price: "100",
    tag: "V",
  },
];

const SHEET_6_VEGAN_JUICES: MenuItem[] = [
  {
    name: "Verde Detox Cold-Pressed",
    desc: "Green apple, organic kale, cucumber, celery stalk, fresh ginger and lime juice",
    price: "60",
    tag: "V",
  },
  {
    name: "Arancia Rossa & Ginger",
    desc: "Freshly squeezed local tangerines, carrot root, turmeric and a hint of black pepper",
    price: "60",
    tag: "V",
  },
];

const SHEET_6_VEGAN_DOLCI: MenuItem[] = [
  {
    name: "Coconut & Espresso Chia Parfait",
    desc: "Organic chia seeds soaked in coconut milk, layered with espresso granita and mango",
    price: "75",
    tag: "V",
  },
  {
    name: "Dark Chocolate & Hazelnut Tartufo",
    desc: "Rich dairy-free dark chocolate ganache sphere rolled in roasted hazelnut praline",
    price: "80",
    tag: "V",
  },
  {
    name: "Sorbetto al Limone",
    desc: "Two scoops of refreshing dairy-free lemon or dark chocolate espresso sorbetto",
    price: "60",
    tag: "V",
  },
];

/* ============================================================================
 * MAIN MENU PAGE COMPONENT (`app/menu/page.tsx`)
 * ========================================================================== */

export default function MenuPage() {
  const prefersReducedMotion = useReducedMotion();

  const revealUp = (delay = 0) => ({
    initial: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
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
          1. TOP ORNAMENTAL BRAND CREST (5px grid: pt-[150px] md:pt-[180px] pb-[70px] md:pb-[90px])
         ===================================================================== */}
      <section className="max-w-[550px] mx-auto px-[25px] pt-[150px] md:pt-[180px] pb-[70px] md:pb-[90px] text-center">
        <motion.div
          initial={
            prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_DECEL }}
          className="flex flex-col items-center"
        >
          <BrandCrestFlourish color="#1A1A1A" width={180} />
          <img
            src="/sissi-logo-dark.png"
            alt="Sissi Heritage"
            className="h-[70px] md:h-[85px] w-auto object-contain my-[15px] rounded-none"
          />
          <h1 className="sr-only">Sissi Heritage Menu</h1>
          <BrandCrestFlourish color="#1A1A1A" width={180} />
        </motion.div>
      </section>

      {/* =====================================================================
          2. QR CODE BLOCK ("See the full menu here") (5px grid: pb-[80px] md:pb-[100px])
         ===================================================================== */}
      <section className="max-w-[550px] mx-auto px-[25px] pb-[80px] md:pb-[100px] text-center">
        <motion.div {...revealUp(0.05)} className="flex flex-col items-center">
          <p className="text-[12px] md:text-[13px] font-normal text-[#1A1A1A] mb-[10px]">
            See the full menu here
          </p>
          <MenuQrCodeSvg />
        </motion.div>
      </section>

      {/* =====================================================================
          3. BLACK & WHITE VERTICAL EDITORIAL PORTRAIT PHOTO (5px grid: mb-[45px] md:mb-[55px])
         ===================================================================== */}
      <section className="max-w-[550px] mx-auto px-[25px] mb-[45px] md:mb-[55px]">
        <motion.div
          {...mediaReveal(0)}
          className="w-full aspect-[3/4] overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=85"
            alt="Artisans sharing espresso at Sissi Heritage Klungkung"
            className="w-full h-full object-cover grayscale contrast-125 rounded-none"
          />
        </motion.div>
      </section>

      {/* =====================================================================
          4. STATIC MENU SHEETS SHOWCASE (6 Vertical Menu Sheets on #FFFFFF)
         ===================================================================== */}
      <div className="max-w-[550px] mx-auto px-[25px] flex flex-col gap-[55px] md:gap-[65px]">
        {/* -------------------------------------------------------------------
            SHEET 1: ESPRESSO BAR & MANUAL BREW
           ------------------------------------------------------------------- */}
        <motion.section {...revealUp(0)} className="w-full py-[15px]">
          <SheetHeaderFlourish />

          <div className="mb-[30px]">
            <MenuCategoryHeader
              title="ESPRESSO BAR"
              subtitle="Signature Sissi Heritage Extraction"
            />
            <div className="flex flex-col">
              {SHEET_1_ESPRESSO.map((item) => (
                <MenuSheetRow key={item.name} item={item} />
              ))}
            </div>
          </div>

          <div>
            <MenuCategoryHeader
              title="MANUAL BREW"
              subtitle="Hand-Poured Single Origin Filter"
            />
            <div className="flex flex-col">
              {SHEET_1_FILTER.map((item) => (
                <MenuSheetRow key={item.name} item={item} />
              ))}
            </div>
          </div>

          <SheetFooterFlourish />
        </motion.section>

        {/* -------------------------------------------------------------------
            SHEET 2: SIGNATURE COFFEE CREATIONS, VIENNOISERIE & ALL-DAY BRUNCH
           ------------------------------------------------------------------- */}
        <motion.section {...revealUp(0)} className="w-full py-[15px]">
          <SheetHeaderFlourish />

          {/* Category 1 */}
          <div className="mb-[30px]">
            <MenuCategoryHeader
              title="SIGNATURE COFFEE CREATIONS"
              subtitle="Roaster's Suggestions"
            />
            <div className="flex flex-col">
              {SHEET_2_SIGNATURE_COFFEE.map((item) => (
                <MenuSheetRow key={item.name} item={item} />
              ))}
            </div>
          </div>

          {/* Category 2 with Left Callout Box */}
          <div className="relative mb-[30px]">
            <div className="absolute left-0 top-[5px]">
              <LeftCalloutNote
                topText="Baked fresh daily"
                bottomText="100% French Butter"
              />
            </div>
            <MenuCategoryHeader
              title="ARTISANAL PASTRIES & VIENNOISERIE"
              subtitle="From Our Morning Oven"
            />
            <div className="flex flex-col">
              {SHEET_2_VIENNOISERIE.map((item) => (
                <MenuSheetRow key={item.name} item={item} />
              ))}
            </div>
          </div>

          {/* Category 3 with Left Callout Box */}
          <div className="relative">
            <div className="absolute left-0 top-[5px]">
              <LeftCalloutNote
                topText="Served 8am - 3pm"
                bottomText="Organic Bali Eggs"
              />
            </div>
            <MenuCategoryHeader
              title="ALL-DAY BRUNCH"
              subtitle="Morning Kitchen Classics"
            />
            <div className="flex flex-col">
              {SHEET_2_BRUNCH.map((item) => (
                <MenuSheetRow key={item.name} item={item} />
              ))}
            </div>
          </div>

          <SheetFooterFlourish />
        </motion.section>

        {/* -------------------------------------------------------------------
            SHEET 3: PANINI, CAFFÈ PLATES, DOLCI & ARCHITECTURAL SKETCH
           ------------------------------------------------------------------- */}
        <motion.section {...revealUp(0)} className="w-full py-[15px]">
          <SheetHeaderFlourish />

          {/* Category 1 */}
          <div className="mb-[30px]">
            <MenuCategoryHeader
              title="FOCACCIA & PANINI"
              subtitle="48-Hour Fermented Sourdough"
            />
            <div className="flex flex-col">
              {SHEET_3_FOCACCIA.map((item) => (
                <MenuSheetRow key={item.name} item={item} />
              ))}
            </div>
          </div>

          {/* Category 2 with Left Callout Box */}
          <div className="relative mb-[30px]">
            <div className="absolute left-0 top-[5px]">
              <LeftCalloutNote
                topText="Artisanal Kitchen"
                bottomText="Heritage Recipes"
              />
            </div>
            <MenuCategoryHeader
              title="CAFFÈ PLATES"
              subtitle="Savoury Accompaniments"
            />
            <div className="flex flex-col">
              {SHEET_3_PLATES.map((item) => (
                <MenuSheetRow key={item.name} item={item} />
              ))}
            </div>
          </div>

          {/* Category 3 with Left Octagonal Vintage Illustration Badge */}
          <div className="relative mb-[25px]">
            <div className="hidden sm:flex absolute left-0 top-[35px] w-[85px] h-[55px] items-center justify-center">
              <svg
                width="85"
                height="55"
                viewBox="0 0 85 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <polygon
                  points="12,3 73,3 82,15 82,40 73,52 12,52 3,40 3,15"
                  stroke="#1A1A1A"
                  strokeWidth="1.2"
                />
                <polygon
                  points="14,6 71,6 79,16 79,39 71,49 14,49 6,39 6,16"
                  stroke="#1A1A1A"
                  strokeWidth="0.5"
                />
                <rect
                  x="18"
                  y="16"
                  width="8"
                  height="24"
                  stroke="#1A1A1A"
                  strokeWidth="0.9"
                />
                <path
                  d="M20 16L22 11L24 16"
                  stroke="#1A1A1A"
                  strokeWidth="0.9"
                />
                <text
                  x="52"
                  y="24"
                  textAnchor="middle"
                  fill="#1A1A1A"
                  fontSize="6"
                  fontFamily="Cormorant Garamond, serif"
                >
                  FATTI IN CASA
                </text>
                <text
                  x="52"
                  y="32"
                  textAnchor="middle"
                  fill="#1A1A1A"
                  fontSize="5.5"
                  fontStyle="italic"
                  fontFamily="Cormorant Garamond, serif"
                >
                  Freshly prepared
                </text>
                <text
                  x="52"
                  y="39"
                  textAnchor="middle"
                  fill="#1A1A1A"
                  fontSize="5.5"
                  fontStyle="italic"
                  fontFamily="Cormorant Garamond, serif"
                >
                  every morning
                </text>
              </svg>
            </div>

            <MenuCategoryHeader
              title="DOLCI"
              subtitle="Homemade Heritage Desserts"
            />
            <div className="flex flex-col">
              {SHEET_3_DOLCI.map((item) => (
                <MenuSheetRow key={item.name} item={item} />
              ))}
            </div>
          </div>

          {/* Vintage Architectural Roastery Courtyard Sketch Banner */}
          <div className="my-[20px] flex justify-center">
            <div className="w-[240px] md:w-[270px] border border-[#1A1A1A]/80 p-[5px]">
              <svg
                viewBox="0 0 260 65"
                className="w-full h-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Vintage architectural sketch of Sissi Heritage Klungkung"
              >
                <rect
                  x="2"
                  y="2"
                  width="256"
                  height="61"
                  stroke="#1A1A1A"
                  strokeWidth="0.6"
                />
                <line
                  x1="15"
                  y1="52"
                  x2="245"
                  y2="52"
                  stroke="#1A1A1A"
                  strokeWidth="0.9"
                />
                <path
                  d="M25 52V22L130 10L235 22V52"
                  stroke="#1A1A1A"
                  strokeWidth="0.9"
                />
                <line
                  x1="25"
                  y1="24"
                  x2="235"
                  y2="24"
                  stroke="#1A1A1A"
                  strokeWidth="0.7"
                />
                {[40, 65, 90, 115, 140, 165, 190, 215].map((x) => (
                  <path
                    key={x}
                    d={`M${x - 8} 52V35C${x - 8} 30 ${x + 8} 30 ${x + 8} 35V52`}
                    stroke="#1A1A1A"
                    strokeWidth="0.75"
                  />
                ))}
                <line
                  x1="45"
                  y1="18"
                  x2="215"
                  y2="18"
                  stroke="#1A1A1A"
                  strokeWidth="0.5"
                  strokeDasharray="2 2"
                />
                <text
                  x="130"
                  y="60"
                  textAnchor="middle"
                  fill="#1A1A1A"
                  fontSize="5.5"
                  letterSpacing="1.5"
                  fontFamily="Cormorant Garamond, serif"
                >
                  SISSI HERITAGE &bull; KLUNGKUNG, BALI
                </text>
              </svg>
            </div>
          </div>

          <SheetFooterFlourish />
        </motion.section>

        {/* -------------------------------------------------------------------
            SHEET 4: ROASTERY WHOLE BEANS & TWO OCTAGONAL BADGES
           ------------------------------------------------------------------- */}
        <motion.section {...revealUp(0)} className="w-full py-[15px]">
          <SheetHeaderFlourish />

          <div className="mb-[25px]">
            <MenuCategoryHeader
              title="ROASTERY WHOLE BEANS & COLD BREW"
              subtitle="Small-Batch Roasted in Klungkung — Whole Bean or Freshly Ground"
            />
            <div className="flex flex-col">
              {SHEET_4_ROASTERY_BEANS.map((item) => (
                <MenuSheetRow key={item.name} item={item} />
              ))}
            </div>
          </div>

          {/* Two Octagonal Vintage Badges Side-by-Side */}
          <div className="flex items-center justify-center gap-[50px] md:gap-[80px] my-[20px]">
            <svg
              width="85"
              height="50"
              viewBox="0 0 85 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <polygon
                points="12,3 73,3 82,14 82,36 73,47 12,47 3,36 3,14"
                stroke="#1A1A1A"
                strokeWidth="1.2"
              />
              <polygon
                points="14,6 71,6 79,15 79,35 71,44 14,44 6,35 6,15"
                stroke="#1A1A1A"
                strokeWidth="0.5"
              />
              <text
                x="42.5"
                y="21"
                textAnchor="middle"
                fill="#1A1A1A"
                fontSize="6.5"
                fontWeight="600"
                fontFamily="Cormorant Garamond, serif"
              >
                100% ARABICA
              </text>
              <text
                x="42.5"
                y="30"
                textAnchor="middle"
                fill="#1A1A1A"
                fontSize="5.5"
                fontStyle="italic"
                fontFamily="Cormorant Garamond, serif"
              >
                Direct trade from
              </text>
              <text
                x="42.5"
                y="37"
                textAnchor="middle"
                fill="#1A1A1A"
                fontSize="5.5"
                fontStyle="italic"
                fontFamily="Cormorant Garamond, serif"
              >
                Indonesian farmers
              </text>
            </svg>

            <svg
              width="85"
              height="50"
              viewBox="0 0 85 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <polygon
                points="12,3 73,3 82,14 82,36 73,47 12,47 3,36 3,14"
                stroke="#1A1A1A"
                strokeWidth="1.2"
              />
              <polygon
                points="14,6 71,6 79,15 79,35 71,44 14,44 6,35 6,15"
                stroke="#1A1A1A"
                strokeWidth="0.5"
              />
              <text
                x="42.5"
                y="21"
                textAnchor="middle"
                fill="#1A1A1A"
                fontSize="6.5"
                fontWeight="600"
                fontFamily="Cormorant Garamond, serif"
              >
                CUSTOM GRIND
              </text>
              <text
                x="42.5"
                y="30"
                textAnchor="middle"
                fill="#1A1A1A"
                fontSize="5.5"
                fontStyle="italic"
                fontFamily="Cormorant Garamond, serif"
              >
                Espresso, Moka Pot,
              </text>
              <text
                x="42.5"
                y="37"
                textAnchor="middle"
                fill="#1A1A1A"
                fontSize="5.5"
                fontStyle="italic"
                fontFamily="Cormorant Garamond, serif"
              >
                V60 or French Press
              </text>
            </svg>
          </div>

          <SheetFooterFlourish />
        </motion.section>

        {/* -------------------------------------------------------------------
            SHEET 5: NON-COFFEE, ARTISANAL TEA & THREE INTERCONNECTED CRESTS
           ------------------------------------------------------------------- */}
        <motion.section {...revealUp(0)} className="w-full py-[15px]">
          <SheetHeaderFlourish />

          <div className="mb-[35px]">
            <MenuCategoryHeader
              title="NON-COFFEE & MATCHA"
              subtitle="Ceremonial Teas & Valrhona Chocolate"
            />
            <div className="flex flex-col">
              {SHEET_5_NON_COFFEE.map((item) => (
                <MenuSheetRow key={item.name} item={item} />
              ))}
            </div>
          </div>

          <div className="mb-[30px]">
            <MenuCategoryHeader
              title="BOTANICAL INFUSIONS"
              subtitle="Whole-Leaf Teas & Herbal Tisanes"
            />
            <div className="flex flex-col">
              {SHEET_5_TEA_INFUSIONS.map((item) => (
                <MenuSheetRow key={item.name} item={item} />
              ))}
            </div>
          </div>

          {/* Three Interconnected Vintage Octagonal Badges */}
          <div className="my-[20px] flex justify-center">
            <svg
              width="310"
              height="65"
              viewBox="0 0 310 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-[310px] h-auto"
              aria-hidden="true"
            >
              <polygon
                points="15,10 80,10 90,22 90,43 80,55 15,55 5,43 5,22"
                stroke="#1A1A1A"
                strokeWidth="1.2"
              />
              <polygon
                points="17,13 78,13 87,23 87,42 78,52 17,52 8,42 8,23"
                stroke="#1A1A1A"
                strokeWidth="0.5"
              />
              <text
                x="47.5"
                y="28"
                textAnchor="middle"
                fill="#1A1A1A"
                fontSize="6"
                fontWeight="600"
                fontFamily="Cormorant Garamond, serif"
              >
                PLANT MILKS
              </text>
              <text
                x="47.5"
                y="37"
                textAnchor="middle"
                fill="#1A1A1A"
                fontSize="5.5"
                fontStyle="italic"
                fontFamily="Cormorant Garamond, serif"
              >
                Oat, Almond or Soy
              </text>
              <text
                x="47.5"
                y="44"
                textAnchor="middle"
                fill="#1A1A1A"
                fontSize="5.5"
                fontFamily="Cormorant Garamond, serif"
              >
                +15
              </text>

              <polygon
                points="115,3 195,3 210,18 210,47 195,62 115,62 100,47 100,18"
                stroke="#1A1A1A"
                strokeWidth="1.3"
              />
              <polygon
                points="118,6 192,6 206,20 206,45 192,59 118,59 104,45 104,20"
                stroke="#1A1A1A"
                strokeWidth="0.5"
              />
              <circle cx="155" cy="32.5" r="19" fill="#1A1A1A" />
              <circle
                cx="155"
                cy="32.5"
                r="16.5"
                stroke="#FFFFFF"
                strokeWidth="0.6"
                strokeDasharray="1.5 1.5"
              />
              <path
                d="M148 37C151 28 159 25 163 27C159 35 153 38 148 37Z"
                stroke="#FFFFFF"
                strokeWidth="0.9"
              />
              <line
                x1="147"
                y1="38"
                x2="162"
                y2="27"
                stroke="#FFFFFF"
                strokeWidth="0.7"
              />

              <polygon
                points="230,10 295,10 305,22 305,43 295,55 230,55 220,43 220,22"
                stroke="#1A1A1A"
                strokeWidth="1.2"
              />
              <polygon
                points="232,13 293,13 302,23 302,42 293,52 232,52 223,42 223,23"
                stroke="#1A1A1A"
                strokeWidth="0.5"
              />
              <text
                x="262.5"
                y="28"
                textAnchor="middle"
                fill="#1A1A1A"
                fontSize="6"
                fontWeight="600"
                fontFamily="Cormorant Garamond, serif"
              >
                EXTRA ESPRESSO
              </text>
              <text
                x="262.5"
                y="37"
                textAnchor="middle"
                fill="#1A1A1A"
                fontSize="5.5"
                fontStyle="italic"
                fontFamily="Cormorant Garamond, serif"
              >
                House or Single Origin
              </text>
              <text
                x="262.5"
                y="44"
                textAnchor="middle"
                fill="#1A1A1A"
                fontSize="5.5"
                fontFamily="Cormorant Garamond, serif"
              >
                +20
              </text>

              <line x1="90" y1="32.5" x2="100" y2="32.5" stroke="#1A1A1A" strokeWidth="1.2" />
              <line x1="210" y1="32.5" x2="220" y2="32.5" stroke="#1A1A1A" strokeWidth="1.2" />
            </svg>
          </div>

          <SheetFooterFlourish />
        </motion.section>

        {/* -------------------------------------------------------------------
            SHEET 6: VEGAN / PLANT-BASED MENU SUB-SHEET
           ------------------------------------------------------------------- */}
        <motion.section {...revealUp(0)} className="w-full py-[15px]">
          <div className="mb-[15px] text-left">
            <h2 className="text-[14px] md:text-[15px] font-bold tracking-[0.08em] uppercase text-[#1A1A1A]">
              VEGAN MENU
            </h2>
          </div>

          <SheetHeaderFlourish />

          <div className="mb-[25px]">
            <MenuCategoryHeader
              title="PLANT-BASED ESPRESSO"
              subtitle="100% Dairy-Free Barista Creations"
            />
            <div className="flex flex-col">
              {SHEET_6_VEGAN_ESPRESSO.map((item) => (
                <MenuSheetRow key={item.name} item={item} />
              ))}
            </div>
          </div>

          <div className="mb-[25px]">
            <MenuCategoryHeader
              title="BOTANICAL ELIXIRS"
              subtitle="Superfood Lattes & Cold Brew Smoothies"
            />
            <div className="flex flex-col">
              {SHEET_6_VEGAN_ELIXIRS.map((item) => (
                <MenuSheetRow key={item.name} item={item} />
              ))}
            </div>
          </div>

          <div className="mb-[25px]">
            <MenuCategoryHeader
              title="PLANT-BASED BAKERY & TOASTS"
              subtitle="Artisanal Sourdough & Viennoiserie"
            />
            <div className="flex flex-col">
              {SHEET_6_VEGAN_PASTRY.map((item) => (
                <MenuSheetRow key={item.name} item={item} />
              ))}
            </div>
          </div>

          <div className="mb-[25px]">
            <MenuCategoryHeader
              title="COLD-PRESSED JUICES"
              subtitle="Pressed Daily from Organic Bali Produce"
            />
            <div className="flex flex-col">
              {SHEET_6_VEGAN_JUICES.map((item) => (
                <MenuSheetRow key={item.name} item={item} />
              ))}
            </div>
          </div>

          <div>
            <MenuCategoryHeader
              title="PLANT-BASED DOLCI"
              subtitle="Dairy-Free Artisanal Sweets"
            />
            <div className="flex flex-col">
              {SHEET_6_VEGAN_DOLCI.map((item) => (
                <MenuSheetRow key={item.name} item={item} />
              ))}
            </div>
          </div>

          <SheetFooterFlourish />
        </motion.section>
      </div>

      {/* =====================================================================
          5. BURGUNDY DOUBLE-ARCH "BEVERAGE MENU" SHOWCASE BANNER
         ===================================================================== */}
      <section className="max-w-[550px] mx-auto px-[25px] pt-[40px] pb-[60px] md:pb-[80px]">
        <motion.div {...mediaReveal(0)} className="w-full">
          <div className="grid grid-cols-2 w-full">
            {/* Left Burgundy Arch */}
            <div className="bg-[#581114] rounded-t-full aspect-[1/2.15] w-full" />

            {/* Right Burgundy Arch with Sissi Heritage Logo, B&W Glass & BEVERAGE MENU */}
            <div className="bg-[#581114] rounded-t-full aspect-[1/2.15] w-full flex flex-col items-center justify-between pt-[65px] sm:pt-[85px] pb-[25px] sm:pb-[35px] px-[15px] text-center">
              {/* Top Ornamental White Logo */}
              <div className="flex flex-col items-center">
                <BrandCrestFlourish color="#FFFFFF" width={110} />
                <img
                  src="/sissi-logo-white.png"
                  alt="Sissi Heritage"
                  className="h-[40px] sm:h-[50px] w-auto object-contain my-[10px] rounded-none"
                />
                <BrandCrestFlourish color="#FFFFFF" width={110} />
              </div>

              {/* Center B&W Stemmed Glass Illustration */}
              <div className="my-[15px] w-[85px] sm:w-[115px] h-[155px] sm:h-[210px] flex items-center justify-center">
                <svg
                  viewBox="0 0 120 220"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Artisanal stemmed glass with reflection"
                >
                  <defs>
                    <clipPath id="stemmedGlassBowl">
                      <path d="M22 15 H98 C102 68 94 115 60 122 C26 115 18 68 22 15 Z" />
                    </clipPath>
                    <linearGradient id="bwGlassGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="45%" stopColor="#D9D9D9" />
                      <stop offset="100%" stopColor="#1A1A1A" />
                    </linearGradient>
                  </defs>

                  <g clipPath="url(#stemmedGlassBowl)">
                    <rect x="15" y="10" width="90" height="120" fill="url(#bwGlassGrad)" />
                    <path
                      d="M15 35 Q45 28 65 38 T105 32 L105 55 L15 55 Z"
                      fill="#1A1A1A"
                      opacity="0.82"
                    />
                    <circle cx="45" cy="65" r="18" fill="#FFFFFF" opacity="0.85" />
                    <path
                      d="M55 58 C72 52 92 64 98 85 L98 125 L20 125 L20 95 C35 88 45 70 55 58 Z"
                      fill="#1A1A1A"
                      opacity="0.88"
                    />
                    <ellipse
                      cx="60"
                      cy="20"
                      rx="38"
                      ry="4"
                      fill="#1A1A1A"
                      opacity="0.35"
                    />
                    <path
                      d="M27 22 C25 58 29 92 42 110"
                      stroke="#FFFFFF"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.9"
                    />
                    <path
                      d="M92 25 C94 58 89 90 76 108"
                      stroke="#FFFFFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.7"
                    />
                  </g>

                  <path
                    d="M22 15 H98 C102 68 94 115 60 122 C26 115 18 68 22 15 Z"
                    stroke="#FFFFFF"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.85"
                  />

                  <path
                    d="M57 122 C58 150 58 175 55 198 H65 C62 175 62 150 63 122 Z"
                    fill="#E5E5E5"
                  />
                  <line
                    x1="59"
                    y1="123"
                    x2="58"
                    y2="196"
                    stroke="#1A1A1A"
                    strokeWidth="1.4"
                  />

                  <ellipse
                    cx="60"
                    cy="200"
                    rx="28"
                    ry="5"
                    fill="#1A1A1A"
                    stroke="#E5E5E5"
                    strokeWidth="1"
                  />
                  <ellipse
                    cx="60"
                    cy="200"
                    rx="18"
                    ry="2.2"
                    fill="#FFFFFF"
                    opacity="0.65"
                  />
                </svg>
              </div>

              {/* Bottom BEVERAGE MENU Caption */}
              <p className="text-[12px] sm:text-[14px] font-normal tracking-[0.18em] uppercase text-white">
                BEVERAGE MENU
              </p>
            </div>
          </div>

          <div className="w-full h-[20px] bg-[#450C0F]" />
        </motion.div>
      </section>
    </div>
  );
}
