import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutImg from "../public/resources/online_cv_about.gif";

type Props = {};

function About({}: Props) {
    const text =
        "Passioné d'informatique depuis toujours et après des études en montagne russe, j'ai décidé de me lancer dans le dev en suivant une formation en distanciel avec l'école O'Clock. Les 4 premier mois de formation j'ai apris Html, CSS, JavaScript, PHP, mais plus généralement à codé. Je me suis ensuite spétialisé pendant 1 mois avec le framework Symfony ou j'ai pu découvrir le Backend. Est venu ensuite 1 mois de projet en groupe pour découvrir l'expérience de développer a plusieur et la gestion de projet. Après ces 6 mois de formation le syndrome de l'imposteur a montrer le bout de son nez car je me suis rendu compte et me rend toujours compte de l'étendue du monde de la programmation et de ces languages, frameworks, CMS... Mais graçe à la formation O'Clock, on m'a appris à apprendre et donc j'ai continuer à décourvrir de nouveaux frameworks principalement au niveau Frontend avec VueJs et React.";
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl justify-evenly"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
            <motion.div
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                viewport={{ once: false }} //true if you want the animation just once
                className="mt-10 md:mb-0 flex-shrink-0 w-[200px] h-26 md:rounded-lg md:w-[300px] md:h-26 xl:w-[500px] xl:x-[600px] "
            >
                <Image src={aboutImg} alt="about image" className="object-cover rounded-full" />
            </motion.div>
            <div className="px-0 space-y-10 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Un peut de <span className="underline decoration-[#F7AB0A]/50">background</span> sur moi !
                </h4>
                <p className="text-md">{text}</p>
            </div>
        </motion.div>
    );
}

export default About;
