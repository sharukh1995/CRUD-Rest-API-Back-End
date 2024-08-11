const express = require("express");
const Product = require("../models/product.models.js");
const router = express.Router();
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/product.controller.js");


//Get Products
router.get('/', getProducts);

//Get Product
router.get("/:id", getProduct);

//Create Products
router.post("/", createProduct);

//Update Products
router.put("/:id", updateProduct);

//Delete Products
router.delete("/id", deleteProduct);

module.exports = router;