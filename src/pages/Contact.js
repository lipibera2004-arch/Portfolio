import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Get In <span className="text-blue-400">Touch</span>
        </h2>
        <p className="text-center text-gray-300 mb-12">
          Feel free to reach out to me for any inquiries or collaboration opportunities!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="text-3xl">📧</div>
              <div>
                <h3 className="text-lg font-bold text-blue-400">Email</h3>
                <a
                  href="mailto:lipibera2004@gmail.com"
                  className="text-gray-300 hover:text-blue-400 transition"
                >
                  lipibera2004@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-3xl">📍</div>
              <div>
                <h3 className="text-lg font-bold text-blue-400">Location</h3>
                <p className="text-gray-300">Midnapore, West Bengal, India</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-3xl">💬</div>
              <div>
                <h3 className="text-lg font-bold text-blue-400">Response Time</h3>
                <p className="text-gray-300">Usually responds within 24 hours</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {submitted && (
              <div className="bg-green-500 text-white p-4 rounded-lg animate-fade-in">
                ✓ Thank you! Your message has been received.
              </div>
            )}
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                rows="4"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition text-white resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
