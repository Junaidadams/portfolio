import "./App.css";
import "./index.css";

import { ProjectTile } from "./components/ProjectTile";
import TechStack from "./components/TechStack";
import SectionWrapper from "./components/wrappers/SectionWrapper";
import ContactForm from "./components/ContactForm";
import SocialTiles from "./components/SocialTiles";

function App() {
  return (
    <main className="-mt-[33px]">
      <section
        id="home"
        className=" bg-mainWhite dark:bg-[#0e0f0b] h-screen flex items-center justify-center"
      >
        <div className="relative w-11/12 h-11/12 bg-cover bg-center bg-[url(/lines.jpg)] dark:bg-[url(/scales.jpg)] flex flex-col border dark:border-white border-black rounded-4xl">
          <div className="font-panchang font-extralight text-mainBlack my-auto text-3xl md:text-4xl p-4 sm:p-6 md:p-8 lg:p-10  bg-mainWhite dark:bg-mainBlack dark:text-mainWhite w-fit -translate-[1px] round border border-y-mainBlack border-r-mainBlack border-l-mainWhite dark:border-y-mainWhite dark:border-r-mainWhite dark:border-l-mainBlack ">
            <h1 className="">Junaid Adams</h1>
            <h1 className="">Portfolio</h1>
            <p className="text-base font-semibold">(The third one)</p>
          </div>
        </div>
      </section>
      <SectionWrapper id="projects">
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-40 h-40 bg-no-repeat bg-contain rounded-tl-full opacity-40"
          style={{ backgroundImage: "url('/crosstexture.png')" }}
        />
        <div className=" font-panchang font-extralight text-mainBlack text-3xl md:text-4xl p-4 sm:p-6 md:px-8  dark:bg-mainBlack dark:text-mainWhite w-fit rounded-r-3xl">
          <h1>Projects</h1>
          <p className="text-base font-semibold">
            A few of my recent projects.
          </p>
        </div>
        <ProjectTile />
      </SectionWrapper>
      <SectionWrapper id="about">
        <div className=" font-panchang font-extralight text-mainBlack text-3xl md:text-4xl p-4 sm:p-6 md:px-8  dark:bg-mainBlack dark:text-mainWhite w-fit rounded-r-3xl">
          <h1 className="font font-panchang text-left dark:text-mainWhite ">
            About
          </h1>
          <p className="text-base font-semibold">More information about me.</p>
        </div>
        <div className=" px-4 md:px-8 mb-5">
          <h1 className="font font-panchang text-left dark:text-mainWhite ">
            Summary
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            Hi, I'm Junaid. A developer with over two years of experience
            developing web applications and a strong focus on providing great
            value to clients.{" "}
          </p>
        </div>

        <TechStack />
      </SectionWrapper>
      <SectionWrapper id="contact">
        {" "}
        <div className=" font-panchang font-extralight text-mainBlack text-3xl md:text-4xl p-4 sm:p-6 md:px-8  dark:bg-mainBlack dark:text-mainWhite w-fit rounded-r-3xl">
          <h1 className="font font-panchang text-left dark:text-mainWhite ">
            Contact
          </h1>
          <p className="text-base font-semibold">Get in touch with me </p>
        </div>
        <ContactForm />
        <SocialTiles />
      </SectionWrapper>
    </main>
  );
}

export default App;
