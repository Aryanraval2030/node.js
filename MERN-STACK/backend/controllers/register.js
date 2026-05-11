import { userRegister } from "../models/userSchema.js";

import bcryptjs from "bcryptjs";
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role, phone, profilePic } = req.body;

    const findUser = await userRegister.findOne({ email });

    if (findUser) {
      return res.status(400).json({
        status: false,
        message: "user already registered",
      });
    }

    if (!name || !email || !password || !phone) {
      return res.status(400).json({
        status: false,
        message: "all field required",
      });
    }

    const hashPassword = await bcryptjs.hash("password", 10);

    const createUser = await userRegister.create({
      name,
      email,
      password: hashPassword,
      role,
      phone,
      profilePic,
    });

    res.status(201).json({
      status: true,
      message: `successfully registerd`,
      data: createUser,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in register user ${error.message}`,
    });
  }
};
