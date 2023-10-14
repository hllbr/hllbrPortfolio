import { Link } from "react-router-dom";
import { RxThickArrowLeft } from "react-icons/rx";
import { motion } from "framer-motion";

export const BacktoHomePageButton = () => {
  return (
    <section className="h-full max-w-5xl pt-16 mx-auto mb-16 md:pt-16">
      <Link to="/">
        <motion.a
          rel="noopener noreferrer"
          className="flex items-center space-x-2 font-semibol pb-6 text-blue-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
          // whileHover={{ scale: 1.1 }}
        >
          <RxThickArrowLeft className={"w-8 h-8 fill-current "} />
          <span className="text-xl font-normal">Back to Home</span>
        </motion.a>
      </Link>
    </section>
  );
};
export default BacktoHomePageButton;
