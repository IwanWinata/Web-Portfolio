"use client";
// Next Initialize
import Image from "next/image";
import Link from "next/link";

// Data Initialize
import avatar from "@/public/images/avatar.png";

// Package Initialize
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

// Icons Initialize
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import useSectionView from "@/hooks/useSectionView";

export default function IntroSection() {
  const { ref } = useSectionView("Home", 0.5);
  return (
    <section ref={ref} id="home" className="scroll-mt-[100rem]">
      <div className="grid grid-cols-1 lg:grid-cols-12 ">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-500">
              Hello,{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Welcome",
                1000,
                "I'm Iwan Winata",
                1000,
                "I'm Iwan",
                1000,
              ]}
              wrapper="span"
              speed={90}
              repeat={Infinity}
            />
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-6 text-black">
            I'm systems engineer with specialize in designing robust solutions
            that drive innovation. Let's connect to discuss how I can contribute
            to your technology goals.
          </p>
          <div className="text-lg font-medium grid">
            <Link
              href="#contact"
              className="px-6 py-3 mr-4 w-full sm:w-fit rounded-full bg-gradient-to-br 
            from-[#FBE2E3] via-[#F8C4C5] to-[#D7C2E5] hover:scale-110 text-gray-50 font-semibold
            focus:scale-110 transition active:scale-105"
            >
              Contact Me
            </Link>
            <a
              download
              href="/files/IwanWinataCV.pdf"
              className="px-6 py-3 font-semibold w-full sm:w-fit rounded-full bg-gray-50 
            hover:bg-[#FDEBF0] text-gray-600 border mt-3 hover:scale-110
            focus:scale-110 transition active:scale-105"
            >
              Download CV
            </a>
            <div className="flex gap-2 mt-2 ml-1">
              <a
                href="https://www.linkedin.com/in/iwan-winata/"
                target="_blank"
                className="bg-white p-3 w-full sm:w-10 flex items-center text-center
               text-gray-700 gap-2 rounded-full hover:scale-110
               focus:scale-110 transition active:scale-105 hover:bg-[#FDEBF0]"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://github.com/IwanWinata"
                target="_blank"
                className="bg-white p-3 w-full sm:w-10 flex items-center text-center
               text-gray-700 gap-2 rounded-full text-[1.35rem] hover:scale-110
               focus:scale-110 transition active:scale-105 hover:bg-[#FDEBF0]"
              >
                <FaGithubSquare />
              </a>
            </div>
          </div>
        </motion.div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <div className="rounded-full bg-rose-100 w-[15.625rem] h-[15.625rem] lg:w-[25rem] lg:h-[25rem] relative">
              <Image
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2
              left-1/2"
                src={avatar}
                alt="avatar"
                width={300}
                height={300}
                priority={true}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
