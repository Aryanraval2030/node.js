import Signup from "../pages/Signup";
import Login from "../pages/Login";
import { useState } from "react";
function Connects() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      {isLogin ? <Login  setIsLogin={setIsLogin} /> : <Signup />}

      <div className="text-center mt-4">
        <button 
        onClick={() => setIsLogin(!isLogin)} 
        className="text-blue-500"
        >
          {isLogin ? "Go to Signup" : "Go to Login"}
        </button>
      </div>
    </div>
  );
}

export default Connects;
