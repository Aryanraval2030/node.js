import { userRegister } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const userRegiCntro = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({
        status: false,
        message: "all feild required",
      });
    }

    const ckeckMailId = await userRegister.findOne({ email });

    if (ckeckMailId) {
      return res.status(400).json({
        status: false,
        message: "user already exist",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const userRegisted = await userRegister.create({
      name,
      email,
      password: hashPassword,
      role,
    });
    const token = jwt.sign({
      id: userRegisted._id,
      email: userRegisted.email,
      role: userRegisted.role,
    });

    res.cookie(
      "token",
      token,
      {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
      },
      process.env.JWT_SECRET,
      { expiresIn: "28d" },
    );

    return res.status(201).json({
      status: true,
      message: "user registered successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: `user not registered ${error.message}`,
    });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const checkMail = await userRegister.findOne({ email });

    if (!checkMail) {
      return res.status(400).json({
        status: false,
        message: "user not found",
      });
    }

    const isMatch = await bcrypt.compare(password, checkMail.password);
    if (!isMatch) {
      return res.status(400).json({
        status: false,
        message: "invalid password",
      });
    }
    const token = jwt.sign(
      { id: checkMail._id, email: checkMail.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // production me true (https)
      sameSite: "lax",
    });

    return res.status(200).json({
      status: true,
      message: "user Logged In Successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: `user not Logged ${error.message}`,
    });
  }
};
