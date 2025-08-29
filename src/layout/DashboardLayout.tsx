// src/components/layouts/DashboardLayout.tsx
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import AdminSidebar from "../components/sidebar/AdminSidebar";
import MerchantSidebar from "../components/sidebar/MerchantSidebar";
import MemberSidebar from "../components/sidebar/MemberSidebar";

const DashboardLayout = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-[#5A827E] text-white p-4">
        {user?.role === "admin" && <AdminSidebar />}
        {user?.role === "merchant" && <MerchantSidebar />}
        {user?.role === "member" && <MemberSidebar />}
      </div>

      {/* Main content */}
      <div className="flex-1 bg-gray-50 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
