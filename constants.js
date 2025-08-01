import { BsInstagram } from "react-icons/bs";
import { IoLogoDiscord } from "react-icons/io5";
import tridentImage from "/projects/trident.png";
import junaidImage from "/projects/junaid.png";
import oneToTenImage from "/projects/1210.png";
import weatherImage from "/projects/weather.png";
import nikeImage from "/projects/nike.png";
import newsletterclubImage from "/projects/newsletterclub.png";
import roob from "/projects/roob.png";

export const websiteInformation = [
  {
    name: "Roob",
    copywright: "Copywright.",
    year: 2024,
    developer: "Junaid Adams",
    socials: [
      {
        key: 1,
        name: "Instagram",
        link: "/https://www.instagram.com/onlineroob?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        logo: BsInstagram,
        accountName: "onlineroob",
      },
      {
        key: 2,
        name: "Discord",
        link: "https://discord.com/users/roob#7254",
        logo: IoLogoDiscord,
        accountName: "roob#7254",
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
    name: "pricing",
    link: "#pricing",
  },
  {
    key: 3,
    name: "portfolio",
    link: "#portfolio",
  },
  {
    key: 4,
    name: "contact",
    link: "#contact",
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
    tags: ["Vite", "Sanity.io"],
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
    tags: ["Vite", "Express"],
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
    tags: ["NextJs", "CMS"],
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
    tags: ["Vite", "API"],
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
    tags: ["Vite", "ThreeJS"],
  },
  {
    key: "6",
    name: "One to Ten",
    shortDesc:
      "A sleek, minimalist quiz game where all answers range from one to ten. Perfect for quick entertainment and challenging your quick-thinking skills!",
    longDesc:
      "Introducing a quiz game where all answers range from one to ten. Designed with a minimalist, sleek interface, it offers simple and engaging gameplay. Perfect for passing the time, this game provides an enjoyable way to challenge your quick-thinking skills. Dive in and have fun whenever you have a few moments to spare!",
    img: oneToTenImage,
    bgColor: "#182421",

    link: "https://www.1210.co.za",
    github: "https://github.com/Junaidadams/One-to-Ten",
    tags: ["Vite"],
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
    tags: ["Vite", "Tailwind"],
  },
  // {
  //   key: "7",
  //   name: "roob online",
  //   shortDesc:
  //     "A cosy, inviting website showcasing the commission pieces made by roob the digital artist.",
  //   longDesc:
  //     "A cosy, inviting website showcasing the commission pieces made by roob the digital artist. Complete with it's own CMS and contact form, this website is what I recommend for customers in similar service-related fields",
  //   img: nikeImage,
  //   bgColor: "#fff",
  //   link: "",
  //   github: "",
  //   tags: ["Vite", "Sanity.io"],
  // },
];
