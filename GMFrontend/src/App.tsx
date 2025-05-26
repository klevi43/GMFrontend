import "./App.css";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { AuthProvider } from "./contexts/AuthProvider";
import { ServerErrorProvider } from "./contexts/ServerErrorProvider";
import WorkoutDashboard from "./pages/WorkoutDashboard";
import Register from "./pages/Register";
import SingleWorkout from "./pages/SingleWorkout";
import { WorkoutsProvider } from "./contexts/WorkoutProvider";
import { ModalProvider } from "./contexts/ModalProvider";
import { WORKOUT, WORKOUTS_ENDPOINT } from "./constants/endpoints";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <WorkoutsProvider>
            <ModalProvider>
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
            </ModalProvider>
          </WorkoutsProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
