import { studentSchema } from "../../models/studentSchema.js";
import { userAuth } from "../../models/userSchema.js";

// create student
export const createStud = async (req, res) => {
  try {
    const { studentName,   email,
      password,
      phone, rollNumber, course, semester } = req.body;

 if (
   !studentName ||
   !email ||
   !password ||
   !phone ||
   !rollNumber ||
   !course ||
   !semester
) {
      return res.status(400).json({
        status: false,
        message: "all field required",
      });
    }

 

    const findStud = await studentSchema.create({
      createdBy: req.user.id,
      studentName,
      rollNumber,
      course,
      semester,
    });

    res.status(201).json({
      status: true,
      message: "Student Added Successfully",
      data: findStud,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in create student ${error.message}`,
    });
  }
};

// get all students

export const getStud = async (req, res) => {
  try {
    const getAllStud = await studentSchema
      .find()
      .populate({
        path: "userId",
        select: "name email role phone profilePic",
      })
      .sort({ createdAt: -1 }); // show new student data first

    res.status(200).json({
      status: true,
      message: "Students fetched successfully",
      data: getAllStud,
      count: getAllStud.length,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in get all student ${error.message}`,
    });
  }
};

// get signle student
export const getSingleData = async (req, res) => {
  try {
    const { id } = req.params;
    const findSingleStud = await studentSchema.findById(id);

    if (!findSingleStud) {
      return res.status(404).json({
        status: false,
        message: "student not found",
      });
    }

    res.status(200).json({
      status: true,
      message: "successfuly finded",
      data: findSingleStud,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in get signle student data ${error.message}`,
    });
  }
};

// update student // only update semester
export const updateStud = async (req, res) => {
  try {
    const { id } = req.params;
    const { semester } = req.body;
    const findStud = await studentSchema.findById(id);

    if (!findStud) {
      return res.status(404).json({
        status: false,
        message: "student not found",
      });
    }

    if (semester === findStud.semester) {
      return res.status(400).json({
        status: false,
        message: "semester already same",
      });
    }

    const updateStud = await studentSchema.findByIdAndUpdate(
      id,
      { semester },
      { new: true },
    );

    res.status(200).json({
      status: true,
      message: "student data updated",
      data: updateStud,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in update student ${error.message}`,
    });
  }
};

// delete student
export const deleteStud = async (req, res) => {
  try {
    const { id } = req.params;
    const findData = await studentSchema.findById(id);
    if (!findData) {
      return res.status(404).json({
        status: false,
        message: "student not found",
      });
    }

    const deleteData = await studentSchema.findByIdAndDelete(id);

    res.status(200).json({
      status: true,
      message: "student data deleted",
      data: deleteData,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in deleted student ${error.message}`,
    });
  }
};
