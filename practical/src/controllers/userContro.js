import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";

export const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if ((!name, !email, !password)) {
      return res.status(400).json({
        status: false,
        message: "all field required",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const userRegistered = await User.create({
      name,
      email,
      password: hashPassword,
    });

    res.status(201).json({
      status: true,
      message: "user successfuly registerd",
      data: userRegistered,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in userContro ${error.message}`,
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

    const checkUser = await User.findOne({ email });

    if (!checkUser) {
      return res.status(404).json({
        status: false,
        message: "user not found",
      });
    }

    res.status(200).json({
      status: true,
      message: "user login",
      data: checkUser,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in usercontro ${error.message}`,
    });
  }
};
