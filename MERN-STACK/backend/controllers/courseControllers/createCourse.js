import { course } from "../../models/courseSchema.js";

export const createCourse = async (req, res) => {
  try {
    const { courseName, duration, fees } = req.body;

    if (!courseName || !duration || !fees) {
      return res.status(400).json({
        status: false,
        message: "all field required",
      });
    }
    const findedCourse = await course.findOne({
      courseName: courseName.toLowerCase(),
      duration,
      fees,
    });
    if (findedCourse) {
      return res.status(400).json({
        status: false,
        message: "course already created you can join that course",
      });
    }

    const createdCourse = await course.create({
      courseName: courseName.toLowerCase(),
      duration,
      fees,
    });

    res.status(201).json({
      status: true,
      message: "course created",
      data: createdCourse,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        status: false,
        message: "Course already exists",
      });
    }

    res.status(500).json({
      status: false,
      message: `error in create course ${error.message}`,
    });
  }
};
