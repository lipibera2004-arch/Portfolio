export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-blue-400">About</span> Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25"></div>
              <div className="relative bg-gray-900 p-8 rounded-lg">
                <p className="text-6xl">📚</p>
              </div>
            </div>
          </div>
          <div className="animate-slide-up space-y-6">
            <p className="text-lg leading-relaxed text-gray-300">
              I am <span className="text-blue-400 font-semibold">Lipi Bera</span>, currently studying B.Sc. Computer Science (Hons.) at Midnapore College (Autonomous). I am passionate about web development and enjoy building creative and functional web applications.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">Education</h3>
                <p className="text-gray-300">B.Sc. Computer Science (Hons.) | Midnapore College (Autonomous)</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">Focus</h3>
                <p className="text-gray-300">Frontend Development, User Interface Design, and Modern Web Technologies</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">Goal</h3>
                <p className="text-gray-300">To build innovative and user-centric web solutions that make a positive impact</p>
              </div>
            </div>
            <div className="pt-4">
              <a
                href="mailto:lipibera2004@gmail.com"
                className="inline-block px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
