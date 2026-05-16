import { course } from "../../models/courseSchema.js";
import { studentSchema } from "../../models/studentSchema.js";

// create course
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

// get signle course with students
export const getCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const findCourse = await course.findById(id);
    if (!findCourse) {
      return res.status(404).json({
        status: false,
        message: "course not found",
      });
    }

    const totalStudents = await studentSchema.find({
      course: id,
    }).populate("course")

    res.status(200).json({
      status: true,
      message: "finded",
      data: totalStudents,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in get course ${error.message}`,
    });
  }
};
