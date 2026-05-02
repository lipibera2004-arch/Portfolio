import myPhoto from '../assets/myphoto.jpg';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4">

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT */}
        <div className="text-center md:text-left">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm Lipi Bera
          </h1>

          <p className="text-lg font-bold text-gray-300 mb-4">
            B.Sc. Computer Science (Hons.) Student | Aspiring Web Developer
          </p>

          <p className="text-gray-400 mb-6 max-w-md">
            Passionate about creating beautiful, functional, and user-friendly web applications.
            Currently exploring modern technologies and best practices in web development.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center md:justify-start mb-6">

            <a href="#contact">
              <button className="bg-pink-500 px-6 py-2 rounded-lg hover:bg-pink-600 transition">
                Get In Touch
              </button>
            </a>

            <a href="#projects">
              <button className="border border-pink-500 px-6 py-2 rounded-lg hover:bg-pink-500 transition">
                View My Work
              </button>
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-6 justify-center md:justify-start text-2xl">

            <a href="https://www.linkedin.com/in/lipi-bera-32b2b7282" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>

            <a href="https://www.instagram.com/lipi_bera96" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>

            <a href="https://github.com/lipibera2004-arch" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>

          </div>

        </div>

        {/* RIGHT - IMAGE */}
        <div>
          <img
            src={myPhoto}
            alt="Lipi Bera"
            className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-full border-4 border-pink-500 shadow-lg"
          />
        </div>

      </div>

    </div>
  );
}
