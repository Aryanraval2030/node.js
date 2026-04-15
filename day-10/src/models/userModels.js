import mongoose from "mongoose";

const registerUse = mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const userSignup = mongoose.model("registerUser", registerUse);

export default userSignup;
