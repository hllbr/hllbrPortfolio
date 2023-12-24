import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../Apollo/queries.js";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css";
import RetroTimer from "../components/RetroTimer";

const Spinner = () => (
  <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
);

const ProjectsPage = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  const [showCountdown, setShowCountdown] = useState(true);

  const handleCountdownEnd = () => {
    setShowCountdown(false);
  };

  useEffect(() => {
    if (!showCountdown) {
      // Load project data when the countdown is complete
      // This will start displaying project cards
    }
  }, [showCountdown]);

  return (
    <>
      <Layout>
        <div className="flex justify-center items-center">
          {showCountdown ? (
            <RetroTimer seconds={3} onCountdownEnd={handleCountdownEnd} />
          ) : null}
          {loading && !showCountdown ? <Spinner /> : null}
          {error && !showCountdown ? <p>Error: {error.message}</p> : null}
          {!showCountdown && !loading && !error ? (
            <section className="h-full max-w-5xl pt-4 mx-auto mb-16 md:pt-16">
              {/* Projects */}
              <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
                {data.projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </Layout>
    </>
  );
};

export default ProjectsPage;
