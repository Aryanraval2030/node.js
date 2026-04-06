import { useState } from "react";

function Login({ setIsLogin }) {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:6419/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    });

    const data = await res.text();
    console.log("DATA:", data);
    if (data.includes("User not found")) {
      alert("User not found");
      setIsLogin(false);
    }
    if (data.includes("Wrong password")) {
      alert("Wrong password.");
      setIsLogin(false);
    }

    if (data === "Login successful ✅") {
      alert("Login success 🚀");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-[360px] border border-white/30">
        
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Welcome Back 👋
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Login to continue
        </p>

        <form
          autoComplete="off"
          className="flex flex-col gap-5"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Enter your email"
            onChange={handleChange}
            name="email"
            value={login.email}
            className="border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          <input
            type="password"
            placeholder="Enter your password"
            onChange={handleChange}
            name="password"
            autoComplete="new-password"
            value={login.password}
            className="border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          <button className="bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 active:scale-95 transition duration-200 shadow-md">
            Login 🚀
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;