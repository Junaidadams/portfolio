import { navigationLinks, websiteInformation } from "../../constants";
import { motion } from "framer-motion";

const { socials } = websiteInformation[0];

const Footer = () => {
  return (
    <div className="flex py-20 bg-mainWhite dark:bg-mainBlack font-chillax">
      <ul className="my-auto ml-auto mr-6 p-4 capitalize text-periwinkle">
        {navigationLinks.map((link) => (
          <motion.li
            whileHover={{ y: -1 }}
            key={link.key}
            className="text-mainBlack hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100 my-2"
          >
            <a href={link.link}>{link.name}</a>
          </motion.li>
        ))}
      </ul>
      <ul className="my-auto mr-auto pl-6 text-periwinkle border-l border-mainBlack dark:border-mainWhite">
        {socials.map(({ key, name, link, logo: Logo }) => (
          <motion.li
            whileHover={{ y: -1 }}
            key={key}
            className="text-mainBlack dark:text-slate-300 dark:hover:text-slate-100 my-2"
          >
            <a href={link} className="flex space-x-2 ">
              <Logo className="my-auto" />
              <p className="mr-auto text-left">{name}</p>
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
