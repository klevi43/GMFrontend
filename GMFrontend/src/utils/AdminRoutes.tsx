import React from "react";
import { NOT_FOUND_ENDPOINT } from "../constants/endpoints";
import { Navigate, Outlet } from "react-router";
import axios from "axios";
import { useLoadAuthUser } from "../hooks/useLoadAuthUser";

const AdminRoutes = () => {
  const { data: authUser, error, isError } = useLoadAuthUser();
  const isUnauthorized =
    isError && axios.isAxiosError(error) && error.response?.status === 401;
  if (
    isUnauthorized ||
    (!authUser && !isError) ||
    (authUser && authUser.userRole !== "ROLE_ADMIN" && !isError)
  )
    return <Navigate to={NOT_FOUND_ENDPOINT} />;
  return <Outlet />; // a placeholder component that renders the shild routes of a parent route
};

export default AdminRoutes;
