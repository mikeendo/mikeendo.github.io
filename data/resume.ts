export interface ResumeData {
  name: string;
  location: string;
  summary: string;
  experience: Experience[];
  education: Education;
  technicalExpertise: TechnicalExpertise;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description?: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  school: string;
  location: string;
}

export interface TechnicalExpertise {
  software: string[];
  languages: string[];
  databases: string[];
  business: string[];
}

// Calculate years of experience dynamically
const startYear = 2010;
const currentYear = new Date().getFullYear();
const yearsOfExperience = currentYear - startYear;

export const resumeData: ResumeData = {
  name: "mendo",
  location: "Honolulu, HI",
  summary: `Experienced Software Architect with a proven track record of delivering scalable and secure cloud-based solutions. Over ${yearsOfExperience} years of expertise in developing enterprise applications, leading engineering teams, and fostering mentorship within organizations. Adept at architecting robust systems that streamline operations for both public and private sectors.`,
  experience: [
    {
      title: "Lead Software Engineer",
      company: "Mystery Company Name",
      location: "Remote, Honolulu, HI",
      period: "2025 - present",
      bullets: [
        " still rendering...."
      ]
    },
    {
      title: "Software Architect",
      company: "Agile Defense",
      location: "Remote, Honolulu, HI",
      period: "2020 – 2025",
      description: "(Formerly RevaComm Inc., acquired by Intellibridge Inc., then Agile Defense)",
      bullets: [
        "Led the development of Puckboard, a cloud-based scheduling software solution for the U.S. Air Force, serving over 35,000 users, utilizing Spring Boot and React.",
        "Implemented robust security measures to safeguard sensitive user data across multiple environments.",
        "Deployed integer programming optimization and artificial intelligence enhancements through to production",
        "Optimized system performance, significantly improving the efficiency of high-value endpoints.",
        "Contributed to the development of a Big Bang platform derivative for Center for Medicare and Medicaid Services, using Infrastructure as Code principles.",
        "As Hiring Manager, defined engineering competencies, career growth tracks, and promoted a strong technical culture within the team.",
        "Mentored and provided guidance to software engineers across various programs, fostering professional growth and innovation."
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "Matson Navigation",
      location: "Honolulu, HI",
      period: "2018 – 2020",
      bullets: [
        "Maintained and supported the Terminal Operating System, ensuring consistent and reliable performance for critical business operations.",
        "Developed and maintained JavaEE applications to streamline terminal operations.",
        "Designed and developed a Spring-based Business Intelligence application to support strategic decision-making.",
        "Acted as a liaison between business units and technical teams, providing on-call support for end users to resolve system issues."
      ]
    },
    {
      title: "Software Engineer",
      company: "DataHouse Consulting, Inc",
      location: "Honolulu, HI",
      period: "2012 – 2018",
      bullets: [
        "Architected, developed, and maintained both public and internal-facing web applications for the Department of Labor Industrial Relations Unemployment Insurance Office.",
        "Led the modernization of legacy systems, architecting frameworks for migration to cloud-native technologies.",
        "Managed the full lifecycle of development, test, staging, and production servers, ensuring stable deployment environments.",
        "Created automation and deployment utilities using Git, Bash, and Jenkins, streamlining the deployment process.",
        "Developed automated unit and end-to-end testing frameworks with Karma, Mocha, Selenium, and Grunt.",
        "Built Java applications using JSF, WebSphere, and IBM Host Access Transformation Services.",
        "Developed cloud applications using Node.js, AngularJS, and Express.",
        "Created an Electron JS application to meet client-specific requirements."
      ]
    },
    {
      title: "IT Engineer & Web Developer",
      company: "RevaComm Inc",
      location: "Honolulu, HI",
      period: "2010 – 2012",
      bullets: [
        "Engineered IT solutions, including the development of Microsoft desktop and web applications interfacing with GIS, CAD, and Microsoft Office software.",
        "Wrote user and technical documentation for various IT projects, including application development and network deployments.",
        "Facilitated user training and conducted quality control on development projects, ensuring high standards.",
        "Performed server management and deployment for both Windows and Linux-based environments.",
        "Provided troubleshooting support and engineered solutions to streamline client processes through web-based applications."
      ]
    }
  ],
  education: {
    degree: "B.S. in Information and Computer Science",
    school: "University of Hawaii at Manoa",
    location: "Honolulu, HI"
  },
  technicalExpertise: {
    software: ["NodeJS", "AngularJS", "Jenkins", "ElectronJS", "ReactJS", "Spring", "JakartaEE"],
    languages: ["Java", "Groovy", "Python", "Typescript", "Javascript", "C#", "ASP.NET", "SQL", "HTML", "PHP", "XSLT", "XML"],
    databases: ["PostgreSQL", "MS SQL Server", "Oracle", "MySQL", "Sqlite", "DB2"],
    business: ["Customer service relations", "IT Solutions"]
  }
};