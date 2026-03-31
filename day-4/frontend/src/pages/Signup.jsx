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

    const data  = await res.text()
    if(data.includes("User saved successfully")){
      alert("user saved successfully")
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[350px]">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Name"
            name="name"
            autoComplete="name"
            value={users.name}
            onChange={handleChange}
            className="border p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Email"
            name="email"
            autoComplete="email"
            value={users.email}
            onChange={handleChange}
            className="border p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="new-password"
            value={users.password}
            onChange={handleChange}
            className="border p-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <span className="text-blue-500 cursor-pointer">Login</span>
        </p>
      </div>
    </div>
  );
}
export default Signup;
