// src/components/sidebar/AdminSidebar.tsx
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <nav className="space-y-2 font-bold">
      <NavLink
        to="/dashboard/admin"
        className={({ isActive }) =>
          `block px-3 py-2 rounded ${
            isActive
              ? "bg-[#FAFFCA] text-black"
              : "hover:bg-[#FAFFCA]/80 transition"
          }`
        }
      >
        Manage Users
      </NavLink>
    </nav>
  );
};

export default AdminSidebar;
