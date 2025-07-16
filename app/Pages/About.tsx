import React from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { useLanguage } from "../Contexts/LanguageContext";

const About: React.FC = () => {
  const { t, language } = useLanguage();

  const stats = [
    { number: "50+", label: t("projects") },
    { number: "5+", label: t("years") },
    { number: "30+", label: t("clients") },
    { number: "15+", label: t("technologies") },
  ];

  const education = [
    {
      degree: "Bachelor of Information Technology Engineering",
      degreeKm: "បរិញ្ញាបត្រ វិស្វកម្មបច្ចេកវិទ្យាព័ត៌មាន",
      school: "Royal University of Phnom Penh",
      schoolKm: "សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ",
      location: "Phnom Penh​​ City, Cambodia",
      locationKm: "ទីក្រុងភ្នំពេញុ​ ,កម្ពុជា",
      period: "2021-2025",
      gpa: "3.8/4.0",
      description: "Focus on software development ",
      descriptionKm: "ផ្តោតលើការអភិវឌ្ឍន៍កម្មវិធី",
      achievements: [
        "Summa Cum Laude Graduate",
        "President of Computer Science Club",
        "Winner of Hackathon 2017",
      ],
      achievementsKm: [
        "និស្សិតបញ្ចប់ការសិក្សាដោយកិត្តិយស Summa Cum Laude",
        "ប្រធានក្លឹប Computer Science",
        "ជាមនុស្សឈ្នះ Hackathon 2017",
      ],
    },
    {
      degree: "High School Diploma",
      degreeKm: "សញ្ញាបត្របឋមសិក្សាទុតិយភូមិ",
      school: "Tech High School",
      schoolKm: "វិទ្យាល័យបច្ចេកវិទ្យា",
      location: "San Francisco, CA",
      locationKm: "San Francisco, CA",
      period: "2010 - 2014",
      gpa: "4.0/4.0",
      description:
        "Valedictorian with focus on Mathematics and Computer Science",
      descriptionKm:
        "សិស្សឆ្នើមបំផុតជាមួយការផ្តោតលើគណិតវិទ្យា និងវិទ្យាសាស្ត្រកុំព្យូទ័រ",
      achievements: [
        "Valedictorian of graduating class",
        "National Merit Scholar",
        "Math Olympiad Gold Medal",
      ],
      achievementsKm: [
        "សិស្សឆ្នើមបំផុតនៃថ្នាក់បញ្ចប់ការសិក្សា",
        "អ្នកទទួលអាហារូបករណ៍ជាតិ",
        "មេដាយមាសកីឡាគណិតវិទ្យាជាតិ",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
            {t("aboutTitle")}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-delay">
            {t("aboutSubtitle")}
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1 animate-slide-in-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {t("aboutHeading")}
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>{t("aboutText1")}</p>
              <p>{t("aboutText2")}</p>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="order-1 lg:order-2 animate-slide-in-right">
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">
              {t("educationTitle")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-delay">
              {t("educationSubtitle")}
            </p>
          </div>

          <div className="max-w-4xl ">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative animate-slide-in-up"
                    style={{ animationDelay: `${index * 0.2}s` }}>
                    {/* Timeline Dot */}
                    <div className="absolute left-6 top-8 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg hidden md:block z-10"></div>

                    {/* Education Card */}
                    <div className="md:ml-16 bg-white dark:bg-gray-900 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 group">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <GraduationCap
                              className="text-blue-500 mr-3 flex-shrink-0"
                              size={24}
                            />
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                              {language === "km" ? edu.degreeKm : edu.degree}
                            </h3>
                          </div>
                          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            {language === "km" ? edu.schoolKm : edu.school}
                          </p>
                          <div className="flex flex-col sm:flex-row sm:items-center text-gray-500 dark:text-gray-400 text-sm mb-3 space-y-1 sm:space-y-0 sm:space-x-4">
                            <div className="flex items-center">
                              <MapPin size={14} className="mr-1" />
                              {language === "km"
                                ? edu.locationKm
                                : edu.location}
                            </div>
                            <div className="flex items-center">
                              <Calendar size={14} className="mr-1" />
                              {edu.period}
                            </div>
                            {edu.gpa && (
                              <div className="flex items-center">
                                <Award size={14} className="mr-1" />
                                GPA: {edu.gpa}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {language === "km"
                          ? edu.descriptionKm
                          : edu.description}
                      </p>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                          <Award className="text-yellow-500 mr-2" size={18} />
                          {t("achievements")}
                        </h4>
                        <ul className="space-y-2">
                          {(language === "km"
                            ? edu.achievementsKm
                            : edu.achievements
                          ).map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-600 dark:text-gray-300 text-sm">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
