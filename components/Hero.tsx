import Image from "next/image";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import profilePic from "../public/bob_kerman.jpg";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["PHOTO NON CONTRACTUELLE", "CONSOLE.LOG('HERE')", "CONSOLE.LOG('HERE 2')", "YARN ADD REACT", "CODE ."],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <Image
        src={profilePic}
        alt="Profile picture"
        width={150}
        height={150}
        className="relative rounded-full mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Developpeur web</h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="px-6 py-6 border mx-1 border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">
              About
            </button>
          </Link>
          <Link href="#skills">
            <button className="px-6 py-6 border mx-1 border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">
              Skills
            </button>
          </Link>
          <Link href="#project">
            <button className="px-6 py-6 border mx-1 border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">
              Project
            </button>
          </Link>
          <Link href="#contact">
            <button className="px-6 py-6 border mx-1 border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
