import { useState } from "react";

function Signup() {
  const [users, setUsers] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUsers({
      ...users,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:6419/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    });

    const data = await res.json();
   if (data.errors) {
    const messages = data.errors.map((err) => err.msg).join("\n");
    alert(messages);
    return;
  }

  // ✅ success
  if (data.includes?.("User saved successfully")) {
    alert("user saved successfully");
  }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-300">
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-[360px] border border-white/30">
        
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Create Account 🚀
        </h2>
        <p className="text-sm text-center text-gray-500 mb-6">
          Join us and start your journey
        </p>

        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="flex flex-col gap-5"
        >
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            autoComplete="name"
            value={users.name}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-purple-400 transition"
          />

          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            autoComplete="email"
            value={users.email}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-purple-400 transition"
          />

          <input
            type="password"
            placeholder="Create a password"
            name="password"
            autoComplete="new-password"
            value={users.password}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-purple-400 transition"
          />

          <button className="bg-purple-500 text-white py-3 rounded-xl font-semibold hover:bg-purple-600 active:scale-95 transition duration-200 shadow-md">
            Sign Up ✨
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <span className="text-purple-600 font-semibold cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;