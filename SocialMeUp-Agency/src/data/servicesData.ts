import type { ElementType } from "react";

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  icon: string;
  path: string;
}

export const services: ServiceItem[] = [
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Our Internet advertising services help businesses reach their target audience and increase their online visibility. We offer customized digital marketing solutions, including search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, and email marketing.",
    icon: "bar-chart",
    path: "/services/digital-marketing",
  },

  {
    slug: "website-development",
    title: "Website Development",
    description:
      "Our software development team specializes in creating high-quality web applications for businesses of all sizes. From front-end design to back-end development, we provide end-to-end web development services using the latest technologies and frameworks.",
    icon: "code",
    path: "/services/website-development",
  },

  {
    slug: "blue-tick-verification",
    title: "Blue Tick Verification",
    description:
      "Get your business verified on social media platforms to build trust and credibility with your audience.",
    icon: "check-circle",
    path: "/services/blue-tick-verification",
  },

  {
    slug: "outdoor-marketing",
    title: "Outdoor Marketing",
    description:
      "Our outdoor marketing services help businesses reach their target audience through billboards, signage, and other outdoor advertising methods. We create impactful campaigns that drive brand awareness and engagement.",
    icon: "monitor",
    path: "/services/outdoor-marketing",
  },

  {
    slug: "app-development",
    title: "App Development",
    description:
      "Custom mobile app development for iOS and Android platforms, ensuring a seamless user experience and robust functionality.",
    icon: "smartphone",
    path: "/services/app-development",
  },

  {
    slug: "business-digital-roadmap",
    title: "Business Digital Roadmap",
    description:
      "Develop a comprehensive digital strategy to drive business growth, improve operational efficiency, and enhance customer experience in the digital landscape.",
    icon: "briefcase",
    path: "/services/business-digital-roadmap",
  },

  {
    slug: "new-product-market-strategy",
    title: "New Product Market Strategy",
    description:
      "Strategic planning and execution for launching new products in the market, including market research, competitive analysis, and go-to-market strategies.",
    icon: "target",
    path: "/services/product-market-research",
  },

  {
    slug: "marketing-strategy",
    title: "Marketing Strategy",
    description:
      "Increase your online visibility through professional promotional videos, reels, ad creatives, product showcases, corporate videos and social media video campaigns.",
    icon: "video",
    path: "/services/marketing-strategy",
  },
];

export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServiceFeature {
  icon: ElementType;
  title: string;
  description: string;
}

export interface ServiceSection {
  title: string;
  highlight?: string;
  text?: string;
  bullets?: string[];
  image?: string;
}

export interface ServiceData {
  slug: string;
  breadcrumb: string;

  title: string;
  titleHighlight?: string;

  subtitle: string;
  description: string;

  heroImage: string;

  primaryButton: string;
  secondaryButton: string;

  stats: ServiceStat[];

  mainSection: ServiceSection;

  featuresTitle?: string;
  featuresSubtitle?: string;

  features: ServiceFeature[];

  secondarySection?: ServiceSection;

  processTitle?: string;
  processSubtitle?: string;

  processSteps?: ServiceFeature[];

  contactTitle: string;
  contactSubtitle: string;

  contactImage?: string;
}

const defaultStats: ServiceStat[] = [
  {
    value: "500+",
    label: "Projects Delivered",
  },
  {
    value: "50+",
    label: "Active Clients",
  },
  {
    value: "5+",
    label: "Years of Experience",
  },
  {
    value: "99%",
    label: "Client Satisfaction",
  },
];


export const servicesData: Record<string, ServiceData> = {
  /* DIGITAL MARKETING */

  digitalMarketing: {
    slug: "digital-marketing",
    breadcrumb: "Digital Marketing",

    title: "Digital",
    titleHighlight: "Marketing",

    subtitle: "Create your presence online",

    description:
      "The world of digital marketing, is waiting for you! Internet is the new playground of marketing where the market is everywhere. It is cheaper than traditional marketing, easier to target and reaches a larger audience. From the art of products and services to maintain its brand presence among the target and potential audience.",

    heroImage:
      "/assets/services/digital-marketing/digital-marketing-hero.png",

    primaryButton: "Get Started",
    secondaryButton: "Talk to Expert",

    stats: defaultStats,

    mainSection: {
      title: "Make your business",
      highlight: "Digital-friendly",

      text:
        "All your digital marketing troubles will fade away working with us! Digital marketing agency and social media agency today has become a prominent niche. Digital marketing has made it possible to reach potential clients/customers on different platforms such as Facebook, Instagram, Twitter and many more. With Facebook, Instagram, YouTube and social media marketing, reaching your target audience is easier than ever.",

      bullets: [
        "Digital marketing has made it possible to receive instant feedback from customers on different platforms such as Facebook, Instagram and Twitter.",

        "Provides several businesses a collaboration friendly environment for their growth and helps create new opportunities.",

        "Social media marketing is an important element of any digital marketing strategy.",

        "Digital marketing is a much more feasible choice than traditional marketing because of its wider reach and targeting capabilities.",
      ],
    },

    featuresTitle: "Our Digital Marketing Services",

    features: [
      {
        icon: "FiGlobe" as unknown as ElementType,
        title: "Digital Marketing",
        description:
          "Customized strategies designed to improve your online presence and business growth.",
      },

      {
        icon: "FiSearch" as unknown as ElementType,
        title: "Search Engine Optimization (SEO)",
        description:
          "Improve your website visibility and bring the right audience to your business.",
      },

      {
        icon: "FiGrid" as unknown as ElementType,
        title: "E-Commerce Development",
        description:
          "Build scalable and user-friendly online stores for your business.",
      },

      {
        icon: "FiTarget" as unknown as ElementType,
        title: "Lead Generation",
        description:
          "Generate qualified leads and improve your conversion opportunities.",
      },

      {
        icon: "FiTrendingUp" as unknown as ElementType,
        title: "Social Media Marketing",
        description:
          "Reach the right audience and improve engagement across social platforms.",
      },

      {
        icon: "FiBriefcase" as unknown as ElementType,
        title: "Business Consultancy",
        description:
          "Expert advice to help your business grow and improve digital performance.",
      },
    ],

    secondarySection: {
      title: "Why Digital Marketing?",

      text:
        "For Facebook Ads and other marketing tools, reaching the right audience has become possible. Businesses can communicate effectively with their audience, create stronger relationships and generate better results through digital channels.",
    },

    contactTitle: "Ready to Grow Your Business?",

    contactSubtitle:
      "Let's create a powerful digital presence that drives measurable results.",

    contactImage:
      "/assets/services/digital-marketing/digital-marketing-contact.png",
  },

  /* WEBSITE DEVELOPMENT */

  websiteDevelopment: {
    slug: "website-development",
    breadcrumb: "Website Development",

    title: "Website",
    titleHighlight: "Development",

    subtitle: "Custom websites that drive results",

    description:
      "Custom websites designed to enhance user experience and drive results for your business. We create modern, responsive and conversion-focused websites that represent your brand and help you grow online.",

    heroImage:
      "/assets/services/website-development/website-development-hero.png",

    primaryButton: "Get Started",
    secondaryButton: "View Portfolio",

    stats: defaultStats,

    mainSection: {
      title: "Design Your Website",
      highlight: "Attract, Engage and Convert Prospects",

      text:
        "The website of your business is the key to success. It tells the world what your business is all about. A website is the first step towards your digital presence. Your website can be a great tool that can build your brand identity, attract new customers, and generate leads.",

      image:
        "/assets/services/website-development/website-development-content.png",
    },

    featuresTitle: "Built for Performance",

    features: [
      {
        icon: "FiMonitor" as unknown as ElementType,
        title: "Responsive Design",
        description:
          "Optimized for every device and screen size.",
      },

      {
        icon: "FiSearch" as unknown as ElementType,
        title: "SEO Friendly",
        description:
          "Built with SEO best practices to help you rank higher.",
      },

      {
        icon: "FiTrendingUp" as unknown as ElementType,
        title: "Fast Performance",
        description:
          "Optimized for speed and better user experience.",
      },

      {
        icon: "FiShield" as unknown as ElementType,
        title: "Secure & Reliable",
        description:
          "Advanced security practices to protect your data.",
      },
    ],

    secondarySection: {
      title: "Concerned About",
      highlight: "Website Development?",

      text:
        "Let's create a website that drives real results. From planning and design to development and optimization, we make sure every part of your website supports your business goals.",
    },

    contactTitle: "Ready to Build Your Website?",

    contactSubtitle:
      "Let's create a modern website that represents your brand and converts visitors.",

    contactImage:
      "/assets/services/website-development/website-development-contact.png",
  },

  /* BLUE TICK VERIFICATION */

  blueTickVerification: {
    slug: "blue-tick-verification",
    breadcrumb: "Blue Tick Verification",

    title: "Blue Tick",
    titleHighlight: "Verification",

    subtitle: "The Verified Badge",

    description:
      "Having a blue tick next to your profile name or page on social media is a badge of authenticity that helps in building trust with your audience.",

    heroImage:
      "/assets/services/blue-tick-verification/blue-tick-hero.png",

    primaryButton: "Get Started",
    secondaryButton: "Learn More",

    stats: defaultStats,

    mainSection: {
      title: "Credibility & Trustworthiness",

      text:
        "The blue tick verification adds an extra layer of credibility and trustworthiness to your profile, which can help in building a strong relationship with your followers.",

      image:
        "/assets/services/blue-tick-verification/blue-tick-content.png",
    },

    featuresTitle: "Benefits of Blue Tick Verification",

    features: [
      {
        icon: "FiCheckCircle" as unknown as ElementType,
        title: "Enhanced Credibility",
        description:
          "Build trust and credibility with your audience.",
      },

      {
        icon: "FiUsers" as unknown as ElementType,
        title: "Increased Visibility",
        description:
          "Make your verified account easier to discover.",
      },

      {
        icon: "FiShield" as unknown as ElementType,
        title: "Impersonation Protection",
        description:
          "Protect your profile from fake accounts.",
      },

      {
        icon: "FiTrendingUp" as unknown as ElementType,
        title: "Better Engagement",
        description:
          "Increase follower trust and engagement.",
      },
    ],

    processTitle: "Verification We Offer",

    processSteps: [
      {
        icon: "FiUsers" as unknown as ElementType,
        title: "Facebook Blue Tick",
        description:
          "Verification support for Facebook profiles and pages.",
      },

      {
        icon: "FiGlobe" as unknown as ElementType,
        title: "Instagram Blue Tick",
        description:
          "Verification support for Instagram accounts.",
      },

      {
        icon: "FiCheckCircle" as unknown as ElementType,
        title: "Twitter / X Blue Tick",
        description:
          "Verification guidance for X profiles.",
      },

      {
        icon: "FiVideo" as unknown as ElementType,
        title: "YouTube Verification",
        description:
          "Verification support for YouTube channels.",
      },

      {
        icon: "FiLinkedin" as unknown as ElementType,
        title: "LinkedIn Verification",
        description:
          "Verification support for professional profiles.",
      },
    ],

    contactTitle: "Get Your Blue Tick Today!",

    contactSubtitle:
      "Stand out, build trust and strengthen your online presence.",

    contactImage:
      "/assets/services/blue-tick-verification/blue-tick-contact.png",
  },

  /* OUTDOOR MARKETING */

  outdoorMarketing: {
    slug: "outdoor-marketing",
    breadcrumb: "Outdoor Marketing",

    title: "Outdoor",
    titleHighlight: "Marketing",

    subtitle: "Make your brand visible everywhere.",

    description:
      "Outdoor marketing helps you reach a large audience in the real world with strategically placed advertising solutions that create lasting impressions.",

    heroImage:
      "/assets/services/outdoor-marketing/outdoor-marketing-hero.png",

    primaryButton: "Get Started",
    secondaryButton: "Learn More",

    stats: defaultStats,

    mainSection: {
      title: "Benefits of Outdoor Marketing",

      text:
        "Outdoor marketing allows businesses to connect with audiences in high-traffic locations and create strong, memorable brand impressions.",
    },

    featuresTitle: "Benefits of Outdoor Marketing",

    features: [
      {
        icon: "FiTarget" as unknown as ElementType,
        title: "High Visibility",
        description:
          "Get your brand noticed by a larger audience.",
      },

      {
        icon: "FiUsers" as unknown as ElementType,
        title: "Wide Audience Reach",
        description:
          "Reach people across high-traffic locations.",
      },

      {
        icon: "FiTrendingUp" as unknown as ElementType,
        title: "Cost Effective",
        description:
          "Build strong awareness with effective campaigns.",
      },

      {
        icon: "FiGlobe" as unknown as ElementType,
        title: "Long Lasting Impact",
        description:
          "Create memorable impressions for your brand.",
      },
    ],

    processTitle: "Types of Outdoor Marketing",

    processSteps: [
      {
        icon: "FiGrid" as unknown as ElementType,
        title: "Billboard & Hoarding",
        description:
          "Large-format outdoor advertising.",
      },

      {
        icon: "FiMonitor" as unknown as ElementType,
        title: "Transit Advertising",
        description:
          "Advertising across transportation networks.",
      },

      {
        icon: "FiLayers" as unknown as ElementType,
        title: "Multiplex Advertising",
        description:
          "Reach highly engaged entertainment audiences.",
      },

      {
        icon: "FiVideo" as unknown as ElementType,
        title: "Proc Media Advertising",
        description:
          "Creative media placements for your brand.",
      },

      {
        icon: "FiMonitor" as unknown as ElementType,
        title: "FM Radio Advertising",
        description:
          "Reach local audiences through radio.",
      },

      {
        icon: "FiGlobe" as unknown as ElementType,
        title: "TV Advertising",
        description:
          "Increase brand visibility through television.",
      },

      {
        icon: "FiTarget" as unknown as ElementType,
        title: "Content Match Advertising",
        description:
          "Target audiences with contextual placements.",
      },

      {
        icon: "FiBarChart2" as unknown as ElementType,
        title: "LED Advertising",
        description:
          "Dynamic digital outdoor advertising.",
      },

      {
        icon: "FiUsers" as unknown as ElementType,
        title: "Uplift Advertising",
        description:
          "High visibility promotional placements.",
      },

      {
        icon: "FiMap" as unknown as ElementType,
        title: "Tree Board Advertising",
        description:
          "Local outdoor advertising solutions.",
      },

      {
        icon: "FiGrid" as unknown as ElementType,
        title: "Quarterly Advertising",
        description:
          "Planned recurring outdoor campaigns.",
      },

      {
        icon: "FiGlobe" as unknown as ElementType,
        title: "BQS Advertising",
        description:
          "Strategic outdoor brand placements.",
      },
    ],

    contactTitle: "Boost Your Brand Visibility!",

    contactSubtitle:
      "Let's put your brand where your customers can see it.",

    contactImage:
      "/assets/services/outdoor-marketing/outdoor-marketing-contact.png",
  },

  /* APP DEVELOPMENT */

  appDevelopment: {
    slug: "app-development",
    breadcrumb: "App Development",

    title: "App",
    titleHighlight: "Development",

    subtitle: "Modern App Design Experts",

    description:
      "We build innovative, user-friendly and high-performance mobile applications that help your business grow.",

    heroImage:
      "/assets/services/app-development/app-development-hero.png",

    primaryButton: "Get Started",
    secondaryButton: "View Portfolio",

    stats: defaultStats,

    mainSection: {
      title: "Mobile App Development Company in Lucknow",

      text:
        "At SocialMeUp, we develop custom mobile apps for Android and iOS platforms that deliver seamless user experiences, functionality and business growth.",
    },

    featuresTitle: "Why Choose Our App Development?",

    features: [
      {
        icon: "FiGrid" as unknown as ElementType,
        title: "Custom Solutions",
        description:
          "Applications built around your business requirements.",
      },

      {
        icon: "FiUsers" as unknown as ElementType,
        title: "User Friendly Design",
        description:
          "Simple and engaging interfaces for your users.",
      },

      {
        icon: "FiSmartphone" as unknown as ElementType,
        title: "High Performance",
        description:
          "Fast, reliable and optimized mobile experiences.",
      },

      {
        icon: "FiShield" as unknown as ElementType,
        title: "Secure & Scalable",
        description:
          "Secure architecture built for future growth.",
      },
    ],

    secondarySection: {
      title: "Have an App Idea?",

      text:
        "Turn your idea into a powerful mobile application with a strategy focused on usability, performance and growth.",
    },

    contactTitle: "Let's Build Your App",

    contactSubtitle:
      "Bring your app idea to life with a powerful digital experience.",

    contactImage:
      "/assets/services/app-development/app-development-contact.png",
  },

  /* BUSINESS DIGITAL ROADMAP */

  businessDigitalRoadmap: {
    slug: "business-digital-roadmap",
    breadcrumb: "Business Digital Roadmap",

    title: "Business Digital",
    titleHighlight: "Roadmap",

    subtitle: "Navigating Your Path to Digital Success",

    description:
      "A digital roadmap is a strategic plan that outlines how your business will leverage digital technologies to achieve its goals.",

    heroImage:
      "/assets/services/business-digital-roadmap/business-roadmap-hero.png",

    primaryButton: "Get Started",
    secondaryButton: "Get Free Consultation",

    stats: defaultStats,

    mainSection: {
      title: "What is a Digital Roadmap?",

      text:
        "It is a step-by-step plan that helps your business move from traditional methods to digital strategies and achieve sustainable growth.",
    },

    featuresTitle: "How We Help Your Business",

    features: [
      {
        icon: "FiMap" as unknown as ElementType,
        title: "Why Your Business Needs It",
        description:
          "Identify opportunities, priorities and the right digital direction.",
      },

      {
        icon: "FiLayers" as unknown as ElementType,
        title: "How SocialMeUp Creates It",
        description:
          "We analyze your business, market and goals to create a customized roadmap.",
      },

      {
        icon: "FiTarget" as unknown as ElementType,
        title: "Start Your Journey Today!",
        description:
          "Transform your business from traditional methods to digital strategies.",
      },

      {
        icon: "FiTrendingUp" as unknown as ElementType,
        title: "Ready to Build Your Digital Future?",
        description:
          "Create a clear digital strategy designed around your business goals.",
      },
    ],

    contactTitle: "Ready to Build Your Digital Future?",

    contactSubtitle:
      "Let's create a clear roadmap for your business growth.",

    contactImage:
      "/assets/services/business-digital-roadmap/business-roadmap-contact.png",
  },

  /* PRODUCT MARKET RESEARCH */

  productMarketResearch: {
    slug: "product-market-research",
    breadcrumb: "New Product Market Research",

    title: "New Product",
    titleHighlight: "Market Research",

    subtitle: "Research, Analyze, Succeed.",

    description:
      "We help you understand market trends, customer needs and competitor strategies to ensure your product succeeds.",

    heroImage:
      "/assets/services/product-market-research/product-research-hero.png",

    primaryButton: "Get Started",
    secondaryButton: "Download Brochure",

    stats: defaultStats,

    mainSection: {
      title: "What is New Product Market Research?",

      text:
        "It is the process of gathering and analyzing information about your target market, customers, competitors and opportunities before launching a product.",
    },

    featuresTitle: "What We Help You With",

    features: [
      {
        icon: "FiSearch" as unknown as ElementType,
        title: "Tools & Techniques We Use",
        description:
          "Surveys, interviews, focus groups, competitor research and market analysis.",
      },

      {
        icon: "FiBarChart2" as unknown as ElementType,
        title: "Why It Is Important?",
        description:
          "Reduce risks, identify opportunities and make informed product decisions.",
      },

      {
        icon: "FiUsers" as unknown as ElementType,
        title: "Success Stories",
        description:
          "Use research-driven insights to launch products with confidence.",
      },

      {
        icon: "FiTarget" as unknown as ElementType,
        title: "Launch Strategy",
        description:
          "Turn market intelligence into a clear product launch strategy.",
      },
    ],

    secondarySection: {
      title: "Ready to Launch Your Next Big Idea?",

      text:
        "Make better decisions with research-backed insights before investing in your next product.",
    },

    contactTitle: "Ready to Launch Your Next Big Idea?",

    contactSubtitle:
      "Let's validate your product idea with meaningful market research.",

    contactImage:
      "/assets/services/product-market-research/product-research-contact.png",
  },

  /* MARKETING STRATEGY */

  marketingStrategy: {
    slug: "marketing-strategy",
    breadcrumb: "Marketing Strategy",

    title: "Marketing",
    titleHighlight: "Strategy",

    subtitle: "A Strategy Today For A Better Tomorrow",

    description:
      "A strong marketing strategy helps you achieve your business goals and stay ahead in the competitive market. We create customized strategies that connect your brand with the right audience.",

    heroImage:
      "/assets/services/marketing-strategy/marketing-strategy-hero.png",

    primaryButton: "Get Started",
    secondaryButton: "Talk to Expert",

    stats: defaultStats,

    mainSection: {
      title: "A Strategy Today For A Better Tomorrow",

      text:
        "A strong marketing strategy helps you achieve your business goals and stay ahead in the competitive market. We combine research, creativity and measurable execution to create strategies that work.",
    },

    featuresTitle: "Why Choose SocialMeUp?",

    features: [
      {
        icon: "FiTarget" as unknown as ElementType,
        title: "Customized Strategies",
        description:
          "Strategies designed specifically around your business goals.",
      },

      {
        icon: "FiBarChart2" as unknown as ElementType,
        title: "Data-Driven Insights",
        description:
          "Use meaningful data to make smarter marketing decisions.",
      },

      {
        icon: "FiTrendingUp" as unknown as ElementType,
        title: "Proven Results",
        description:
          "Focus on measurable performance and business growth.",
      },

      {
        icon: "FiUsers" as unknown as ElementType,
        title: "Dedicated Support",
        description:
          "Work with a team that supports your marketing journey.",
      },
    ],

    secondarySection: {
      title: "Our Approach",

      text:
        "We understand your business, analyze the market, define your audience, build the right strategy and continuously optimize performance.",
    },

    contactTitle: "Let's Create Your Winning Strategy",

    contactSubtitle:
      "Build a marketing strategy designed for a better tomorrow.",

    contactImage:
      "/assets/services/marketing-strategy/marketing-strategy-contact.png",
  },
};

/* 
   SERVICE ROUTE DATA
   IMPORTANT:
   This file contains route information only.
   It does NOT import React page components.
*/

export interface ServiceRoute {
  path: string;
  serviceKey: keyof typeof servicesData;
}

export const serviceRoutes: ServiceRoute[] = [
  {
    path: "/services/digital-marketing",
    serviceKey: "digitalMarketing",
  },

  {
    path: "/services/website-development",
    serviceKey: "websiteDevelopment",
  },

  {
    path: "/services/blue-tick-verification",
    serviceKey: "blueTickVerification",
  },

  {
    path: "/services/outdoor-marketing",
    serviceKey: "outdoorMarketing",
  },

  {
    path: "/services/app-development",
    serviceKey: "appDevelopment",
  },

  {
    path: "/services/business-digital-roadmap",
    serviceKey: "businessDigitalRoadmap",
  },

  {
    path: "/services/product-market-research",
    serviceKey: "productMarketResearch",
  },

  {
    path: "/services/marketing-strategy",
    serviceKey: "marketingStrategy",
  },
];

/* HELPER FUNCTIONS */

export const getServiceBySlug = (
  slug: string
): ServiceItem | undefined => {
  return services.find(
    (service) => service.slug === slug
  );
};

export const getServiceData = (
  slug: string
): ServiceData | undefined => {
  return Object.values(servicesData).find(
    (service) => service.slug === slug
  );
};

export const getServicePath = (
  slug: string
): string => {
  const service = services.find(
    (service) => service.slug === slug
  );

  return service?.path ?? "/services";
};
