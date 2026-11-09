export const COMPANY_INFO = {
  name: "AquaFlow Plumbing",
  tagline: "Reliable Plumbing. Honest Pricing. Quality Work.",
  shortDescription: "Delivering dependable residential and commercial plumbing services with transparent pricing and master workmanship.",
  phone: "+91 98765 43210",
  phoneRaw: "+919876543210",
  whatsappNumber: "919876543210",
  whatsappMessage: "Hello AquaFlow Plumbing, I would like to know more about your plumbing services.",
  email: "support@aquaflowplumbing.demo",
  address: "42 Waterworks Avenue, Central District, Metro 400001",
  operatingHours: "24/7 Emergency Service | Mon - Sat: 8:00 AM - 8:00 PM",
  licenseNumber: "LIC #PLMB-98214-DEMO",
  emergencyResponseTime: "Under 45 Minutes",
  satisfactionGuarantee: "100% Workmanship Guarantee",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Pricing", href: "#pricing" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service Areas", href: "#service-areas" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#quote" },
];

export const TRUST_STATS = [
  {
    value: "10+",
    label: "Years of Experience",
    description: "Serving local homes & businesses with trusted craft",
  },
  {
    value: "500+",
    label: "Happy Customers",
    description: "Consistent 5-star ratings across local communities",
  },
  {
    value: "24/7",
    label: "Emergency Support",
    description: "Rapid on-call response for burst pipes & urgent leaks",
  },
  {
    value: "100%",
    label: "Quality Commitment",
    description: "Warranted parts and certified expert plumbers",
  },
];

export interface PlumbingService {
  id: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  iconName: string;
  features: string[];
  popularFor: string;
  badge?: string;
}

export const SERVICES: PlumbingService[] = [
  {
    id: "emergency-plumbing",
    title: "Emergency Plumbing",
    shortDesc: "Fast response for urgent plumbing issues: leaks, burst pipes, and unexpected breakdowns.",
    detailedDesc: "Plumbing emergencies can strike anytime. Our rapid dispatch technicians arrive fully equipped to contain flood risks, repair ruptured supply lines, and restore safe water flow.",
    iconName: "Flame",
    features: [
      "Rapid dispatch under 45 minutes",
      "Burst pipe containment & isolation",
      "24/7 emergency water shut-off support",
      "No inflated midnight surcharge",
    ],
    popularFor: "Burst lines, severe flooding, sudden fixture blowout",
    badge: "24/7 Rapid Response",
  },
  {
    id: "leak-detection",
    title: "Leak Detection & Repair",
    shortDesc: "Identify and repair hidden and visible water leaks before they cause structural damage.",
    detailedDesc: "Using non-invasive acoustic and thermal imaging equipment, we pinpoint hidden leaks behind walls, under concrete slabs, and along underground supply lines without destructive tearing.",
    iconName: "SearchCheck",
    features: [
      "Non-invasive acoustic & thermal diagnostics",
      "Slab leak & concealed pipe detection",
      "Immediate precision point repairs",
      "Moisture level verification report",
    ],
    popularFor: "Damp walls, spinning water meters, mystery water bills",
  },
  {
    id: "drain-cleaning",
    title: "Drain Cleaning",
    shortDesc: "Clear blocked drains, sinks, showers, and main sewage pipelines with heavy-duty clearing tools.",
    detailedDesc: "Stubborn clogs, soap scum, tree root intrusion, and grease buildup are thoroughly eliminated with motorized snake augers and high-pressure hydro jetting for long-lasting flow.",
    iconName: "Wrench",
    features: [
      "Motorized auger & hydro-jetting",
      "Camera pipe inspection before & after",
      "Complete grease & root eradication",
      "Safe on PVC, copper, and cast iron pipes",
    ],
    popularFor: "Slow sink drainage, toilet backflow, foul odors",
  },
  {
    id: "bathroom-plumbing",
    title: "Bathroom Plumbing",
    shortDesc: "Complete installation and repair of faucets, showers, toilets, and modern bathroom fixtures.",
    detailedDesc: "From luxury rainfall shower installations and dual-flush toilet replacements to repairing persistent faucet drips, we ensure seamless water pressure and elegant finishing.",
    iconName: "Bath",
    features: [
      "Toilet replacement & wax ring sealing",
      "Faucet, mixer, and shower valve installation",
      "Vanity piping and drain trap alignments",
      "Water pressure balancing & regulation",
    ],
    popularFor: "Bathroom renovations, running toilets, low pressure",
  },
  {
    id: "pipe-installation",
    title: "Pipe Installation & Repair",
    shortDesc: "Professional pipe replacement, whole-house repiping, and durable copper or CPVC installations.",
    detailedDesc: "Whether upgrading brittle galvanized iron pipes to corrosion-free CPVC/PEX or fixing localized corrosion, our master plumbers deliver clean, certified, and pressure-tested plumbing lines.",
    iconName: "Pipette",
    features: [
      "PEX, CPVC, and copper pipe replacements",
      "Whole-structure repiping specialists",
      "Anti-freeze & thermal insulation wrapping",
      "Hydrostatic pressure testing certification",
    ],
    popularFor: "Rusty tap water, low system pressure, aging piping",
  },
  {
    id: "water-heater",
    title: "Water Heater Services",
    shortDesc: "Instant geyser and storage water heater installation, maintenance, descaling, and repairs.",
    detailedDesc: "Never run out of hot water again. We service gas, electric, and instant water heaters—handling thermostat replacements, heating element repairs, tank flushes, and new unit setups.",
    iconName: "ThermometerSun",
    features: [
      "Tankless & storage water heater maintenance",
      "Heating element & thermostat replacement",
      "Sediment descaling & tank flushing",
      "Energy-efficient heating consultations",
    ],
    popularFor: "No hot water, leaking heater tanks, noisy boilers",
  },
];

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  badge?: string;
  popular?: boolean;
  features: string[];
  idealFor: string;
  ctaText: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "basic-inspection",
    name: "Basic Inspection",
    price: 499,
    period: "per visit",
    description: "A fast, comprehensive diagnostic checkup to diagnose issues and provide transparent cost estimates.",
    features: [
      "General plumbing inspection",
      "Basic issue assessment & diagnosis",
      "Transparent service recommendations",
      "Standard scheduling (same or next day)",
      "Inspection fee waived if repair is approved",
    ],
    idealFor: "Minor leaks, pre-purchase checks, or troubleshooting strange noises",
    ctaText: "Book Basic Inspection",
  },
  {
    id: "standard-repair",
    name: "Standard Repair",
    price: 1499,
    period: "starting from",
    description: "Our most requested solution for common domestic plumbing repairs, clogs, and fixture maintenance.",
    popular: true,
    badge: "Most Popular",
    features: [
      "General plumbing repair labor included",
      "Minor leak repairs & joint resealing",
      "Basic fixture adjustments & gasket replacement",
      "Priority scheduling within 2 hours",
      "30-day workmanship warranty included",
    ],
    idealFor: "Dripping taps, running toilets, clogged sinks, and valve leaks",
    ctaText: "Book Standard Repair",
  },
  {
    id: "premium-plumbing",
    name: "Premium Plumbing",
    price: 2999,
    period: "starting from",
    description: "Complete full-service overhaul for complex plumbing challenges, multi-point repairs, and maintenance.",
    features: [
      "Comprehensive whole-home plumbing inspection",
      "Multiple minor repairs in single visit",
      "Full fixture maintenance & descaling",
      "Priority appointment support & VIP slotting",
      "90-day comprehensive service warranty",
      "Complimentary water pressure calibration",
    ],
    idealFor: "Older properties, multi-room repairs, and comprehensive tune-ups",
    ctaText: "Book Premium Service",
  },
];

export const WHY_CHOOSE_US_BENEFITS = [
  {
    title: "Experienced Professionals",
    description: "Certified, background-verified plumbers with 10+ years of hands-on expertise solving domestic and industrial plumbing systems.",
  },
  {
    title: "Upfront & Transparent Pricing",
    description: "Zero surprise fees. You receive a clear, itemized quote before any wrench touches your pipe, so you remain in complete control.",
  },
  {
    title: "On-Time Service Guarantee",
    description: "We value your schedule. Our technicians arrive within the designated time window and alert you 15 minutes before arrival.",
  },
  {
    title: "Quality Workmanship",
    description: "We use only premium, commercial-grade fittings, pipes, and sealants backed by our ironclad warranty on both labor and materials.",
  },
  {
    title: "Customer-First Approach",
    description: "Clean boot covers, protective mats, and spotless clean-up after the job. We leave your bathroom and kitchen cleaner than we found it.",
  },
  {
    title: "Reliable Support & Follow-up",
    description: "Our dedicated support desk is available around the clock to answer post-service questions and honor all warranty commitments.",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Request a Service",
    description: "Tell us what plumbing assistance you need via our simple online booking form or a quick direct phone call.",
    iconName: "ClipboardList",
  },
  {
    step: "02",
    title: "Get a Quote",
    description: "Our team reviews your requirements and provides an upfront estimate with honest pricing and clear timelines.",
    iconName: "FileCheck",
  },
  {
    step: "03",
    title: "Get It Fixed",
    description: "Our certified professionals arrive on time, execute the repair with master care, and verify complete water safety.",
    iconName: "ShieldCheck",
  },
];

export const TESTIMONIALS = [
  {
    id: "test-1",
    name: "Rajesh Kulkarni",
    role: "Homeowner",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    service: "Emergency Plumbing",
    date: "2 days ago",
    comment: "A pipe burst behind our kitchen cabinet at 10 PM. AquaFlow arrived in less than 40 minutes, contained the flood, and fixed the line cleanly. No hidden fees or inflated emergency rates. Outstanding service!",
  },
  {
    id: "test-2",
    name: "Priya Sharma",
    role: "Property Manager",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    service: "Drain Cleaning & Inspection",
    date: "1 week ago",
    comment: "We manage multiple residential apartments in Downtown. AquaFlow handled severe drain blockages that other plumbers couldn't solve. Transparent quotes, courteous plumbers, and spotlessly clean work.",
  },
  {
    id: "test-3",
    name: "Vikram Malhotra",
    role: "Villa Resident",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    service: "Water Heater & Bathroom Plumbing",
    date: "2 weeks ago",
    comment: "Replaced our old geyser and upgraded two bathroom shower mixers. The technician was polite, explained the warranty thoroughly, and finished ahead of time. Truly the most professional plumbing service in town.",
  },
];

export const SERVICE_AREAS = [
  { name: "Downtown", zip: "400001", activeTeams: "3 Teams On Call", landmark: "Metro Central Plaza" },
  { name: "Northside", zip: "400012", activeTeams: "2 Teams On Call", landmark: "Highland Greens" },
  { name: "West End", zip: "400028", activeTeams: "3 Teams On Call", landmark: "Ocean Park Boulevard" },
  { name: "Riverside", zip: "400035", activeTeams: "2 Teams On Call", landmark: "Riverbank Enclave" },
  { name: "Greenfield", zip: "400049", activeTeams: "2 Teams On Call", landmark: "Botanical Heights" },
  { name: "Central District", zip: "400055", activeTeams: "4 Teams On Call", landmark: "Civic Center Hub" },
];

export const FAQS = [
  {
    question: "Do you provide emergency plumbing services?",
    answer: "Yes, absolutely! We provide 24/7 rapid emergency plumbing services for critical situations such as burst water pipes, major flooding, sewer line backups, and sudden loss of water supply. Our emergency teams are strategically stationed across service zones to arrive in under 45 minutes.",
  },
  {
    question: "How much does a plumbing service cost?",
    answer: "Our diagnostic inspections begin at ₹499. For repairs, we provide an upfront, transparent estimate before any work commences—standard repairs typically begin at ₹1,499. If you approve our recommended repair during the inspection, the initial inspection charge is credited directly toward your service bill.",
  },
  {
    question: "Do you offer residential and commercial services?",
    answer: "Yes, we cater to both individual residential homeowners/tenants as well as commercial clients including restaurants, offices, retail spaces, and multi-unit residential apartment complexes. We handle everything from single-faucet fixes to full-building drainage line overhauls.",
  },
  {
    question: "Can I request a free estimate?",
    answer: "Yes! You can fill out our online 'Request a Free Quote' form with photos or details of your plumbing issue, and our team will review the specifications and provide an honest estimate. For complex jobs requiring on-site diagnostic testing, we offer transparent diagnostic visits.",
  },
  {
    question: "Which areas do you serve?",
    answer: "We currently provide comprehensive coverage across Downtown, Northside, West End, Riverside, Greenfield, and Central District. If you are located in adjacent sectors, feel free to give us a call to check immediate technician dispatch availability.",
  },
  {
    question: "How can I book a plumbing service?",
    answer: "Booking is effortless! You can use our online 'Book a Service' interactive appointment scheduler on this page, call our direct hotline at +91 98765 43210, or send us a quick message via WhatsApp for immediate assistance.",
  },
];

