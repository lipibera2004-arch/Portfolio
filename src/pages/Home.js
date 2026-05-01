export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hello, I am <span className="text-blue-400">Lipi Bera</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              B.Sc. Computer Science (Hons.) Student | Aspiring Web Developer
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
              Passionate about creating beautiful, functional, and user-friendly web applications. Currently exploring modern technologies and best practices in web development.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
              <button
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
              >
                View My Work
              </button>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-64 h-64 animate-bounce-slow">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-40"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full opacity-30"></div>
              <div className="absolute inset-4 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-4xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
