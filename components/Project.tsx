import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Projects } from "../typings";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

type Props = {
  projects: Projects[];
};

function Project({ projects }: Props) {
  // const [count, setCount] = useState(0);

  // const handleScrollLeft = (event: React.MouseEvent<HTMLDivElement>) => {
  //   if (count > 0) {
  //     let carrousel = document.getElementById("carrousel");
  //     let scrollLenght = event.screenX / projects.length;
  //     setCount(count - scrollLenght);
  //     carrousel?.scroll({ top: 0, left: count, behavior: "smooth" });
  //   }
  //   console.log(count);
  // };
  // const handleScrollRight = (event: React.MouseEvent<HTMLDivElement>) => {
  //   if (count < event.clientX) {
  //     let carrousel = document.getElementById("carrousel");
  //     let scrollLenght = event.clientX / projects.length - 1;
  //     setCount(count + scrollLenght);
  //     carrousel?.scroll({ top: 0, left: count, behavior: "smooth" });
  //   }
  //   console.log(count, event);
  // };

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
      {/* <span onClick={handleScrollLeft} className="cursor-pointer">
        <FaArrowLeft />
      </span> */}
      <div
        id="carrousel"
        className="w-full flex space-x-5 overflow-x-scroll overflow-y-hidden p-10 snap-x scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a] "
      >
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
      {/* <span onClick={handleScrollRight} className="cursor-pointer">
        <FaArrowRight />
      </span> */}
    </motion.div>
  );
}

export default Project;
