import { userModel } from "../models/studentModel.js";

// for create studnet
export const createStudent = async (req, res) => {
  try {
    const { name, age, email, course, fees } = req.body;

    if (!name || !age || !email || !course || !fees) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }

    const { email } = req.body;
    const ckeckMail = await userModel.findOne({ email });

    if (ckeckMail) {
      return res.status(400).json({ message: "user already exists" });
    }

    const studentCreated = await userModel.create({
      name,
      age,
      email,
      course,
      fees,
    });

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

//create bulk studnet data
export const bulkCreateStu = async (req, res) => {
  try {
    const students = req.body;

    if (!Array.isArray(students)) {
      return res.status(400).json({
        status: false,
        message: "bad request must be an Array",
      });
    }

    for (let stu of students) {
      if (!stu.name || !stu.age || !stu.email || !stu.course || !stu.fees) {
        return res.status(400).json({
          status: false,
          message: "All fields are required for each student",
        });
      }
    }

    const checkStuEmail = students.map((stu) => stu.email);

    const existsEmail = await userModel.find({ email: { $in: checkStuEmail } });
    if (existsEmail.length > 0) {
      return res.status(400).json({
        status: false,
        message: "Some emails already exist",
        duplicates: existsEmail.map((e) => e.email),
      });
    }

    const createdAllStu = await userModel.insertMany(students);

    return res.status(201).json({
      status: true,
      message: "Students uploaded successfully",
      count: createdAllStu.length,
      data: createdAllStu,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: `Internal Server Error ${error.message}`,
    });
  }
};

// full data updateStudent
export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, age, email, course, fees } = req.body;
    if (!name || !age || !email || !course || !fees) {
      return res.status(400).json({
        status: false,
        message: "All fields are required",
      });
    }
    const foundData = await userModel.findById(id);

    if (!foundData) {
      console.log("studnet not found");
    }

    userModel.name = name;
    userModel.age = age;
    userModel.email = email;
    userModel.course = course;
    userModel.fees = fees;

    await userModel.save();

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

// only one data updated
export const updateStudentPartial = async (req, res) => {
  try {
    const { id } = req.params;
    const { fees, status } = req.body;

    if (fees === undefined && status === undefined) {
      return res.status(400).json({
        status: false,
        message: "Nothing to update",
      });
    }

    const student = await userModel.findById(id);

    if (!student) {
      return res.status(404).json({
        status: false,
        message: "Student not found",
      });
    }

    if (fees !== undefined) student.fees = fees;
    if (status !== undefined) student.status = status;

    await student.save();

    return res.status(200).json({
      status: true,
      message: "Student updated partially",
      data: student,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};

// // for get student data
// export const getStudentData = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const getData = await userModel.findById(id);

//     if (!getData) {
//       console.log("user not found");
//     }

//     res.status(200).json({
//       status: true,
//       message: "Student Data finded",
//       data: getData,
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: false,
//       message: error.message,
//     });
//   }
// };

// // for get student data
export const getAllStudents = async (req, res) => {
  try {
    // 🔹 Query params
    const {
      search = "",
      sortBy = "createdAt",
      order = "desc",
      page = 1,
      limit = 5,
      minFees,
      maxFees,
    } = req.query;

    // 🔹 Convert values
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);

    // 🔹 Build filter object
    let filter = {};

    // ✅ Search (name + course)
    if (search) {
      filter.$text = { $search: search };
    }

    // ✅ Fees filter
    if (minFees || maxFees) {
      filter.fees = {};
      if (minFees) filter.fees.$gte = Number(minFees);
      if (maxFees) filter.fees.$lte = Number(maxFees);
    }

    // 🔹 Sort object
    let sort = {};
    sort[sortBy] = order === "asc" ? 1 : -1;

    // 🔹 Total count (pagination ke liye)
    const total = await userModel.countDocuments(filter);

    // 🔹 Data fetch
    const students = await userModel
      .find(filter)
      .sort(sort)
      .skip((pageNum - 1) * limitNum)
      .limit(limitNum);

    return res.status(200).json({
      status: true,
      data: students,
      pagination: {
        total,
        currentPage: pageNum,
        totalPages: Math.ceil(total / limitNum),
        perPage: limitNum,
      },
    });
  } catch (error) {
    console.error("Get Students Error:", error);

    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
    });
  }
};

//for dlt student data
export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const checkId = await userModel.findById(id);

    if (!checkId) {
      return res.status(400).json({
        status: false,
        message: "student data not found",
      });
    }

    const dltStudent = await userModel.findByIdAndDelete(checkId);

    res.status(200).json({
      status: true,
      message: "student data deleted",
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in : ${error.message}`,
    });
  }
};
