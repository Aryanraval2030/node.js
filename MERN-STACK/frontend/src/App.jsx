import reactLogo from "./assets/react.svg";
import "./App.css";
import Signup from "./pages/Signup.jsx";
import LoginPopUp from "./components/LoginPopUp.jsx";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import StudentDashboard from "./pages/StudentDashboard.jsx";
import TeacherDashboard from "./pages/TeacherDashboard.jsx";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Signup />} />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
            </ProtectedRoute>
          }
        /> */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />

        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
      </Routes>
    </>
  );
}

export default App;
