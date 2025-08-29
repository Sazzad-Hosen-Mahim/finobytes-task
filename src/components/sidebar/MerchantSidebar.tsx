// src/components/sidebar/MerchantSidebar.tsx
import { NavLink } from "react-router-dom";

const MerchantSidebar = () => {
  return (
    <nav className="space-y-2 font-bold">
      <NavLink
        to="/dashboard/merchant"
        end
        className={({ isActive }) =>
          `block px-3 py-2 rounded ${
            isActive
              ? "bg-[#FAFFCA] text-black"
              : "hover:bg-[#FAFFCA]/80 text-black transition"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/dashboard/merchant/customers"
        className={({ isActive }) =>
          `block px-3 py-2 rounded ${
            isActive
              ? "bg-[#FAFFCA] text-black"
              : "hover:bg-[#FAFFCA]/80 text-black transition"
          }`
        }
      >
        Lookup Customer
      </NavLink>
      <NavLink
        to="/dashboard/merchant/contribution"
        className={({ isActive }) =>
          `block px-3 py-2 rounded ${
            isActive
              ? "bg-[#FAFFCA] text-black"
              : "hover:bg-[#FAFFCA]/80 text-black transition"
          }`
        }
      >
        Set Contribution Rate
      </NavLink>
      <NavLink
        to="/dashboard/merchant/notifications"
        className={({ isActive }) =>
          `block px-3 py-2 rounded ${
            isActive
              ? "bg-[#FAFFCA] text-black"
              : "hover:bg-[#FAFFCA]/80 text-black transition"
          }`
        }
      >
        Notifications
      </NavLink>
    </nav>
  );
};

export default MerchantSidebar;
