import { body } from "express-validator";

export const registerValidator = [
  body("name")
    .notEmpty()
    .withMessage("name is required")
    .isLength({ min: 4, max: 30 }),

  body("email")
    .notEmpty()
    .withMessage("emial is required")
    .isEmail()
    .withMessage("invalid email"),

  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 5, max: 8 }),

  body("role")
    .notEmpty()
    .withMessage("role is required")
    .isIn(["user", "seller"])
    .withMessage("invalid role"),
];

export const loginValidation = [
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email"),
  body("password").notEmpty().withMessage("password is required"),
];
