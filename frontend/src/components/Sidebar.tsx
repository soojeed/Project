import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>

      <nav className="flex flex-col gap-3">
        <NavLink to="/dashboard/contact">Contact</NavLink>
        <NavLink to="/dashboard/projects">Projects</NavLink>
        <NavLink to="/dashboard/experience">Experience</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
