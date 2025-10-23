import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import {useParams} from "react-router-dom";
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
function Updateproduct({productId}) {
const [updateproduct, setUpdateProduct] = useState({
name: '',
description: '',
brand: '',
price: '',
offerPrice: ''
});
//   const {productId} = useParams(); 
const [image, setImage] = useState(null);


function ChangeInp(e) {
const value = e.target.value;
const name = e.target.name;    
setUpdateProduct({...updateproduct,[name] : value})
}

async function GetProduct() {
try {
const res =  await axios.get("https://krishivikaskendra2.onrender.com/product/getproduct",{withCredentials : true},) 
console.log(res.data.data);
setUpdateProduct({
name: res.data.data.name || '',
description: res.data.data.description || '',
brand: res.data.data.brand || '',
price: res.data.data.price || '',
offerPrice: res.data.data.offerPrice || ''
});
} catch (error) {
console.log(error);

}
}




async function UpdateProduct(e) {
e.preventDefault();

const formData = new FormData();
formData.append("name",updateproduct.name) 
formData.append("description",updateproduct.description) 
formData.append("brand",updateproduct.brand) 
formData.append("price",updateproduct.price) 
formData.append("offerPrice",updateproduct.offerPrice) 
formData.append("file", image);
// const token = localStorage.getItem("token");

try {
await axios.put(`https://krishivikaskendra2.onrender.com/update/${productId}`,formData,
{
headers: {   // ✅ yaha token bhej rahe ho
"Content-Type": "multipart/form-data"
},
withCredentials : true
}
)

} catch (error) {
console.log(error);

}

}

useEffect(() =>
{
GetProduct();    
},[])

return (
<div>
<Form onSubmit={UpdateProduct}>

<Form.Group className="mb-3" controlId="formUsername">
<Form.Label>Product Name :</Form.Label>
<Form.Control
type="text"
placeholder="Enter product name"
value={updateproduct.name}
name="name"
onChange={ChangeInp}
required
/>
</Form.Group>

<Form.Group className="mb-3" controlId="form1">
<Form.Label>About</Form.Label>
<Form.Control
type="text"
placeholder="Description ..."
value={updateproduct.description}
name="description"
onChange={ChangeInp}
required
/>
</Form.Group>

<Form.Group className="mb-3" controlId="form2">
<Form.Label>Brand :</Form.Label>
<Form.Control
type="text"
placeholder="brand name"
value={updateproduct.brand}
name="brand"
onChange={ChangeInp}
required
/>
</Form.Group>


<Form.Group className="mb-3" controlId="form3">
<Form.Label>Price</Form.Label>
<Form.Control
type="text"
placeholder="Product Price .."
value={updateproduct.price}
name="price"
onChange={ChangeInp}
required
/>
</Form.Group>


<Form.Group className="mb-3" controlId="form4">
<Form.Label>Offer Price</Form.Label>
<Form.Control
type="text"
placeholder="offerPrice .."
value={updateproduct.offerPrice}
name="offerPrice"
onChange={ChangeInp}
required
/>
</Form.Group>

<Form.Group className="mb-3" controlId="form5">
<Form.Label>Image</Form.Label>
<Form.Control
type="file"
name="image"
onChange={(e) =>setImage(e.target.files[0])}
required
/>
</Form.Group>

<Button variant="primary" type="submit">Submit</Button>
</Form>
</div>
)
}

export default Updateproduct
