import React from 'react';
import githbubLogo from '../../github-mark/._github-mark-white.svg'
function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">Limitless</h1>
          <ul className="flex gap-6 text-gray-300 text-sm">
            <li><a href="#home" className="hover:text-white"></a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
            <img src={githbubLogo} alt="" />
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex-grow flex items-center justify-center text-center px-4">
        <div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight font-montserrat">
            Kickstart Your Web Development Journey
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8 font-roboto">
            Learn how to build websites from scratch — no experience needed.
            Get started with HTML, CSS, JavaScript and more.
          </p>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-medium transition"
          >
            Start Learning
          </a>
        </div>
      </section>

    </div>
  );
}

export default App;
