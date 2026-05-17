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

//update teacher

export const updateTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const findTeacher = await teacher.findById({ _id: id });

    if (!findTeacher) {
      return res.status(404).json({
        status: false,
        message: "teacher not found",
      });
    }
    const updateTeacher = await teacher.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    let isSame =
      findTeacher.name == updateTeacher.name &&
      findTeacher.subject == updateTeacher.subject &&
      findTeacher.experience == updateTeacher.experience;
      
    if (isSame) {
      return res.status(400).json({
        stupdatedatus: false,
        message: "no change updated",
      });
    }

    res.status(200).json({
      status: true,
      message: "updated ",
      data: updateTeacher,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in update teacher ${error.message}`,
    });
  }
};
