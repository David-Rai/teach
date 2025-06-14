import React, { useState } from "react";

function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative bg-gray-800 rounded-md p-4 my-4 font-mono text-sm overflow-x-auto">
      <pre>{code}</pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded hover:bg-blue-700 transition"
        aria-label="Copy code"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

export default function Intro() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 p-8 font-sans">
      <h1 className="text-5xl font-bold text-blue-500 mb-10 text-center">
        Introduction to Browsers and Websites
      </h1>

      <section className="max-w-4xl mx-auto space-y-16">
        {/* Browser Section */}
        <article className="flex flex-col items-center gap-6 text-center">
          <img
            src="https://media.coschedule.com/uploads/2022/07/ivrpowers-web-browser.007.jpeg?w=3840&q=75"
            alt="Browser Icon"
            className="object-contain"
          />
          <div>
            <h2 className="text-3xl font-semibold text-blue-400 mb-2">
              What is a Browser?
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              A <strong>browser</strong> is a software application that allows you to
              access and view websites on the internet. Popular browsers include
              Google Chrome, Mozilla Firefox, Safari, and Microsoft Edge.
            </p>
            <p className="mt-2 text-gray-400">
              Browsers interpret the code sent from websites (HTML, CSS, JavaScript)
              and render the content visually on your screen.
            </p>

            <CodeBlock
              code={`<img alt="Browser Icon" />\n\n// Example: Open a URL in the browser using JavaScript\nwindow.open("https://www.google.com", "_blank");`}
            />
          </div>
        </article>

        {/* Website Section */}
        <article className="flex flex-col items-center gap-6 text-center">
          <img
            alt="Website Icon"
            className="object-contain"
            src="https://static.wixstatic.com/media/41e17b_f775094d142f497dbd810e1dc80c20fc~mv2.jpg/v1/fill/w_980,h_701,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/41e17b_f775094d142f497dbd810e1dc80c20fc~mv2.jpg"
          />
          <div>
            <h2 className="text-3xl font-semibold text-blue-400 mb-2">
              What is a Website?
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              A <strong>website</strong> is a collection of web pages that contain
              content, such as text, images, videos, and interactive elements.
            </p>
            <p className="mt-2 text-gray-400">
              Websites are built using three main technologies:
            </p>
            <ul className="list-disc list-inside text-gray-300 ml-4 space-y-1 mt-2 text-left max-w-md mx-auto">
              <li><strong>HTML</strong>: Provides the structure of the webpage.</li>
              <li><strong>CSS</strong>: Styles the webpage with colors, fonts, and layouts.</li>
              <li><strong>JavaScript</strong>: Adds interactivity and dynamic behavior.</li>
            </ul>

            <CodeBlock
              code={`<img alt="Website Icon" />\n\n<!-- Simple HTML Structure -->\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>My Website</title>\n    <style>\n      body { background-color: #1e293b; color: white; }\n    </style>\n  </head>\n  <body>\n    <h1>Welcome to My Website</h1>\n    <p>This is a simple HTML page styled with CSS.</p>\n    <script>\n      console.log('Hello from JavaScript!');\n    </script>\n  </body>\n</html>`}
            />
          </div>
        </article>

        {/* How They Work Together Section */}
        <article className="flex flex-col items-center gap-6 text-center">
          <img
            alt="Internet Icon"
            className="w-32 h-32 object-contain"
          />
          <div>
            <h2 className="text-3xl font-semibold text-blue-400 mb-2">
              How Do They Work Together?
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              When you type a website address in a browser, it sends a request to a server
              that hosts the website's files. The server sends back the code (HTML, CSS, JS),
              and the browser reads and renders it so you can see the website visually.
            </p>

            <CodeBlock
              code={`<img alt="Internet Icon" />\n\n// Example: Fetching website data from a server using JavaScript fetch API\nfetch('https://example.com/api/data')\n  .then(response => response.json())\n  .then(data => {\n    console.log('Website data:', data);\n  })\n  .catch(error => console.error('Error fetching data:', error));`}
            />
          </div>
        </article>
      </section>
    </div>
  );
}
