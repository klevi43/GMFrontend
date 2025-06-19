import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import {
  ADMIN_ENDPOINT,
  HISTORY,
  LOGIN_ENDPOINT,
  NOT_FOUND_ENDPOINT,
  REGISTER_ENDPOINT,
  USERS_ENDPOINT,
  WORKOUT,
  WORKOUTS_ENDPOINT,
} from "./constants/endpoints";
import { MenuProvider } from "./contexts/MenuProvider";
import { ModProvider } from "./contexts/ModProvider";
import { QueryParamsProvider } from "./contexts/QueryParamProvider";
import "./index.css";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyAccount from "./pages/MyAccount";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import SingleWorkout from "./pages/SingleWorkout";
import WorkoutDashboard from "./pages/WorkoutDashboard";
import WorkoutHistory from "./pages/WorkoutHistory";
import AdminRoutes from "./utils/AdminRoutes";
import NotLoggedInRoute from "./utils/NotLoggedInRoute";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import axiosInstance from "./services/axiosInstance";

function App() {
  console.log(axiosInstance.get("/csrf-cookie"));
  return (
    <>
      <BrowserRouter>
        <QueryParamsProvider>
          <MenuProvider>
            <ModProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route element={<NotLoggedInRoute />}>
                  <Route path={LOGIN_ENDPOINT} element={<Login />} />
                  <Route path={REGISTER_ENDPOINT} element={<Register />} />
                </Route>
                <Route element={<ProtectedRoutes />}>
                  <Route path={USERS_ENDPOINT} element={<MyAccount />} />
                  <Route
                    path={WORKOUTS_ENDPOINT}
                    element={<WorkoutDashboard />}
                  />
                  <Route
                    path={WORKOUTS_ENDPOINT + WORKOUT}
                    element={<SingleWorkout />}
                  />
                  <Route
                    path={WORKOUTS_ENDPOINT + HISTORY}
                    element={<WorkoutHistory />}
                  />
                </Route>
                <Route element={<AdminRoutes />}>
                  <Route path={ADMIN_ENDPOINT} element={<Admin />} />
                </Route>
                <Route path={NOT_FOUND_ENDPOINT} element={<NotFound />} />
              </Routes>
            </ModProvider>
          </MenuProvider>
        </QueryParamsProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
