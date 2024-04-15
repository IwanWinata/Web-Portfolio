import React from "react";
import courterCImg from "@/public/images/courterCImage.png";
import redOnionsImg from "@/public/images/RedOnionsImage.png";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
// import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "CourterC",
    description:
      "Contributed as a Full-Stack Mobile App Developer to the development of CourterC, an innovative application aimed at connecting customers with sports court owners.",
    tags: [
      "React Native",
      "ExpressJs",
      "PostgreSQL",
      "Tailwind",
      "Midtrans",
    ],
    imageUrl: courterCImg,
  },
  {
    title: "RedOnions",
    description:
      "Developed and managed of Red Onions, a web-based food commerce platform utilizing React, as a Full-Stack Web Developer.",
    tags: ["ReactJs", "ExpressJs", "Tailwind", "Redux", "PostgreSQL"],
    imageUrl: redOnionsImg,
  },
] as const;
