import type { ReactNode } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export interface FooterLink {
  label: string;
  path: string;
}

export interface ServiceLink {
  title: string;
}

export interface ContactItem {
  icon: ReactNode;
  title: string;
  content: string[];
}

export const quickLinks: FooterLink[] = [
  {
    label: "About Us",
    path: "/about",
  },
  {
    label: "Services",
    path: "/services",
  },
  {
    label: "Portfolio",
    path: "/portfolio",
  },
  {
    label: "Blog",
    path: "/blog",
  },
  {
    label: "Careers",
    path: "/careers",
  },
  {
    label: "Contact",
    path: "/contact",
  },
  {
    label: "Privacy Policy",
    path: "/privacy-policy",
  },
];

export const contacts: ContactItem[] = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Delhi Office",
    content: [
      "Mohan Cooperative Industrial Estate",
      "Badarpur",
      "New Delhi 110044",
    ],
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Lucknow Office",
    content: ["Aurangabad Jageer", "KN-839, Bijnor Road", "Lucknow 226014"],
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    content: ["+91 8004857390", "+91 9599064721", "+91 9559618555"],
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    content: ["info@socialmeup.in", "socialmeup.co@gmail.com"],
  },
];
