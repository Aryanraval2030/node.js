import { userAuth } from "../../models/userSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role, phone, profilePic } = req.body;

    const findUser = await userAuth.findOne({ email });

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

    const hashPassword = await bcryptjs.hash(password, 10);

    const createUser = await userAuth.create({
      name,
      email,
      password: hashPassword,
      role,
      phone,
      profilePic,
    });

    const token = jwt.sign(
      { id: createUser._id, email: createUser.email, role: createUser.role },
      process.env.JWT_SECRET,
    );

    res.status(201).json({
      status: true,
      message: `successfully registerd`,
      data: createUser,
      token,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in register user ${error.message}`,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findEmail = await userAuth.findOne({ email });

    if (!findEmail) {
      return res.status(404).json({
        status: false,
        message: "user not found",
      });
    }

    const userData = {
      id: findEmail._id,
      userName: findEmail.name,
      userEmail: findEmail.email,
    };

    const isMatch = await bcryptjs.compare(password, findEmail.password);

    if (!isMatch) {
      return res.status(400).json({
        status: false,
        message: "password not match",
      });
    }

    const token = jwt.sign(
      { id: findEmail._id, email: findEmail.email },
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
      message: `error in login user ${error.message}`,
    });
  }
};
