// // export type PortfolioCategory =
// //     | "All"
// //     | "Website"
// //     | "Logo"
// //     | "Video"
// //     | "Branding"
// //     | "Social Media"
// //     | "UI/UX"
// //     | "Motion";

// // export interface PortfolioItem {
// //     id: number;
// //     title: string;
// //     category: PortfolioCategory;
// //     client: string;
// //     image: string;
// //     tags: string[];
// //     featured?: boolean;
// // }

// // import website1 from "../assets/images/portfolio/websites/website-1.jpg";
// // import website2 from "../assets/images/portfolio/websites/website-2.jpg";

// // import logo1 from "../assets/images/portfolio/logos/logo-1.jpg";
// // import logo2 from "../assets/images/portfolio/logos/logo-2.jpg";

// // import video1 from "../assets/images/portfolio/videos/video-1.jpg";
// // import video2 from "../assets/images/portfolio/videos/video-2.jpg";

// // export const portfolioItems: PortfolioItem[] = [
// //     {
// //         id: 1,
// //         title: "Restaurant Website",
// //         category: "Website",
// //         client: "Urban Grill",
// //         image: website1,
// //         tags: ["React", "SEO", "Booking"],
// //         featured: true,
// //     },
// //     {
// //         id: 2,
// //         title: "Corporate Website",
// //         category: "Website",
// //         client: "SkyTech",
// //         image: website2,
// //         tags: ["React", "Node", "CMS"],
// //     },
// //     {
// //         id: 3,
// //         title: "Luxury Brand Logo",
// //         category: "Logo",
// //         client: "Royal Studio",
// //         image: logo1,
// //         tags: ["Brand Identity"],
// //     },
// //     {
// //         id: 4,
// //         title: "Coffee Brand",
// //         category: "Logo",
// //         client: "Coffee House",
// //         image: logo2,
// //         tags: ["Minimal"],
// //     },
// //     {
// //         id: 5,
// //         title: "Instagram Ad",
// //         category: "Video",
// //         client: "FitZone",
// //         image: video1,
// //         tags: ["Reel", "Motion"],
// //     },
// //     {
// //         id: 6,
// //         title: "Product Commercial",
// //         category: "Video",
// //         client: "TechHub",
// //         image: video2,
// //         tags: ["Commercial"],
// //     },
// // ];

// export type PortfolioCategory =
//   | "Websites"
//   | "Logos"
//   | "Reels & Videos"
//   | "Social Media"
//   | "E-commerce";

// export interface PortfolioProject {
//   id: number;
//   category: PortfolioCategory;
//   client: string;
//   title: string;
//   description: string;
//   gradient: string;
//   stats: string[];
//   technologies: string[];
// }

// export const portfolioProjects: PortfolioProject[] = [
//   {
//     id: 1,
//     category: "Websites",
//     client: "TECHFLOW",
//     title: "SaaS Business Platform",
//     description:
//       "Modern SaaS website designed to communicate complex technology through a clean, conversion-focused experience.",
//     gradient: "linear-gradient(135deg, #4f46e5 0%, #6d28d9 100%)",
//     stats: [
//       "185% increase in qualified leads",
//       "3.2x higher engagement",
//       "42% lower bounce rate",
//     ],
//     technologies: ["React", "UI/UX", "SEO"],
//   },
//   {
//     id: 2,
//     category: "Websites",
//     client: "URBANSPACE",
//     title: "Real Estate Website",
//     description:
//       "Premium real-estate platform with property discovery, lead generation and a polished visual experience.",
//     gradient: "linear-gradient(135deg, #4778d8 0%, #3f82d6 100%)",
//     stats: [
//       "120% increase in inquiries",
//       "68% more website engagement",
//       "2.8x lead generation",
//     ],
//     technologies: ["React", "CMS", "SEO"],
//   },
//   {
//     id: 3,
//     category: "Websites",
//     client: "EDUTECH",
//     title: "Education Platform",
//     description:
//       "Conversion-focused education website built to simplify course discovery and student registrations.",
//     gradient: "linear-gradient(135deg, #ec4899 0%, #7c3aed 100%)",
//     stats: [
//       "95% increase in registrations",
//       "2.4x session duration",
//       "51% increase in conversions",
//     ],
//     technologies: ["React", "UX Strategy", "Analytics"],
//   },

//   {
//     id: 4,
//     category: "Logos",
//     client: "NEXORA",
//     title: "Brand Identity System",
//     description:
//       "Complete visual identity designed around a bold, memorable and technology-focused brand personality.",
//     gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
//     stats: [
//       "Complete brand identity",
//       "12+ brand assets",
//       "Consistent visual system",
//     ],
//     technologies: ["Branding", "Logo Design", "Visual Identity"],
//   },
//   {
//     id: 5,
//     category: "Logos",
//     client: "ORBIT",
//     title: "Startup Logo Design",
//     description:
//       "Minimal and scalable logo identity created for a fast-growing technology startup.",
//     gradient: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
//     stats: [
//       "3 identity concepts",
//       "25+ logo variations",
//       "Complete brand guidelines",
//     ],
//     technologies: ["Logo Design", "Branding", "Guidelines"],
//   },

//   {
//     id: 6,
//     category: "Reels & Videos",
//     client: "GROWTHLAB",
//     title: "Social Video Campaign",
//     description:
//       "High-retention short-form video campaign created to improve reach, engagement and brand awareness.",
//     gradient: "linear-gradient(135deg, #f97316 0%, #ec4899 100%)",
//     stats: [
//       "2.5M+ total views",
//       "320K+ engagements",
//       "8.7% average engagement",
//     ],
//     technologies: ["Reels", "Video Editing", "Motion"],
//   },
//   {
//     id: 7,
//     category: "Reels & Videos",
//     client: "FITSYNC",
//     title: "Fitness Content Series",
//     description:
//       "Energetic short-form video series designed around product awareness and audience growth.",
//     gradient: "linear-gradient(135deg, #ef4444 0%, #f97316 100%)",
//     stats: [
//       "1.8M+ views",
//       "140K+ interactions",
//       "3.5x content reach",
//     ],
//     technologies: ["Video", "Reels", "Content Strategy"],
//   },

//   {
//     id: 8,
//     category: "Social Media",
//     client: "LUMINA",
//     title: "Social Media Growth",
//     description:
//       "Full social media strategy combining creative content, campaign planning and audience engagement.",
//     gradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
//     stats: [
//       "210% follower growth",
//       "4.2x engagement rate",
//       "68% reach increase",
//     ],
//     technologies: ["Instagram", "Strategy", "Content"],
//   },
//   {
//     id: 9,
//     category: "Social Media",
//     client: "URBAN BITES",
//     title: "Restaurant Campaign",
//     description:
//       "Creative social media campaign designed to increase local awareness and customer visits.",
//     gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
//     stats: [
//       "185% reach increase",
//       "94K+ campaign views",
//       "3.1x engagement",
//     ],
//     technologies: ["Social Media", "Campaigns", "Creative"],
//   },

//   {
//     id: 10,
//     category: "E-commerce",
//     client: "CHRONOLITE",
//     title: "Luxury Watch Store",
//     description:
//       "Premium e-commerce website for luxury watches with 3D product views, detailed specifications, and secure checkout.",
//     gradient: "linear-gradient(135deg, #4f46e5 0%, #6d28d9 100%)",
//     stats: [
//       "₹50L monthly revenue",
//       "3.5% conversion rate",
//       "Average order value up 40%",
//     ],
//     technologies: ["Shopify", "3D Modeling", "Payment Gateway"],
//   },
//   {
//     id: 11,
//     category: "E-commerce",
//     client: "FARMPRESH DIRECT",
//     title: "Organic Food Marketplace",
//     description:
//       "Multi-vendor marketplace for organic food products with delivery tracking, subscription boxes, and vendor dashboard.",
//     gradient: "linear-gradient(135deg, #6478d8 0%, #438fd4 100%)",
//     stats: [
//       "200+ active vendors",
//       "₹2Cr GMV in first year",
//       "98% customer satisfaction",
//     ],
//     technologies: ["Custom Platform", "Logistics API", "Subscription Engine"],
//   },
//   {
//     id: 12,
//     category: "E-commerce",
//     client: "GLOWLAB COSMETICS",
//     title: "Beauty Products Store",
//     description:
//       "AR-powered beauty e-commerce site with virtual try-on, skin quiz, and personalized product recommendations.",
//     gradient: "linear-gradient(135deg, #bd6b86 0%, #5454cf 100%)",
//     stats: [
//       "60% increase in conversions",
//       "AR try-on used by 40% visitors",
//       "Repeat purchase rate: 55%",
//     ],
//     technologies: ["WooCommerce", "AR Integration", "AI Recommendations"],
//   },
// ];
export type PortfolioCategory =
  | "Websites"
  | "Logos"
  | "Reels & Videos"
  | "Social Media"
  | "E-commerce";

export interface PortfolioProject {
  id: number;
  category: PortfolioCategory;
  client: string;
  title: string;
  description: string;
  gradient: string;
  stats: string[];
  technologies: string[];
}

export interface PortfolioStat {
  value: string;
  label: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    category: "Websites",
    client: "TECHFLOW",
    title: "SaaS Business Platform",
    description:
      "Modern SaaS website designed to communicate complex technology through a clean, conversion-focused experience.",
    gradient:
      "linear-gradient(135deg, #4f46e5 0%, #6d28d9 100%)",
    stats: [
      "185% increase in qualified leads",
      "3.2x higher engagement",
      "42% lower bounce rate",
    ],
    technologies: ["React", "UI/UX", "SEO"],
  },

  {
    id: 2,
    category: "Websites",
    client: "URBANSPACE",
    title: "Real Estate Website",
    description:
      "Premium real-estate platform with property discovery, lead generation and a polished visual experience.",
    gradient:
      "linear-gradient(135deg, #4778d8 0%, #3f82d6 100%)",
    stats: [
      "120% increase in inquiries",
      "68% more website engagement",
      "2.8x lead generation",
    ],
    technologies: ["React", "CMS", "SEO"],
  },

  {
    id: 3,
    category: "Websites",
    client: "EDUTECH",
    title: "Education Platform",
    description:
      "Conversion-focused education website built to simplify course discovery and student registrations.",
    gradient:
      "linear-gradient(135deg, #ec4899 0%, #7c3aed 100%)",
    stats: [
      "95% increase in registrations",
      "2.4x session duration",
      "51% increase in conversions",
    ],
    technologies: ["React", "UX Strategy", "Analytics"],
  },

  {
    id: 4,
    category: "Logos",
    client: "NEXORA",
    title: "Brand Identity System",
    description:
      "Complete visual identity designed around a bold, memorable and technology-focused brand personality.",
    gradient:
      "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    stats: [
      "Complete brand identity",
      "12+ brand assets",
      "Consistent visual system",
    ],
    technologies: ["Branding", "Logo Design", "Visual Identity"],
  },

  {
    id: 5,
    category: "Logos",
    client: "ORBIT",
    title: "Startup Logo Design",
    description:
      "Minimal and scalable logo identity created for a fast-growing technology startup.",
    gradient:
      "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
    stats: [
      "3 identity concepts",
      "25+ logo variations",
      "Complete brand guidelines",
    ],
    technologies: ["Logo Design", "Branding", "Guidelines"],
  },

  {
    id: 6,
    category: "Reels & Videos",
    client: "GROWTHLAB",
    title: "Social Video Campaign",
    description:
      "High-retention short-form video campaign created to improve reach, engagement and brand awareness.",
    gradient:
      "linear-gradient(135deg, #f97316 0%, #ec4899 100%)",
    stats: [
      "2.5M+ total views",
      "320K+ engagements",
      "8.7% average engagement",
    ],
    technologies: ["Reels", "Video Editing", "Motion"],
  },

  {
    id: 7,
    category: "Reels & Videos",
    client: "FITSYNC",
    title: "Fitness Content Series",
    description:
      "Energetic short-form video series designed around product awareness and audience growth.",
    gradient:
      "linear-gradient(135deg, #ef4444 0%, #f97316 100%)",
    stats: [
      "1.8M+ views",
      "140K+ interactions",
      "3.5x content reach",
    ],
    technologies: ["Video", "Reels", "Content Strategy"],
  },

  {
    id: 8,
    category: "Social Media",
    client: "LUMINA",
    title: "Social Media Growth",
    description:
      "Full social media strategy combining creative content, campaign planning and audience engagement.",
    gradient:
      "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
    stats: [
      "210% follower growth",
      "4.2x engagement rate",
      "68% reach increase",
    ],
    technologies: ["Instagram", "Strategy", "Content"],
  },

  {
    id: 9,
    category: "Social Media",
    client: "URBAN BITES",
    title: "Restaurant Campaign",
    description:
      "Creative social media campaign designed to increase local awareness and customer visits.",
    gradient:
      "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    stats: [
      "185% reach increase",
      "94K+ campaign views",
      "3.1x engagement",
    ],
    technologies: ["Social Media", "Campaigns", "Creative"],
  },

  {
    id: 10,
    category: "E-commerce",
    client: "CHRONOLITE",
    title: "Luxury Watch Store",
    description:
      "Premium e-commerce website for luxury watches with 3D product views, detailed specifications, and secure checkout.",
    gradient:
      "linear-gradient(135deg, #4f46e5 0%, #6d28d9 100%)",
    stats: [
      "₹50L monthly revenue",
      "3.5% conversion rate",
      "Average order value up 40%",
    ],
    technologies: ["Shopify", "3D Modeling", "Payment Gateway"],
  },

  {
    id: 11,
    category: "E-commerce",
    client: "FARMPRESH DIRECT",
    title: "Organic Food Marketplace",
    description:
      "Multi-vendor marketplace for organic food products with delivery tracking, subscription boxes, and vendor dashboard.",
    gradient:
      "linear-gradient(135deg, #6478d8 0%, #438fd4 100%)",
    stats: [
      "200+ active vendors",
      "₹2Cr GMV in first year",
      "98% customer satisfaction",
    ],
    technologies: [
      "Custom Platform",
      "Logistics API",
      "Subscription Engine",
    ],
  },

  {
    id: 12,
    category: "E-commerce",
    client: "GLOWLAB COSMETICS",
    title: "Beauty Products Store",
    description:
      "AR-powered beauty e-commerce site with virtual try-on, skin quiz, and personalized product recommendations.",
    gradient:
      "linear-gradient(135deg, #bd6b86 0%, #5454cf 100%)",
    stats: [
      "60% increase in conversions",
      "AR try-on used by 40% visitors",
      "Repeat purchase rate: 55%",
    ],
    technologies: [
      "WooCommerce",
      "AR Integration",
      "AI Recommendations",
    ],
  },
];

export const portfolioStats: PortfolioStat[] = [
  {
    value: "150+",
    label: "Projects Delivered",
  },
  {
    value: "50M+",
    label: "Total Views Generated",
  },
  {
    value: "₹10Cr+",
    label: "Revenue Generated",
  },
  {
    value: "95%",
    label: "Client Satisfaction",
  },
];

export const portfolioCategories: PortfolioCategory[] = [
  "Websites",
  "Logos",
  "Reels & Videos",
  "Social Media",
  "E-commerce",
];