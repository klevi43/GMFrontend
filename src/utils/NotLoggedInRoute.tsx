import { WORKOUTS_ENDPOINT } from "../constants/endpoints";
import { useLoadAuthUser } from "../hooks/useLoadAuthUser";

import { Navigate, Outlet } from "react-router";

const NotLoggedInRoute = () => {
  const {
    data: authUser,
    error,
    isError,
    isLoading,
    isFetching,
  } = useLoadAuthUser();
  const isStillLoading = isLoading || isFetching;
  if (!isStillLoading && authUser) return <Navigate to={WORKOUTS_ENDPOINT} />;
  return <Outlet />;
};

export default NotLoggedInRoute;
