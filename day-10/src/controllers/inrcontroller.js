import userSignup from "../models/userModels.js";

// register user
export const addUser = async (req, res) => {
  try {
    const userCreate = new userSignup(req.body);
    await userCreate.save();

    console.log(req.body);
    res.status(201).json({
      status: true,
      message: "user created",
      userData: userCreate,
    });
  } catch (error) {
    console.log(req.body);
    res.status(500).json({
      status: false,
      message: `user not created : ${error.message}`,
    });
  }
};
