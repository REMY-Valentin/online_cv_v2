import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <header className="flex align-middle justify-between sticky top-0 max-w-7xl mx-auto z-20 p-5">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <SocialIcon url="https://github.com/REMY-Valentin" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://www.linkedin.com/in/valentin-remy-9aa9b4151/" fgColor="gray" bgColor="transparent" />
      </motion.div>
      <Link href="#contact">
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" />
          <p className="cursor-pointer uppercase hidden md:inline-flex text-sm text-gray-500">Me contacter</p>
        </motion.div>
      </Link>
    </header>
  );
}

export default Header;
