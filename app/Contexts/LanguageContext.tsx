import React, { createContext, useContext, useState, useEffect } from "react";

interface LanguageContextType {
  language: "en" | "km";
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",
    resume: "Resume",

    // Hero Section
    heroTitle: "Chheang Pheaktra",
    heroSubtitle: "Front-End Developer & UI/UX Designer",
    heroDescription:
      "I create beautiful, functional, and user-centered digital experiences that solve real-world problems with clean code and thoughtful design.",
    viewWork: "View My Work",
    getInTouch: "Get In Touch",
    learnMore: "Learn More",

    // About Section
    aboutTitle: "About Me",
    aboutSubtitle:
      "I'm a passionate developer with 5+ years of experience creating digital solutions that make a difference.",
    aboutHeading: "Crafting Digital Experiences",
    aboutText1:
      "With a background in both computer science and design, I bring a unique perspective to every project. I believe that great software is not just about functionality—it's about creating experiences that users love and remember.",
    aboutText2:
      "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community through blog posts and mentoring.",

    years: "Years",
    clients: "Clients",
    technologies: "Technologies",

    // Skills Section
    skillsTitle: "Skills & Technologies",
    skillsSubtitle:
      "A comprehensive toolkit for building modern, scalable applications",
    frontend: "Frontend",
    backend: "Backend",
    toolsOthers: "Tools & Others",

    // Projects Section
    projectsTitle: "Featured Projects",
    projectsSubtitle: "A showcase of my recent work and personal projects",
    all: "All",
    fullstack: "Full Stack",

    // Experience Section
    experienceTitle: "Experience",
    experienceSubtitle: "My professional journey and key achievements",

    // Contact Section
    contactTitle: "Get In Touch",
    contactSubtitle:
      "Have a project in mind or want to collaborate? I'd love to hear from you!",
    letsConnect: "Let's Connect",
    contactDescription:
      "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.",
    email: "Email",
    phone: "Phone",
    location: "Location",
    followMe: "Follow Me",
    sendMessage: "Send a Message",
    name: "Name",
    subject: "Subject",
    message: "Message",
    yourName: "Your name",
    yourEmail: "your.email@example.com",
    subjectPlaceholder: "What's this about?",
    messagePlaceholder: "Tell me about your project or just say hello!",
    sendBtn: "Send Message",

    // Footer
    footerTitle: "John Doe",
    footerSubtitle: "Full-Stack Developer & UI/UX Designer",
    allRights: "All rights reserved",

    // Education Section
    educationTitle: "Education",
    educationSubtitle: "My academic journey and qualifications",
    achievements: "Key Achievements",
  },
  km: {
    // Navigation
    home: "ទំព័រដើម",
    about: "អំពីខ្ញុំ",
    skills: "ជំនាញ",
    projects: "គម្រោង",
    experience: "បទពិសោធន៍",
    contact: "ទំនាក់ទំនង",
    resume: "ប្រវត្តិរូប",

    // Hero Section
    heroTitle: "ឈាង ភក្រ្តា",
    heroSubtitle: "អ្នកអភិវឌ្ឍន៍ Full-Stack និង UI/UX Designer",
    heroDescription:
      "ខ្ញុំបង្កើតបទពិសោធន៍ឌីជីថលដ៏ស្រស់ស្អាត មានមុខងារ និងផ្តោតលើអ្នកប្រើប្រាស់ ដែលដោះស្រាយបញ្ហាពិតប្រាកដជាមួយកូដស្អាត និងការរចនាដ៏ប្រកបដោយការគិត។",
    viewWork: "មើលការងាររបស់ខ្ញុំ",
    getInTouch: "ទាក់ទងមកខ្ញុំ",
    learnMore: "ស្វែងយល់បន្ថែម",

    // About Section
    aboutTitle: "អំពីខ្ញុំ",
    aboutSubtitle:
      "ខ្ញុំជាអ្នកអភិវឌ្ឍន៍ដែលមានចំណង់ចំណូលចិត្ត ជាមួយបទពិសោធន៍ 5+ ឆ្នាំក្នុងការបង្កើតដំណោះស្រាយឌីជីថលដែលធ្វើឱ្យមានការផ្លាស់ប្តូរ។",
    aboutHeading: "ការបង្កើតបទពិសោធន៍ឌីជីថល",
    aboutText1:
      "ជាមួយនឹងប្រវត្តិក្នុងវិទ្យាសាស្ត្រកុំព្យូទ័រ និងការរចនា ខ្ញុំនាំយកទស្សនៈតែមួយគត់ទៅកាន់គម្រោងនីមួយៗ។ ខ្ញុំជឿថាកម្មវិធីល្អមិនត្រឹមតែអំពីមុខងារទេ—វាអំពីការបង្កើតបទពិសោធន៍ដែលអ្នកប្រើប្រាស់ស្រលាញ់ និងចងចាំ។",
    aboutText2:
      "នៅពេលដែលខ្ញុំមិនកំពុងសរសេរកូដ អ្នកអាចរកឃើញខ្ញុំកំពុងស្វែងរកបច្ចេកវិទ្យាថ្មី ចូលរួមចំណែកដល់គម្រោង open-source ឬចែករំលែកចំណេះដឹងជាមួយសហគមន៍អ្នកអភិវឌ្ឍន៍តាមរយៈការសរសេរប្លុក និងការណែនាំ។",
    years: "ឆ្នាំ",
    clients: "អតិថិជន",
    technologies: "បច្ចេកវិទ្យា",

    // Skills Section
    skillsTitle: "ជំនាញ និងបច្ចេកវិទ្យា",
    skillsSubtitle: "ឧបករណ៍ពេញលេញសម្រាប់បង្កើតកម្មវិធីទំនើប និងអាចពង្រីកបាន",
    frontend: "Frontend",
    backend: "Backend",
    toolsOthers: "ឧបករណ៍ និងផ្សេងៗ",

    // Projects Section
    projectsTitle: "គម្រោងពិសេស",
    projectsSubtitle: "ការបង្ហាញការងារថ្មីៗ និងគម្រោងផ្ទាល់ខ្លួនរបស់ខ្ញុំ",
    all: "ទាំងអស់",
    fullstack: "Full Stack",

    // Experience Section
    experienceTitle: "បទពិសោធន៍",
    experienceSubtitle: "ដំណើរការងារវិជ្ជាជីវៈ និងសមិទ្ធិផលសំខាន់ៗរបស់ខ្ញុំ",

    // Contact Section
    contactTitle: "ទាក់ទងមកខ្ញុំ",
    contactSubtitle: "មានគម្រោងក្នុងចិត្ត ឬចង់សហការ? ខ្ញុំចង់ស្តាប់ពីអ្នក!",
    letsConnect: "តោះភ្ជាប់ទំនាក់ទំនង",
    contactDescription:
      "ខ្ញុំតែងតែបើកចំហរសម្រាប់ការពិភាក្សាអំពីឱកាសថ្មីៗ គម្រោងគួរឱ្យចាប់អារម្មណ៍ ឬគ្រាន់តែជជែកអំពីបច្ចេកវិទ្យា និងការអភិវឌ្ឍន៍។",
    email: "អ៊ីមែល",
    phone: "ទូរស័ព្ទ",
    location: "ទីតាំង",
    followMe: "តាមដានខ្ញុំ",
    sendMessage: "ផ្ញើសារ",
    name: "ឈ្មោះ",
    subject: "ប្រធានបទ",
    message: "សារ",
    yourName: "ឈ្មោះរបស់អ្នក",
    yourEmail: "your.email@example.com",
    subjectPlaceholder: "នេះអំពីអ្វី?",
    messagePlaceholder: "ប្រាប់ខ្ញុំអំពីគម្រោងរបស់អ្នក ឬគ្រាន់តែនិយាយសួស្តី!",
    sendBtn: "ផ្ញើសារ",

    // Footer
    footerTitle: "ឈាង ភក្រ្តា",
    footerSubtitle: "អ្នកអភិវឌ្ឍន៍ Front-End Developer និង UI/UX Designer",
    allRights: "រក្សាសិទ្ធិគ្រប់យ៉ាង",

    // Education Section
    educationTitle: "ការសិក្សា",
    educationSubtitle: "ដំណើរការសិក្សា និងគុណវុឌ្ឍិរបស់ខ្ញុំ",
    achievements: "សមិទ្ធិផលសំខាន់ៗ",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<"en" | "km">("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as "en" | "km";
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "km")) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "km" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
