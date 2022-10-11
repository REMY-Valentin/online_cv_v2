import React from "react";
import { motion } from "framer-motion";
import SkillObj from "./Skill";

interface Props {
  skills: {
    id: number;
    name: string;
    iconeName: string;
    library: string;
    size: number;
    lvl: number;
    directionLeft?: boolean;
  }[];
}

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
      className="divSection"
    >
      <h3 className="titleSection">Skills</h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">Hover for profetiency</h3>

      <div className="grid grid-cols-4 gap-4">
        {arr.map((skill) => (
          <SkillObj skill={skill} key={skill.id} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
