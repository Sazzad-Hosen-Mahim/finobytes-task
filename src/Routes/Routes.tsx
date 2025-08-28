import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/Homepage";
import AdminLogin from "../pages/AdminLogin";
import MerchantLogin from "../pages/MerchantLogin";
import MemberLogin from "../pages/MemberLogin";

import ProtectedRoute from "./ProtectedRoute";
import AdminDashboard from "../pages/dashboard/AdminDashboard";
import MerchantDashboard from "../pages/dashboard/MerchantDashboard";
import MemberDashboard from "../pages/dashboard/MemberDashboard";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/login/admin",
        element: <AdminLogin />,
      },
      {
        path: "/login/merchant",
        element: <MerchantLogin />,
      },
      {
        path: "/login/member",
        element: <MemberLogin />,
      },

      {
        path: "/dashboard/admin",
        element: (
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/merchant",
        element: (
          <ProtectedRoute role="merchant">
            <MerchantDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/dashboard/member",
        element: (
          <ProtectedRoute role="member">
            <MemberDashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
