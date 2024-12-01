const {prisma} = require("../db/config")
const createProduct = async(req, res)=>{
    const {name, stock, price} = req.body; 
    if(!name || !stock || !price){
        return res.status(400).json({
            "error": "All fields required"
          })
    }
    const create = await prisma.product.create({data: {name, stock, price}})
    res.status(201).json(create)
}

const getProducts= async(req, res)=>{
    const products = await prisma.product.findMany(); 
    res.status(200).json(products)
}

const getProduct = async(req, res)=>{
    const {id} = req.params; 
    const product = await prisma.product.findUnique({where: {id: parseInt(id)}})
    res.status(200).json(product)
}

const updateProduct = async(req, res)=>{
    const {name, stock, price}= req.body 
    const {id} = req.params; 
    const product = await prisma.product.update({where: {id: parseInt(id)}, data: {name, stock, price}})
    res.status(200).json(product)
}

const patchProduct = async(req, res)=>{
    const {id} = req.params; 
    const {stock}= req.body 
    const product = await prisma.product.update({where: {id: parseInt(id)}, data: {stock}})
    res.status(200).json(product)
}

const deleteProduct = async(req, res)=>{
    const {id} = req.params;  
    const deleted = await prisma.product.delete({where: {id: parseInt(id)}})
    res.status(200).json({
        "message":"Product is deleted"
      })
}

module.exports = {createProduct, getProducts, getProduct, updateProduct, patchProduct, deleteProduct}