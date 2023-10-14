import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { RxThickArrowLeft } from "react-icons/rx";
import { motion } from "framer-motion";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../Apollo/queries.js"; // GraphQL sorgunuzu import edin
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) {
    // Veri yüklenirken spinner göster
    return (
      <Layout title={"Portfolio / Projects"} description={"My Projects"}>
        <div className="flex justify-center items-center h-screen">
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Layout title={"Portfolio / Projects"} description={"My Projects"}>
      <section className="h-full max-w-5xl pt-4 mx-auto mb-16 md:pt-16">
    
        {/*Projects*/}
        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default ProjectsPage;
