export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Lipi Bera</h3>
            <p className="text-sm">
              Aspiring web developer passionate about creating beautiful and functional web applications.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <p className="text-sm">Email: <a href="mailto:lipibera2004@gmail.com" className="text-blue-400 hover:underline">lipibera2004@gmail.com</a></p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Lipi Bera. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
