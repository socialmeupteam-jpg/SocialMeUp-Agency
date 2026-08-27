import suryaEyeCareImage from "/portfolio/websites/surya-eye-care.webp";
import ivInvestmentPartnersImage from "/portfolio/websites/iv-investment-partners.webp";
import careerGuruEducationImage from "/portfolio/websites/career-guru-education.webp";
import socialmeupAcademyImage from "/portfolio/websites/socialmeup-academy.webp";
import zomeStaysImage from "/portfolio/logos/zome-stays.webp";
import threadFusionImage from "/portfolio/logos/thread-fusion.webp";
import Reel1Image from "/portfolio/Reels/Reel-1.webp";
import Reel2Image from "/portfolio/Reels/Reel-2.webp";
import Reel3Image from "/portfolio/Reels/Reel-3.webp";
import Reel4Image from "/portfolio/Reels/Reel-4.webp";
import Reel5Image from "/portfolio/Reels/Reel-5.webp";
import Reel6Image from "/portfolio/Reels/Reel-6.webp";
import project1Image from "/portfolio/SocialMedia/project-1.webp";
import project2Image from "/portfolio/SocialMedia/project-2.webp";
import project3Image from "/portfolio/SocialMedia/project-3.webp";
import project4Image from "/portfolio/SocialMedia/project-4.webp";


export type PortfolioCategory =
  | "Websites"
  | "Logos"
  | "Reels & Videos"
  | "Social Media";

export interface PortfolioProject {
  id: number;
  category: PortfolioCategory;
  client: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  stats: string[];
  technologies: string[];
}

export interface PortfolioStat {
  value: string;
  label: string;
}

export const portfolioProjects: PortfolioProject[] = [

  //Websites
  {
    id: 1,
    category: "Websites",
    client: "SURYA EYE CARE",
    title: "Healthcare & Eye Care Website",
    description:
      "A professional healthcare website created for Surya Eye Care to showcase ophthalmology services, facilities, doctors, and patient-focused eye care information.",
    image: suryaEyeCareImage,
    link: "https://suryaeyecare.com/",
    stats: [
      "Healthcare-focused design",
      "Service & facility showcase",
      "Patient-focused experience",
    ],
    technologies: [
      "Web Design",
      "Responsive UI",
      "Healthcare",
    ],
  },

  {
    id: 2,
    category: "Websites",
    client: "IV INVESTMENT PARTNERS",
    title: "Investment & Financial Services Website",
    description:
      "A professional financial services website designed to present investment, insurance, retirement planning, financial planning, and wealth management solutions.",
    image: ivInvestmentPartnersImage,
    link: "https://ivinvestmentpartners.com/",
    stats: [
      "Financial services platform",
      "Multiple service categories",
      "Lead-focused experience",
    ],
    technologies: [
      "Web Design",
      "Responsive UI",
      "Financial Services",
    ],
  },

  {
    id: 3,
    category: "Websites",
    client: "CAREER GURU EDUCATION",
    title: "Education & Career Consultancy Website",
    description:
      "An education consultancy website designed to help students explore degree programs, admission opportunities, courses, and career guidance services.",
    image: careerGuruEducationImage,
    link: "https://careergurueducation.in/",
    stats: [
      "Education-focused platform",
      "Course & program showcase",
      "Admission-focused experience",
    ],
    technologies: [
      "Web Design",
      "Responsive UI",
      "Education",
    ],
  },

  {
    id: 4,
    category: "Websites",
    client: "SOCIALMEUP ACADEMY",
    title: "Digital Marketing Academy Website",
    description:
      "A modern education platform built for SocialMeUp Academy to showcase digital marketing programs, practical training, live projects, certifications, and career support.",
    image: socialmeupAcademyImage,
    link: "https://socialmeupacademy.in/",
    stats: [
      "Course & program showcase",
      "Lead generation focused",
      "Career-oriented experience",
    ],
    technologies: [
      "Web Design",
      "Responsive UI",
      "Digital Marketing",
    ],
  },

  // Logos

  {
    id: 5,
    category: "Logos",
    client: "ZOME STAYS",
    title: "Hospitality Brand Logo",
    description:
      "A distinctive logo identity designed for Zome Stays to create a memorable and recognizable visual presence for its hospitality brand.",
    image: zomeStaysImage,
    link: "#",
    stats: [
      "Hospitality-focused identity",
      "Distinctive visual concept",
      "Scalable logo design",
    ],
    technologies: [
      "Logo Design",
      "Brand Identity",
      "Visual Design",
    ],
  },

  {
    id: 6,
    category: "Logos",
    client: "THREAD FUSION",
    title: "Fashion Brand Logo",
    description:
      "A clean and memorable logo identity created for Thread Fusion, combining a modern visual approach with a strong fashion and apparel brand personality.",
    image: threadFusionImage,
    link: "#",
    stats: [
      "Fashion-focused identity",
      "Minimal logo concept",
      "Brand-ready design",
    ],
    technologies: [
      "Logo Design",
      "Branding",
      "Visual Identity",
    ],
  },


  // Reels & Videos

  {
    id: 7,
    category: "Reels & Videos",
    client: "SUNROOF TECHNO",
    title: "Technology Brand Reel",
    description:
      "Short-form promotional content created for Sunroof Techno with engaging visuals, dynamic editing and a social-first presentation.",
    image: Reel1Image,
    link: "https://www.instagram.com/reel/DcgN3hoijTX/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
    stats: [
      "Technology-focused content",
      "Dynamic short-form editing",
      "Social-first presentation",
    ],
    technologies: [
      "Reels",
      "Video Editing",
      "Motion Graphics",
    ],
  },

  {
    id: 8,
    category: "Reels & Videos",
    client: "BN BAIJAL",
    title: "Product Promotional Reel",
    description:
      "A product-focused reel designed to present the offering through engaging visuals, concise storytelling and attention-grabbing motion.",
    image: Reel2Image,
    link: "https://www.instagram.com/reel/DLXTLL2B9cK/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
    stats: [
      "Product-focused storytelling",
      "Visual motion design",
      "Social media optimized",
    ],
    technologies: [
      "Product Video",
      "Reels",
      "Motion Graphics",
    ],
  },

  {
    id: 9,
    category: "Reels & Videos",
    client: "ZOME STAYS",
    title: "Client Testimonial Reel",
    description:
      "A testimonial-focused short-form video created to communicate the client experience in an engaging and authentic social media format.",
    image: Reel3Image,
    link: "https://www.instagram.com/reel/DcbESvHjLn1/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
    stats: [
      "Testimonial storytelling",
      "Short-form editing",
      "Trust-building content",
    ],
    technologies: [
      "Reels",
      "Video Editing",
      "Storytelling",
    ],
  },

  {
    id: 10,
    category: "Reels & Videos",
    client: "SOCIALMEUP AGENCY",
    title: "Product Promotional Reel",
    description:
      "Creative promotional video content produced for social media, combining product-focused visuals, editing and motion to create an engaging short-form experience.",
    image: Reel4Image,
    link: "https://www.instagram.com/reel/DcCto1_EdQm/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
    stats: [
      "Product-focused creative",
      "Motion-led editing",
      "Social media content",
    ],
    technologies: [
      "Video Editing",
      "Reels",
      "Motion Graphics",
    ],
  },

  {
    id: 11,
    category: "Reels & Videos",
    client: "SOCIALMEUP ACADEMY",
    title: "Influencer Shoot",
    description:
      "Influencer-led short-form content created to showcase a product or brand through authentic presentation, engaging visuals and social-first editing.",
    image: Reel5Image,
    link: "https://www.instagram.com/reel/DXcD-YVz23R/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
    stats: [
      "Influencer-led content",
      "Brand-focused storytelling",
      "Social-first editing",
    ],
    technologies: [
      "Influencer Content",
      "Video Editing",
      "Reels",
    ],
  }, {
    id: 12,
    category: "Reels & Videos",
    client: "SUNROOF TECHNO",
    title: "Brand Promotional Reel",
    description:
      "A social media promotional reel created for Sunroof Techno to present its brand and energy solutions through engaging visuals and short-form storytelling.",
    image: Reel6Image,
    link: "https://www.instagram.com/reel/DcCJGTHznx7/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
    stats: [
      "Brand promotional content",
      "Short-form storytelling",
    ],
    technologies: [
      "Reels",
      "Video Editing",
    ],
  },

  // Social Media

  {
    id: 13,
    category: "Social Media",
    client: "SUNROOF TECHNO",
    title: "Technology Social Media Campaign",
    description:
      "A branded social media creative developed for Sunroof Techno to communicate its message through visually engaging and platform-ready content.",
    image: project1Image,
    link: "https://www.instagram.com/p/DcOMPwADBSP/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
    stats: [
      "Technology-focused creative",
      "Brand communication",
      "Instagram-ready design",
    ],
    technologies: [
      "Instagram",
      "Creative Design",
      "Branding",
    ],
  },

  {
    id: 14,
    category: "Social Media",
    client: "SUNROOF TECHNO",
    title: "Branded Instagram Creative",
    description:
      "A visually engaging Instagram creative designed to communicate Sunroof Techno's brand message with a clear layout and consistent visual identity.",
    image: project2Image,
    link: "https://www.instagram.com/p/DbnvORhJBNL/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
    stats: [
      "Branded visual content",
      "Clear message hierarchy",
      "Social media optimized",
    ],
    technologies: [
      "Social Media",
      "Creative Design",
      "Brand Identity",
    ],
  },

  {
    id: 15,
    category: "Social Media",
    client: "SUNROOF TECHNO",
    title: "Promotional Social Creative",
    description:
      "A promotional social media creative designed to present the brand message in an engaging visual format suitable for Instagram audiences.",
    image: project3Image,
    link: "https://www.instagram.com/p/DLH4ILIJERV/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
    stats: [
      "Promotional creative",
      "Brand-focused design",
      "Instagram content",
    ],
    technologies: [
      "Instagram",
      "Graphic Design",
      "Content Design",
    ],
  },

  {
    id: 16,
    category: "Social Media",
    client: "BN BAIJAL",
    title: "Branded Instagram Creative",
    description:
      "A professionally designed Instagram creative for BN Baijal, combining visual communication and brand presentation for social media.",
    image: project4Image,
    link: "https://www.instagram.com/p/DLFRnEapPBk/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
    stats: [
      "Branded social creative",
      "Visual communication",
      "Instagram optimized",
    ],
    technologies: [
      "Social Media",
      "Graphic Design",
      "Branding",
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
  "Social Media"
];
