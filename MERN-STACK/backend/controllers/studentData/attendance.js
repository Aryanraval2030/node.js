import { attendance } from "../../models/attendanceSchema.js";
import { studentSchema } from "../../models/studentSchema.js";

export const addAttendance = async (req, res) => {
  try {
    const { studentId, status } = req.body;

    if (!studentId || !status) {
      return res.status(400).json({
        status: false,
        message: "all field required",
      });
    }
    const findStud = await studentSchema.findById(studentId);

    if (!findStud) {
      return res.status(404).json({
        status: false,
        message: "student not found",
      });
    }
    const addedAttend = await attendance.create({
      studentId: findStud.id,
      status,
      // courseId: findStud.course,
    });

    res.status(200).json({
      status: true,
      message: "attendence marked",
      data: addedAttend,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in addAttendence ${error.message}`,
    });
  }
};
