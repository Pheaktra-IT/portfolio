import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "../Contexts/LanguageContext";

const Projects: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and Stripe integration.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates.",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Firebase", "Vuetify"],
      category: "frontend",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard with location-based forecasts.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Chart.js"],
      category: "frontend",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "API Gateway Service",
      description:
        "A microservices API gateway with authentication and rate limiting.",
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Node.js", "Express", "Redis", "Docker"],
      category: "backend",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const categories = [
    { id: "all", label: t("all") },
    { id: "frontend", label: t("frontend") },
    { id: "backend", label: t("backend") },
    { id: "fullstack", label: t("fullstack") },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("projectsTitle")}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("projectsSubtitle")}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                filter === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}>
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    className="p-3 bg-white rounded-full text-gray-700 hover:text-blue-600 transition-colors">
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 bg-white rounded-full text-gray-700 hover:text-blue-600 transition-colors">
                    <Github size={18} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
