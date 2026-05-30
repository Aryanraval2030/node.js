import reactLogo from "./assets/react.svg";
import "./App.css";
import Signup from "./pages/auth/Signup.jsx";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/common/ProtectedRoute.jsx";
import StudentDashboard from "./pages/student/StudentDashboard.jsx";
import TeacherDashboard from "./pages/teacher/TeacherDashboard.jsx";
import Teacher from "./components/teacher/TeacherHome.jsx";
import Attendance from "./pages/teacher/Attendance.jsx";
import ProjectAssign from "./pages/teacher/ProjectAssign.jsx";
import AdminDashboard from "./pages/admin/DashboardHome.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route
          path="/admin-dashboard"
          element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>}
        />

        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard/*" element={<TeacherDashboard />}>
        {/* Home */}
        <Route index element={<Teacher />} />

        {/* Attendance */}
        <Route path="attendance" element={<Attendance />} />

        {/* Projects */}
        <Route path="projects" element={<ProjectAssign />} />
         </Route>
      </Routes>
    </>
  );
}

export default App;
