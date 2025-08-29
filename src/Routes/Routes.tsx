import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/Homepage";
import AdminLogin from "../pages/AdminLogin";
import MerchantLogin from "../pages/MerchantLogin";
import MemberLogin from "../pages/MemberLogin";

import ProtectedRoute from "./ProtectedRoute";

import MerchantDashboard from "../pages/dashboard/Merchant/MerchantDashboard";
import MemberDashboard from "../pages/dashboard/Member/MemberDashboard";
import AdminDashboard from "../pages/dashboard/Admin/AdminDashboard";
import DashboardLayout from "../layout/DashboardLayout";
import MerchantCustomers from "../pages/dashboard/Merchant/MerchantCustomers";
import MerchantContribution from "../pages/dashboard/Merchant/MerchantContribution";
import MerchantNotification from "../pages/dashboard/Merchant/MerchantNotification";
import RoleRedirect from "./RoleRedirect";
import NotFound from "../pages/NotFound";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/login/admin", element: <AdminLogin /> },
      { path: "/login/merchant", element: <MerchantLogin /> },
      { path: "/login/member", element: <MemberLogin /> },

      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <RoleRedirect />,
          },
          {
            path: "admin",
            element: (
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            ),
          },

          // merchant
          {
            path: "merchant",
            element: (
              <ProtectedRoute role="merchant">
                <MerchantDashboard />
              </ProtectedRoute>
            ),
          },
          {
            path: "merchant/customers",
            element: (
              <ProtectedRoute role="merchant">
                <MerchantCustomers />
              </ProtectedRoute>
            ),
          },
          {
            path: "merchant/contribution",
            element: (
              <ProtectedRoute role="merchant">
                <MerchantContribution />
              </ProtectedRoute>
            ),
          },
          {
            path: "merchant/notifications",
            element: (
              <ProtectedRoute role="merchant">
                <MerchantNotification />
              </ProtectedRoute>
            ),
          },

          //  member
          {
            path: "member",
            element: (
              <ProtectedRoute role="member">
                <MemberDashboard />
              </ProtectedRoute>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
