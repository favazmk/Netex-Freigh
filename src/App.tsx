import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, ShieldCheck, Clock, Globe, Headphones, FileDown, Plane, MapPin, Truck, ChevronUp } from 'lucide-react';
import ServiceHub from './components/ServiceHub.tsx';
import NetworkMap from './components/NetworkMap.tsx';
import WorldMapBg from './components/WorldMapBg.tsx';
import { 
  AboutUsSection, ServicesGridSection, HowItWorksSection, 
  WhyChooseUsSection, IndustriesWeServeSection, CallToActionSection, ContactSection 
} from './components/HomeSections.tsx';

export default function App() {
  const [showBrochureModal, setShowBrochureModal] = useState<boolean>(false);
  const [airplaneHovered, setAirplaneHovered] = useState<boolean>(false);
  const [activeServiceId, setActiveServiceId] = useState<string>('air-freight');

  const [currentPage, setCurrentPage] = useState<string>(() => {
    let hash = window.location.hash.replace('#', '');
    if (hash === 'interactive-calculator' || hash === 'request-quote') hash = 'contact-us';
    const validPages = ['home', 'about-us', 'services', 'why-choose-us', 'contact-us'];
    return validPages.includes(hash) ? hash : 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      let hash = window.location.hash.replace('#', '');
      if (hash === 'interactive-calculator' || hash === 'request-quote') hash = 'contact-us';
      const validPages = ['home', 'about-us', 'services', 'why-choose-us', 'contact-us'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
        window.scrollTo({ top: 0 });
      } else if (!hash) {
        setCurrentPage('home');
        window.scrollTo({ top: 0 });
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPage = (id: string) => {
    const validPages = ['home', 'about-us', 'services', 'why-choose-us', 'contact-us'];
    const targetId = id === 'request-quote' || id === 'interactive-calculator' ? 'contact-us' : id;
    if (validPages.includes(targetId)) {
      window.location.hash = targetId === 'home' ? '' : targetId;
      setCurrentPage(targetId);
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <div id="netex-app" className="bg-transparent min-h-screen text-zinc-950 selection:bg-brand-blue selection:text-white font-sans overflow-x-hidden antialiased relative">
      <WorldMapBg />
      
      {/* 1. TOP NAV BAR */}
      <header className="fixed top-0 inset-x-0 bg-white/90 backdrop-blur-md border-b border-zinc-200 z-50 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex justify-between items-center">
          
          {/* Logo Brand Title */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-brand-blue rounded-sm flex items-center justify-center font-black text-white text-lg font-display tracking-tight shadow-sm">
              N
            </div>
            <div>
              <div className="font-display text-xl font-black tracking-tight text-zinc-950 leading-none">Netex Freight</div>
              <div className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase mt-1">// REGIONAL GCC SHIPMENT HUB</div>
            </div>
          </div>

          {/* Desktop Nav links precisely matching Wireframe */}
          <nav className="hidden lg:flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-zinc-650">
            <button 
              id="nav-home" 
              onClick={() => navigateToPage('home')} 
              className={`hover:text-brand-blue transition-colors cursor-pointer py-1 ${currentPage === 'home' ? 'text-brand-blue border-b border-brand-blue font-bold' : ''}`}
            >
              Home
            </button>
            <button 
              id="nav-about" 
              onClick={() => navigateToPage('about-us')} 
              className={`hover:text-brand-blue transition-colors cursor-pointer py-1 ${currentPage === 'about-us' ? 'text-brand-blue border-b border-brand-blue font-bold' : ''}`}
            >
              About Us
            </button>
            <button 
              id="nav-services" 
              onClick={() => navigateToPage('services')} 
              className={`hover:text-brand-blue transition-colors cursor-pointer py-1 ${currentPage === 'services' ? 'text-brand-blue border-b border-brand-blue font-bold' : ''}`}
            >
              Services
            </button>
            <button 
              id="nav-why-us" 
              onClick={() => navigateToPage('why-choose-us')} 
              className={`hover:text-brand-blue transition-colors cursor-pointer py-1 ${currentPage === 'why-choose-us' ? 'text-brand-blue border-b border-brand-blue font-bold' : ''}`}
            >
              Why Choose Us
            </button>
            <button 
              id="nav-contact" 
              onClick={() => navigateToPage('contact-us')} 
              className={`hover:text-brand-blue transition-colors cursor-pointer py-1 ${currentPage === 'contact-us' ? 'text-brand-blue border-b border-brand-blue font-bold' : ''}`}
            >
              Contact Us
            </button>
          </nav>

          {/* Sizable Action Hotline */}
          <div className="flex items-center gap-3">
            <a 
              href="tel:+971543043515" 
              className="px-4 py-2 border border-zinc-200 hover:border-zinc-300 bg-zinc-50 hover:bg-zinc-100 text-zinc-800 font-mono text-xs flex items-center gap-2 transition-all rounded-sm hidden md:flex shadow-xs"
              title="Call Dispatch Hot Desk"
            >
              <Phone className="w-3.5 h-3.5 text-brand-blue shrink-0" />
              <span className="font-semibold">+971 54 304 3515</span>
            </a>
            
            <button 
              id="get-quote-nav-btn"
              onClick={() => navigateToPage('contact-us')} 
              className="px-4 py-2 bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-xs flex items-center gap-1.5 h-9 tracking-widest rounded-sm cursor-pointer uppercase transition-colors shadow-xs"
              title="Request a Custom Quote"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get a Quote</span>
            </button>
          </div>

        </div>
      </header>

      {/* 2. MAJESTIC LOGISTICS HERO SECTION (Premium Split Screen layout matching theme design HTML directly) */}
      {currentPage === 'home' && (
        <>
          <section 
            id="hero" 
            onMouseEnter={() => setAirplaneHovered(true)}
            onMouseLeave={() => setAirplaneHovered(false)}
            className="relative pt-20 border-b border-zinc-200 bg-transparent overflow-hidden flex flex-col justify-between font-sans"
          >
            <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col md:flex-row items-stretch min-h-[75vh]">
              
              {/* Left Column: Content */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full md:w-7/12 flex flex-col justify-center px-6 md:px-12 py-16 md:py-8 border-b md:border-b-0 md:border-r border-zinc-200"
              >
                <div className="mb-6 animate-fade-in">
                  <span className="text-brand-blue font-mono text-xs tracking-[0.3em] uppercase block font-semibold">
                    Leading Logistics Solutions // JAFZA Dubai Operator
                  </span>
                </div>
                
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display leading-[0.9] tracking-tighter mb-8 text-zinc-950 uppercase">
                  FREIGHT<br/>WITHOUT<br/><span className="text-zinc-400 font-display font-medium">LIMITS.</span>
                </h1>
                
                <p className="text-zinc-600 text-base md:text-lg max-w-lg leading-relaxed mb-10 font-sans">
                  NEFTEX orchestrates complex global supply chains with extreme precision, moving heavy freight assets across continents via custom sea, express air, and secured GCC highway trailer fleets.
                </p>

                <blockquote className="border-l-2 border-brand-blue pl-4 py-1 text-zinc-700 font-sans text-sm md:text-base leading-relaxed italic max-w-xl mb-10">
                  &ldquo;Specializing in delivering reliable, cost-effective, and efficient cargo solutions across international and domestic markets.&rdquo;
                </blockquote>

                <div className="flex flex-wrap gap-4">
                  <motion.button 
                    id="hero-estimator-btn"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigateToPage('contact-us')} 
                    className="px-6 py-4 bg-brand-blue text-white font-bold font-mono text-xs rounded-sm uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm"
                  >
                    <span>Request a Custom Quote</span>
                  </motion.button>
                  
                  <motion.button 
                    id="hero-services-btn"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigateToPage('services')} 
                    className="px-6 py-4 border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-700 font-mono text-xs rounded-sm uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm"
                  >
                    <span>Services Terminal Hub</span>
                  </motion.button>
                </div>
              </motion.div>

              {/* Right Column: Visual Interactive Map Overlay with animated global trade routes */}
              <div className="w-full md:w-5/12 relative overflow-hidden min-h-[500px] md:min-h-0 bg-zinc-50 flex flex-col justify-end">
                <div className="absolute inset-0 z-0">
                  <NetworkMap />
                </div>
              </div>
            </div>

            {/* 3. HERO FLOATING BADGES (Secure specifications banner with staggered scroll animations) */}
            <div className="w-full border-t border-zinc-200 bg-zinc-50/40">
              <div className="w-full max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-0 divide-y divide-zinc-250 lg:divide-y-0 lg:divide-x divide-zinc-200 text-zinc-800">
                
                {/* BADGE 1: RELIABLE & SAFE */}
                <motion.div 
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ backgroundColor: "rgba(15, 58, 140, 0.02)", y: -1 }}
                  className="p-6 flex items-start gap-3.5 transition-all duration-300"
                >
                  <div className="p-2 bg-white text-brand-blue border border-zinc-200 rounded-sm shrink-0 shadow-xs">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-mono text-xs font-bold text-zinc-900 uppercase tracking-wider">RELIABLE & SAFE</div>
                    <div className="text-[11px] text-zinc-600 mt-1 leading-snug">Secure asset handling guaranteed at every step of global transit.</div>
                  </div>
                </motion.div>
     
                {/* BADGE 2: ON-TIME DELIVERY */}
                <motion.div 
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ backgroundColor: "rgba(15, 58, 140, 0.02)", y: -1 }}
                  className="p-6 flex items-start gap-3.5 transition-all duration-300"
                >
                  <div className="p-2 bg-white text-brand-blue border border-zinc-200 rounded-sm shrink-0 shadow-xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-mono text-xs font-bold text-zinc-900 uppercase tracking-wider">ON-TIME DELIVERY</div>
                    <div className="text-[11px] text-zinc-600 mt-1 leading-snug">Timely priority shipping solutions keeping your supply chain ahead.</div>
                  </div>
                </motion.div>
     
                {/* BADGE 3: GLOBAL NETWORK */}
                <motion.div 
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ backgroundColor: "rgba(15, 58, 140, 0.02)", y: -1 }}
                  className="p-6 flex items-start gap-3.5 transition-all duration-300"
                >
                  <div className="p-2 bg-white text-brand-blue border border-zinc-200 rounded-sm shrink-0 shadow-xs">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-mono text-xs font-bold text-zinc-900 uppercase tracking-wider">GLOBAL NETWORK</div>
                    <div className="text-[11px] text-zinc-600 mt-1 leading-snug">Strong direct alliances with global ocean carriers & air lines.</div>
                  </div>
                </motion.div>
                {/* BADGE 4: DEDICATED SUPPORT */}
                <motion.div 
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ backgroundColor: "rgba(15, 58, 140, 0.02)", y: -1 }}
                  className="p-6 flex items-start gap-3.5 transition-all duration-300"
                >
                  <div className="p-2 bg-white text-brand-blue border border-zinc-200 rounded-sm shrink-0 shadow-xs">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-mono text-xs font-bold text-zinc-900 uppercase tracking-wider">DEDICATED SUPPORT</div>
                    <div className="text-[11px] text-zinc-600 mt-1 leading-snug">Dubai operations desk available 24/7/365 to manage dispatch.</div>
                  </div>
                </motion.div>
     
              </div>
            </div>

          </section>

          {/* Sequential Web Wireframe Sections inside Homepage (Except portfolio and stats) */}
          <AboutUsSection onNavigate={navigateToPage} />
          <ServicesGridSection onNavigate={navigateToPage} onSelectService={setActiveServiceId} />
          <HowItWorksSection />
          <WhyChooseUsSection />
          <IndustriesWeServeSection />
          <CallToActionSection onNavigate={navigateToPage} />
          <ContactSection />
        </>
      )}

      {/* 4. MODULAR SECTIONS STACK ACCORDING TO THE ACTIVE CURRENT PAGE */}
      {currentPage === 'services' && (
        <motion.div
          key="services"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <ServiceHub />
          <ServicesGridSection onNavigate={navigateToPage} onSelectService={setActiveServiceId} />
        </motion.div>
      )}

      {currentPage === 'about-us' && (
        <motion.div
          key="about-us"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full"
        >
          <AboutUsSection onNavigate={navigateToPage} />
          <HowItWorksSection />
        </motion.div>
      )}

      {currentPage === 'why-choose-us' && (
        <motion.div
          key="why-choose-us"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full"
        >
          <WhyChooseUsSection />
          <IndustriesWeServeSection />
        </motion.div>
      )}

      {currentPage === 'contact-us' && (
        <motion.div
          key="contact-us"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full"
        >
          <ContactSection />
        </motion.div>
      )}

      {/* 6. IMMERSIVE PDF BROCHURE PREVIEW MODAL (With elegant spring entrance transitions) */}
      {showBrochureModal && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.93, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="w-full max-w-2xl bg-white border border-zinc-200 p-6 md:p-8 relative shadow-2xl block"
          >
            
            <button
              onClick={() => setShowBrochureModal(false)}
              className="absolute top-4 right-4 py-1 px-2.5 bg-zinc-50 text-zinc-600 hover:text-zinc-900 font-mono text-xs border border-zinc-205 rounded-sm cursor-pointer transition-colors shadow-xs"
            >
              CLOSE [✕]
            </button>

            <span className="text-[10px] font-mono text-brand-blue uppercase tracking-widest block mb-2 font-bold">// NEFTEX REGISTERED DOCUMENT</span>
            <h3 className="text-2xl font-display font-bold text-zinc-950 mb-6 uppercase tracking-tight">NEFTEX FREIGHT — SYSTEMIC BRIEF MANUAL</h3>

            <div className="p-4 rounded-sm bg-zinc-50 border border-zinc-200 overflow-y-auto max-h-85 space-y-4 font-mono text-xs leading-relaxed text-zinc-650 customize-scrollbar">
              <div className="border-b border-zinc-200 pb-4">
                <strong className="text-zinc-900 text-sm block uppercase tracking-wide">// CORPORATE STATEMENT</strong>
                <p className="mt-1 font-sans">
                  NEFTEX Freight FZE LLC is a highly trusted cargo carrier registered in Dubai, UAE. Engineering deep high-capacity air, ocean container, and heavy GCC highway trailer services.
                </p>
              </div>

              <div className="border-b border-zinc-200 pb-4">
                <strong className="text-zinc-900 text-sm block uppercase tracking-wide">// Dubai Base HQ Coordinates</strong>
                <ul className="mt-2 space-y-1.5">
                  <li className="flex justify-between border-b border-zinc-150 pb-1"><span>☎ Phone Desk:</span> <span className="text-zinc-950 font-bold">+971 54 304 3515</span></li>
                  <li className="flex justify-between border-b border-zinc-150 pb-1"><span>✉ Email Address:</span> <span className="text-zinc-950 font-bold">info@neftexfreight.com</span></li>
                  <li className="flex justify-between border-b border-zinc-150 pb-1"><span>🌐 Corporate Link:</span> <span className="text-zinc-950 font-bold">www.neftexfreight.com</span></li>
                  <li className="flex justify-between pt-1"><span>📍 Dubai Office:</span> <span className="text-zinc-950 text-right font-sans">112, Ansar Gallery Business Block, Karama, Dubai, UAE</span></li>
                </ul>
              </div>

              <div>
                <strong className="text-zinc-900 text-sm block uppercase tracking-wide">// THE SERVICES PORTFOLIO</strong>
                <p className="mt-1 font-sans">
                  Includes complete HS-code clearance documentation support, out-of-gauge heavy crating packaging, double-deck car transporter transit shielding, 3-hour rapid Jebel Ali Customs corridors, and automated temperature warehouse bays in our JAFZA docks.
                </p>
              </div>
            </div>

            <div className="mt-8 flex gap-3 justify-end text-xs">
              <button
                onClick={() => {
                  alert('Thank you for downloading the official NEFTEX Freight digital brief copy (PDF Mock simulation). Contact our Dubai dispatch desk for active routing manifests.');
                  setShowBrochureModal(false);
                }}
                className="px-5 py-3 rounded-sm bg-brand-blue hover:bg-brand-blue-hover text-white font-bold font-mono uppercase cursor-pointer transition-colors tracking-wider shadow-sm"
              >
                Simulate PDF Download
              </button>
              <button
                onClick={() => setShowBrochureModal(false)}
                className="px-5 py-3 rounded-sm border border-zinc-250 text-zinc-600 hover:text-zinc-950 cursor-pointer bg-zinc-50 hover:bg-zinc-100 shadow-sm"
              >
                Dismiss
              </button>
            </div>

          </motion.div>
        </motion.div>
      )}

      {/* 7. PRESTIGIOUS CORPORATE FOOTER */}
      <footer className="bg-zinc-50 border-t border-zinc-200 py-16 px-6 md:px-12 relative font-sans">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-zinc-200">
            
            {/* Logo details block (5 cols) */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-brand-blue flex items-center justify-center font-bold text-white tracking-tight font-display text-base shadow-sm">
                  N
                </div>
                <div className="font-display font-black text-zinc-950 text-lg tracking-tight uppercase">Netex Freight</div>
              </div>
              <p className="text-zinc-600 text-xs leading-relaxed max-w-sm font-sans">
                Registered free-zone FZE operator based in Dubai, UAE. We engineer reliable multi-modal freight routes, secure ocean consolidations, and priority import/export customs clearance corridors across Middle East channels.
              </p>
              <span className="text-[10px] font-mono text-zinc-400 block pt-1 uppercase">
                LICENSE NO: FZE-112-JAFZA / DUBAI CUSTOMS BOARDED
              </span>
            </div>

            {/* Quick anchors (3 cols) */}
            <div className="md:col-span-3 space-y-3 font-mono text-xs">
              <h4 className="text-zinc-900 font-bold uppercase tracking-widest text-[11px]">// NAVIGATION TERMINALS</h4>
              <div className="flex flex-col gap-2 text-zinc-500">
                <button onClick={() => navigateToPage('home')} className="text-left hover:text-brand-blue transition-colors uppercase cursor-pointer">Home</button>
                <button onClick={() => navigateToPage('about-us')} className="text-left hover:text-brand-blue transition-colors uppercase cursor-pointer">About Us</button>
                <button onClick={() => navigateToPage('services')} className="text-left hover:text-brand-blue transition-colors uppercase cursor-pointer">Services</button>
                <button onClick={() => navigateToPage('why-choose-us')} className="text-left hover:text-brand-blue transition-colors uppercase cursor-pointer">Why Choose Us</button>
                <button onClick={() => navigateToPage('contact-us')} className="text-left hover:text-brand-blue transition-colors uppercase cursor-pointer">Contact Us</button>
              </div>
            </div>

            {/* Dubai offices block (4 cols) */}
            <div className="md:col-span-4 space-y-4 text-xs font-mono">
              <h4 className="text-zinc-900 font-bold uppercase tracking-widest text-[11px]">// MIDDLE EAST HEADQUARTERS</h4>
              <div className="text-zinc-650 space-y-1 font-sans">
                <div className="font-semibold text-zinc-800 font-mono">Netex Freight FZE LLC</div>
                <div>112, Ansar Gallery Business Block,</div>
                <div>Karama, Dubai, United Arab Emirates</div>
              </div>
              <div className="text-zinc-600 space-y-1">
                <div>☎ Tel Desk: +971 54 304 3515</div>
                <div>✉ Mail: info@netexfreight.com</div>
              </div>
            </div>

          </div>

          {/* Copy section */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-[10px] font-mono uppercase tracking-widest">
            <div>
              &copy; {new Date().getFullYear()} NETEX FREIGHT. ALL RIGHTS RESERVED.
            </div>
            <div className="flex gap-4">
              <span className="hover:text-brand-blue cursor-pointer">Secure SLAs</span>
              <span>|</span>
              <span className="hover:text-brand-blue cursor-pointer">Customs Bond Laws</span>
              <span>|</span>
              <span className="hover:text-brand-blue cursor-pointer">JAFZA Free Ports Act</span>
            </div>
          </div>

        </div>

        {/* Scroll on top bottom shortcut */}
        <div className="max-w-7xl mx-auto flex justify-end mt-4">
          <button 
            id="scroll-top-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="p-2.5 bg-white hover:bg-zinc-100 rounded-sm border border-zinc-200 text-zinc-600 hover:text-brand-blue cursor-pointer transition-colors shadow-xs"
            title="Sailing on top"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </footer>

    </div>
  );
}
