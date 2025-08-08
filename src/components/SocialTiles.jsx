import { websiteInformation } from "../../constants";
import { motion } from "framer-motion";

const { socials } = websiteInformation[0];

const SocialTiles = () => {
  return (
    <div className="flex flex-col sm:w-fit font-panchang space-x-2 px-4 md:px-8 pt-4 border-t border-mainBlack">
      <h1 className="font font-panchang text-left mb-4 dark:text-mainWhite ">
        Find me here:
      </h1>{" "}
      <div className="flex space-x-3 text-sm tracking-tighter">
        {socials.map(({ key, name, link, logo: Logo, accountName }) => (
          <div
            key={key}
            className=" text-center border border-mainBlack p-1 hover:bg-mainBlack dark:hover:bg-mainWhite hover:text-mainWhite dark:hover:text-mainBlack transition duration-300 w-[90px] "
          >
            <motion.a href={link} className="flex flex-col">
              <Logo size={60} color="" className="mb-1 mx-auto" />
              <div className="">
                <p className="">{name}</p>
              </div>
            </motion.a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialTiles;
