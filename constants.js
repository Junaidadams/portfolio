import { BsInstagram } from "react-icons/bs";
import { IoLogoDiscord } from "react-icons/io5";
import tridentImage from "/projects/trident.png";
import junaidImage from "/projects/junaid.png";
import oneToTenImage from "/projects/1210.png";
import weatherImage from "/projects/weather.png";
import nikeImage from "/projects/nike.png";
import newsletterclubImage from "/projects/newsletterclub.png";
import roob from "/projects/roob.png";

import schoolOfIt from "/icons/schoolofit.png";
import glasses from "/icons/glasses.svg";
import opit from "/icons/opit.webp";
import wbwr from "/icons/wbwr.png";

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
    value: ["Iced americano", "Flat white", "Cortado"],
    icon: PiCoffeeThin,
    animationIcon: PiCoffeeBeanThin,
  },
  {
    key: 2,
    name: "Music",
    value: ["Hip hop & R&B", "Rap", "Alt"],
    icon: PiSpeakerHifiThin,
    animationIcon: CgLoadbarSound,
  },
  {
    key: 3,
    name: "Cooking",
    value: ["Stews", "Tacos", "Burgers"],
    icon: PiForkKnifeThin,
    animationIcon: PiBowlFoodThin,
  },
  {
    key: 4,
    name: "Drawing",
    value: ["Pencil/Sketch", "Character stills", "Doodles"],
    icon: PiPencilLineThin,
    animationIcon: AiOutlinePicture,
  },
  {
    key: 5,
    name: "Exercise",
    value: ["Free smoothies", "Running", "Cardio"],
    icon: CgGym,
    animationIcon: GiWeightLiftingUp,
  },
];

export const projects = [
  {
    key: "1",
    name: "Eat Halal (Q1 2027)",
    shortDesc:
      "Cape Town's own halal food directory service - helping users find nearby tasty spots.",
    longDesc:
      "Cape Town's own halal food directory service - helping users find nearby tasty spots while also helping businesses market their delicious food to waiting customers. Eat Halal's main focus is representing and respecting the food culture that gives it its platform.",
    img: roob,
    bgColor: "#fff",
    link: "",
    github: "https://github.com/Junaidadams/halaal-hub",
    tags: [
      { key: 1, name: "Vite", icon: SiVite },
      { key: 2, name: "Express", icon: SiExpress },
    ],
  },
  {
    key: "2",
    name: "roob online",
    shortDesc:
      "A cosy, inviting website showcasing the commission pieces made by roob the digital artist.",
    longDesc:
      "A cosy, inviting website showcasing the commission pieces made by roob the digital artist. Complete with it's own CMS and contact form, this website is what I recommend for customers in  similar service-related fields.",
    img: roob,
    bgColor: "#fff",
    link: "",
    github: "https://github.com/Junaidadams/roob",
    tags: [
      { key: 1, name: "Vite", icon: SiVite },
      { key: 2, name: "Sanity.io", icon: SiSanity },
    ],
  },
  {
    key: "3",
    name: "The Newsletter Club",
    shortDesc:
      "A full-stack newsletter growth platform, aimed at collaboration between newsletter owners.",
    longDesc:
      "An exclusive platform for newsletter owners to find and collaborate with other newsletter creators. The website features a comprehensive directory to search by category, monetization type, subscriber count, and more. This has been my first freelance project of this scale, and it was a delight to build from beginning to end.",
    img: newsletterclubImage,
    bgColor: "#7c3aed ",
    link: "",
    github: "https://github.com/TheNEwsletterclub/newlsetterclubbackend",
    tags: [
      { key: 1, name: "Vite", icon: SiVite },
      { key: 2, name: "Express", icon: SiExpress },
    ],
  },
  {
    key: "4",
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
];

export const frontendTechnologies = [
  {
    key: "1",
    name: "React",
    shortDesc: "A JavaScript library for building interactive UIs.",
    img: FaReact,
    link: "https://reactjs.org/",
  },
  {
    key: "2",
    name: "Next.js",
    shortDesc:
      "React-based framework for building full-stack web applications.",
    img: SiNextdotjs,
    link: "https://nextjs.org/",
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

export const timelineInformation = [
  {
    key: 1,
    type: "Job",
    year: "2026",
    ended: "",
    institution: "WBWR Digital Experiences",
    name: "Frontend Dev",
    imgUrl: wbwr,
    desc: "My first position in the field. Building, updating and fixing sites using a wide stack including Shopify Hydrogen/Liquid, React and React Native.",
  },
  {
    key: 2,
    type: "Education",
    year: "2025",
    ended: "",
    institution: "Open Institute of Technology",
    name: "BSc(hons) Computer Science",
    imgUrl: opit,
    desc: "I started my degree through OPIT to better my job suitability and to pursue deeper knowledge and understanding into my chosen field.",
  },
  {
    key: 3,
    type: "Job",
    year: "2023",
    ended: "2026",
    institution: "Self-employed",
    name: "Freelance Web Dev",
    imgUrl: glasses,
    desc: "During this period, I make quite a few freelance projects. This was a very informative experience and I really learnt what it takes to be an entire solution in one person.",
  },
  {
    key: 4,
    type: "Education",
    year: "2023",
    ended: "2023",
    institution: "School of IT",
    name: "Full Stack Bootcamp",
    imgUrl: schoolOfIt,
    desc: "My first lines of code were written here. I quit my retail job after having saved in pursuit of switching fields.",
  },
];
