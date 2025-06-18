import axios from "axios";
import { Navigate, Outlet } from "react-router";
import { NOT_FOUND_ENDPOINT } from "../constants/endpoints";
import { useLoadAuthUser } from "../hooks/useLoadAuthUser";

const AdminRoutes = () => {
  const {
    data: authUser,
    error,
    isError,
    isLoading,
    isFetching,
  } = useLoadAuthUser();
  const isUnauthorized =
    isError && axios.isAxiosError(error) && error.response?.status === 401;
  const isStillLoading = isLoading || isFetching;
  if (isStillLoading) {
    return null;
  }
  if (
    isUnauthorized ||
    !authUser ||
    (authUser && authUser.userRole !== "ROLE_ADMIN")
  )
    return <Navigate to={NOT_FOUND_ENDPOINT} />;
  return <Outlet />; // a placeholder component that renders the shild routes of a parent route
};

export default AdminRoutes;
