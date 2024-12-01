const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {createProduct, getProducts, getProduct, updateProduct, patchProduct, deleteProduct} = require("../controllers/productController")

//write your code here
router.post("/create", createProduct); 
router.get("/get", getProducts); 
router.get("/getById/:id",  getProduct); 
router.put("/put/:id", updateProduct); 
router.patch("/patch/:id", patchProduct); 
router.delete("/delete/:id",  deleteProduct);


module.exports = router;