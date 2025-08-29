// src/routes/RoleRedirect.tsx
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "../store/store";

const RoleRedirect = () => {
  const auth = useSelector((state: RootState) => state.auth.user);

  if (auth?.role === "admin") return <Navigate to="/dashboard/admin" replace />;
  if (auth?.role === "merchant")
    return <Navigate to="/dashboard/merchant" replace />;
  if (auth?.role === "member")
    return <Navigate to="/dashboard/member" replace />;

  return <Navigate to="/" replace />;
};

export default RoleRedirect;
