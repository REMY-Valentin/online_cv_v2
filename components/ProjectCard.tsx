import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import * as faIcone from "react-icons/fa";
import * as siIcone from "react-icons/si";
import { Projects } from "../typings";

type Props = {
    project: Projects;
};

function ProjectCard({ project }: Props) {
    function IconeSelector(name: string, index: number) {
        // console.log(typeof name);
        let library = name.slice(0, 2).toLowerCase();
        if (library === "fa") {
            let icone = faIcone[name];
            let elem = React.createElement(icone, { size: 30, key: index });
            return elem;
        } else if (library === "si") {
            let icone = siIcone[name];
            let elem = React.createElement(icone, { size: 30, key: index });
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
                    src={urlFor(project?.image).url()}
                    alt="project image"
                    height={250}
                    width={400}
                    className="rounded-2xl"
                />
            </motion.div>
            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">{project.name}</h4>
                <div className="flex my-2 space-x-2">
                    {project.technos.map((icone, index) => IconeSelector(icone, index))}
                </div>
                <ul className="ml-5 space-y-4 text-lg list-disc">
                    {project.text.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
}

export default ProjectCard;
