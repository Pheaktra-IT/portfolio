import React from "react";
import { Calendar, MapPin } from "lucide-react";
import { useLanguage } from "../Contexts/LanguageContext";

const Experience: React.FC = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description:
        "Leading development of enterprise web applications using React, Node.js, and cloud technologies.",
      achievements: [
        "Increased application performance by 40%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipelines",
      ],
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations Inc.",
      location: "New York, NY",
      period: "2020 - 2022",
      description:
        "Developed responsive web applications and collaborated with design teams.",
      achievements: [
        "Built 15+ responsive web applications",
        "Improved user engagement by 35%",
        "Established component library",
      ],
    },
    {
      title: "Junior Web Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2019 - 2020",
      description:
        "Contributed to various web development projects and gained experience in modern frameworks.",
      achievements: [
        "Developed key product features",
        "Collaborated with cross-functional teams",
        "Learned new technologies rapidly",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("experienceTitle")}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("experienceSubtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-2 sm:mt-0">
                    <Calendar size={16} className="mr-1" />
                    {exp.period}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 dark:text-gray-300 mb-4">
                  <span className="font-semibold">{exp.company}</span>
                  <span className="hidden sm:inline mx-2">•</span>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-1" />
                    {exp.location}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
