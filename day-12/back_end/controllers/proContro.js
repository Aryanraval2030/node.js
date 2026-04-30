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

    const alreadyExistPro = await proEco.findOne({
      name,
      categoryId,
    });

    if (alreadyExistPro) {
      return res.status(400).json({
        status: false,
        message: "Product already exists",
      });
    }

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

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(404).json({
        status: false,
        message: `products not found`,
      });
    }

    const getPro = await proEco
      .find({ categoryId: id })
      .sort({ createdAt: -1 });

    res.status(200).json({
      status: true,
      message: "product find",
      data: getPro,
    });
  } catch (error) {
    res.status(404).json({
      status: true,
      message: `error in : ${error.message}`,
    });
  }
};

// get single product

export const getSinglePro = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(404).json({
        status: false,
        message: `products not found`,
      });
    }

    const checkOnePro = await proEco.findById(id);

    res.status(200).json({
      status: true,
      message: "product find",
      data: checkOnePro,
    });
  } catch (error) {
    res.status(400).json({
      status: true,
      message: `error in : ${error.message}`,
    });
  }
};

// add bulk products data

export const addBulkPro = async (req, res) => {
  try {
    const products = req.body;

    if (!Array.isArray(products)) {
      return res.status(400).json({
        status: false,
        message: "plz Enter Many products",
      });
    }

    const addAllPro = await proEco.insertMany(products);

    res.status(201).json({
      status: true,
      message: "products added",
      data: addAllPro,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in : ${error.message}`,
    });
  }
};
