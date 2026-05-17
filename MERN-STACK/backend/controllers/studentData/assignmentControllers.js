import { assignment } from "../../models/assignmentSchema.js";

export const assingmentContro = async (req, res) => {
  try {
    let { title, description, file, dueDate, courseId, teacherId } = req.body;

    if (
      !title ||
      !description ||
      !file ||
      !dueDate ||
      !courseId ||
      !teacherId
    ) {
      return res.status(400).json({
        status: false,
        message: "all field required",
      });
    }

    const uploded = await assignment.create({
      title,
      description,
      file,
      dueDate,
      courseId,
      teacherId,
    });

    res.status(201).json({
      status: true,
      message: "Assignment Uploaded",
      data: uploded,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in assingment controller ${error.message}`,
    });
  }
};
