import { User } from "../models/userModel.js";

export const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if ((!name, !email, !password)) {
      return res.status(400).json({
        status: false,
        message: "all field required",
      });
    }

    const userRegistered = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      status: true,
      message: "user successfuly registerd",
      data: userRegistered,
    });
  } catch (error) {
    res.status(500).json({
      status: true,
      message: `error in ${error.message}`,
    });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if ((!email, !password)) {
      return res.status(400).json({
        status: false,
        message: "all field required",
      });
    }

    const checkUser  =  await
  } catch (error) {}
};
