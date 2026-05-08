import { userModel } from "../models/user_model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if ((!name, !email, !password)) {
      return res.status(400).json({
        status: false,
        message: "all field required",
      });
    }

    const checkData = await userModel.findOne({ email });

    if (checkData) {
      return res.status(400).json({
        status: false,
        message: "user already exist",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const registerd = await userModel.create({
      name,
      email,
      password: hashPassword,
    });

    return res.status(201).json({
      status: true,
      message: "user successfully registered",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: `user not registered : ${error.message}`,
    });
  }
};

// for login

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const checkData = await userModel.findOne({ email });
    if (!checkData) {
      return res.status(404).json({
        status: false,
        message: "user not found",
      });
    }

    const userData = {
      id: checkData._id,
      email: checkData.email,
      name: checkData.name,
    };

    const isMatch = await bcrypt.compare(password, checkData.password);
    if (!isMatch) {
      res.status(400).json({
        status: false,
        message: "password not match",
      });
    }

    const token = jwt.sign(
      { id: checkData._id, email: checkData.email },
      process.env.JWT_SECRET,
    );

    res.status(200).json({
      status: true,
      message: "user successfuly login",
      data: userData,
      token,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in userlogin ${error.message}`,
    });
  }
};
