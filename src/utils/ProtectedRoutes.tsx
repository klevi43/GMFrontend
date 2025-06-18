import axios from "axios";
import { Navigate, Outlet } from "react-router";
import { LOGIN_ENDPOINT } from "../constants/endpoints";
import { useLoadAuthUser } from "../hooks/useLoadAuthUser";

const ProtectedRoutes = () => {
  const {
    data: authUser,
    error,
    isError,
    isLoading,
    isFetching,
  } = useLoadAuthUser();
  console.log(authUser);
  const isStillLoading = isLoading || isFetching;
  const isUnauthorized =
    isError && axios.isAxiosError(error) && error.response?.status === 401;
  if (isStillLoading) {
    return null;
  }
  if (isUnauthorized || !authUser) return <Navigate to={LOGIN_ENDPOINT} />;
  return <Outlet />; // a placeholder component that renders the shild routes of a parent route
};

export default ProtectedRoutes;
