import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleWorkout from "./pages/SingleWorkout";
import WorkoutDashboard from "./pages/WorkoutDashboard";
import {
  ADMIN_ENDPOINT,
  HISTORY,
  NOT_FOUND_ENDPOINT,
  USERS_ENDPOINT,
  WORKOUT,
  WORKOUTS_ENDPOINT,
} from "./constants/endpoints";
import { MenuProvider } from "./contexts/MenuProvider";
import { ModProvider } from "./contexts/ModProvider";
import { QueryParamsProvider } from "./contexts/QueryParamProvider";
import { LOGIN_ENDPOINT, REGISTER_ENDPOINT } from "./constants/constants";
import NotFound from "./pages/NotFound";
import WorkoutHistory from "./pages/WorkoutHistory";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import MyAccount from "./pages/MyAccount";
import Admin from "./pages/Admin";
import AdminRoutes from "./utils/AdminRoutes";
import NotLoggedInRoute from "./utils/NotLoggedInRoute";

function App() {
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
