import { navigationLinks, websiteInformation } from "../../constants";
import { motion } from "framer-motion";

const { socials } = websiteInformation[0];

const Footer = () => {
  return (
    <footer className="bg-mainWhite dark:bg-mainBlack font-chillax flex py-20">
      <ul className="text-periwinkle my-auto mr-6 ml-auto p-4 capitalize">
        {navigationLinks.map((link) => (
          <motion.li
            whileHover={{ y: -1 }}
            key={link.key}
            className="text-mainBlack my-2 hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100"
          >
            <a href={link.link}>{link.name}</a>
          </motion.li>
        ))}
      </ul>
      <ul className="text-periwinkle border-mainBlack dark:border-mainWhite my-auto mr-auto border-l pl-6">
        {socials.map(({ key, name, link, logo: Logo }) => (
          <motion.li
            whileHover={{ y: -1 }}
            key={key}
            className="text-mainBlack my-2 dark:text-slate-300 dark:hover:text-slate-100"
          >
            <a href={link} className="flex space-x-2">
              <Logo className="my-auto" />
              <p className="mr-auto text-left">{name}</p>
            </a>
          </motion.li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
