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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[350px]">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form autoComplete="off" className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={login.email}
            className="border p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="new-password"
            autoComplete="password"
            value={login.password}
            className="border p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Don't have an account?
          <span className="text-blue-500 cursor-pointer">Sign Up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
