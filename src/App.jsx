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
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";

function App() {
  return (
    <main className="bg-mainWhite dark:bg-mainBlack flex flex-col space-y-[62px] md:space-y-[80px] scroll-smooth">
      {/* HERO SECTION */}
      <Hero />
      <SectionWrapper
        heading="Milestones"
        subHeading="Up till today."
        id="work"
      >
        <GlassesIcon />
        <Timeline />
      </SectionWrapper>

      {/* PROJECTS SECTION */}
      <SectionWrapper
        heading="Projects"
        subHeading="Recent works."
        id="projects"
      >
        <GlassesIcon />
        <ProjectTile />
      </SectionWrapper>

      {/* ABOUT SECTION */}
      <SectionWrapper heading="About" subHeading="Who I am." id="about">
        <GlassesIcon />
        <div className="mb-3 xl:max-w-2/3">
          <h3 className="font font-panchang dark:text-mainWhite text-left">
            Summary
          </h3>
          <p className="font-chillax mb-2 text-gray-700 dark:text-gray-300">
            Hi, I'm Junaid — a web developer based in{" "}
            <span className="text-gray-900  dark:text-mainWhite">
              Cape Town, South Africa.
            </span>{" "}
            With over two years of experience building modern web applications,
            I specialize in full-stack development. I focus on delivering
            high-quality, scalable, and user-friendly solutions for clients.
          </p>
        </div>
        <QuickFacts />
      </SectionWrapper>

      {/* TECH STACK SECTION */}
      <SectionWrapper heading="Stack" subHeading="What I use" id="techstack">
        <GlassesIcon />
        <div className="mb-3 xl:max-w-2/3">
          <h3 className="font font-panchang dark:text-mainWhite text-left">
            My stack
          </h3>{" "}
          <p className="font-chillax text-gray-700 dark:text-gray-300">
            Many of the techonologies listed here were initially learned during
            my bootcamp with{" "}
            <a
              href="https://www.schoolofit.co.za/"
              className="text-gray-900 underline dark:text-mainWhite"
            >
              Schoolof IT
            </a>{" "}
            and then expanded upon on my own. I am currently completing a{" "}
            <a
              className="text-gray-900 underline dark:text-mainWhite"
              href="https://www.opit.com/courses/computer-science-bachelor/"
            >
              BSc in Modern Computer Science at OPIT (Open Institute of
              Technology)
            </a>{" "}
            to further strengthen my technical foundation.
          </p>
        </div>
        <TechStack />
      </SectionWrapper>

      {/* CONTACT SECTION */}
      <SectionWrapper heading="Contact" subHeading="What I do." id="contact">
        <GlassesIcon />
        <div className="mb-5 xl:max-w-2/3">
          <p className="font-chillax text-gray-700 dark:text-gray-300">
            I am currently open to small projects/opportunities. Small stylistic
            projects are my favorite and I would love to build yours. Feel free
            to reach out through the{" "}
            <span className="font-semibold">form below</span> or connect with me
            on social media.
          </p>
        </div>
        <ContactForm />
        <SocialTiles />
      </SectionWrapper>
    </main>
  );
}

export default App;
