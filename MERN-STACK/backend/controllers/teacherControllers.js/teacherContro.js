import { teacher } from "../../models/teacherSchema.js";

// create teacher
export const createTeacher = async (req, res) => {
  try {
    const { name, subject, experience } = req.body;

    if (!name || !subject || !experience) {
      return res.status(400).json({
        status: false,
        message: "all field required",
      });
    }

    const createdTeacher = await teacher.create({
      userId: req.user.id,
      name,
      subject,
      experience,
    });

    res.status(201).json({
      status: true,
      message: "teacher created",
      data: createdTeacher,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in create teacher ${error.message}`,
    });
  }
};

