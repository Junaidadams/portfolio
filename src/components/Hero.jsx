import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-mainWhite dark:bg-mainBlack flex h-[calc(100vh-62px)] items-center justify-center px-[31px] md:h-[calc(100vh-80px)] md:px-[40px] mb-[62px] md:mb-[80px]"
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
        className="relative flex h-full w-full flex-col border border-black bg-[url(/lines.jpg)] bg-cover bg-center dark:border-white dark:bg-[url(/scales.jpg)]"
      >
        <div className="font-panchang text-mainBlack bg-mainWhite dark:bg-mainBlack dark:text-mainWhite round border-y-mainBlack border-r-mainBlack border-l-mainWhite dark:border-y-mainWhite dark:border-r-mainWhite dark:border-l-mainBlack my-auto w-fit max-w-[260px] -translate-[1px] border p-2 text-xl font-light sm:max-w-1/2 sm:p-6 md:max-w-3/5 md:p-8 md:text-2xl lg:p-10">
          <h1 className="">
            Junaid Adams <br />
            Dev Portfolio
          </h1>

          <p className="mt-2 text-sm font-extralight md:text-base">
            Building user-focused websites
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
