import { body } from "express-validator";

export const createUserValidation = [
  body("username").notEmpty().withMessage("plz field username"),
  body("email").isEmail().withMessage("plz field email"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("password at list 8 character"),
];
