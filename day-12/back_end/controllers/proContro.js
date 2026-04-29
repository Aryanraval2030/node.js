import { proEco } from "../models/categoryModel.js";

export const addProduct = async (req, res) => {
  try {
    const { name, price, rate, img, description, categoryId, discount } =
      req.body;
    if (
      !name ||
      !price ||
      !rate ||
      !img ||
      !description ||
      !categoryId ||
      !discount
    ) {
      return res.status(400).json({
        status: false,
        message: "all feild required",
      });
    }

    // const exitsName = await proEco.find({ name });

    // if (exitsName) {
    //   return res.json({
    //     message: "already category exist",
    //   });
    // }

    const product = await proEco.create(req.body);

    res.status(201).json({
      status: true,
      message: "product created",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in product : ${error.message}`,
    });
  }
};
