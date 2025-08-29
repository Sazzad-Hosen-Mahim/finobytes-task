// src/components/sidebar/MemberSidebar.tsx
import { NavLink } from "react-router-dom";

const MemberSidebar = () => {
  return (
    <nav className="space-y-2 font-bold">
      <NavLink
        to="/dashboard/member"
        className={({ isActive }) =>
          `block px-3 py-2 rounded ${
            isActive
              ? "bg-[#FAFFCA] text-black"
              : "hover:bg-[#FAFFCA]/80 text-black transition"
          }`
        }
      >
        Points Summary
      </NavLink>
    </nav>
  );
};

export default MemberSidebar;
