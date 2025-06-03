import React from "react";
import { useLoadAuthUser } from "../hooks/useLoadAuthUser";
import { Navigate, Outlet } from "react-router";
import { LOGIN_ENDPOINT } from "../constants/constants";

const ProtectedRoutes = () => {
  const { data: authUser, isError } = useLoadAuthUser();
  if (isError || !authUser?.isAuthenticated)
    return <Navigate to={LOGIN_ENDPOINT} />;
  return <Outlet />; // a placeholder component that renders the shild routes of a parent route
};

export default ProtectedRoutes;
