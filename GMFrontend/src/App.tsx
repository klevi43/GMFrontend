import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleWorkout from "./pages/SingleWorkout";
import WorkoutDashboard from "./pages/WorkoutDashboard";
import {
  HISTORY,
  NOT_FOUND_ENDPOINT,
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

function App() {
  return (
    <>
      <BrowserRouter>
        <QueryParamsProvider>
          <ModProvider>
            <MenuProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path={LOGIN_ENDPOINT} element={<Login />} />
                <Route path={REGISTER_ENDPOINT} element={<Register />} />
                <Route element={<ProtectedRoutes />}>
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

                <Route path={NOT_FOUND_ENDPOINT} element={<NotFound />} />
              </Routes>
            </MenuProvider>
          </ModProvider>
        </QueryParamsProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
