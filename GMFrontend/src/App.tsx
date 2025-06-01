import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleWorkout from "./pages/SingleWorkout";
import WorkoutDashboard from "./pages/WorkoutDashboard";
import { WORKOUT, WORKOUTS_ENDPOINT } from "./constants/endpoints";
import { MenuProvider } from "./contexts/MenuProvider";
import { ModProvider } from "./contexts/ModProvider";
import { QueryParamsProvider } from "./contexts/QueryParamProvider";

function App() {
  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
}

export default App;
