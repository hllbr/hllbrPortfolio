import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { RxThickArrowLeft } from "react-icons/rx";
import { motion } from "framer-motion";
import { getAllProjects } from "../functions/getAllProjects";

export default function ProjectsPage({projects}) {
  return (
    <Layout title={"Portfolio / Projects"} description={"My Projects"}>
      <section className="h-full max-w-5xl pt-4 mx-auto mb-16 md:pt-16">
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
        {/*Projects*/}
        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
            
        </div>
      </section>
    </Layout>
  );
}
export const getStaticProps = async () => {
    const projects = await getAllProjects();
    return {
      props: {
        projects,
      },
    };
  };