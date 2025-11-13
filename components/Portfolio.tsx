"use client";
import React, { useState } from "react";
import { allProjects } from "@/lib/Projects";
import ProjectsCard from "@/components/ProjectsCard";
import { GiStarShuriken } from "react-icons/gi";



export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter logic
  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter(
        (project) => project.type.toLowerCase() === activeFilter.toLowerCase()
      );

  return (
    <section className="pad lg:mb-[60px] xl:mb-[100px]" id="portfolio"> 
      <div className="container">
        {/* Section Header */}
        <div className="w-full lg:w-[80%]">
          <div className="flex justify-start items-center gap-[10px] mb-[10px]">
            <GiStarShuriken className="subheading color " />
           
            <p className="text-[var(--primary)] font-[600] text-[20px] color">PORTFOLIO</p>
          </div>
          
          <p className="font-bold heading color">Create a next level digital products</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-[10px] justify-center sm:justify-end my-[15px]">
          {["All", "Custom", "Wordpress"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-[20px] py-[5px] rounded-full font-[600] duration-300 cursor-pointer
                ${activeFilter === filter
                  ? "color bg-[var(--accordion)]"
                  : "hover:bg-[var(--accordion)]"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] lg:gap-[40px] xl:gap-[60px] mt-[20px] duration-300">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, i) => (
              <ProjectsCard
                key={i}
                cardImage={project.cardImage}
                name={project.name}
                tech_stack={project.tech_stack}
                year={project.year}
                slug={project.slug}
                index={i}
                
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No projects found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
