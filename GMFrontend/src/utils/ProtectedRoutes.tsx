import React from "react";
import { useLoadAuthUser } from "../hooks/useLoadAuthUser";
import { Navigate, Outlet } from "react-router";
import { LOGIN_ENDPOINT } from "../constants/constants";
import axios from "axios";

const ProtectedRoutes = () => {
  const {
    data: authUser,
    error,
    isError,
    isLoading,
    isFetching,
  } = useLoadAuthUser();
  const isStillLoading = isLoading || isFetching;
  const isUnauthorized =
    isError && axios.isAxiosError(error) && error.response?.status === 401;
  console.log(!isStillLoading);
  console.log(isUnauthorized);
  console.log(authUser);
  if (!isStillLoading && (isUnauthorized || !authUser))
    return <Navigate to={LOGIN_ENDPOINT} />;
  return <Outlet />; // a placeholder component that renders the shild routes of a parent route
};

export default ProtectedRoutes;
