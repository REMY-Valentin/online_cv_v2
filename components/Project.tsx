import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface Props {
  projects: {
    id: number;
    name: string;
    technos: {
      name: string;
      size: number;
    }[];
    text: string[];
    image: string;
  }[];
}

function Project({ projects }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="divSection overflow-hidden"
    >
      <h3 className="titleSection">Projects</h3>
      <div className="w-full flex space-x-5 overflow-x-scroll overflow-y-hidden p-10 snap-x scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a] ">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </motion.div>
  );
}

export default Project;
