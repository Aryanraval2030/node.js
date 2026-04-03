import express from "express";
import { body, validationResult } from "express-validator";

const app = express();
app.use(express.json());

app.post(
  "/register",
  [
    body("email").isEmail().withMessage("email is not valid"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("password must be at least 5 characters"),
  ],
  (req, res) => {
    const err = validationResult(req);

    if (!err.isEmpty()) {
      return res.json({ errors: err.array() });
    }

    res.send("validation passed ✅");
  },
);

app.listen(2030, () => {
  console.log("server is running..");
});
