import { user } from "../Models/userModels.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

//Register User 
export const Register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                status: false,
                message: "Payload Missing"
            });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await user.create({
            name,
            email,
            password: hashPassword,
        });

        res.status(200).json({
            status: true,
            message: "User Got Created",
            data: newUser
        });

    } catch (error) {
        res.status(500).json({
            status: false,
            message: `Error In Register ${error.message}`
        });
    }
};

//Login User 
export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if ((!email, !password)) {
            return res.status(400).json({
                status: false,
                message: "all field required",
            });
        }

        const checkUser = await user.findOne({ email });

        if (!checkUser) {
            return res.status(404).json({
                status: false,
                message: "user not found",
            });
        }

        const isMatch = await bcrypt.compare(password, checkUser.password);
        if (!isMatch) {
            return res.status(400).json({
                status: false,
                message: "invalid password",
            });
        }
        const token = jwt.sign(
            { id: checkUser._id, email: checkUser.email },
            process.env.JWT_SECRET,
            { expiresIn: "1d" },
        );
        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "lax",
        });

        res.status(200).json({
            status: true,
            message: "user login",
            data: checkUser,
            token : token
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: `error in userContro ${error.message}`,
        });
    }
};