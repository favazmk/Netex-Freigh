import { useEffect, useRef, useState } from 'react';

interface Destination {
  name: string;
  id: string;
  loc: [number, number];
  zoom: number;
  type: string;
  service: string;
  est: string;
}

const destinations: Destination[] = [
  { name: 'GLOBAL HUB', id: 'global', loc: [20.0, 45.0], zoom: 2, type: 'Global Network', service: 'Active Multimodal Trade corridors', est: '24/7 Global Dispatch' },
  { name: 'DUBAI (HQ)', id: 'dubai', loc: [25.2048, 55.2708], zoom: 5, type: 'Corporate HQ', service: 'Main Dispatch & Customs Corridor', est: 'Immediate Dispatch' },
  { name: 'LONDON', id: 'london', loc: [51.5074, -0.1278], zoom: 5, type: 'Sea Freight', service: 'European Gateway Channel', est: '7.2 Days Transit' },
  { name: 'NEW YORK', id: 'new_york', loc: [40.7128, -74.0060], zoom: 5, type: 'Priority Air', service: 'North America Trade Link', est: '1.8 Days Transit' },
  { name: 'SINGAPORE', id: 'singapore', loc: [1.3521, 103.8198], zoom: 5, type: 'Fast Sea Link', service: 'Southeast Asia Hub Connect', est: '4.5 Days Transit' },
  { name: 'TOKYO', id: 'tokyo', loc: [35.6762, 139.6503], zoom: 5, type: 'Express Cargo', service: 'East Asia Gateway Terminal', est: '3.1 Days Transit' },
  { name: 'MUMBAI', id: 'mumbai', loc: [19.0760, 72.8777], zoom: 5, type: 'Direct Road/Sea', service: 'Indian Subcontinent Channel', est: '2.8 Days Transit' },
  { name: 'SYDNEY', id: 'sydney', loc: [-33.8688, 151.2093], zoom: 5, type: 'Ocean Consolidations', service: 'Oceania Distribution Hub', est: '9.4 Days Transit' }
];

export default function NetworkMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [activeId, setActiveId] = useState<string>('global');

  useEffect(() => {
    // Prevent double-initialization or server-side execution
    if (typeof window === 'undefined' || !(window as any).L || !mapContainerRef.current) return;

    const L = (window as any).L;

    // Destroy existing instance to guarantee clean render cycles
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    // Dubai HQ coordinates
    const dubaiCoords: [number, number] = [25.2048, 55.2708];

    // Initialize the Leaflet map with optimized controls
    const map = L.map(mapContainerRef.current, {
      zoomControl: false,
      dragging: true,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      boxZoom: false,
      attributionControl: false
    }).setView([20.0, 45.0], 2);

    mapInstanceRef.current = map;

    // Use light theme tiles for precise light mode mapping
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 18,
    }).addTo(map);

    // 1. Create custom glowing marker for Dubai Base HQ with brand-blue theme
    const dubaiIcon = L.divIcon({
      html: `
        <div class="relative flex items-center justify-center">
          <span class="absolute inline-flex h-8 w-8 rounded-full bg-brand-blue/30 animate-ping"></span>
          <span class="absolute inline-flex h-5 w-5 rounded-full bg-brand-blue/50 animate-pulse"></span>
          <span class="relative inline-flex rounded-full h-3.5 w-3.5 bg-brand-blue border border-white font-black animate-scale shadow-[0_0_8px_rgba(15,58,140,0.6)]"></span>
        </div>
      `,
      className: 'custom-map-marker-dubai',
      iconSize: [24, 24],
      iconAnchor: [12, 12]
    });

    L.marker(dubaiCoords, { icon: dubaiIcon })
      .addTo(map)
      .bindTooltip(`
        <div class="bg-white border border-brand-blue/50 p-2 text-zinc-900 uppercase tracking-wider font-mono text-[10px]">
          <div class="text-brand-blue font-bold">// NETEX GLOBAL HQ</div>
          <div class="text-zinc-950 font-bold mt-0.5">DUBAI CORE TERMINAL</div>
        </div>
      `, {
        className: 'custom-map-tooltip',
        direction: 'top',
        permanent: true,
        opacity: 0.95
      });

    // 2. Plot global satellite destination terminals
    destinations.forEach((city) => {
      if (city.id === 'global' || city.id === 'dubai') return; // Skip base & placeholder

      const cityIcon = L.divIcon({
        html: `
          <div class="relative flex items-center justify-center">
            <span class="absolute inline-flex h-3.5 w-3.5 rounded-full bg-brand-blue/15 animate-ping"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-white border border-brand-blue"></span>
          </div>
        `,
        className: 'custom-map-marker-city',
        iconSize: [16, 16],
        iconAnchor: [8, 8]
      });

      L.marker(city.loc, { icon: cityIcon })
        .addTo(map)
        .bindTooltip(`
          <div class="bg-white border border-zinc-200 p-1.5 font-mono text-[9px] text-zinc-900 uppercase tracking-widest">
            <div class="text-zinc-950 font-bold">${city.name}</div>
          </div>
        `, {
          className: 'custom-map-tooltip-city',
          direction: 'bottom',
          opacity: 0.95
        });

      // 3. Add Polyline reflecting trade channels
      L.polyline([dubaiCoords, city.loc], {
        color: '#0f3a8c',
        weight: 1.5,
        opacity: 0.75,
        className: 'map-route-line',
        lineCap: 'round',
        lineJoin: 'round'
      }).addTo(map);
    });

    setTimeout(() => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
      }
    }, 500);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update center smoothly when active location ID changes
  const handleSelectLocation = (dest: Destination) => {
    setActiveId(dest.id);
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(dest.loc, dest.zoom, {
        animate: true,
        duration: 1.5
      });
    }
  };

  const currentActiveDest = destinations.find(d => d.id === activeId) || destinations[0];

  return (
    <div className="w-full h-full relative bg-zinc-50 flex flex-col justify-between">
      {/* Absolute Leaflet Container */}
      <div 
        ref={mapContainerRef} 
        id="map-global-logistics-grid"
        className="w-full h-full absolute inset-0 z-10"
      />

      {/* Decorative gradient masks for map integration */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

      {/* Floating Status / Current Selected Terminal Board */}
      <div className="absolute top-4 left-4 z-30 max-w-xs bg-white/95 backdrop-blur-md border border-zinc-250 px-4 py-3 rounded-sm shadow-2xl font-mono">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-blue animate-ping" />
          <span className="text-[9px] uppercase tracking-widest text-[#0f3a8c] font-bold">TERMINAL FEED LIVE</span>
        </div>
        <div className="text-zinc-950 text-xs font-bold uppercase tracking-wide leading-none">{currentActiveDest.name}</div>
        <div className="text-[10px] text-zinc-500 mt-1 uppercase text-[9px]">{currentActiveDest.service}</div>
        <div className="text-[10px] text-brand-blue font-bold mt-2 flex justify-between items-center bg-zinc-150 px-2 py-1 rounded-xs">
          <span>{currentActiveDest.type}</span>
          <span className="text-[9px] text-zinc-500">{currentActiveDest.est}</span>
        </div>
      </div>

      {/* NEW MAP NAVIGATION BAR - Replaces standard stats with high-tech controls */}
      <div className="absolute bottom-4 inset-x-4 z-30 bg-white/95 border border-zinc-250 p-3 rounded-sm shadow-2xl">
        <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mb-2 px-1">// DISPATCH ROUTE NAVIGATION TERMINAL</div>
        <div className="flex gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-none pb-1 customize-scrollbar">
          {destinations.map((dest) => (
            <button 
              key={dest.id}
              onClick={() => handleSelectLocation(dest)}
              className={`px-3 py-1.5 font-mono text-[9px] tracking-widest uppercase transition-all shrink-0 rounded-sm cursor-pointer ${
                activeId === dest.id 
                  ? 'bg-brand-blue text-white font-bold shadow-[0_0_10px_rgba(15,58,140,0.4)] border border-brand-blue' 
                  : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900 border border-zinc-200 hover:border-zinc-300'
              }`}
            >
              {dest.name.replace(' PORT', '')}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
