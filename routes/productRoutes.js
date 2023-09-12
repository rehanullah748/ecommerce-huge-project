const express = require("express");
const { CreateProduct, getAllProduct } = require("../Controllers/Product");
const { ProductValidator } = require("../Validations/ProductValidator");
const router = express.Router();
router.post('/product/create-product',ProductValidator, CreateProduct)
router.get('/product/get-all-product', getAllProduct)
module.exports = router;