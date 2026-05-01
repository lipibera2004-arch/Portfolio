const SkillCard = ({ icon, title, skills }) => {
  return (
    <div className="group bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300 transform hover:scale-105 border border-gray-700 hover:border-blue-500">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-blue-400 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm hover:bg-blue-500 transition duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function Skills() {
  const skillsData = [
    {
      icon: '🖥️',
      title: 'Programming Languages',
      skills: ['C', 'C++', 'Java', 'Python'],
    },
    {
      icon: '⚛️',
      title: 'Frontend Development',
      skills: ['React JS', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      icon: '🎨',
      title: 'Design & Tools',
      skills: ['Responsive Design', 'Git', 'VS Code', 'Figma Basics'],
    },
    {
      icon: '🚀',
      title: 'Other Skills',
      skills: ['Problem Solving', 'Team Collaboration', 'Communication'],
    },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="text-blue-400">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skillGroup, index) => (
            <SkillCard
              key={index}
              icon={skillGroup.icon}
              title={skillGroup.title}
              skills={skillGroup.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
