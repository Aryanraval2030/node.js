import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userTask } from "../models/taskModel.js";

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

    const isMatch = await bcrypt.compare(password, checkUser.password);
    if (!isMatch) {
      return res.status(400).json({
        status: false,
        message: "invalid password",
      });
    }
    const token = jwt.sign(
      { id: checkUser._id, email: checkUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );
    // res.cookie("token", token, {
    //   httpOnly: true,
    //   //   secure: false, // production me true (https)
    //   sameSite: "lax",
    // });

    res.status(200).json({
      status: true,
      message: "user login",
      data: checkUser,
      token: token,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in userContro ${error.message}`,
    });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, status, priority, userId, deadline } = req.body;
    if ((!title, !description, !status, !priority, !deadline)) {
      return res.status(400).json({
        status: false,
        message: "all field required",
      });
    }

    const createTask = await userTask.create({
      title,
      description,
      status,
      priority,
    });

    res.status(200).json({
      status: true,
      message: "task created",
      data: createTask,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in createTask ${error.message}`,
    });
  }
};

export const getTask = async (req, res) => {
  try {
    let { search, sort, status, order, page, limit } = req.query;

    page = parseInt(page) || 1;
    limit = parseInt(limit) || 5;

    if (page < 1) page = 1;
    if (limit < 1) limit = 5;
    let searching = {};

    if (search) {
      searching.$or = [{ title: { $regex: search, $options: "i" } }];
    }

    let sorting = {};
    sorting[sort] = order === "asc" ? 1 : -1;

    const skip = (page - 1) * limit;
    const [tasks, total] = await Promise.all([
      userTask.find(searching).sort(sorting).skip(skip).limit(limit),
      userTask.countDocuments(searching),
    ]);

    res.status(200).json({
      status: true,
      message: "searched",
      data: tasks,
      pagination: {
        total,
        page,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in getTask ${error.message}`,
    });
  }
};

export const getedHere = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.json({
        status: false,
        message: "not found",
      });
    }

    const geted = await userTask.findOne({ _id: id });
    res.status(200).json({
      status: true,
      message: "here",
      data: geted,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in get one data ${error.message}`,
    });
  }
};

export const updateTask = async (req, res) => {
  try {
    let { id } = req.params;

    const task = await userTask.findById(id);

    if (!task) {
      return res.status(404).json({
        status: false,
        message: "task not found",
      });
    }
    const updated = await userTask.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    return res.status(200).json({
      status: true,
      message: "task updated partially",
      data: updated,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};
export const dltTask = async (req, res) => {
  try {
    let { id } = req.params;

    const check = await userTask.findByIdAndDelete(id);
    if (!check) {
      return res.status(400).json({
        status: false,
        message: "task id required",
      });
    }

    // if (!dltData) {
    //   return res.status(404).json({
    //     status: false,
    //     message: "task not found",
    //   });
    // }

    res.status(200).json({
      status: true,
      message: "deleted",
      data: check,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "error in deleting task",
      error: error.message,
    });
  }
};
