const ProductData = require("../Model/Product");
const createError = require("../utils/Expresserror");



module.exports.index = async(req,res) =>
{

const data = await ProductData.find();
if(!data || data.length === 0)
{
throw createError(404,"No products found");
}
res.status(201).json({message : "Product Listed",success: true,data});  
};



module.exports.createproduct = async(req,res) =>
{ 
const {name,description,brand,price,offerPrice} = req.body;
const product = new ProductData({
name,
description,
brand,
price,
offerPrice,
image : req.file.path
});
const response = await product.save();
res.status(201).json({message : "Product added Successfully",response});
}


module.exports.updateProduct = async (req,res) => {
const {name,description,brand,price,offerPrice} = req.body;
const updatedData = {
name,
description,
brand ,
price ,
offerPrice
};

if (req.file) {
updatedData.image = req.file.filename; // ✅ agar nayi image di hai
}

const response = await ProductData.findByIdAndUpdate(
{ _id: req.params.id },
{ $set: updatedData }
);
res.status(201).json({ message: "Updated Successfully", response });
}

module.exports.destroyProduct = async (req,res) =>
{
const response = await ProductData.findByIdAndDelete(req.params.id);
res.status(201).json({message : "Delete Successfully",response});  
}