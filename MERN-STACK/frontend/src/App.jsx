import reactLogo from "./assets/react.svg";
import "./App.css";
import Signup from "./pages/Signup.jsx";
import LoginPopUp from "./components/LoginPopUp.jsx";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;
