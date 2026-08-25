import {
    FiCode,
    FiMapPin,
    FiRadio,
    FiShield,
    FiSmartphone,
    FiMap,
    FiSearch,
    FiTrendingUp,
} from "react-icons/fi";

export interface ServicePageItem {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    icon: React.ElementType;
    accent: "pink" | "purple";
    features: string[];
    buttonText: string;
}

export const servicesPageData: ServicePageItem[] = [
    {
        id: 1,
        title: "Digital Marketing",
        subtitle: "Create your presence online",
        description:
            "Internet is the new paradigm of the marketing world where the market to explore prospects is vast and a lot cheaper than traditional marketing, at SocialMeUp, Best Digital Marketing Company in Lucknow because we provide extremely beneficial strategies that will promote your business on a wider reach with greater engagement",
        image:
            "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=85",
        icon: FiRadio,
        accent: "pink",
        features: [
            "Website Development",
            "Search Engine Optimization (SEO)",
            "E-Commerce Development",
            "Lead Generation",
            "Social Media Marketing",
            "Business Consultancy",
            "WhatsApp Business Chatbot",
            "WhatsApp Business Setup",
            "Influencer Marketing",
            "Video Marketing",

        ],
        buttonText: "Explore Digital Marketing",
    },

    {
        id: 2,
        title: "Website Development",
        subtitle: "Design your website",
        description:
            "Your website is your digital identity. If you are looking for the best web development services in Lucknow, then look towards SocialMeUp because they offer highly professional website and app development as well as software solutions along with online promotion strategies. ",
        image:
            "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=85",
        icon: FiCode,
        accent: "purple",
        features: [
            "Custom Website Design",
            "Landing Page Design",
            "Responsive Development",
            "Website Maintenance",
            "E-commerce Development",
            "Redesign & Optimization",
            "CMS Development",
            "And many more...",
        ],
        buttonText: "Explore Website Development",
    },

    {
        id: 3,
        title: "Blue Tick Verification",
        subtitle: "The verified badge",
        description:
            "With your competition increasing day by day on the social media, do you want your competitors to take up your probable customers? If not, then reach out to SocialMeUp , the finest company among several social media marketing companies in Lucknow.",
        image:
            "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=85",
        icon: FiShield,
        accent: "pink",
        features: [
            "Facebook Blue Tick",
            "Gold Tick Verification",
            "Instagram Blue Tick",
            "Grey Tick Verification",
            "Twitter Blue Tick",
            "Fast & Secure Process",
        ],
        buttonText: "Explore Blue Tick Verification",
    },

    {
        id: 4,
        title: "Outdoor Marketing",
        subtitle: "Outdoor marketing in Lucknow",
        description:
            "Outdoor Marketing works exceptionally well when accomplished at its best geographical locations and where the audience comes almost daily, like a busy office route, well known shopping places, recreational places – like parks, multiplexes etc. ",
        image:
            "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1200&q=85",
        icon: FiMapPin,
        accent: "purple",
        features: [
            "Hoarding / Billboard Advertising",
            "Transit Advertising",
            "Multiplex Advertising",
            "Print Media Advertising",
            "Radio / FM Advertising",
            "TV Advertising",
            "Cricket Match Advertising",
            "LED Advertising",
            "Unipole & Gantry Advertising",
            "Tree Guard Advertising",
            "BQS (Bus Queue Shelter)",
        ],
        buttonText: "Explore Outdoor Marketing",
    },

    {
        id: 5,
        title: "App Development",
        subtitle: "Build powerful digital experiences",
        description:
            "Embrace the digital revolution and catapult your business ahead with SocialMeUp ., the foremost Best Mobile App Development Company in Lucknow. Transform your app ideas into reality and lead the charge in your industry. Contact us today to embark on your journey toward app excellence.",
        image:
            "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=85",
        icon: FiSmartphone,
        accent: "pink",
        features: [
            "Android App Development",
            "iOS App Development",
            "Cross-Platform Development",
            "UI / UX Design",
            "API Integration",
            "App Maintenance",
            "App Performance Optimization",
            "And many more...",
        ],
        buttonText: "Explore App Development",
    },

    {
        id: 6,
        title: "Business Digital Roadmap",
        subtitle: "Navigating Your Path to Digital Success",
        description:
            "In today’s digital-first world, having a clear and actionable roadmap is the key to growing your business and staying ahead of the competition. At SocialMeUp, we help you craft a tailored digital strategy that transforms your vision into a thriving online presence.",
        image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85",
        icon: FiMap,
        accent: "purple",
        features: [
            "Digital Business Analysis",
            "Market & Competitor Analysis",
            "Digital Growth Planning",
            "Technology Roadmap",
            "Marketing Roadmap",
            "Customer Journey Mapping",
            "Growth Opportunity Identification",
            "And many more...",
        ],
        buttonText: "Explore Business Digital Roadmap",
    },

    {
        id: 7,
        title: "New Product Market Research",
        subtitle: "Turning Ideas Into Market-Ready Products",
        description:
            "Bringing a new product to market requires in-depth insights, strategic planning, and data-driven decisions. At SocialMeUp, we offer comprehensive market research services to help you confidently launch products that resonate with your target audience.",
        image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
        icon: FiSearch,
        accent: "pink",
        features: [
            "Market Demand Analysis",
            "Target Audience Research",
            "Competitor Analysis",
            "Customer Needs Analysis",
            "Market Opportunity Research",
            "Product Positioning",
            "Consumer Insights",
            "And many more...",
        ],
        buttonText: "Explore Market Research",
    },

    {
        id: 8,
        title: "Marketing Strategy",
        subtitle: "Crafting Winning Strategies for a Digital-First World",
        description:
            "Success in the digital age requires more than just visibility; it demands a well-crafted marketing strategy that connects with your audience and delivers measurable results. At SocialMeUp, we specialize in building dynamic, data-driven marketing strategies tailored to your unique business goals.",
        image:
             " https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
        icon: FiTrendingUp,
        accent: "purple",
        features: [
            "Market Analysis",
            "Target Audience Research",
            "Competitor Analysis",
            "Marketing Channel Strategy",
            "Content Marketing Strategy",
            "Digital Advertising Strategy",
            "Performance Tracking",
            "And many more...",
        ],
        buttonText: "Explore Marketing Strategy",
    },
];