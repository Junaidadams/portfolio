import "./App.css";
import "./index.css";

import { ProjectTile } from "./components/ProjectTile";
import SectionWrapper from "./components/wrappers/SectionWrapper";

function App() {
  return (
    <main className="-mt-[39px]">
      <SectionWrapper id="home">
        <div className="w-11/12 h-11/12 bg-cover bg-center bg-[url(/lines.jpg)] dark:bg-[url(/scales.jpg)] flex flex-col border border-white rounded-4xl">
          <div className="font-panchang font-extralight tracking-wid  text-mainBlack my-auto text-3xl md:text-4xl p-4 sm:p-6 md:p-8 lg:p-10 bg-mainWhite dark:bg-mainBlack dark:text-mainWhite w-fit rounded-r-3xl">
            <h1 className="">Junaid Adams</h1>
            <h1 className="">Portfolio</h1>
            <p className="text-base font-semibold">For real this time</p>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper id="projects">
        <div className="w-11/12 h-11/12 border-black border-[1px] flex flex-col  rounded-4xl">
          <div className=" font-panchang font-extralight text-mainBlack text-3xl md:text-4xl p-4 sm:p-6 md:p-8 lg:p-10 dark:bg-mainBlack dark:text-mainWhite w-fit rounded-r-3xl">
            <h1>Projects</h1>
            <p className="text-base font-semibold">
              A few of my recent projects.
            </p>
          </div>
          <ProjectTile />
        </div>
      </SectionWrapper>
    </main>
  );
}

export default App;
