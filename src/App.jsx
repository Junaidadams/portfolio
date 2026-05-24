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

function App() {
  return (
    <main className="bg-mainWhite dark:bg-mainBlack flex flex-col space-y-[62px] md:space-y-[80px] scroll-smooth">
      {/* HERO SECTION */}
      <Hero />
      <SectionWrapper id="work">
        <GlassesIcon />
        <div className="font-panchang text-mainBlack dark:bg-mainBlack dark:text-mainWhite w-fit rounded-r-3xl p-4 text-3xl font-extralight sm:p-6 md:px-8 md:text-4xl">
          <h2>Work</h2>
          <p className="text-base font-semibold">What I do.</p>
        </div>
      </SectionWrapper>
      {/* PROJECTS SECTION */}
      <SectionWrapper id="projects">
        <GlassesIcon />
        <div className="font-panchang text-mainBlack dark:bg-mainBlack dark:text-mainWhite w-fit rounded-r-3xl p-4 text-3xl font-extralight sm:p-6 md:px-8 md:text-4xl">
          <h2>Projects</h2>
          <p className="text-base font-semibold">Recent projects.</p>
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
          <p className="text-base font-semibold">Who I am.</p>
        </div>
        <div className="mb-3 px-4 md:px-8 xl:max-w-2/3">
          <h3 className="font font-panchang dark:text-mainWhite text-left">
            Summary
          </h3>
          <p className="font-chillax mb-2 text-gray-700 dark:text-gray-300">
            Hi, I'm Junaid — a freelance web developer based in{" "}
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
      <SectionWrapper id="techstack">
        <GlassesIcon />
        <div className="font-panchang text-mainBlack dark:bg-mainBlack dark:text-mainWhite w-fit rounded-r-3xl p-4 text-3xl font-extralight sm:p-6 md:px-8 md:text-4xl">
          <h2 className="font font-panchang dark:text-mainWhite text-left">
            Tech Stack
          </h2>
          <p className="text-base font-semibold"> Technologies I work with.</p>
        </div>
        <div className="mb-3 px-4 md:px-8 xl:max-w-2/3">
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
            you. Feel free to reach out through the{" "}
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
