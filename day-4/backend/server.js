import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(express.json()); //
app.use(cors());

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);


// for sign in user

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = new User({
      name,
      email,
      password,
    });

    await newUser.save();

    res.send("User saved successfully");
  } catch (error) {
    res.send("Error: " + error.message);
  }
});
 

//for login user
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // find user
    const user = await User.findOne({ email });

    // agar user nahi mila
    if (!user) {
      return res.send("User not found");
    }

    // password check
    if (user.password !== password) {
      return res.send("Wrong password");
    }

    // success
    res.send("Login successful ✅");

  } catch (error) {
    res.send("Error: " + error.message);
  }
});


mongoose
  .connect(
    "mongodb+srv://aryan2030:aryan682007@cluster0.wcopjgy.mongodb.net/signs",
  )
  .then(() => console.log("connected atlas"))
  .catch((err) => console.log("errer here.", err));

app.listen(6419, () => {
  console.log("server is runing..");
});
