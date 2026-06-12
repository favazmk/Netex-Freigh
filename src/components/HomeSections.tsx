import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { 
  Plane, Ship, Truck, ShieldCheck, Database, Package, FileText, 
  MapPin, Phone, Mail, Globe, ArrowRight, CheckCircle, 
  Settings, Award, Sparkles, Building2, Layers, Briefcase, ShoppingCart, Hammer, FileCheck2
} from 'lucide-react';

// Interfaces for our sections
interface SectionProps {
  onNavigate: (id: string) => void;
  onSelectService?: (id: string) => void;
}

// 1. ABOUT US SECTION
export function AboutUsSection({ onNavigate }: SectionProps) {
  return (
    <section id="about-section" className="py-20 px-6 md:px-12 bg-transparent border-t border-zinc-200 relative font-sans">
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Area */}
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -30 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 space-y-6"
        >
          <span className="text-brand-blue uppercase tracking-[0.2em] font-mono text-xs block mb-1 font-semibold">
            // CORPORATE PROFILE
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-zinc-950 tracking-tight uppercase">
            About <span className="text-brand-blue">Netex Freight</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-blue" />
          
          <p className="font-sans text-zinc-800 font-medium text-lg leading-relaxed italic pr-4">
            &ldquo;Netex Freight FZE LLC is a premier, highly certified cargo logistics provider headquartered in the global trade terminal hub of Dubai, UAE.&rdquo;
          </p>
          
          <p className="text-zinc-600 text-sm leading-relaxed font-sans">
            We specialize in delivering secure, customer-focused logistics solutions across international and domestic freight corridors. Moving heavy industrial and commercial cargo is complex—which is why our experienced logistics team manages every detail carefully, including express Air Freight, Sea container lines, heavy Land transportation, bonded warehousing, and rapid customs brokerage.
          </p>

          <p className="text-zinc-650 text-sm leading-relaxed font-sans">
            By building direct relationships with primary global shipping lines and air carriers, we bypass intermediate broker delays to secure competitive transit rates. At Netex Freight, we support your commercial expansion with dependable, round-the-clock dispatch operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2 font-mono text-xs">
            <div className="flex items-center gap-2 text-zinc-700 bg-zinc-50 border border-zinc-200 p-3 rounded-sm">
              <CheckCircle className="w-4 h-4 text-brand-blue shrink-0" />
              <span>International & Domestic Solutions</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-700 bg-zinc-50 border border-zinc-200 p-3 rounded-sm">
              <CheckCircle className="w-4 h-4 text-brand-blue shrink-0" />
              <span>Customer-Focused Logistics Care</span>
            </div>
          </div>
        </motion.div>

        {/* Visual Showcase Card */}
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 30 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 h-[400px] rounded-sm overflow-hidden border border-zinc-200 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/25 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" 
            alt="Netex Freight Dubai Operations" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/95 border border-zinc-200 p-5 rounded-sm shadow-sm">
            <div className="text-[9px] font-mono text-brand-blue uppercase tracking-widest font-semibold">// MIDDLE EAST INTEGRATED HUB</div>
            <div className="text-lg font-display font-black text-zinc-950 mt-1 uppercase">Dubai Base Network</div>
            <div className="text-xs text-zinc-600 mt-1 font-sans">Strategic customs connections and JAFZA bonded free zone priority.</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// 2. SERVICES GRID SECTION (7 cards with "Learn More" link to Active Hub)
export function ServicesGridSection({ onNavigate, onSelectService }: SectionProps) {
  const SERVICES_LIST = [
    {
      id: 'air-freight',
      title: 'Air Freight',
      desc: 'Express international flight scheduling and priority cargo transit options.',
      icon: Plane
    },
    {
      id: 'sea-freight',
      title: 'Sea Freight',
      desc: 'Full container load (FCL) and sea grouping consolidations (LCL) worldwide.',
      icon: Ship
    },
    {
      id: 'land-freight',
      title: 'Land Freight',
      desc: 'GCC cross-border trailer distributions and heavy cargo trucking solutions.',
      icon: Truck
    },
    {
      id: 'customs',
      title: 'Customs Clearance',
      desc: 'Efficient HS categorization processing at Jebel Ali sea/air port terminals.',
      icon: FileCheck2
    },
    {
      id: 'warehousing',
      title: 'Warehousing & Supply Chain',
      desc: 'Bonded, secure temperature-monitored free-zone storage and barcode sorting.',
      icon: Database
    },
    {
      id: 'packing',
      title: 'Packing Solutions',
      desc: 'Shrink-wrap shielding, heavy-duty wooden crating, and export prepares.',
      icon: Package
    },
    {
      id: 'break-bulk',
      title: 'Break Bulk & Project Cargo',
      desc: 'Bespoke out-of-gauge heavy engineering and specialized project handler escorts.',
      icon: FileText
    }
  ];

  const handleLearnMore = (id: string) => {
    if (onSelectService) {
      onSelectService(id);
    }
    onNavigate('services');
  };

  return (
    <section id="services-grid-section" className="py-20 px-6 md:px-12 bg-transparent border-t border-zinc-200 relative font-sans">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-blue uppercase tracking-[0.2em] font-mono text-xs block mb-3 font-semibold">
            // COMPREHENSIVE CARRIER DIVISION
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-zinc-950 tracking-tight uppercase">
            Services <span className="text-zinc-400 font-medium font-display">& Solutions</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-blue mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES_LIST.map((srv, idx) => {
            const IconComponent = srv.icon;
            return (
              <motion.div
                key={srv.id}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="bg-zinc-50 border border-zinc-200 rounded-sm p-6 hover:border-brand-blue transition-all flex flex-col justify-between group cursor-default shadow-sm"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-brand-blue group-hover:text-white group-hover:bg-brand-blue transition-colors shadow-xs">
                    <IconComponent className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="font-mono text-xs font-bold uppercase text-zinc-900 tracking-wider">
                    {srv.title}
                  </h3>
                  <p className="text-zinc-600 text-xs leading-relaxed font-sans">
                    {srv.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-200 flex justify-end">
                  <button
                    onClick={() => handleLearnMore(srv.id)}
                    className="text-[10px] font-mono font-bold text-brand-blue hover:text-brand-blue-hover flex items-center gap-1 uppercase transition-colors cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 3. SERVICE OPERATIONAL TIMELINE (5 steps)
export function HowItWorksSection() {
  const STEPS_LIST = [
    {
      step: '01',
      title: 'Request a Quote',
      desc: 'Use our interactive rate estimating simulator or coordinate with our operations desks directly.'
    },
    {
      step: '02',
      title: 'Cargo Assessment & Documentation',
      desc: 'Conducting dimension auditing, custom HS coding, JAFZA duty exemption filing, and transit planning.'
    },
    {
      step: '03',
      title: 'Packing & Preparation',
      desc: 'Secure shrink-wrap shielding, heavy-cargo heavy crating, and consolidation at Jebel Ali warehouse terminals.'
    },
    {
      step: '04',
      title: 'Transportation',
      desc: 'Smooth shipping distribution across premium channels, with 24/7 telematics tracking.'
    },
    {
      step: '05',
      title: 'Delivery',
      desc: 'Completing port-of-entry terminal ground handoff or swift secure local door-to-door final landing.'
    }
  ];

  return (
    <section id="how-it-works-timeline" className="py-20 px-6 md:px-12 bg-transparent border-t border-zinc-200 relative font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-blue uppercase tracking-[0.2em] font-mono text-xs block mb-3 font-semibold">
            // WORKFLOW PIPELINE
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-zinc-950 tracking-tight uppercase">
            How <span className="text-brand-blue">It Works</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-blue mx-auto mt-4" />
        </div>

        {/* Dynamic Timeline Layout */}
        <div className="relative border-l border-zinc-200 md:border-l-0 md:grid md:grid-cols-5 md:gap-6 pl-4 md:pl-0 space-y-8 md:space-y-0">
          {/* Horizontal dot line for desktop */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-px bg-zinc-200 -z-0" />

          {STEPS_LIST.map((step, idx) => (
            <motion.div
              key={step.step}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 25 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center animate-fade-in"
            >
              {/* Outer circular indicator */}
              <div className="w-14 h-14 bg-zinc-50 border border-zinc-200 hover:border-brand-blue rounded-full flex items-center justify-center text-brand-blue font-mono text-sm font-black transition-colors md:mx-auto mb-4 relative shadow-xs">
                {step.step}
                {/* Secondary ring indicator */}
                <div className="absolute inset-1 rounded-full border border-brand-blue/10" />
              </div>

              <h4 className="font-mono text-xs font-bold text-zinc-900 uppercase tracking-wider mb-2 md:max-w-[140px] md:mx-auto">
                {step.title}
              </h4>
              <p className="text-zinc-650 text-xs leading-relaxed font-sans md:mx-auto md:max-w-[190px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 4. WHY CHOOSE US
export function WhyChooseUsSection() {
  const CHOOSE_CARDS = [
    {
      id: 1,
      title: 'Reliable Logistics Partner',
      bullets: ['✓ Professional handling', '✓ Timely delivery'],
      desc: 'Delivering uncompromised handling and premium cargo protection.'
    },
    {
      id: 2,
      title: 'Global Freight Network',
      bullets: ['✓ Worldwide connections', '✓ International reach'],
      desc: 'Seamless alliances with global airlines and ocean liner operations.'
    },
    {
      id: 3,
      title: 'Competitive Pricing',
      bullets: ['✓ Cost-effective solutions'],
      desc: 'Optimized consolidating models that yield robust cost parameters.'
    },
    {
      id: 4,
      title: 'Experienced Team',
      bullets: ['✓ Dedicated logistics experts'],
      desc: 'Experienced custom handlers and bilingually fluent dispatch coordinators.'
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 px-6 md:px-12 bg-transparent border-t border-zinc-200 relative font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-blue uppercase tracking-[0.2em] font-mono text-xs block mb-3 font-semibold">
            // COMPETITIVE ADVANTAGES
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-zinc-950 tracking-tight uppercase">
            Why <span className="text-brand-blue font-display">Choose Us</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-blue mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHOOSE_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-zinc-50 border border-zinc-200 rounded-sm p-6 flex flex-col justify-between hover:border-brand-blue transition-all cursor-default shadow-sm"
            >
              <div className="space-y-4">
                <span className="font-mono text-xs font-bold text-brand-blue bg-brand-blue/10 border border-brand-blue/20 px-2.5 py-1 rounded-sm inline-block">
                  0{card.id}
                </span>
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-900">
                  {card.title}
                </h3>
                <p className="text-zinc-650 text-xs leading-relaxed font-sans">
                  {card.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-200 space-y-1.5 font-mono text-xs animate-fade-in">
                {card.bullets.map((b, bIdx) => (
                  <div key={bIdx} className="text-brand-blue font-bold tracking-tight">
                    {b}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 5. INDUSTRIES WE SERVE (6 industries)
export function IndustriesWeServeSection() {
  const INDUSTRIES = [
    { name: 'Manufacturing', icon: Settings, desc: 'Expediting raw materials, metal parts, assembly units, and industrial products.' },
    { name: 'Retail & E-commerce', icon: ShoppingCart, desc: 'Warehousing distributions and swift consumer logistics for high-volume traders.' },
    { name: 'Construction', icon: Hammer, desc: 'Heavy equipment shipments, machinery parts, steel pipes, and out-of-gauge elements.' },
    { name: 'Automotive', icon: Truck, desc: 'Commercial vehicles chasis, luxury hypercars, and premium wheels transport configurations.' },
    { name: 'Industrial Equipment', icon: Building2, desc: 'Moving factory turbines, heavy drill assets, turbines, and large boilers safely.' },
    { name: 'Import & Export Businesses', icon: Globe, desc: 'Supporting international trading accounts with professional HS customs clearance.' }
  ];

  return (
    <section id="industries-serve" className="py-20 px-6 md:px-12 bg-transparent border-t border-zinc-200 relative font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-blue uppercase tracking-[0.2em] font-mono text-xs block mb-3 font-semibold">
            // SPECIALIZED SECTORS
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black text-zinc-950 tracking-tight uppercase">
            Industries <span className="text-zinc-400 font-medium font-display">We Serve</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-blue mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, idx) => {
            const IconComponent = ind.icon;
            return (
              <motion.div
                key={ind.name}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 15 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="bg-zinc-50 border border-zinc-200 p-6 rounded-sm hover:border-brand-blue/60 transition-colors flex gap-4 items-start cursor-default shadow-sm"
              >
                <div className="p-2.5 bg-white border border-zinc-200 rounded-sm text-brand-blue shadow-xs">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-mono text-xs font-bold uppercase text-zinc-900 tracking-wider">
                    {ind.name}
                  </h4>
                  <p className="text-zinc-650 text-xs leading-relaxed font-sans">
                    {ind.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 6. CALL TO ACTION SECTION
export function CallToActionSection({ onNavigate }: SectionProps) {
  return (
    <section id="cta-bottom" className="py-20 px-6 md:px-12 bg-transparent border-t border-zinc-200 relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-zinc-50/10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        <span className="text-brand-blue uppercase tracking-[0.2em] font-mono text-xs block font-semibold">
          // ACCOMPLISH DIRECT DISPATCH
        </span>
        <h3 className="text-3xl md:text-5xl font-display font-black text-zinc-950 tracking-tight uppercase leading-none">
          Need a Reliable Logistics Partner?
        </h3>
        <p className="text-zinc-600 text-xs md:text-sm font-sans max-w-2xl mx-auto leading-relaxed">
          We provide customized freight and supply chain solutions tailored to your business needs. Connect with our Dubai operations control center to receive customized schedules.
        </p>

        <div className="pt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('contact-us')}
            id="cta-redirect-rate-btn"
            className="px-8 py-4 bg-brand-blue hover:bg-brand-blue-hover font-mono text-xs font-bold text-white tracking-widest uppercase rounded-sm cursor-pointer transition-colors shadow-sm"
          >
            Request a Free Quote
          </motion.button>
        </div>
      </div>
    </section>
  );
}

// 7. CONTACT SECTION
export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [alertSuccess, setAlertSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !message) {
      alert('Please fill out all inquiry fields.');
      return;
    }
    setAlertSuccess(true);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setTimeout(() => setAlertSuccess(false), 5000);
  };

  return (
    <section id="contact-us-widget" className="py-20 px-6 md:px-12 bg-transparent border-t border-zinc-200 relative font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Side: Contact Info */}
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-between space-y-8"
        >
          <div className="space-y-4">
            <span className="text-brand-blue uppercase tracking-[0.2em] font-mono text-xs block mb-1 font-semibold">
              // DISPATCH TERMINAL CHANNELS
            </span>
            <h3 className="text-3xl md:text-4xl font-display font-black text-zinc-950 tracking-tight uppercase">
              Contact <span className="text-brand-blue">Netex Freight</span>
            </h3>
            <p className="text-zinc-650 text-xs md:text-sm leading-relaxed font-sans">
              Connect with our logistics operations to coordinate your freight routing requirements. Our Dubai dispatch coordinators are available 24/7/365 to handle your inquiries.
            </p>
          </div>

          <div className="space-y-3 font-mono text-xs text-zinc-700">
            {/* Address Card */}
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

            {/* Phone Link */}
            <a 
              href="tel:+971543043515" 
              className="p-4 rounded-sm bg-zinc-50 border border-zinc-200 flex items-start gap-4 hover:border-brand-blue/30 transition-colors block cursor-pointer group shadow-xs"
            >
              <Phone className="w-5 h-5 text-brand-blue mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <span className="text-zinc-950 font-bold block mb-1 uppercase tracking-wider text-[10px]">Dubai Dispatch Desk</span>
                <p className="text-brand-blue text-sm font-black tracking-widest">+971 54 304 3515</p>
                <p className="text-[9px] text-zinc-400 mt-0.5">Bilingual operations assistance active 24/7</p>
              </div>
            </a>

            {/* Email Link */}
            <a 
              href="mailto:info@netexfreight.com" 
              className="p-4 rounded-sm bg-zinc-50 border border-zinc-200 flex items-start gap-4 hover:border-brand-blue/30 transition-colors block cursor-pointer group shadow-xs"
            >
              <Mail className="w-5 h-5 text-brand-blue mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <span className="text-zinc-950 font-bold block mb-1 uppercase tracking-wider text-[10px]">Email Dispatch Correspondence</span>
                <p className="text-zinc-950 text-[11px] font-bold uppercase select-all tracking-wider">INFO@NETEXFREIGHT.COM</p>
                <p className="text-[9px] text-zinc-400 mt-0.5">SLA standard reply within 3 hours guarantee</p>
              </div>
            </a>

            {/* Web Portal Details */}
            <div className="p-4 rounded-sm bg-zinc-50 border border-zinc-200 flex items-start gap-4 hover:border-brand-blue/10 transition-colors shadow-xs">
              <Globe className="w-5 h-5 text-brand-blue mt-0.5 shrink-0" />
              <div>
                <span className="text-zinc-950 font-bold block mb-1 uppercase tracking-wider text-[10px]">Global Web Portal</span>
                <p className="text-zinc-600 text-[11px] select-all uppercase tracking-wider font-bold">WWW.NETEXFREIGHT.COM</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 bg-white w-full"
        >
          <form onSubmit={handleSubmit} className="bg-white border border-zinc-200 rounded-sm p-6 md:p-8 space-y-5 relative shadow-sm">
            <h4 className="font-mono text-xs font-bold text-zinc-900 uppercase tracking-widest pb-3 border-b border-zinc-200">// COLD DESK CHANNEL INQUIRY FORM</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1.5 font-bold tracking-wider">Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Abdullah"
                  className="w-full bg-zinc-100 border border-zinc-200 rounded-sm px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1.5 font-bold tracking-wider">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. abdullah@gmail.com"
                  className="w-full bg-zinc-100 border border-zinc-200 rounded-sm px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1.5 font-bold tracking-wider">Phone</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. +971 54 304 3515"
                className="w-full bg-zinc-100 border border-zinc-200 rounded-sm px-3.5 py-2.5 text-xs text-zinc-900 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1.5 font-bold tracking-wider">Message</label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Details of your cargo routing inquiries..."
                className="w-full bg-zinc-100 border border-zinc-200 rounded-sm p-3.5 text-xs text-zinc-900 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-brand-blue hover:bg-brand-blue-hover font-mono text-xs font-bold text-white uppercase tracking-widest cursor-pointer transition-colors rounded-sm shadow-xs"
            >
              Send Inquiry
            </button>

            {alertSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-zinc-50 border border-green-500/40 text-green-600 font-mono text-xs rounded-sm mt-3 shadow-xs"
              >
                ✓ SUCCESS: Your inquiry has been sent! A bilingually fluent Netex Freight coordinator will contact you shortly.
              </motion.div>
            )}
          </form>
        </motion.div>

      </div>
    </section>
  );
}
