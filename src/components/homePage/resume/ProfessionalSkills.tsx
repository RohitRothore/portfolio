import React from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
}

const ProfessionalSkills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      skills: ["HTML/CSS", "JavaScript", "TypeScript", "NoSQL"]
    },
    {
      title: "Developer Tools",
      skills: ["VS Code", "Postman", "MongoDB Compass", "Figma"]
    },
    {
      title: "Technologies/Frameworks",
      skills: ["Next.js", "React.js", "Tailwind CSS", "Redux", "Bootstrap", "Git and GitHub", "Node.js", "Express.js"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "Microsoft SQL"]
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {skillCategories.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <div className="flex items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
          </div>
          <div className="space-y-4">
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center">
                  <h4 className="text-lg font-semibold text-gray-800">{skill}</h4>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 mt-2">
                  <div
                    className="bg-gradient-to-r from-red-300 to-red-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfessionalSkills; 