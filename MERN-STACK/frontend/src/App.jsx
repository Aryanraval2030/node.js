import reactLogo from "./assets/react.svg";
import "./App.css";
import Signup from "./pages/Signup.jsx";
import LoginPopUp from "./components/LoginPopUp.jsx";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import StudentDashboard from "./pages/StudentDashboard.jsx";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Signup />} />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        /> */}
        <Route path="/student-dashboard" element={<StudentDashboard/>}/>
        
      </Routes>
    </>
  );
}

export default App;
