import { NavLink } from "react-router-dom";

const sidebarLinks = [
  { title: "Introduction", path: "/docs/intro" },
  { title: "Getting Started", path: "/docs/getting-started" },
  { title: "HTML Basics", path: "/docs/html" },
  { title: "CSS Styling", path: "/docs/css" },
  { title: "JavaScript", path: "/docs/js" },
];

export default function Sidebar() {
  return (
    <aside className="w-[20%] h-full bg-blue-400 text-white p-6 fixed z-10 left-0">
      <h2 className="text-2xl font-bold mb-6">DocsNav</h2>
      <nav className="space-y-2">
        {sidebarLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md hover:bg-white/20 transition ${
                isActive ? "bg-white/30 font-semibold" : ""
              }`
            }
          >
            {link.title}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
