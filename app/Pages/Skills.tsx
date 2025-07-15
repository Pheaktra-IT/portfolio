import React from "react";
import { useLanguage } from "../Contexts/LanguageContext";

const Skills: React.FC = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t("frontend"),
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
    },
    {
      title: t("backend"),
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
    },
    {
      title: t("toolsOthers"),
      skills: ["Git", "Docker", "AWS", "Figma", "Jest"],
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("skillsTitle")}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("skillsSubtitle")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 lg:p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-lg">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill}
                    </span>
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
