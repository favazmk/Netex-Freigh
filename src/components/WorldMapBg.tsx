import { motion } from 'motion/react';

export default function WorldMapBg() {
  return (
    <div id="world-map-bg-underlay" className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden bg-white">
      {/* 1. Subtle global tech dot grid overlay */}
      <div className="absolute inset-0 z-1 bg-[radial-gradient(rgba(15,58,140,0.025)_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* 2. Subtly styled global lat/long coordinate line grid overlay */}
      <div className="absolute inset-x-0 top-1/4 h-px bg-zinc-200/15" />
      <div className="absolute inset-x-0 top-2/4 h-px bg-zinc-200/25 border-dashed border-t border-zinc-300/20" />
      <div className="absolute inset-x-0 top-3/4 h-px bg-zinc-200/15" />
      
      <div className="absolute inset-y-0 left-1/4 w-px bg-zinc-200/15" />
      <div className="absolute inset-y-0 left-2/4 w-px bg-zinc-200/25 border-dashed border-l border-zinc-300/20" />
      <div className="absolute inset-y-0 left-3/4 w-px bg-zinc-200/15" />

      {/* 3. The low-poly world map SVG */}
      <svg 
        viewBox="0 0 1000 500" 
        preserveAspectRatio="xMidYMid slice" 
        className="w-full h-full absolute inset-0 z-2 opacity-[0.055]"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Equatorial / Longitude coordinate text markers */}
        <text x="15" y="246" fill="#0f3a8c" className="font-mono text-[7px] tracking-widest font-semibold uppercase opacity-45">EQUATOR // 00°00'00"</text>
        <text x="502" y="25" fill="#0f3a8c" className="font-mono text-[7px] tracking-widest font-semibold uppercase opacity-45">PRIME MERIDIAN // 00°00'00"</text>
        
        {/* Coordinate details */}
        <text x="525" y="155" fill="#0f3a8c" className="font-mono text-[7px] tracking-wider font-bold opacity-70">HQ DUBAI AXIS DEPT: 25.2048° N, 55.2708° E</text>
        <text x="100" y="470" fill="#0f3a8c" className="font-mono text-[6px] tracking-wider opacity-35">PACIFIC GRID TRANSIT LN</text>
        <text x="750" y="470" fill="#0f3a8c" className="font-mono text-[6px] tracking-wider opacity-35">INDIAN OCEAN CARRIER SEGMENT</text>

        {/* Global Blueprint Grid circles */}
        <circle cx="500" cy="180" r="120" fill="none" stroke="rgba(15, 58, 140, 0.15)" strokeWidth="0.5" strokeDasharray="3,6" />
        <circle cx="500" cy="180" r="220" fill="none" stroke="rgba(15, 58, 140, 0.1)" strokeWidth="0.5" strokeDasharray="2,4" />
        
        <g fill="rgba(15, 58, 140, 0.15)" stroke="rgba(15, 58, 140, 0.4)" strokeWidth="0.75" strokeLinejoin="round" strokeLinecap="round">
          {/* North America */}
          <polygon points="80,100 110,85 140,85 160,95 180,90 200,105 210,135 180,175 140,195 160,230 150,245 130,240 120,215 100,195 75,150 90,130" />
          
          {/* Greenland */}
          <polygon points="175,45 205,35 215,55 195,70 175,65" />
          
          {/* South America */}
          <polygon points="140,240 160,245 185,265 170,325 150,375 140,410 130,410 125,350 135,280" />
          
          {/* Africa */}
          <polygon points="415,200 455,195 490,205 510,235 505,275 485,295 460,335 448,370 435,370 425,340 405,280 400,230" />
          
          {/* Europe & Asia (Eurasia) */}
          <polygon points="365,115 410,95 470,75 540,75 660,85 745,105 780,125 805,155 785,195 745,215 715,195 685,235 635,245 565,235 505,205 455,195 415,200 395,155 365,130" />
          
          {/* Middle East (Zoom / Connection Hub) */}
          <polygon points="455,195 485,190 505,205 485,220 465,215" fill="rgba(15, 58, 140, 0.6)" stroke="#0f3a8c" strokeWidth="1" />
          
          {/* Australia */}
          <polygon points="720,300 760,280 800,310 790,350 740,350 710,330" />

          {/* Major Logistics Islands */}
          {/* UK */}
          <polygon points="345,115 355,105 360,120" />
          {/* Japan */}
          <polygon points="795,135 805,145 800,165" />
          {/* Madagascar */}
          <polygon points="495,330 505,350 490,360" />
        </g>

        {/* Global Logistics Route Paths overlaying behind background */}
        <g stroke="rgba(15, 58, 140, 0.35)" strokeWidth="0.8" fill="none" strokeDasharray="3,6">
          {/* Dubai (HQ, roughly 485, 205) to London (approx 350, 115) */}
          <path d="M 485,205 Q 410,140 350,115" />
          {/* Dubai to Singapore (710, 260) */}
          <path d="M 485,205 Q 600,230 710,260" />
          {/* Dubai to New York (180, 135) */}
          <path d="M 485,205 Q 330,140 180,135" />
          {/* Dubai to Sydney (760, 310) */}
          <path d="M 485,205 Q 610,270 760,310" />
          {/* Dubai to Tokyo (795, 145) */}
          <path d="M 485,205 Q 640,160 795,145" />
          {/* Dubai to Cape Town (Africa Tip, 448, 370) */}
          <path d="M 485,205 Q 490,290 448,370" />
        </g>

        {/* Active glowing terminal dots and radar pings styled as small circles */}
        <g fill="#0f3a8c" className="opacity-60">
          {/* Dubai Root HQ Center */}
          <circle cx="485" cy="205" r="3.5" />
          <circle cx="485" cy="205" r="7" fill="none" stroke="#0f3a8c" strokeWidth="0.75" className="animate-pulse" />

          {/* New York */}
          <circle cx="180" cy="135" r="2" />
          {/* London */}
          <circle cx="350" cy="115" r="2" />
          {/* Singapore */}
          <circle cx="710" cy="260" r="2" />
          {/* Tokyo */}
          <circle cx="795" cy="145" r="2" />
          {/* Sydney */}
          <circle cx="760" cy="310" r="2" />
        </g>
      </svg>

      {/* Premium subtle horizontal linear gradients masking the watermark top and bottom */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white via-white/80 to-transparent z-3 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent z-3 pointer-events-none" />
    </div>
  );
}
