import React from "react";
import { motion } from "framer-motion";
import SkillObj from "./Skill";
import { Skills } from "../typings";

type Props = {
  skills: Skills[];
};

function Skills(Props: Props) {
  var arr = Props.skills;
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
      className="flex flex-col relative text-center md:text-left h-screen md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Survoller pour voir mes compétences
      </h3>

      <div className="grid grid-cols-4 gap-4 md:grid-cols-5 xl:grid-cols-6">
        {arr.map((skill) => (
          <SkillObj skill={skill} key={skill._id} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
