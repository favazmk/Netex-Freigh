import { useState } from 'react';
import { SERVICES_DATA } from '../data.ts';
import { motion } from 'motion/react';
import { Plane, Ship, Truck, Package, FileText, Database, Anchor, ChevronRight } from 'lucide-react';

export default function ServiceHub() {
  const [activeServiceId, setActiveServiceId] = useState<string>('air-freight');

  // Convert raw string icons to actual Lucide node items safely
  const renderServiceIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case 'Plane': return <Plane className={className} />;
      case 'Ship': return <Ship className={className} />;
      case 'Truck': return <Truck className={className} />;
      case 'Package': return <Package className={className} />;
      case 'FileText': return <FileText className={className} />;
      case 'Database': return <Database className={className} />;
      case 'Anchor': return <Anchor className={className} />;
      default: return <Package className={className} />;
    }
  };

  const activeService = SERVICES_DATA.find(s => s.id === activeServiceId) || SERVICES_DATA[0];

  return (
    <section id="services" className="bg-transparent w-full py-20 px-6 md:px-12 border-t border-zinc-200 relative animate-fade-in">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* SECTION TITLE (Elevated Scroll Trigger Reveal) */}
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 25 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-brand-blue uppercase tracking-[0.2em] font-mono text-xs block mb-3 font-semibold">
            // COMPREHENSIVE CARRIER CAPABILITIES
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-zinc-950 tracking-tight uppercase">
            SERVICES <span className="text-zinc-400 font-medium">& SOLUTIONS</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-blue mx-auto mt-4" />
        </motion.div>

        {/* INTERACTIVE HUB BOARD LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch font-sans">
          
          {/* LEFT COLUMN: Circular list style navigation rail */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-ping" /> Select Sector Division
            </span>

            {/* List with clean border-rail styling */}
            <div className="flex flex-col gap-1.5">
              {SERVICES_DATA.map((srv) => {
                const isSelected = activeServiceId === srv.id;
                return (
                  <motion.button
                    key={srv.id}
                    id={`btn-srv-${srv.id}`}
                    whileHover={{ x: 6 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setActiveServiceId(srv.id)}
                    className={`w-full p-4 rounded-sm text-left font-mono text-xs flex items-center justify-between border cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? 'bg-brand-blue border-brand-blue text-white font-bold'
                        : 'bg-white border-zinc-200 text-zinc-600 hover:text-brand-blue hover:bg-zinc-50 hover:border-zinc-350'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      {/* Circle preview thumb */}
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 border transition-colors ${
                        isSelected ? 'bg-zinc-100 border-white text-zinc-950' : 'bg-zinc-100 border-zinc-200 text-zinc-500'
                      }`}>
                        {renderServiceIcon(srv.icon, "w-4 h-4")}
                      </div>
                      <span className="text-xs uppercase tracking-widest">{srv.title}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1' : 'opacity-30'}`} />
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Showcase details panel (With Active Division Animations) */}
          <div className="lg:col-span-7 bg-white border border-zinc-200 rounded-sm overflow-hidden flex flex-col justify-between shadow-sm">
            
            <motion.div 
              key={activeServiceId}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="flex-grow flex flex-col justify-between"
            >
              {/* High level visual banner overlay */}
              <div className="h-56 relative overflow-hidden group border-b border-zinc-200 w-full">
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent z-10" />
                <img 
                  src={activeService.image} 
                  alt={activeService.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-5 left-6 z-20 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center text-white">
                    {renderServiceIcon(activeService.icon, "w-4 h-4")}
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-black text-zinc-950 tracking-tight uppercase">
                    {activeService.title}
                  </h3>
                </div>
              </div>

              {/* Text Specifications & Descriptions body */}
              <div className="p-6 md:p-8 space-y-6 flex-grow flex flex-col justify-center">
                
                <div className="space-y-2">
                  <span className="text-[9px] font-mono text-brand-blue uppercase tracking-widest font-semibold block">// CARRIER DIVISION CHARTER STATEMENT</span>
                  <p className="text-base font-display text-zinc-800 font-bold leading-relaxed">
                    {activeService.shortDesc}
                  </p>
                  <div className="h-px w-full bg-zinc-200 mt-2" />
                </div>

                <div className="space-y-2">
                  <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-semibold">Division Logistics Profile</h4>
                  <p className="text-zinc-650 text-xs md:text-sm leading-relaxed font-sans">
                    {activeService.longDesc}
                  </p>
                </div>

                {/* Specification Bullet Points */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider font-semibold">Service Parameters & Dubai SLA Targets</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                    {activeService.bulletPoints.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-600">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                        <span className="font-sans text-[11px] leading-relaxed">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Bottom Actions direct simulator triggers */}
            <div className="p-5 bg-zinc-50 border-t border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono">
              <span className="text-zinc-500">
                DISPATCH DIVISION: <strong className="text-brand-blue uppercase">ACTIVE ONLINE</strong>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
