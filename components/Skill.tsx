import React, { FC } from "react";
import { motion } from "framer-motion";
import * as faIcone from "react-icons/fa";
import * as siIcone from "react-icons/si";

interface Props {
  skill: {
    id: number;
    name: string;
    iconeName: string;
    library: string;
    size: number;
    lvl: number;
    directionLeft?: boolean;
  };
}

function Skill({ skill }: Props) {
  const iconeName = skill.iconeName;
  const size = skill.size;
  var icon: any =
    skill.library === "fa"
      ? (icon = React.createElement(faIcone[iconeName], { size: size }))
      : (icon = React.createElement(siIcone[iconeName], { size: size }));
  // console.log(skill);
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          opacity: 0,
          x: skill.directionLeft ? -200 : 200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="border border-gray-500 rounded-full filter group-hover:grayscale transition duration-200 ease-in-out p-3 flex align-middle items-center justify-center h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32"
      >
        <div>{icon}</div>
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold opacity-100 text-black">{skill.lvl}%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
