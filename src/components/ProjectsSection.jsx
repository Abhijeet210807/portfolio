import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion"; // optional, if you want more precise animation

// Import images
import htmlProject from "../assets/Projects/html-projects.jpg";
import mernProject from "../assets/Projects/Mern.png";
import portfolioProject from "../assets/Projects/2.webp";
import ecommerceProject from "../assets/Projects/images.jpg";

import recipefinder from "../assets/Projects/recipefinder.jpg"

import eventmanager from "../assets/Projects/eventmanager.jpg"

const projects = [
  {
    id: 1,
    title: "Search Movie App",
    description: "Search Movie details using MovieDB API and watch trailer",
    image: htmlProject,
    tags: ["React", "html", "css", "MovieDB-API","Youtube-API"],
    demoUrl: "https://search-movie-dusky-eight.vercel.app/",
    githubUrl: "https://github.com/Abhijeet210807/Search_Movie",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="container max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="mb-4 text-3xl font-bold text-center md:text-4xl animate-fade-up-delay-1">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-center text-muted-foreground animate-fade-up-delay-2">
          Explore some of my latest projects with interactive, modern, and aesthetic designs.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-lg shadow-lg group bg-card card-hover animate-fade-up-delay-3"
            >
              {/* Project Image */}
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-secondary/20 text-secondary transition-transform duration-300 group-hover:scale-110"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Description */}
                <h3 className="mb-2 text-xl font-semibold transition-transform duration-300 group-hover:translate-y-1">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground transition-opacity duration-300 group-hover:opacity-90">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="transition-colors duration-300 text-foreground/80 hover:text-primary"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="transition-colors duration-300 text-foreground/80 hover:text-primary"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Github Button */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Nishadbhoyar"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white cosmic-button"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
