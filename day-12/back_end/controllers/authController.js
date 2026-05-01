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

    return res.status(201).json({
      status: true,
      message: "user registered successfully",
      data: userRegisted,
    });
  } catch (error) {
    return res.status(400).json({
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
        message: "invalid password",
      });
    }
    const token = jwt.sign(
      { id: checkMail._id, email: checkMail.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    return res.status(200).json({
      status: true,
      message: "user Logged In Successfully",
      data: token,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: `user not Logged ${error.message}`,
    });
  }
};
