import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
interface Props {
  children: React.ReactElement;
  role: "admin" | "merchant" | "member";
}

export default function ProtectedRoute({ children, role }: Props) {
  const auth = useSelector((state: RootState) => state.auth.user);

  if (!auth) {
    return <Navigate to={`/login/${role}`} replace />;
  }

  if (auth.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
}
