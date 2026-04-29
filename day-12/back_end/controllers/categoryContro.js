import { cateEcomPro } from "../models/categoryModel.js";

//create category of products
export const addCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({
        status: false,
        message: "all feild required",
      });
    }

    const exitsName = await cateEcomPro.findOne({ name });

    if (exitsName) {
      return res.json({
        message: "already category exist",
      });
    }

    const category = await cateEcomPro.create(req.body);

    res.status(201).json({
      status: true,
      message: "category created",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `error in addCategory : ${error.message}`,
    });
  }
};

// get all categories

export const getCategory = async (req, res) => {
  try {
    const getCat = await cateEcomPro.find();

    res.status(200).json({
      message: "data finded",
      data: getCat,
    });
  } catch (error) {
    res.status(404).json({
      message: `error in get all category : ${error.message}`,
    });
  }
};

//find the category by id

export const getByIdCate = async (req, res) => {
  try {
    const { id } = req.params;

    const foundCat = await cateEcomPro.findById(id);
    if (!foundCat) {
      return res.status(404).json({
        status: false,
        message: "category not found",
      });
    }

    res.status(200).json({
      status: true,
      message: "category name",
      data: foundCat,
    });
  } catch (error) {
    res.status(404).json({
      status: true,
      message: "category name not found",
    });
  }
};
