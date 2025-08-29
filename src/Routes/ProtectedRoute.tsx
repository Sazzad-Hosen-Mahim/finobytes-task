import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

interface Props {
  children: React.ReactElement;
  role?: "admin" | "merchant" | "member"; // ✅ optional now
}

export default function ProtectedRoute({ children, role }: Props) {
  const auth = useSelector((state: RootState) => state.auth.user);

  if (!auth) {
    // if role provided -> go to that login, else generic login
    return <Navigate to={role ? `/login/${role}` : "/"} replace />;
  }

  // only check role if role is passed
  if (role && auth.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
}
