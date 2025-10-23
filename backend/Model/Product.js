const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema(
    {
    name : 
    {
    type : String    
    },
    description : 
    {
    type : String    
    },
    image : 
    {
    type : String    
    },
    brand : 
    {
    type : String    
    },
    price : 
    {
    type : Number    
    },
    offerPrice : 
    {
    type : Number    
    }    
    }
)

const ProductData = mongoose.model("ProductData",ProductSchema);

module.exports = ProductData;