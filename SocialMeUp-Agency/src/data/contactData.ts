import {
    FiMapPin,
    FiPhone,
    FiMail,
} from "react-icons/fi";

import type { IconType } from "react-icons";

export interface ContactCard {
    id: number;
    title: string;
    icon: IconType;
    lines: string[];
}

export interface ContactService {
    id: number;
    label: string;
}

export const contactCards: ContactCard[] = [
    {
        id: 1,
        title: "Delhi Office",
        icon: FiMapPin,
        lines: [
            " B, B, Mohan Cooperative Industrial Estate, Badarpur,",
            "New Delhi, 110044",
        ],
    },

    {
        id: 2,
        title: "Lucknow Office",
        icon: FiMapPin,
        lines: [
            "Aurangabad Jageer, KN-839, Bijnor Road,",
            "Near Manish Yadav Gate,",
            "Sarojini Nagar, Lucknow, UP 226014",
        ],
    },

    {
        id: 3,
        title: "Phone",
        icon: FiPhone,
        lines: [
            "+91 - 8004857390",
            "+91 - 9599064721",
            "+91 - 9559618555",
        ],
    },

{
        id: 4,
        title: "Email",
        icon: FiMail,
        lines: [
            "info@socialmeup.in",
            "socialmeup.co@gmail.com",
        ],
    },
];

export const contactServices: ContactService[] = [
    {
        id: 1,
        label: "Digital Marketing",
    },
    {
        id: 2,
        label: "Web Development",
    },
    {
        id: 3,
        label: "Blue Tick Verification",
    },
    {
        id: 4,
        label: "Outdoor Marketing",
    },
    {
        id: 5,
        label: "Business Digital Roadmap",
    },
    {
        id: 6,
        label: "New Product Market Research",
    },
    {
        id: 7,
        label: "Marketing Strategy",
    },
];