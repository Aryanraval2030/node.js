const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ MongoDB connect
mongoose
  .connect(
    "mongodb+srv://aryan2030:aryan682007@cluster0.wcopjgy.mongodb.net/testdb",
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log(error));

// ✅ Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});
// ✅ Model
const User = mongoose.model("User", userSchema);

// ✅ POST API (data save)
app.post("/user", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();

    res.json({ message: "User saved successfully" });
  } catch (err) {
    res.json({ error: err.message });
  }
});

// ✅ GET API (data dekhne ke liye)  👈 YAHAN ADD KIYA
app.get("/user", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// ✅ Server start
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
// app.get("/delete-all", async (req, res) => {
//   await User.deleteMany({});
//   res.send("All data deleted");
// });
