import "./App.css";
import "./index.css";

import { ProjectTile } from "./components/ProjectTile";
import TechStack from "./components/TechStack";
import SectionWrapper from "./components/wrappers/SectionWrapper";

function App() {
  return (
    <main className="-mt-[33px]">
      <SectionWrapper id="home">
        <div className="w-11/12 h-11/12 bg-cover bg-center bg-[url(/lines.jpg)] dark:bg-[url(/scales.jpg)] flex flex-col border dark:border-white border-black rounded-4xl">
          <div className="font-panchang font-extralight tracking-wid  text-mainBlack my-auto text-3xl md:text-4xl p-4 sm:p-6 md:p-8 lg:p-10 bg-mainWhite dark:bg-mainBlack dark:text-mainWhite w-fit -translate-[1px] round border border-y-mainBlack border-r-mainBlack border-l-mainWhite dark:border-y-mainWhite dark:border-r-mainWhite dark:border-l-mainBlack ">
            <h1 className="">Junaid Adams</h1>
            <h1 className="">Portfolio</h1>
            <p className="text-base font-semibold">(The third one)</p>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper id="projects">
        <div className="w-11/12 h-11/12 overflow-auto border-black border-[1px] flex flex-col dark:border-white rounded-4xl">
          <div className=" font-panchang font-extralight text-mainBlack text-3xl md:text-4xl p-4 sm:p-6 md:px-8  dark:bg-mainBlack dark:text-mainWhite w-fit rounded-r-3xl">
            <h1>Projects</h1>
            <p className="text-base font-semibold">
              A few of my recent projects.
            </p>
          </div>
          <ProjectTile />
        </div>
      </SectionWrapper>
      <SectionWrapper id="about">
        <div className="w-11/12 h-11/12 overflow-auto border-black border-[1px] flex flex-col dark:border-white rounded-4xl">
          <div className=" font-panchang font-extralight text-mainBlack text-3xl md:text-4xl p-4 sm:p-6 md:px-8  dark:bg-mainBlack dark:text-mainWhite w-fit rounded-r-3xl">
            <h1 className="font font-panchang text-left dark:text-mainWhite ">
              About
            </h1>
            <p className="text-base font-semibold">
              More information about me.
            </p>
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
        </div>
      </SectionWrapper>
    </main>
  );
}

export default App;
