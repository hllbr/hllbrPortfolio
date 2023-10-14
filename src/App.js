import { motion } from "framer-motion";
import Layout from "./components/Layout";
import React from "react";
import Typical from "react-typical";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import { SiBuymeacoffee, SiWakatime } from "react-icons/si";
import { Link } from "react-router-dom";

const TypingAnimation = React.memo(
  () => {
    return (
      <Typical
        loop={Infinity}
        wrapper="p"
        steps={[
          "Full Stack Developer",
          2000,
          "The Inventor",
          2000,
          "Software Test Engineer",
          2000,
          "AI Prompter",
          2000,
        ]}
      />
    );
  },
  (props, prevProps) => true
);

function App() {
  return (
    <Layout
      title={"Halil İbrahim KOÇAK Portfolio"}
      description={"HLLBR portfolio"}
    >
      <motion.img
        src="/images/coffeeMan.png"
        alt="coffeeMan"
        className="hidden md:block h-auto absolute top-48 right-10 z-[1]"
        whileHover={{ y: -10, rotate: -45, transition: { duration: 0.3 } }}
        width={256}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        dragTransition={{ bounceStiffness: 1000, bounceDamping: 50 }}
        dragElastic={1}
      />
      <motion.img
        src="/images/cuteMug.png"
        alt="sweet-mug"
        className="hidden md:block h-auto absolute bottom-10 left-10 z-[1]"
        whileHover={{ y: -10, rotate: 45, transition: { duration: 0.3 } }}
        width={128}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        dragTransition={{ bounceStiffness: 1000, bounceDamping: 50 }}
        dragElastic={1}
      />
      <main className="w-full h-full">
        <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
          <div className="flex flex-col items-center justify-center md:items-start">
            <h4 className="text-lg text-gray-800 dark:text-white">
              <span className="text-xl font-normal">Hello,</span> I'm
            </h4>
            <h1 className="mt-5 text-xl font-extrabold tracking-normal text-gray-800 capitalize md:text-4xl md:mt-3 dark:text-white">
              Halil İbrahim KOÇAK
            </h1>
            <div className="mt-5 text-2xl font-normal text-transparent bg-gradient-to-r from-pink-500 via-indigo-400 to-green-700 bg-clip-text md:mt-3">
              <TypingAnimation />
            </div>
            {/*Social Icons*/}
            <div className="flex items-center mt-8 space-x-6 md:mt-4">
              <motion.a
                href="https://github.com/hllbr"
                target="*_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <AiFillGithub className="w-8 h-8 fill-current" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/hllbr/"
                target="*_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <AiOutlineLinkedin className="w-8 h-8 fill-current" />
              </motion.a>
              <motion.a
                href="https://wakatime.com/@HLLBR"
                target="*_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <SiWakatime className="w-8 h-8 fill-current" />
              </motion.a>
              {/* <motion.a
                href="https://www.buymeacoffee.com/hllbr"
                target="*_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <SiBuymeacoffee className="w-8 h-8 fill-current" />
              </motion.a> */}
            </div>
          </div>
          {/* Code Area */}
          <article className="mt-3 prose md:mt-4 md:prose-xl dark:prose-dark ">
            <div>
              <pre>
                <code className="language-js">
                  <div className="flex items-center py-0 my-0 space-x-4 text-gray-500">
                    <span>// Portfolio.js </span>
                  </div>
                  <p>
                    <span className="text-gray-500">//</span>{" "}
                    <span className="text-purple-300">Todo:</span> You can drag these coffees, I'm really in love with them ☕☕️ 
                  </p>

                  <div className="flex items-center space-x-4">
                    <img
                      src="/images/hllbr.png"
                      alt="Me"
                      className="w-10 h-10 rounded-full"
                    />

                    <div className="">
                      <p className="text-sm">
                        <span className="text-blue-300  dark:text-pink-300">
                          {" "}
                          {">"}{" "}
                        </span>
                        <span className="font-bold text-pink-300 dark:text-blue-300 dar">
                          const
                        </span>{" "}
                        frontend = ["Reactjs", "JavaScript", "CSS", "Tailwindcss"];{" "}
                      </p>
                      <p className="text-sm">
                        <span className="text-blue-300  dark:text-pink-300">
                          {" "}
                          {">"}{" "}
                        </span>
                        <span className="font-bold text-pink-300 dark:text-blue-300 dar">
                          const
                        </span>{" "}
                        backend = ["Java", "Spring Boot"];{" "}
                      </p>
                      <p className="text-sm">
                        <span className="text-blue-300  dark:text-pink-300">
                          {" "}
                          {">"}{" "}
                        </span>
                        <span className="font-bold text-pink-300 dark:text-blue-300">
                          const
                        </span>{" "}
                        techs = ["GIT", "RESTful services", "Spring
                        Framework"];{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8">
                    <Link to="/projects" className="transition duration-300">
                      Projects
                    </Link>
                    <a
                      href="https://www.youtube.com/@platonfarkndapaylasmlar637/videos"
                      target={"_blank"}
                      rel="noopener noreferrer"
                      className="transition duration-300"
                    >
                      Youtube
                    </a>
                  </div>
                </code>
              </pre>
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
}
export default App;
