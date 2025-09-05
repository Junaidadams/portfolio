import { BsInstagram } from "react-icons/bs";
import { IoLogoDiscord } from "react-icons/io5";
import tridentImage from "/projects/trident.png";
import junaidImage from "/projects/junaid.png";
import oneToTenImage from "/projects/1210.png";
import weatherImage from "/projects/weather.png";
import nikeImage from "/projects/nike.png";
import newsletterclubImage from "/projects/newsletterclub.png";
import roob from "/projects/roob.png";

import { SiPassport, SiVite } from "react-icons/si";
import { SiNextdotjs, SiSanity } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaLinkedin, FaGithub, FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiDjango, DiMongodb, DiMysql, DiNodejs } from "react-icons/di";
import { CiCoffeeBean } from "react-icons/ci";
import { CgMusicSpeaker } from "react-icons/cg";
import { GiChefToque } from "react-icons/gi";
import { PiPencilLineThin } from "react-icons/pi";
import { PiGameControllerThin } from "react-icons/pi";
import { CgGym } from "react-icons/cg";
import { CgLoadbarSound } from "react-icons/cg";
import { PiCoffeeBeanThin } from "react-icons/pi";
import { PiBowlFoodThin } from "react-icons/pi";
import { AiOutlinePicture } from "react-icons/ai";
import { GiWeightLiftingUp } from "react-icons/gi";

import { BiSolidCoffee } from "react-icons/bi";
import { BsFillMusicPlayerFill } from "react-icons/bs";

import { PiCoffeeThin } from "react-icons/pi";
import { PiSpeakerHifiThin } from "react-icons/pi";
import { PiForkKnifeThin } from "react-icons/pi";

export const websiteInformation = [
  {
    name: "Junaid Adams",
    copywright: "Copywright.",
    year: 2024,
    developer: "Junaid Adams",
    socials: [
      {
        key: 1,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/junaid-adams-30b848211/",
        logo: FaLinkedin,
        accountName: "",
      },
      {
        key: 2,
        name: "Github",
        link: "https://github.com/Junaidadams",
        logo: FaGithub,
        accountName: "",
      },
    ],
  },
];

export const navigationLinks = [
  {
    key: 1,
    name: "home",
    link: "#home",
  },

  {
    key: 2,
    name: "projects",
    link: "#projects",
  },
  {
    key: 3,
    name: "tech",
    link: "#techstack",
  },
  {
    key: 4,
    name: "contact",
    link: "#contact",
  },
];

export const quickFacts = [
  {
    key: 1,
    name: "Coffee",
    value: "Iced Americano",
    icon: PiCoffeeThin,
    animationIcon: PiCoffeeBeanThin,
  },
  {
    key: 2,
    name: "Music",
    value: "Lots of genres",
    icon: PiSpeakerHifiThin,
    animationIcon: CgLoadbarSound,
  },
  {
    key: 3,
    name: "Cooking",
    value: "Experimenting",
    icon: PiForkKnifeThin,
    animationIcon: PiBowlFoodThin,
  },
  {
    key: 4,
    name: "Drawing",
    value: "Pencil & Digital",
    icon: PiPencilLineThin,
    animationIcon: AiOutlinePicture,
  },
  {
    key: 5,
    name: "Exercise",
    value: "Running & Gym",
    icon: CgGym,
    animationIcon: GiWeightLiftingUp,
  },
];

export const projects = [
  {
    key: "1",
    name: "roob online",
    shortDesc:
      "A cosy, inviting website showcasing the commission pieces made by roob the digital artist.",
    longDesc:
      "A cosy, inviting website showcasing the commission pieces made by roob the digital artist. Complete with it's own CMS and contact form, this website is what I recommend for customers in  similar service-related fields",
    img: roob,
    bgColor: "#fff",
    link: "https://roob.online/",
    github: "https://github.com/Junaidadams/roob",
    tags: [
      { key: 1, name: "Vite", icon: SiVite },
      { key: 2, name: "Sanity.io", icon: SiSanity },
    ],
  },
  {
    key: "2",
    name: "The Newsletter Club",
    shortDesc:
      "A full-stack newsletter growth platform, aimed at collaboration between newsletter owners.",
    longDesc:
      "An exclusive platform for newsletter owners to find and collaborate with other newsletter creators. The website features a comprehensive directory to search by category, monetization type, subscriber count, and more. This has been my first freelance project of this scale, and it was a delight to build from beginning to end.",
    img: newsletterclubImage,
    bgColor: "#7c3aed ",
    link: "https://thenewsletterclub.co",
    github: "https://github.com/TheNEwsletterclub/newlsetterclubbackend",
    tags: [
      { key: 1, name: "Vite", icon: SiVite },
      { key: 2, name: "Express", icon: SiExpress },
    ],
  },
  {
    key: "3",
    name: "Trident Distributions",
    shortDesc:
      "A beautifully designed e-commerce website with account creation and a persistent local storage cart system.",
    longDesc:
      "A streamlined e-commerce site with account creation and a persistent local storage cart system was created using Next.js, Tailwind CSS, and Sanity.io. Next.js optimizes performance, Tailwind CSS improves visual aesthetics, and Sanity.io provides a reliable content management system for smooth backend operations.",
    img: tridentImage,
    bgColor: "#07080b",
    link: "",
    github: "",
    tags: [
      { key: 1, name: "Next.js", icon: SiNextdotjs },
      { key: 2, name: "TailwindCSS", icon: RiTailwindCssFill },
      { key: 3, name: "Sanity.io", icon: SiSanity },
    ],
  },
  {
    key: "4",
    name: "Weather Application",
    shortDesc:
      "A responsive weather web application capable of displaying weather information for an inputted city.",
    longDesc:
      "A highly responsive weather web application has been developed with the capability to showcase detailed weather information for a user-inputted city. The application ensures a user-friendly experience by providing comprehensive weather details with accuracy and efficiency.",
    img: weatherImage,
    bgColor: "#a396e9",

    link: "https://codesandbox.io/p/sandbox/weather-app-fpv85k",
    github: "https://github.com/Junaidadams/Weather-App",
    tags: [{ key: 1, name: "Vite", icon: SiVite }],
  },
  {
    key: "5",
    name: "Junaid Adams - Past Portfolio",
    shortDesc:
      "A previous version of my portfolio. Modern aesthetics with a softer, personal touch.",
    longDesc:
      "A past version of my portfolio, distinguished by its modern aesthetics and infused with a softer, more personal touch, was crafted to reflect a balance between contemporary design elements. The deliberate incorporation of a personal touch aimed to create a unique and inviting online presence, catering to a visually appealing and engaging user experience.",
    img: junaidImage,
    bgColor: "#f5f5f5",

    link: "",
    github: "",
    tags: [
      { key: 1, name: "Vite", icon: SiVite },
      { key: 2, name: "ThreeJS", icon: TbBrandThreejs },
    ],
  },
  {
    key: "6",
    name: "One to Ten",
    shortDesc:
      "A sleek, minimalist quiz game, perfect for quick entertainment and challenging your quick-thinking skills!",
    longDesc:
      "Introducing a quiz game where all answers range from one to ten. Designed with a minimalist, sleek interface, it offers simple and engaging gameplay. Perfect for passing the time, this game provides an enjoyable way to challenge your quick-thinking skills. Dive in and have fun whenever you have a few moments to spare!",
    img: oneToTenImage,
    bgColor: "#182421",

    link: "https://www.1210.co.za",
    github: "https://github.com/Junaidadams/One-to-Ten",
    tags: [{ key: 1, name: "Vite", icon: SiVite }],
  },
  {
    key: "7",
    name: "Nike Mock Website",
    shortDesc:
      "A sleek Nike mock website made using Vite, with a mobile-first responsive design.",
    longDesc:
      "A sleek Nike mock website website made using Vite showcasing responsive design. This project was built during my time at School of IT and taught me what goes into making real-world product pages.",
    img: nikeImage,
    bgColor: "#fff",
    link: "",
    github: "",
    tags: [
      { key: 1, name: "Vite", icon: SiVite },
      { key: 2, name: "Tailwind", icon: RiTailwindCssFill },
    ],
  },
];

export const frontendTechnologies = [
  {
    key: "1",
    name: "Next.js",
    shortDesc:
      "React-based framework for building full-stack web applications.",
    img: SiNextdotjs,
    link: "https://nextjs.org/",
  },
  {
    key: "2",
    name: "React",
    shortDesc: "A JavaScript library for building interactive UIs.",
    img: FaReact,
    link: "https://reactjs.org/",
  },
  {
    key: "3",
    name: "HTML & CSS",
    shortDesc: "Core web technologies for structuring and styling web content.",
    img: FaHtml5, // or a combined HTML+CSS image
    link: "https://developer.mozilla.org/en-US/docs/Web",
  },
  {
    key: "4",
    name: "Tailwind CSS",
    shortDesc: "Utility-first CSS framework for custom UIs.",
    img: RiTailwindCssFill,
    link: "https://tailwindcss.com/",
  },
  {
    key: "5",
    name: "Vite",
    shortDesc: "Lightning-fast frontend tooling for modern web projects.",
    img: SiVite,
    link: "https://vitejs.dev/",
  },
];

export const backendTechnologies = [
  {
    key: "1",
    name: "Django",
    shortDesc: "High-level Python framework for clean, rapid web development.",
    img: DiDjango,
    link: "https://www.djangoproject.com/",
  },
  {
    key: "2",
    name: "Node.js & Express",
    shortDesc:
      "JavaScript runtime and web framework for building APIs and servers.",
    img: DiNodejs, // or a custom combined image
    link: "https://nodejs.org/",
  },
  {
    key: "3",
    name: "MongoDB",
    shortDesc: "NoSQL database for flexible, document-oriented data storage.",
    img: DiMongodb,
    link: "https://www.mongodb.com/",
  },
  {
    key: "4",
    name: "MySQL",
    shortDesc: "Relational database for structured data management.",
    img: DiMysql,
    link: "https://www.mysql.com/",
  },
  {
    key: "5",
    name: "Passport.js",
    shortDesc: "Middleware for authentication in Node.js applications.",
    img: SiPassport,
    link: "http://www.passportjs.org/",
  },
];
