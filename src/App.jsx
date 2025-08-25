import "./App.css";
import "./index.css";

import { motion } from "framer-motion";

import { ProjectTile } from "./components/ProjectTile";
import TechStack from "./components/TechStack";
import SectionWrapper from "./components/wrappers/SectionWrapper";
import ContactForm from "./components/ContactForm";
import SocialTiles from "./components/SocialTiles";
import GlassesIcon from "./components/Glasses";

function App() {
  return (
    <main className="flex flex-col bg-mainWhite dark:bg-mainBlack space-y-[62px] md:space-y-[80px]">
      {/* HERO SECTION */}
      <section
        id="home"
        className="bg-mainWhite dark:bg-mainBlack px-[31px] md:px-[40px] h-[calc(100vh-62px)] md:h-[calc(100vh-80px)] flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 1,
            x: { duration: 1 },
          }}
          alt="Background with abstract lines and scales pattern"
          className="relative w-full h-full bg-cover bg-center bg-[url(/lines.jpg)] dark:bg-[url(/scales.jpg)] flex flex-col border dark:border-white border-black rounded-sm"
        >
          <div className="font-panchang font-light text-mainBlack my-auto text-xl md:text-4xl p-2 sm:p-6 md:p-8 lg:p-10  bg-mainWhite dark:bg-mainBlack dark:text-mainWhite w-fit -translate-[1px] round border border-y-mainBlack border-r-mainBlack border-l-mainWhite dark:border-y-mainWhite dark:border-r-mainWhite dark:border-l-mainBlack max-w-[260px] sm:max-w-1/2 md:max-w-3/5">
            <h1 className="">Junaid Adams</h1>
            <h1 className=""> Web Developer</h1>
            <p className="md:text-base text-sm font-extralight mt-2">
              Building fast, modern, and user-focused websites
            </p>
          </div>
        </motion.div>
      </section>

      {/* PROJECTS SECTION */}
      <SectionWrapper id="projects">
        <GlassesIcon />
        <div className=" font-panchang font-extralight text-mainBlack text-3xl md:text-4xl p-4 sm:p-6 md:px-8  dark:bg-mainBlack dark:text-mainWhite w-fit rounded-r-3xl">
          <h2>Projects</h2>
          <p className="text-base font-semibold">
            A selection of my recent work in full-stack development.
          </p>
        </div>
        <ProjectTile />
      </SectionWrapper>

      {/* ABOUT SECTION */}
      <SectionWrapper id="about">
        <GlassesIcon />
        <div className=" font-panchang font-extralight text-mainBlack text-3xl md:text-4xl p-4 sm:p-6 md:px-8  dark:bg-mainBlack dark:text-mainWhite w-fit rounded-r-3xl">
          <h2 className="font font-panchang text-left dark:text-mainWhite ">
            About
          </h2>
          <p className="text-base font-semibold">Who I am and what I do.</p>
        </div>
        <div className=" px-4 md:px-8 mb-5 xl:max-w-2/3">
          <h1 className="font font-panchang text-left dark:text-mainWhite ">
            Summary
          </h1>
          <p className="text-gray-700 dark:text-gray-300 font-chillax">
            Hi, I'm Junaid — a freelance web developer based in Cape Town, South
            Africa. With over two years of experience building modern web
            applications, I specialize in React, Django, and full-stack
            development. I focus on delivering high-quality, scalable, and
            user-friendly solutions for clients. <br />
            <br />I am currently completing a BSc in Modern Computer Science at
            OPIT (Open Institute of Technology) to further strengthen my
            technical foundation.
          </p>
        </div>
        <TechStack />
      </SectionWrapper>

      {/* CONTACT SECTION */}
      <SectionWrapper id="contact">
        <GlassesIcon />
        <div className=" font-panchang font-extralight text-mainBlack text-3xl md:text-4xl p-4 sm:p-6 md:px-8  dark:bg-mainBlack dark:text-mainWhite w-fit rounded-r-3xl">
          <h2 className="font font-panchang text-left dark:text-mainWhite ">
            Contact
          </h2>
          <p className="text-base font-semibold">
            Let’s build something great.
          </p>
        </div>
        <div className=" px-4 md:px-8 mb-5 xl:max-w-2/3">
          {/* <h3 className="font font-panchang text-left dark:text-mainWhite ">
            Interested in working with me?
          </h3> */}
          <p className="text-gray-700 dark:text-gray-300 font-chillax">
            I’m currently open to freelance projects, collaborations, and
            full-time opportunities. Whether you’re a business looking for a new
            website, or a team in need of a developer, I’d love to hear from
            you. Feel free to reach out through the form below or connect with
            me on social media.
          </p>
        </div>
        <ContactForm />
        <SocialTiles />
      </SectionWrapper>
    </main>
  );
}

export default App;
