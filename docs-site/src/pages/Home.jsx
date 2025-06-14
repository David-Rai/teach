import React from 'react';
import githubLogo from '../../public/github.png'
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';

function App() {
  const navigate = useNavigate()

  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col">
      <Nav />

      {/* Hero Section */}
      <section id="home" className="flex-grow flex items-center justify-center text-center px-4">
        <div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight font-montserrat">
            Kickstart Your
          </h2>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight font-montserrat">
            Web Development Journey
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8 font-roboto">
            Learn how to build websites from scratch — no experience needed.
            Get started with HTML, CSS, JavaScript and more.
          </p>
          <a
            onClick={() => navigate("/docs")}
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
