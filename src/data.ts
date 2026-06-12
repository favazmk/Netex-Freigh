import { ServiceItem, SpecCategory, RouteOption } from './types.ts';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'air-freight',
    title: 'Air Freight',
    icon: 'Plane',
    shortDesc: 'Fast, secure, and reliable air freight services for urgent and time-sensitive cargo worldwide.',
    longDesc: 'Our Air Freight division is custom-engineered to handle precious, time-critical, and highly sensitive goods. By leveraging key commercial gateways and direct air carrier relationships, we provide rapid transits with guaranteed space allocations.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80',
    bulletPoints: [
      'Express & Next-Flight-Out (NFO) solutions',
      'Temperature-controlled container shipping (active and passive)',
      'Global network of primary and regional airport hubs',
      'Comprehensive airport-to-door transit management',
      'Dangerous goods, oversized machinery, and high-value cargo handling'
    ]
  },
  {
    id: 'sea-freight',
    title: 'Sea Freight',
    icon: 'Ship',
    shortDesc: 'Cost-effective global ocean freight solutions including both FCL and LCL container services.',
    longDesc: 'As the bedrock of international trade, our Sea Freight services provide cost-effective scheduling, dependable slot allocations, and seamless cargo handling on all prominent global shipping lanes.',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=80',
    bulletPoints: [
      'Full Container Load (FCL) with contract carrier rates',
      'Less Than Container Load (LCL) consolidation services',
      'Reefer (refrigerated) container operations for perishables',
      'Break Bulk and Roll-on/Roll-off (RoRo) vessels',
      'Intermodal ocean-to-rail and ocean-to-road services'
    ]
  },
  {
    id: 'land-freight',
    title: 'Land Freight',
    icon: 'Truck',
    shortDesc: 'Dependable land transportation services across the UAE, GCC countries, and international highways.',
    longDesc: 'Boasting a robust fleet of GPS-tracked, modern, heavy-duty trailers and express delivery vehicles, our Land Freight service bridges major industrial corridors across the UAE and GCC borders.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
    bulletPoints: [
      'Less Than Truckload (LTL) and Full Truckload (FTL) services',
      'GCC-wide cross-border transportation with customs clearance',
      'GPS-tracked heavy-haul fleets with 24/7 telematics monitoring',
      'Curtainside high-volume trailers (110m³ volume standard)',
      'Multi-driver express land transport for fast domestic transits'
    ]
  },
  {
    id: 'packing-solutions',
    title: 'Packing Solutions',
    icon: 'Package',
    shortDesc: 'High-quality, secure packaging methods designed to protect sensitive cargo during transit.',
    longDesc: 'From heavy-duty industrial wooden crating to delicate retail shock-absorptive buffering, our professional packing services ensure maximum safety, preventing drop and vibration damage.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    bulletPoints: [
      'On-site industrial wood crating and vacuum sealing',
      'ESD anti-static packaging for sophisticated technology',
      'Hazardous material certified compliance boxing',
      'Palletization, shrink wrapping, and load reinforcing',
      'Moisture, shock, and tilt tracking indicator installations'
    ]
  },
  {
    id: 'customs-clearance',
    title: 'Customs Clearance',
    icon: 'FileText',
    shortDesc: 'Smooth and hassle-free import/export customs clearance handled by expert brokers.',
    longDesc: 'We navigate complex local and international customs tariffs and regulations. Our experienced clearance brokers expedite imports and exports through UAE ports easily, minimizing duty obligations.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    bulletPoints: [
      'Pre-shipment documentation audit and cargo classification',
      'Harmonized System (HS) code assignment optimization',
      'Duty exemption processing for industrial and raw elements',
      'Customs bond filing and cargo release management',
      'Rapid air-cargo or free-zone clearance specialists'
    ]
  },
  {
    id: 'warehousing',
    title: 'Warehousing & Supply Chain',
    icon: 'Database',
    shortDesc: 'Secure, modern inventory warehousing and complete supply chain distribution hubs.',
    longDesc: 'Operate your logistics layout through our secure, temperature-monitored warehouse facilities located strategically within primary transport junctions in Dubai, UAE.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    bulletPoints: [
      'Ambient, chilled, and frozen storage sections available',
      'WMS inventory management with real-time tracking access',
      'Cross-docking and container de-consolidation actions',
      'Value-added barcoding, labeling, and retail repackaging',
      '24/7 security forces and high-definition CCTV coverage'
    ]
  },
  {
    id: 'project-cargo',
    title: 'Break Bulk & Project Cargo',
    icon: 'Anchor',
    shortDesc: 'Professional engineering logistics for out-of-gauge heavy machinery and industrial loads.',
    longDesc: 'When cargo exceeds standard shapes and standard parameters, our special engineering department designs logistics pathways, secures special equipment, and handles the crane crane maneuvers.',
    image: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=1200&q=80',
    bulletPoints: [
      'Heavy-lift crane cargo handling surveys',
      'Out-Of-Gauge (OOG) container slots booking',
      'Chartering of multi-purpose and breakbulk ocean liners',
      'Industrial relocation and assembly engineering services',
      'Route clearance analysis, escort planning, and multi-modal transfers'
    ]
  }
];

export const SPEC_CATEGORIES: SpecCategory[] = [
  {
    id: 'heavy-truck',
    name: 'Euro-Mega Curtainside Truck',
    subtitle: 'High Capacity Road Freight',
    capacityTonnes: 24,
    capacityVolM3: 110,
    illustrationType: 'truck',
    dimensions: {
      length: '13.6 m',
      width: '2.48 m',
      height: '3.0 m'
    },
    advantages: [
      {
        title: 'VERSATILITY & SPEED',
        description: 'Optimized for quick domestic and border transits. Equipped to load boxed raw materials or fragile packed parcels with equal flexibility.'
      },
      {
        title: 'SIMPLIFIED LOADING & UNLOADING',
        description: 'Features a sliding canopy and custom canvas curtains that open completely on three sides, reducing heavy forklift wait times. '
      },
      {
        title: 'CARGO PROTECTION & SEALING',
        description: 'Protected by a premium water-repellent, tear-proof heavy PVC tarpaulin. Sealed with custom structural locks to prevent cargo theft.'
      },
      {
        title: 'COST EFFECTIVENESS',
        description: 'The standard of GCC highway transits, ensuring cheap cargo consolidations with direct point-to-point road schedules.'
      }
    ]
  },
  {
    id: 'shipping-container',
    name: '40ft High Cube Container',
    subtitle: 'Intermodal Ocean Freight Standard',
    capacityTonnes: 28.5,
    capacityVolM3: 76.4,
    illustrationType: 'container',
    dimensions: {
      length: '12.03 m',
      width: '2.35 m',
      height: '2.69 m'
    },
    advantages: [
      {
        title: 'WEATHER & SEAL PROTECTION',
        description: 'Constructed from heavy Corten steel with absolute water-tight structural seals. Engineered to withstand heavy salt spray and tropical humidity.'
      },
      {
        title: 'EASY STORAGE & SEAMLESS INTERMODAL TRANSIT',
        description: 'The standard size of global sea cargo. Can be transferred effortlessly from ship to rail or directly onto custom road chassis in seconds.'
      },
      {
        title: 'CARGO PROTECTION',
        description: 'Can be high-security locked and officially customs-sealed at origin. It remains closed until it is inspected at the destination hub.'
      },
      {
        title: 'ENVIRONMENTAL & SCALE ADVANTAGES',
        description: 'Enables massive bulk shipping with a footprint that is about 15 times cleaner and more resource friendly than aviation transport models.'
      }
    ]
  },
  {
    id: 'car-transporter',
    name: 'Enclosed Multi-Car Carrier',
    subtitle: 'Premium Automotive Supply Carrier',
    capacityTonnes: 18,
    capacityVolM3: 120,
    illustrationType: 'car-transporter',
    dimensions: {
      length: '18.75 m',
      width: '2.55 m',
      height: '4.0 m'
    },
    advantages: [
      {
        title: 'AUTOMOTIVE-SAFE DESIGN',
        description: 'Equipped with custom hydraulic ramps, dual-deck layouts, and precision wheel-strap harness tie-downs, preventing vehicle movement.'
      },
      {
        title: 'WEATHER & DEBRIS ISOLATION',
        description: 'An elegant hard-sided enclosure blocks road rocks, dust storms, moisture, and road tar from touching premium luxury sports cars.'
      },
      {
        title: 'EASY HYDRAULIC RECOVERY',
        description: 'Precision automated rear gate lift and multi-level deck lifting systems enable the safe roll-on/roll-off of low-clearance hypercars.'
      }
    ]
  }
];

export const ROUTE_HUBS: RouteOption[] = [
  { code: 'DXB', city: 'Dubai', country: 'United Arab Emirates', hub: 'Netex FZE Corporate HQ & Free Zone' },
  { code: 'RTM', city: 'Rotterdam', country: 'Netherlands', hub: 'Port of Rotterdam Terminals' },
  { code: 'SIN', city: 'Singapore', country: 'Singapore', hub: 'PSA Singapore Terminal Hub' },
  { code: 'PVG', city: 'Shanghai', country: 'China', hub: 'Shanghai Pudong Logistics Cargo Yard' },
  { code: 'LHR', city: 'London', country: 'United Kingdom', hub: 'Heathrow Cargo Logistics Hub' },
  { code: 'JFK', city: 'New York', country: 'United States', hub: 'JFK Cargo Terminal Area' },
  { code: 'FRA', city: 'Frankfurt', country: 'Germany', hub: 'Frankfurt Airport Cargo Terminal' },
  { code: 'MUM', city: 'Mumbai', country: 'India', hub: 'JNPT Port Terminal Yard' },
  { code: 'RUH', city: 'Riyadh', country: 'Saudi Arabia', hub: 'Riyadh Dry Port & Warehouse Terminal' }
];

export const WHY_CHOOSE_US_DATA = [
  {
    title: 'Reliable Logistics Partner',
    icon: 'Shield',
    desc: 'We provide dependable cargo transport services with direct accountability.',
    bullets: ['✓ Professional handling', '✓ Timely delivery']
  },
  {
    title: 'Global Freight Network',
    icon: 'Globe',
    desc: 'Strong international connections across primary sea shipping and air freight paths.',
    bullets: ['✓ Worldwide connections', '✓ International reach']
  },
  {
    title: 'Competitive Pricing',
    icon: 'TrendingDown',
    desc: 'Cost-effective consolidated operations (LTL/LCL) matching high-speed criteria.',
    bullets: ['✓ Cost-effective solutions', '✓ Direct fair tariffs']
  },
  {
    title: 'Experienced Team',
    icon: 'Users',
    desc: 'A committed team of certified logistics experts and experienced customs brokers.',
    bullets: ['✓ Dedicated logistics experts', '✓ 24/7 dispatch desk']
  }
];

export const SERVICE_PROCESS_DATA = [
  {
    step: '01',
    title: 'Request a Quote',
    desc: 'Submit your cargo dimensions through our rate estimator or contact our desks. We analyze parameters instantly.'
  },
  {
    step: '02',
    title: 'Cargo Assessment & Documentation',
    desc: 'Verify container compliance, HS classification codes, customs documentation, and duty exemption certificates.'
  },
  {
    step: '03',
    title: 'Packing & Preparation',
    desc: 'Secure shrink-wrap packaging, temperature stabilization, and expert crating carried out by terminal workers.'
  },
  {
    step: '04',
    title: 'Transportation',
    desc: 'Smooth transit execution across chosen premium channels (air, ocean vessels, or regional GCC highways).'
  },
  {
    step: '05',
    title: 'Delivery',
    desc: 'Efficient drop-off at target terminal docks or coordinate complete door-to-door cargo final landing.'
  }
];
