import { userModel } from "../models/studentModel.js";

// for create studnet
export const createStudent = async (req, res) => {
  try {
    const { email } = req.body;
    const ckeckMail = await userModel.findOne({ email });

    if (ckeckMail) {
      return res.status(400).json({ message: "user already exists" });
    }
    const studentCreated = await userModel.create(req.body);

    res.status(201).json({
      status: true,
      message: "Student created",
      data: studentCreated,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in create student : ${error.message}`,
    });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const foundData = await userModel.findById(id);

    if (!foundData) {
      console.log("user not found");
    }

    let isChange = true;

    for (let key in req.body) {
      if (req.body[key] != foundData[key]) {
        isChange = false;
        break;
      }
    }

    if (isChange) {
      return res.json({
        status: false,
        message: "No Change Detected",
      });
    }

    const studentUpdated = await userModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json({
      status: true,
      message: "Student Updated",
      data: studentUpdated,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

// for get student data
export const getStudentData = async (req, res) => {
  try {
    const { id } = req.params;
    const getData = await userModel.findById(id);

    if (!getData) {
      console.log("user not found");
    }

    res.status(200).json({
      status: true,
      message: "Student Data Updated",
      data: getData,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};
