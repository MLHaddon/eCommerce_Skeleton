import Products from '../models/productModel.js';

export const getMostRecentProducts = async (req, res) => {
  try {
    const lastID = await Products.max('id');
    const products = await Products.findOne({
      where: {id: lastID}
    });
    res.json(products);
  } catch (error) {
    console.error('Error in getProducts:', error);
    res.status(500).json({ message: "Internal server error" });
    // Error check for more than ONE json
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Products.findAll();
    res.json(products);
  } catch (error) {
    console.error('Error in getProducts:', error);
    res.status(500).json({ message: "Internal server error" });
    // Error check for more than ONE json
  }
};

export const updateProducts = async (req, res) => {
  try {
    const products = req.body;
    console.log("Products Request: ", products);
    await Products.create(products);
    res.json({ message: "Products updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};