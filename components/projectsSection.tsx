"use client";
import React from "react";
import { projectsData } from "@/lib/mydata";
import Project from "./project";
import useSectionView from "@/hooks/useSectionView";

export default function Projects() {
  const { ref } = useSectionView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <div className="text-4xl font-bold mb-10 text-center">My projects</div>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
