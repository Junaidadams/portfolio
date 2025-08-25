import { websiteInformation } from "../../constants";
import { motion } from "framer-motion";

const { socials } = websiteInformation[0];

const SocialTiles = () => {
  return (
    <div className="font-panchang border-mainBlack dark:border-mainWhite mx-4 mt-2 flex flex-col space-x-2 border-t pt-4 sm:w-fit md:mx-8">
      <div className="flex space-x-3 text-sm tracking-tighter">
        {socials.map(({ key, name, link, logo: Logo }) => (
          <div
            key={key}
            className="border-mainBlack hover:bg-mainBlack dark:text-mainWhite dark:hover:bg-mainWhite hover:text-mainWhite dark:hover:text-mainBlack w-[90px] border p-1 text-center transition duration-300"
          >
            <motion.a href={link} target="no_target" className="flex flex-col">
              <Logo color="" className="mx-auto mb-1 text-3xl" />
              <div className="">
                <p className="text-xs">{name}</p>
              </div>
            </motion.a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialTiles;
