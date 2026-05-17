import { course } from "../../models/courseSchema.js";
import { marks } from "../../models/markSchema.js";
import { studentSchema } from "../../models/studentSchema.js";

export const addMarks = async (req, res) => {
  try {
    const { rollNumber, courseName, mark,teacherId } = req.body;

    if (!rollNumber || !courseName || mark === undefined|| !teacherId) {
      return res.status(400).json({
        status: false,
        message: "all field required",
      });
    }
    const findStudent = await studentSchema.findOne({
      rollNumber,
    });
    if (!findStudent) {
      return res.status(404).json({
        status: false,
        message: "student not found",
      });
    }

    const findCourse = await course.findOne({
      courseName,
    });

    if (!findCourse) {
      return res.status(404).json({
        status: false,
        message: "course not found",
      });
    }
    const isEnrolled = findStudent.course.includes(findCourse._id);

    if (!isEnrolled) {
      return res.status(400).json({
        status: false,
        message: "student not enrolled in this course",
      });
    }
    const alreadyAddMark = await marks.findOne({
      rollNumber,
      subject: courseName,
    });

    if (alreadyAddMark) {
      return res.status(400).json({
        status: false,
        message: "marks already added",
      });
    }

    const createMarks = await marks.create({
      studentId: findStudent._id,
      courseId: findCourse._id,
      teacherId,
      rollNumber,
      subject: courseName,
      mark,
    });
    res.status(201).json({
      status: true,
      data: createMarks,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in add marks ${error.message}`,
    });
  }
};
