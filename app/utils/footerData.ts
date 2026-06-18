import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  XIcon,
  WhatsappIcon,
} from "../components/icons/SocialIcons";

export const socialLinks = [
  {
    id: 1,
    icon: FacebookIcon,
    href: "https://facebook.com",
    bg: "bg-[#1877F2]",
  },
  {
    id: 2,
    icon: XIcon,
    href: "https://x.com",
    bg: "bg-black",
  },
  {
    id: 3,
    icon: YoutubeIcon,
    href: "https://youtube.com",
    bg: "bg-red-600",
  },
  {
    id: 4,
    icon: InstagramIcon,
    href: "https://instagram.com",
    bg: "bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600",
  },
  {
    id: 5,
    icon: LinkedinIcon,
    href: "https://linkedin.com",
    bg: "bg-[#0A66C2]",
  },
  {
    id: 6,
    icon: WhatsappIcon,
    href: "https://wa.me/39487",
    bg: "bg-[#25D366]",
  },
];

export const footerLinks = [
  {
    title: "Company",
    links: [
      {
        label: "About Us",
        href: "/",
      },
      {
        label: "Careers",
        href: "/",
      },
      {
        label: "CSR",
        href: "/",
      },
      {
        label: "FAQ",
        href: "/",
      },
    ],
  },
  {
    title: "Platform",
    links: [
      {
        label: "Contact Us",
        href: "/",
      },
      {
        label: "Terms & Conditions",
        href: "/",
      },
      {
        label: "Privacy Policy",
        href: "/",
      },
      {
        label: "NDA",
        href: "/",
      },
    ],
  },
];
