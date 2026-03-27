import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await fetch("http://localhost:3000/user");
    const data = await res.json();
    setUsers(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !age) {
      alert("Please fill all fields");
      return;
    }

    await fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, age }),
    });

    setName("");
    setAge("");
    getUsers();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          User Manager 🚀
        </h1>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            type="number"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <button className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition duration-200">
            Add User
          </button>
        </form>

        {/* LIST */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Users List
          </h2>

          {users.length === 0 ? (
            <p className="text-gray-500 text-sm">No users found</p>
          ) : (
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {users.map((user) => (
                <div
                  key={user._id}
                  className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded-lg shadow-sm"
                >
                  <span className="font-medium text-gray-800">{user.name}</span>
                  <span className="text-sm text-gray-600">{user.age} yrs</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
