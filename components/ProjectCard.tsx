import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import * as faIcone from "react-icons/fa";
import * as siIcone from "react-icons/si";

interface Props {
  project: {
    id: number;
    name: string;
    technos: {
      name: string;
      size: number;
    }[];
    text: string[];
    image: string;
  };
}

function ProjectCard({ project }: Props) {
  function IconeSelector(name: string, size: number, index: number) {
    let library = name.slice(0, 2).toLowerCase();
    if (library === "fa") {
      let icone = faIcone[name];
      let elem = React.createElement(icone, { size: size, key: index });
      return elem;
    } else if (library === "si") {
      let icone = siIcone[name];
      let elem = React.createElement(icone, { size: size, key: index });
      return elem;
    }
  }
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      >
        <Image
          src={"https://online-cv-v2-remy-valentin.vercel.app/api/" + project.image}
          alt="project image"
          height={250}
          width={450}
          className="rounded-2xl"
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{project.name}</h4>
        <div className="flex space-x-2 my-2">
          {project.technos.map((icone, index) => IconeSelector(icone.name, icone.size, index))}
        </div>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {project.text.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ProjectCard;
