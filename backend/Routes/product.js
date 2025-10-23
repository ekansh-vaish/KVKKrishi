const {jwtAuthMiddleware} = require("../Middlewares/Auth");
const multer = require("multer");
const {isAdmin }= require("../Middlewares/isAdmin");
const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();
const ProductController = require("../Controllers/ProductList")
const {storage} = require("../cloudConfig");

// const storage = multer.diskStorage({
// destination : function(req,file,cb)
// {
// return cb(null,"./uploads"); 
// } ,
// filename : function(req,file,cb) 
// {
// return cb(null,`${Date.now()}-${file.originalname}`);
// }});

// module.exports = storage;
const upload = multer({ storage }).single('file');


router.get("/getproduct",jwtAuthMiddleware,wrapAsync(ProductController.index))

router.post("/product",jwtAuthMiddleware,isAdmin,upload,wrapAsync(ProductController.createproduct));

router.put("/update/:id",jwtAuthMiddleware,isAdmin, upload,wrapAsync(ProductController.updateProduct));

router.delete("/delete/:id",jwtAuthMiddleware,isAdmin,wrapAsync(ProductController.destroyProduct));

module.exports = router;