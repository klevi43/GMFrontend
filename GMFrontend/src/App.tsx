import "./App.css";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { AuthProvider } from "./contexts/AuthProvider";
import { ServerErrorProvider } from "./contexts/ServerErrorProvider";
import WorkoutDashboard from "./pages/WorkoutDashboard";
import Register from "./pages/Register";
import { WorkoutsProvider } from "./contexts/WorkoutProvider";
function App() {
  return (
    <>
      <ServerErrorProvider>
        <AuthProvider>
          <WorkoutsProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/workouts" element={<WorkoutDashboard />} />
              </Routes>
            </BrowserRouter>
          </WorkoutsProvider>
        </AuthProvider>
      </ServerErrorProvider>
    </>
  );
}

export default App;
