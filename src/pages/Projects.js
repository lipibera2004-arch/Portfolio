export default function Projects() {
  const projects = [
    {
      title: "Online Retail Shopping Management",
      description:
        "A full-stack web application for managing products, orders, customers, and inventory.",
      image: "/retail.png",
      tech: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website to showcase my skills and projects.",
      image: "/portfolio.png",
      tech: ["React", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "Task Management App",
      description:
        "A web app to manage tasks, track progress, and improve productivity.",
      image: "/task.png",
      tech: ["React", "Node.js", "Express", "MongoDB"],
    },
  ];

  return (
    <section id="projects" className="bg-gray-950 text-white py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold text-pink-400 mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">{project.description}</p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <button className="border px-4 py-2 rounded hover:bg-gray-700">
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
