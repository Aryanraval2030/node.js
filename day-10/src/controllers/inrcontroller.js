import userSignup from "../models/userModels.js";
import { validationResult } from "express-validator";

// register user
export const addUser = async (req, res) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({
        status: false,
        message: "plz field all data for register",
        errors: error.array(),
      });
    }
    const userCreate = await userSignup.create(req.body);

    res.status(201).json({
      status: true,
      message: "user created",
      userData: userCreate,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `user not created : ${error.message}`,
    });
  }
};

// update data

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const userIs = await userSignup.findById(id);

    if (!userIs) {
      return res.status(404).json({
        message: "user not found",
      });
    }

    let ifsame = true;

    for (let key in req.body) {
      if (req.body[key] !== userIs[key]) {
        ifsame = false;
        break;
      }
    }

    if (ifsame) {
      return res.json({
        status: false,
        message: "no change detected",
      });
    }

    const userExist = await userSignup.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json({
      status: true,
      message: "user data updated",
      userData: userExist,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

// dlt

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const dleUserId = await userSignup.findByIdAndDelete(id);

    if (!dleUserId) {
      return res.status(404).json({
        status: false,
        message: "user not found",
      });
    }

    res.status(200).json({
      status: true,
      message: "user successfully deleted",
      userdata: dleUserId, // dlt user data
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

//  if (!errors.isEmpty()) {
//     return res.status(400).json({
//       status: false,
//       errors: errors.array(),
//     });
//   }
