import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutImg from "../public/resources/online_cv_about.gif";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative text-center md:text-left h-screen md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
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
      >
        <Image
          src={aboutImg}
          alt="about image"
          className="mb-20 md:mb-0 flex-shrink-0 w-26 h-26 rounded-full object-cover md:rounded-lg md:w-54 md:h-54 xl:w-[500px] xl:x-[600px]"
        />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Un peut de <span className="underline decoration-[#F7AB0A]/50">background</span> sur moi !
        </h4>
        <p className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat culpa ipsam illo! Velit voluptate quia autem
          harum reiciendis commodi voluptatibus, eum corporis eius voluptatem fuga repellendus obcaecati modi
          consequatur? Iure.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
