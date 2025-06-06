"use client";

import React, { useState } from "react";
import ProfessionalSkills from "./ProfessionalSkills";

interface EducationItem {
  period: string;
  title: string;
  institution: string;
  description: string;
  score?: string;
  location: string;
}

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  description: string;
  location: string;
}

type TabType = "education" | "skills" | "experience" | "interview" | "projects";

// New reusable components
interface TimelineItemProps {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  description,
  badge,
}) => (
  <div className="relative pl-8 before:absolute before:left-[1px] group before:top-0 before:bottom-0 before:w-[6px] transition-all duration-300 before:bg-gray-300">
    <div className="absolute -left-1.5 top-8">
      <div className="size-5 bg-gray-300 transition-all duration-300 group-hover:bg-red-600 rounded-full"></div>
    </div>
    <div className="absolute left-0 top-[38px]">
      <div className="h-1.5 w-8 bg-gray-300 transition-all duration-300 group-hover:bg-red-600"></div>
    </div>
    <div className="bg-gradient-to-br from-gray-50 group-hover:from-indigo-600 group-hover:to-red-500 to-gray-100 rounded-lg shadow-lg md:p-6 p-3 hover:shadow-xl transition-all duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start mb-4">
        <h4 className="text-xl font-semibold group-hover:text-white text-gray-800">
          {title}
        </h4>
        <span className="px-3 py-1 bg-red-50 mt-3 md:mt-0 group-hover:bg-red-600 group-hover:text-white text-red-600 text-sm font-medium rounded-full">
          {badge}
        </span>
      </div>
      <p className="text-gray-500 group-hover:text-white text-sm mb-2">
        {subtitle}
      </p>
      <p className="text-gray-600 group-hover:text-white whitespace-pre-line">{description}</p>
    </div>
  </div>
);

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-lg text-lg font-medium transition-colors ${
      isActive
        ? "text-red-600 bg-red-100 shadow-sm"
        : "text-gray-600 hover:bg-red-100 hover:text-red-600"
    }`}
  >
    {label}
  </button>
);

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("education");

  const education: EducationItem[] = [
    {
      period: "Sep. 2020 - May 2023",
      title: "Bachelor of Arts with Computer Application",
      institution: "Institute of Engineering and Technology DAVV, Indore",
      description:
        "Completed Bachelor's degree in Computer Applications with focus on software development and engineering principles.",
      location: "Indore, Madhya Pradesh",
    },
    {
      period: "June 2018 - May 2020",
      title: "Higher Secondary Education",
      institution: "Govt.Model Higher Secondary School, Banda Belai Sagar Mp",
      description:
        "Completed Higher Secondary Education with focus on Computer Science and Mathematics.",
      location: "Sagar, Madhya Pradesh",
    },
    {
      period: "June 2016 - May 2018",
      title: "Secondary Education",
      institution: "Govt. Higher Secondary School, Pajnari Sagar Mp",
      description:
        "Completed Secondary Education with focus on Computer Science and Mathematics.",
      location: "Sagar, Madhya Pradesh",
    },
  ];

  const experience: ExperienceItem[] = [
    {
      period: "June 2024 - Present",
      title: "Associate Software Engineer",
      company: "University Living",
      description:
        "• Developed and maintained scalable web applications using the MERN stack and Next.js, optimizing platform performance and reducing page load times by 30 percentage to enhance the user experience. \n • Implemented advanced search, booking functionalities, and new features, leading to a 20 percentage increase in user retention and enabling students to efficiently compare and secure accommodations across 300+ cities. \n • Collaborated with cross-functional teams to integrate value-added services and improve overall student experiences, contributing to a 15 percentage growth in the platform’s reach and city listings. \n Tools and Technology: Next JS,VS Code, Postman, MongoDB, TypeScript, Git and GitHub, Node js, Express js,",
      location: "Noida, Uttar Pradesh",
    },
    {
      period: "December 2023 - June 2024",
      title: "Associate Software Engineer",
      company: "DigitalYuga",
      description:
        "• Engineered property management and CRM applications utilizing the MERN stack alongside Next.js, achieving a 25 percentage surge in both client engagement and overall property management efficiency gains across the board. \n • Optimized database performance using MongoDB and Microsoft SQL, reducing query response times by 40 percentage and enhancing data management for client and property records. \n • Led the successful delivery of multiple web solutions, achieving a 95 percentage client satisfaction rate through transparent communication and regular progress updates. \n Tools and Technology: Next JS, Redux, MongoDB, Microsoft SQL, TypeScript, Git and GitHub, Node js, Express js,",
      location: "Bhopal, Madhya Pradesh",
    },
  ];

  const projects = [
    {
      period: "December 2024",
      title: "Property Trade Fair",
      company: "MERN Stack",
      description:
        "• Developed comprehensive ed-tech platform using JavaScript, React.js, Node.js, and MongoDB\n• Implemented responsive UI/UX designs with HTML, CSS, and Tailwind CSS\n• Built and integrated Rest API services using Express.js and Postman with MongoDB Atlas",
      location: "Personal Project",
    },
    {
      period: "April 2023",
      title: "StudyNotion Ed-Tech Web Application",
      company: "MERN Stack",
      description:
        "• Developed comprehensive ed-tech platform using JavaScript, React.js, Node.js, and MongoDB\n• Implemented responsive UI/UX designs with HTML, CSS, and Tailwind CSS\n• Built and integrated Rest API services using Express.js and Postman with MongoDB Atlas",
      location: "Personal Project",
    },
  ];

  const renderTimelineSection = (
    title: string,
    period: string,
    items: (EducationItem | ExperienceItem)[]
  ) => (
    <div>
      <div className="flex items-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        <div className="ml-4 text-sm text-gray-500">{period}</div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            title={item.title}
            subtitle={
              "institution" in item
                ? item.institution
                : `${item.company} (${item.period})`
            }
            description={item.description}
            badge={
              "score" in item
                ? item.score!
                : "location" in item
                ? item.location
                : ""
            }
          />
        ))}
      </div>
    </div>
  );

  const tabs: { id: TabType; label: string }[] = [
    { id: "education", label: "Education" },
    { id: "skills", label: "Technical Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "education":
        return (
          <div className="animate-slideInRight transition-all duration-300">
            {renderTimelineSection("Education", "2016 - 2023", education)}
          </div>
        );
      case "skills":
        return <ProfessionalSkills />;
      case "experience":
        return (
          <div className="animate-slideInRight transition-all duration-300">
            {renderTimelineSection(
              "Professional Experience",
              "2023 - Present",
              experience
            )}
          </div>
        );
      case "projects":
        return (
          <div className="animate-slideInRight transition-all duration-300">
            {renderTimelineSection("Projects", "2023", projects)}
          </div>
        );
      case "interview":
        return (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Interview Section Coming Soon
            </h3>
            <p className="text-gray-600">This section is under development.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="resume" className="md:py-16 py-12">
      <div className="container">
        <h2 className="md:text-5xl text-3xl font-bold text-center text-gray-800 mb-8">
          My Resume
        </h2>
        <div className="flex justify-center overflow-x-auto rounded-lg mb-8 md:mb-16">
          <div className="inline-flex bg-white rounded-lg ml-60 md:ml-0 min-w-max shadow-md p-1 space-x-1">
            {tabs.map((tab) => (
              <TabButton
                key={tab.id}
                label={tab.label}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              />
            ))}
          </div>
        </div>

        {renderContent()}
      </div>
    </section>
  );
};

export default Resume;
