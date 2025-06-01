import "./App.css";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { AuthProvider } from "./contexts/AuthProvider";

import WorkoutDashboard from "./pages/WorkoutDashboard";
import Register from "./pages/Register";
import SingleWorkout from "./pages/SingleWorkout";

import { WORKOUT, WORKOUTS_ENDPOINT } from "./constants/endpoints";
import { MenuProvider } from "./contexts/MenuProvider";
import { QueryParamsProvider } from "./contexts/QueryParamProvider";
import { ModProvider } from "./contexts/ModProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <AuthProvider> */}
        <QueryParamsProvider>
          <ModProvider>
            <MenuProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                  path={WORKOUTS_ENDPOINT}
                  element={<WorkoutDashboard />}
                />
                <Route
                  path={WORKOUTS_ENDPOINT + WORKOUT}
                  element={<SingleWorkout />}
                />
              </Routes>
            </MenuProvider>
          </ModProvider>
        </QueryParamsProvider>
        {/* </AuthProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
