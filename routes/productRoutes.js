const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {createProduct, getProducts, getProduct, updateProduct, patchProduct, deleteProduct} = require("../controllers/productController")

//write your code here
router.post("/create", authMiddleware, createProduct); 
router.get("/get", authMiddleware,getProducts); 
router.get("/getById/:id", authMiddleware, getProduct); 
router.put("/put/:id", authMiddleware, updateProduct); 
router.patch("/patch/:id", authMiddleware, patchProduct); 
router.delete("/delete/:id", authMiddleware, deleteProduct);


module.exports = router;