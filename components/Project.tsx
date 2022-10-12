import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Projects } from "../typings";

type Props = {
  projects: Projects[];
};

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
      className="flex flex-col relative text-center md:text-left h-screen md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-hidden"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>
      <div className="w-full flex space-x-5 overflow-x-scroll overflow-y-hidden p-10 snap-x scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a] ">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </motion.div>
  );
}

export default Project;
