export default function About() {
  return (
    <section id="about" className="bg-gray-950 text-white py-16 px-4">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-10">
          About Me
        </h2>

        {/* Content */}
        <div className="bg-gray-900 p-8 rounded-xl shadow-lg">

          <p className="text-gray-300 mb-6 leading-relaxed">
            I am <span className="text-pink-400 font-semibold">Lipi Bera</span>, currently studying 
            <span className="font-semibold"> B.Sc. Computer Science (Hons.)</span> at 
            Midnapore College (Autonomous). I am passionate about web development and 
            enjoy building creative and functional web applications.
          </p>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-6">

            {/* Education */}
            <div className="bg-gray-800 p-5 rounded-lg hover:scale-105 transition">
              <h3 className="text-xl font-semibold text-pink-400 mb-2">
                Education
              </h3>
              <p className="text-gray-400">
                B.Sc. Computer Science (Hons.) <br />
                Midnapore College (Autonomous)
              </p>
            </div>

            {/* Focus */}
            <div className="bg-gray-800 p-5 rounded-lg hover:scale-105 transition">
              <h3 className="text-xl font-semibold text-pink-400 mb-2">
                Focus
              </h3>
              <p className="text-gray-400">
                Frontend Development, User Interface Design, and Modern Web Technologies
              </p>
            </div>

            {/* Goal */}
            <div className="bg-gray-800 p-5 rounded-lg hover:scale-105 transition">
              <h3 className="text-xl font-semibold text-pink-400 mb-2">
                Goal
              </h3>
              <p className="text-gray-400">
                To build innovative and user-centric web solutions that make a positive impact
              </p>
            </div>

          </div>

          {/* Download Resume Button */}
          <div className="text-center mt-10">
            <a href="/resume.pdf" download>
              <button className="bg-pink-500 px-6 py-3 rounded-lg hover:bg-pink-600 transition">
                Download Resume
              </button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
