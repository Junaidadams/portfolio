import "./App.css";
import "./index.css";

import { motion } from "framer-motion";

import QuickFacts from "./components/QuickFacts";
import ProjectTile from "./components/ProjectTile";
import TechStack from "./components/TechStack";
import SectionWrapper from "./components/wrappers/SectionWrapper";
import ContactForm from "./components/ContactForm";
import SocialTiles from "./components/SocialTiles";
import GlassesIcon from "./components/Glasses";

function App() {
  return (
    <main className="bg-mainWhite dark:bg-mainBlack flex flex-col space-y-[62px] md:space-y-[80px]">
      {/* HERO SECTION */}
      <section
        id="home"
        className="bg-mainWhite dark:bg-mainBlack flex h-[calc(100vh-62px)] items-center justify-center px-[31px] md:h-[calc(100vh-80px)] md:px-[40px]"
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
          className="relative flex h-full w-full flex-col rounded-sm border border-black bg-[url(/lines.jpg)] bg-cover bg-center dark:border-white dark:bg-[url(/scales.jpg)]"
        >
          <div className="font-panchang text-mainBlack bg-mainWhite dark:bg-mainBlack dark:text-mainWhite round border-y-mainBlack border-r-mainBlack border-l-mainWhite dark:border-y-mainWhite dark:border-r-mainWhite dark:border-l-mainBlack my-auto w-fit max-w-[260px] -translate-[1px] border p-2 text-xl font-light sm:max-w-1/2 sm:p-6 md:max-w-3/5 md:p-8 md:text-2xl lg:p-10">
            <h1 className="">Junaid Adams</h1>
            <h1 className=""> Web Developer</h1>
            <p className="mt-2 text-sm font-extralight md:text-base">
              Building fast, modern, and user-focused websites
            </p>
          </div>
        </motion.div>
      </section>

      {/* PROJECTS SECTION */}
      <SectionWrapper id="projects">
        <GlassesIcon />
        <div className="font-panchang text-mainBlack dark:bg-mainBlack dark:text-mainWhite w-fit rounded-r-3xl p-4 text-3xl font-extralight sm:p-6 md:px-8 md:text-4xl">
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
        <div className="font-panchang text-mainBlack dark:bg-mainBlack dark:text-mainWhite w-fit rounded-r-3xl p-4 text-3xl font-extralight sm:p-6 md:px-8 md:text-4xl">
          <h2 className="font font-panchang dark:text-mainWhite text-left">
            About
          </h2>
          <p className="text-base font-semibold">Who I am and what I do.</p>
        </div>
        <div className="mb-3 px-4 md:px-8 xl:max-w-2/3">
          <h3 className="font font-panchang dark:text-mainWhite text-left">
            Summary
          </h3>
          <p className="font-chillax mb-2 text-gray-700 dark:text-gray-300">
            Hi, I'm Junaid — a freelance web developer based in Cape Town, South
            Africa. With over two years of experience building modern web
            applications, I specialize in full-stack
            development. I focus on delivering high-quality, scalable, and
            user-friendly solutions for clients.
          </p>
          <p className="font-chillax text-gray-700 dark:text-gray-300">
            I am currently completing a BSc in Modern Computer Science at OPIT
            (Open Institute of Technology) to further strengthen my technical
            foundation.
          </p>
        </div>
        <QuickFacts />
      </SectionWrapper>
      <SectionWrapper id="techstack">
        <GlassesIcon />
        <div className="font-panchang text-mainBlack dark:bg-mainBlack dark:text-mainWhite w-fit rounded-r-3xl p-4 text-3xl font-extralight sm:p-6 md:px-8 md:text-4xl">
          <h2 className="font font-panchang dark:text-mainWhite text-left">
            Tech Stack
          </h2>
          <p className="text-base font-semibold"> Technologies I work with.</p>
        </div>
        <TechStack />
      </SectionWrapper>

      {/* CONTACT SECTION */}
      <SectionWrapper id="contact">
        <GlassesIcon />
        <div className="font-panchang text-mainBlack dark:bg-mainBlack dark:text-mainWhite w-fit rounded-r-3xl p-4 text-3xl font-extralight sm:p-6 md:px-8 md:text-4xl">
          <h2 className="font font-panchang dark:text-mainWhite text-left">
            Contact
          </h2>
          <p className="text-base font-semibold">
            Let’s build something great.
          </p>
        </div>
        <div className="mb-5 px-4 md:px-8 xl:max-w-2/3">
          {/* <h3 className="font font-panchang text-left dark:text-mainWhite ">
            Interested in working with me?
          </h3> */}
          <p className="font-chillax text-gray-700 dark:text-gray-300">
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
