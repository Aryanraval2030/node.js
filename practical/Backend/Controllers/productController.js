import { userTask } from "../Models/taskModel.js";

//CREATE TASK
export const createTask = async (req, res, next) => {
  try {
    const { title, description, status, priority, deadline, user } = req.body;

    if (!title || !description || !priority || !deadline || !user) {
      return res.status(400).json({
        status: false,
        message: "Payload Missing",
      });
    }

    const task = await userTask.create({
      title,
      description,
      status,
      priority,
      deadline,
      user,
    });

    res.status(201).json({
      status: true,
      message: "Task Got Created",
      data: task,
    });
    next();
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `Error In Create Task ${error.message}`,
    });
  }
};

//GET BY SINGLE DATA BY ID
export const getSingleTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const task = await userTask.findById(id);
    if (!task) {
      return res.status(404).json({
        status: false,
        message: "Task Not Found",
      });
    }

    res.status(200).json({
      status: true,
      message: "Single Task Fetched",
      data: task,
    });
    next();
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `Error In Get Task ${error.message}`,
    });
  }
};

//SEARCHING SORTING
export const Get = async (req, res) => {
  try {
    const { search, sort, status } = req.query;
    let { page, limit } = req.query;

    page = parseInt(page) || 1;
    limit = parseInt(limit) || 5;

    const skip = (page - 1) * limit;

    let query = {};

    if (search) {
      query.$or = [{ title: { $regex: search, $options: "i" } }];
    }

    if (status) {
      query.status = status;
    }

    let sortOption = {};
    if (sort) {
      sortOption[sort] = 1;
    }

    const total = await userTask.countDocuments(query);
    const data = await userTask
      .find(query)
      .sort(sortOption)
      .skip(skip)
      .limit(limit);

    return res.status(200).json({
      status: true,
      message: "Data Get Successfully!",
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: `Data Get Failed ${error.message}`,
    });
  }
};

//UPDATE
export const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, status, priority, deadline, user } = req.body;

    if (!title || !description || !priority || !deadline || !user) {
      return res.status(400).json({
        status: false,
        message: "All Fields are Required",
      });
    }

    const product = await userTask.findById(id);
    if (!product) {
      return res.status(404).json({
        status: false,
        message: "Task not found",
      });
    }

    const updatedTask = await userTask.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    return res.status(200).json({
      status: true,
      message: "Task Updated Successfully",
      data: updatedTask,
    });
    next();
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: `Error in updateTask ${error.message}`,
    });
  }
};

//DELETE
export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const Task = await userTask.findById(id);
    if (!Task) {
      return res.status(404).json({
        status: false,
        message: "Task not found",
      });
    }

    // Delete student
    const deletedTask = await userTask.findByIdAndDelete(id);

    return res.status(200).json({
      status: true,
      message: "Task Deleted Successfully",
      data: deletedTask,
    });
    next();
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: `Error in deleteTask ${error.message}`,
    });
  }
};
