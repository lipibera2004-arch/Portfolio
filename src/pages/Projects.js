const ProjectCard = ({ title, description, technologies, image }) => {
  return (
    <div className="group bg-gray-800 rounded-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:scale-105 border border-gray-700 hover:border-blue-500">
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 h-48 flex items-center justify-center">
        <span className="text-6xl">{image}</span>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-blue-400 mb-3">{title}</h3>
        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
        <div className="mb-6 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <button className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition duration-300 transform hover:scale-105">
          View Project
        </button>
      </div>
    </div>
  );
};

export default function Projects() {
  const projectsData = [
    {
      title: 'Online Retail Shopping Management System',
      description:
        'A mini project developed on localhost that manages online shopping operations such as product listing, user interaction, and order handling.',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
      image: '🛍️',
    },
    {
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio website showcasing my skills, projects, and experience with smooth animations and clean design.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      image: '💼',
    },
    {
      title: 'Task Management App',
      description:
        'A simple and intuitive task management application with add, delete, and mark complete functionality.',
      technologies: ['React', 'JavaScript', 'Local Storage'],
      image: '✅',
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="text-blue-400">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
