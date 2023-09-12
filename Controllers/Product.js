const { validationResult } = require("express-validator");
const ProductModel = require("../Model/Product");
module.exports.CreateProduct = async (req, res) => {
    const errors = validationResult(req);
   if (errors.isEmpty()) {
    console.log(req.body)
    try {
        const createdProduct = await ProductModel.create({...req.body})
   return res.status(200).json({product: createdProduct,  msg: "product created"}) 
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
  
   } else {
    return res.status(400).json({error: errors.array()})
   
   }
}

  module.exports.getAllProduct = async (req, res) => {
    try {
        const gotProducts = await ProductModel.find({})
        return res.status(200).json(gotProducts)
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
  } 


