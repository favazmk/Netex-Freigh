import { useState } from 'react';
import { WHY_CHOOSE_US_DATA, SERVICE_PROCESS_DATA } from '../data.ts';
import { motion } from 'motion/react';
import { Phone, Mail, Globe, MapPin, ChevronRight, Anchor, Star } from 'lucide-react';

interface CompanyProfileProps {
  mode?: 'about' | 'contact' | 'all';
}

export default function CompanyProfile({ mode = 'all' }: CompanyProfileProps) {
  const [activeTab, setActiveTab] = useState<'why-us' | 'process' | 'industries'>('why-us');
  const [selectedIndustry, setSelectedIndustry] = useState<number>(0);
  const [activePathId, setActivePathId] = useState<number | null>(null);

  const INDUSTRIES_SERVED = [
    {
      name: 'Marine & Offshore Logistics',
      icon: 'Anchor',
      desc: 'Supplying floating rigs, machinery elements, marine gear, and dry docks with premium on-time delivery schedules.',
    },
    {
      name: 'Automotive & Logistics',
      icon: 'Truck',
      desc: 'Transporting luxury roll-on/roll-off hypercars and bulk commercial vehicle chassis across Middle East borders safely.',
    },
    {
      name: 'Retail & Consumer Goods',
      icon: 'Layers',
      desc: 'Handling warehouse distributions, bulk palletization, and swift inventory replenishment hubs in Dubai free zones.',
    },
    {
      name: 'Heavy Industrial Equipment',
      icon: 'Tool',
      desc: 'Break bulk project cargo, moving giant excavators, towers, and turbine components with engineered customs escort crews.',
    }
  ];

  const SIMULATED_WORLD_LINKS = [
    { city: 'Rotterdam (Europe)', x: '46%', y: '18%', code: 'RTM' },
    { city: 'Singapore (Asia East)', x: '75%', y: '65%', code: 'SIN' },
    { city: 'Shanghai (China)', x: '82%', y: '42%', code: 'PVG' },
    { city: 'New York (USA East)', x: '24%', y: '28%', code: 'JFK' },
    { city: 'London (UK)', x: '44%', y: '14%', code: 'LHR' },
    { city: 'Frankfurt (Germany)', x: '48%', y: '20%', code: 'FRA' }
  ];

  return (
    <section className="bg-white text-zinc-950 flex flex-col items-center w-full font-sans">
      {(mode === 'all' || mode === 'about') &&
        <div className="w-full flex flex-col items-center">
          {/* 1. ABOUT NEFTEX */}
          <div id="about-us" className="w-full py-20 px-6 md:px-12 max-w-7xl relative">
            <div className="absolute inset-0 bg-gradient-to-b from-white to-zinc-50/10 pointer-events-none" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              
              {/* Left info column */}
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -30 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-7 space-y-6"
              >
                <span className="text-brand-blue uppercase tracking-[0.2em] font-mono text-xs block mb-1 font-semibold">
                  // MIDDLE EAST HUB OPERATIONS
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-black text-zinc-950 tracking-tight uppercase">
                  ABOUT <span className="text-brand-blue font-display">NEFTEX FREIGHT</span>
                </h2>
                <div className="h-0.5 w-16 bg-brand-blue" />
                
                <p className="font-sans text-zinc-800 font-medium text-lg leading-relaxed italic pr-4">
                  &ldquo;NEFTEX Freight FZE LLC is a highly certified corporate logistics provider and freight carrier headquartered strategically in Dubai, UAE.&rdquo;
                </p>
                
                <p className="text-zinc-600 text-sm leading-relaxed font-sans">
                  We specialize in delivering reliable, cost-effective, and highly secure cargo pathways for industrial corporate accounts across UAE, GCC, and global trade corridors. With deep commitments to absolute safety, strict JAFZA compliance, and 100% on-time delivery records, we offer fully integrated support including Air Freight, Sea container lines, heavy Land transportation, customs brokerage, and bonded storage.
                </p>
     
                <p className="text-zinc-650 text-sm leading-relaxed font-sans">
                  Our experienced terminal managers audit every manifest to ensure seamless, worry-free customs processing. At NEFTEX, we build deep, reliable commercial relationships by scaling global routes that match the high-speed requirements of modern supply chains.
                </p>
     
                {/* Dubai details box */}
                <div className="p-4 rounded-sm bg-zinc-50 border border-zinc-205 flex items-center gap-4 shadow-xs">
                  <div className="w-12 h-12 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div className="text-[10px] font-mono">
                    <div className="text-zinc-950 font-bold uppercase tracking-wider">Dubai Free-Zone Corporate Seal</div>
                    <div className="text-zinc-500 mt-1 uppercase">NEFTEX FREIGHT FZE LLC — Jebel Ali Customs registered carrier, UAE.</div>
                  </div>
                </div>
              </motion.div>
     
              {/* Right picture column */}
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 30 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-5 h-[420px] rounded-sm overflow-hidden border border-zinc-200 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80" 
                  alt="NEFTEX Freight drones docks" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Overlay stats card */}
                <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/95 border border-zinc-200 p-5 rounded-sm shadow-sm">
                  <div className="text-[9px] font-mono text-brand-blue uppercase tracking-widest font-semibold">// ARABIAN GULF DISPATCH GATE</div>
                  <div className="text-lg font-display font-black text-zinc-950 mt-1 uppercase">JEBEL ALI HUB TERMINAL</div>
                  <div className="text-xs text-zinc-600 mt-1 font-sans">Direct connections to over 140 commercial deep water ports.</div>
                </div>
              </motion.div>
              
            </div>
          </div>

          {/* 2. TABBED SEGMENTS ACTION STAGE */}
          <div className="w-full bg-zinc-50 border-t border-b border-zinc-200 py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-zinc-200 pb-6 mb-12 gap-4">
                <div>
                  <span className="text-brand-blue uppercase tracking-[0.2em] font-mono text-xs block mb-3 font-semibold">
                    // SYSTEMIC DEEP QUALITY BENCHMARKS
                  </span>
                  <h3 className="text-3xl font-display font-black text-zinc-950 tracking-tight uppercase">
                    OPERATIONAL <span className="text-brand-blue">STANDARDS</span>
                  </h3>
                </div>

                {/* Segment selectors */}
                <div className="flex flex-wrap gap-2 bg-white p-1.5 rounded-sm border border-zinc-200 shadow-xs">
                  <button
                    id="tab-btn-why-us"
                    onClick={() => setActiveTab('why-us')}
                    className={`py-2 px-4 rounded-sm font-mono text-xs uppercase tracking-widest transition-all cursor-pointer ${
                      activeTab === 'why-us' ? 'bg-brand-blue text-white font-bold' : 'text-zinc-600 hover:text-brand-blue'
                    }`}
                  >
                    Why Choose Us
                  </button>
                  <button
                    id="tab-btn-process"
                    onClick={() => setActiveTab('process')}
                    className={`py-2 px-4 rounded-sm font-mono text-xs uppercase tracking-widest transition-all cursor-pointer ${
                      activeTab === 'process' ? 'bg-brand-blue text-white font-bold' : 'text-zinc-665 hover:text-brand-blue'
                    }`}
                  >
                    Our Process
                  </button>
                  <button
                    id="tab-btn-industries"
                    onClick={() => setActiveTab('industries')}
                    className={`py-2 px-4 rounded-sm font-mono text-xs uppercase tracking-widest transition-all cursor-pointer ${
                      activeTab === 'industries' ? 'bg-brand-blue text-white font-bold' : 'text-zinc-600 hover:text-brand-blue'
                    }`}
                  >
                    Industries Served
                  </button>
                </div>
              </div>

              <div className="min-h-[280px]">
                
                {/* WHY CHOOSE US TAB */}
                {activeTab === 'why-us' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {WHY_CHOOSE_US_DATA.map((item, id) => (
                      <motion.div 
                        key={id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: id * 0.08 }}
                        className="p-6 bg-white border border-zinc-200 rounded-sm relative overflow-hidden group hover:border-brand-blue transition-all cursor-default shadow-xs"
                      >
                        <div className="absolute top-0 left-0 w-1 h-full bg-zinc-200 group-hover:bg-brand-blue transition-colors" />
                        <div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-brand-blue mb-5 font-mono text-xs font-bold shadow-xs">
                          {id + 1}
                        </div>
                        <h4 className="font-mono text-xs font-bold tracking-wider uppercase text-zinc-900 mb-2.5">{item.title}</h4>
                        <p className="text-zinc-600 text-xs leading-relaxed font-sans">{item.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* PROCESS TIMELINE TAB */}
                {activeTab === 'process' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {SERVICE_PROCESS_DATA.map((item, id) => (
                      <motion.div 
                        key={id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: id * 0.08 }}
                        className="p-6 bg-white border border-zinc-200 rounded-sm relative overflow-hidden flex flex-col justify-between min-h-[180px] group hover:border-brand-blue transition-all cursor-default shadow-xs z-10"
                      >
                        <div className="absolute -right-2 -top-5 font-mono text-8xl font-black text-zinc-100 select-none pointer-events-none -z-10">
                          {item.step}
                        </div>
                        <div className="relative z-10 space-y-3">
                          <span className="font-mono text-[9px] text-brand-blue font-bold tracking-widest block">// ROADMAP PHASE {item.step}</span>
                          <h4 className="font-mono text-xs uppercase text-zinc-900 font-bold tracking-wider">{item.title}</h4>
                          <p className="text-zinc-600 text-xs leading-relaxed font-sans pr-4">{item.desc}</p>
                        </div>
                        <div className="mt-5 flex items-center gap-1.5 text-[10px] font-mono text-brand-blue group-hover:translate-x-1 transition-transform">
                          <span>NEXT DISPATCH PHASE</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* INDUSTRIES SERVED TAB */}
                {activeTab === 'industries' && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    <div className="lg:col-span-4 space-y-4">
                      <h4 className="font-mono text-xs uppercase text-zinc-800 font-bold tracking-wider">// LOCAL GCC DISTRIBUTION SECTORS</h4>
                      <p className="text-zinc-650 text-xs leading-relaxed font-sans">
                        NEFTEX holds specialized logistics credentials to expedite duty-free manufacturing parts, critical offshore drilling assets, retail consumer goods, and double-deck premium hypercars.
                      </p>
                      
                      <div className="flex flex-col gap-1.5">
                        {INDUSTRIES_SERVED.map((ind, idx) => (
                          <button
                            key={idx}
                            id={`btn-ind-${idx}`}
                            onClick={() => setSelectedIndustry(idx)}
                            className={`p-3 text-left rounded-sm border font-mono text-xs flex items-center justify-between transition-all cursor-pointer ${
                              selectedIndustry === idx
                                ? 'bg-brand-blue/10 border-brand-blue text-brand-blue font-bold'
                                : 'bg-white border-zinc-200 text-zinc-600 hover:text-brand-blue'
                            }`}
                          >
                            <span className="truncate pr-2">{ind.name}</span>
                            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                          </button>
                        ))}
                      </div>
                    </div>

                    <motion.div 
                      key={selectedIndustry}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35 }}
                      className="lg:col-span-8 p-6 md:p-8 rounded-sm bg-white border border-zinc-200 flex flex-col justify-between min-h-[220px] relative overflow-hidden shadow-sm animate-fade-in"
                    >
                      <div className="absolute right-0 bottom-0 select-none opacity-5 pointer-events-none">
                        <Anchor className="w-64 h-64 text-brand-blue" />
                      </div>
                      <div className="relative z-10 space-y-4">
                        <span className="text-[9px] font-mono text-brand-blue uppercase tracking-widest font-semibold block">// TRADE MATRIX CRITICAL FILE</span>
                        <h5 className="font-display text-xl font-black text-zinc-950 uppercase tracking-tight">{INDUSTRIES_SERVED[selectedIndustry].name}</h5>
                        <p className="text-zinc-650 text-xs md:text-sm leading-relaxed font-sans">{INDUSTRIES_SERVED[selectedIndustry].desc}</p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          <span className="px-2.5 py-1 text-[9px] font-mono bg-zinc-50 border border-zinc-200 text-zinc-600 rounded-sm uppercase">24/7 Telematics</span>
                          <span className="px-2.5 py-1 text-[9px] font-mono bg-zinc-50 border border-zinc-200 text-zinc-600 rounded-sm uppercase">Customs-bonded Vaults</span>
                          <span className="px-2.5 py-1 text-[9px] font-mono bg-zinc-50 border border-zinc-200 text-zinc-600 rounded-sm uppercase">JAFZA Duty Clearance</span>
                        </div>
                      </div>
                      <div className="mt-8 pt-4 border-t border-zinc-150 flex justify-between items-center text-[10px] font-mono text-zinc-400">
                        <span>SECURITY SEAL: DIRECT RECORD BOOK</span>
                        <span>DUBAI CARGO PERMIT APPROVED</span>
                      </div>
                    </motion.div>

                  </div>
                )}

              </div>

            </div>
          </div>
        </div>
      }

      {(mode === 'all' || mode === 'contact') &&
        /* 3. SIMULATED MAP PATHWAYS & CORRESPONDENCE */
        <div id="contact-us" className="w-full py-20 px-6 md:px-12 max-w-7xl relative font-sans">
          <div className="absolute top-0 left-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* LEFT: Contact details and interactive address list */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-5 flex flex-col justify-between space-y-8"
            >
              <div className="space-y-4">
                <span className="text-brand-blue uppercase tracking-[0.2em] font-mono text-xs block mb-1 font-semibold">
                  // SECURE DISPATCH COORDINATES
                </span>
                <h3 className="text-3xl md:text-4xl font-display font-black text-zinc-950 tracking-tight uppercase">
                  CONTACT <span className="text-brand-blue">NEFTEX FREIGHT</span>
                </h3>
                <p className="text-zinc-600 text-xs md:text-sm leading-relaxed font-sans">
                  Correlate your freight logistics targets with our operations desks directly. Dedicated bilingual coordinators remain active 24/7/365 to handle shipping quotes.
                </p>
              </div>

              {/* Address Cards List */}
              <div className="space-y-3 font-mono text-xs text-zinc-700">
                
                {/* ADDRESS */}
                <div className="p-4 rounded-sm bg-zinc-50 border border-zinc-200 flex items-start gap-4 hover:border-brand-blue/20 transition-colors shadow-xs">
                  <MapPin className="w-5 h-5 text-brand-blue mt-0.5 shrink-0" />
                  <div>
                    <span className="text-zinc-950 font-bold block mb-1 uppercase tracking-wider text-[10px]">Dubai Base HQ Address</span>
                    <p className="text-zinc-600 text-[11px] leading-relaxed font-sans">
                      112, Ansar Gallery Business Block,<br />
                      Karama, Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>

                {/* PHONE */}
                <a 
                  href="tel:+971543043515" 
                  className="p-4 rounded-sm bg-zinc-50 border border-zinc-200 flex items-start gap-4 hover:border-brand-blue/30 transition-colors block cursor-pointer group shadow-xs"
                >
                  <Phone className="w-5 h-5 text-brand-blue mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-zinc-950 font-bold block mb-1 uppercase tracking-wider text-[10px]">Dubai Dispatch Desk</span>
                    <p className="text-brand-blue text-sm font-black tracking-widest">+971 54 304 3515</p>
                    <p className="text-[9px] text-zinc-400 mt-0.5">Bilingual assistance active 24 hours daily</p>
                  </div>
                </a>

                {/* EMAIL */}
                <a 
                  href="mailto:info@neftexfreight.com" 
                  className="p-4 rounded-sm bg-zinc-50 border border-zinc-200 flex items-start gap-4 hover:border-brand-blue/30 transition-colors block cursor-pointer group shadow-xs"
                >
                  <Mail className="w-5 h-5 text-brand-blue mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-zinc-950 font-bold block mb-1 uppercase tracking-wider text-[10px]">Email Dispatch Correspondence</span>
                    <p className="text-zinc-950 text-[11px] font-bold uppercase select-all tracking-wider">INFO@INFO@NETEXFREIGHT.COM</p>
                    <p className="text-[9px] text-zinc-400 mt-0.5">SLA standard reply within 3 hours guarantee</p>
                  </div>
                </a>

                {/* WEB PORTAL */}
                <div className="p-4 rounded-sm bg-zinc-50 border border-zinc-200 flex items-start gap-4 hover:border-brand-blue/10 transition-colors shadow-xs">
                  <Globe className="w-5 h-5 text-brand-blue mt-0.5 shrink-0" />
                  <div>
                    <span className="text-zinc-950 font-bold block mb-1 uppercase tracking-wider text-[10px]">Global Web Portal</span>
                    <p className="text-zinc-650 text-[11px] select-all uppercase tracking-wider font-bold">WWW.NETEXFREIGHT.COM</p>
                  </div>
                </div>

              </div>

            </motion.div>

            {/* RIGHT: High tech SVG visual map tracking and highlighting */}
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 30 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-7 bg-white border border-zinc-200 rounded-sm p-6 flex flex-col justify-between relative overflow-hidden shadow-sm"
            >
              <div className="absolute top-4 left-4 font-mono text-[9px] text-zinc-400 uppercase tracking-widest font-semibold">
                DUBAI HUB INTERNATIONAL ROTATION MATRIX (DXB)
              </div>

              {/* MAP STAGE */}
              <div className="relative h-80 border border-zinc-150 bg-zinc-50 rounded-sm overflow-hidden my-6 flex items-center justify-center">
                
                {/* World projection lines */}
                <svg viewBox="0 0 1000 500" className="w-full h-full opacity-35 select-none pointer-events-none">
                  <path d="M 150,150 L 220,150 L 280,180 L 320,170 L 360,200 L 400,180 Z" fill="none" stroke="#e4e4e7" strokeWidth="1" strokeDasharray="3,3" />
                  <path d="M 420,120 L 480,120 L 520,150 L 560,180 L 600,240 L 700,250 Z" fill="none" stroke="#e4e4e7" strokeWidth="1" strokeDasharray="3,3" />
                  <circle cx="610" cy="300" r="4" fill="#0f3a8c" />
                  <text x="618" y="312" fill="#09090b" fontSize="10" fontFamily="monospace" fontWeight="bold">DUBAI (DXB)</text>

                  {/* Animated bezier path vectors leaving Dubai (610, 300) to target cities */}
                  <g stroke="#0f3a8c" strokeWidth="1.5" fill="none">
                    {/* Rotterdam */}
                    <path d="M 610,300 Q 535,250 460,180" className={`transition-all duration-300 ${activePathId === 0 ? 'stroke-brand-blue stroke-2 opacity-100' : 'opacity-20'}`} />
                    {/* Singapore */}
                    <path d="M 610,300 Q 680,315 750,325" className={`transition-all duration-300 ${activePathId === 1 ? 'stroke-brand-blue stroke-2 opacity-100' : 'opacity-20'}`} />
                    {/* Shanghai */}
                    <path d="M 610,300 Q 715,255 820,210" className={`transition-all duration-300 ${activePathId === 2 ? 'stroke-brand-blue stroke-2 opacity-100' : 'opacity-20'}`} />
                    {/* New York */}
                    <path d="M 610,300 Q 425,220 240,140" className={`transition-all duration-300 ${activePathId === 3 ? 'stroke-brand-blue stroke-2 opacity-100' : 'opacity-20'}`} />
                    {/* London */}
                    <path d="M 610,300 Q 525,220 440,140" className={`transition-all duration-300 ${activePathId === 4 ? 'stroke-brand-blue stroke-2 opacity-100' : 'opacity-20'}`} />
                    {/* Frankfurt */}
                    <path d="M 610,300 Q 545,250 480,200" className={`transition-all duration-300 ${activePathId === 5 ? 'stroke-brand-blue stroke-2 opacity-100' : 'opacity-20'}`} />
                  </g>
                </svg>

                {/* DUBAI CENTRAL DOT GLOW */}
                <div className="absolute left-[61%] top-[60%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none select-none z-20">
                  <div className="w-5 h-5 bg-brand-blue rounded-full animate-ping absolute opacity-45" />
                  <div className="w-3.5 h-3.5 bg-brand-blue rounded-full border border-white" />
                </div>

                {/* Interactive target dots overlay */}
                {SIMULATED_WORLD_LINKS.map((link, idx) => (
                  <button
                    key={idx}
                    id={`btn-link-${idx}`}
                    onMouseEnter={() => setActivePathId(idx)}
                    onMouseLeave={() => setActivePathId(null)}
                    className="absolute p-1 cursor-pointer flex flex-col items-center group z-15"
                    style={{ left: link.x, top: link.y }}
                  >
                    <div className={`w-3 h-3 rounded-full border border-white transition-colors ${
                      activePathId === idx ? 'bg-brand-blue scale-125' : 'bg-brand-blue/65'
                    }`} />
                    <span className="hidden group-hover:block absolute top-4 bg-white border border-zinc-200 text-[9px] font-mono py-1 px-2 rounded-sm whitespace-nowrap text-zinc-900 z-50 shadow-xl">
                      {link.city} ({link.code})
                    </span>
                  </button>
                ))}

                <div className="absolute bottom-3 left-4 right-4 bg-white/95 border border-zinc-200 rounded-sm p-3 text-[10px] font-mono text-zinc-500 leading-relaxed shadow-sm">
                  ⭐ <strong className="text-zinc-950">COSMIC FLUX RADAR:</strong> Hover over the target city node sensors to illuminate specific cargo carrier routes leaving the DUBAI central hub.
                </div>
              </div>

              {/* Quality declarations */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-4 border-t border-zinc-200 font-mono text-[9px] text-center text-zinc-500 font-bold uppercase tracking-wider">
                <div className="p-2 border border-zinc-200 rounded-sm bg-zinc-50">ISO 9001:2015</div>
                <div className="p-2 border border-zinc-200 rounded-sm bg-zinc-50">FIATA MEMBER</div>
                <div className="p-2 border border-zinc-200 rounded-sm bg-zinc-50">JAFZA DECK REG</div>
                <div className="p-2 border border-zinc-200 rounded-sm bg-zinc-50 text-brand-blue">GCC TRANSIT SLA</div>
              </div>

            </motion.div>

          </div>

        </div>
      }

    </section>
  );
}
