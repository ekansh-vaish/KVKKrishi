import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
function ManageProduct() {

const [product,setProduct] = useState(
  {
name : "",
description : "",
brand : "",
price : "",
offerPrice : ""    
  }
);  
 const [image, setImage] = useState(null);

function ChangeInp(e) {
const name = e.target.name;
const value = e.target.value;

setProduct({...product,[name] : value})
}
async function AddProduct(e) {
e.preventDefault();
const data = new FormData();
data.append('name',product.name);
data.append('description',product.description)
data.append('brand',product.brand)
data.append('price',product.price)
data.append('offerPrice',product.offerPrice)
if(image)
{
data.append('file',image);
}
// const token = localStorage.getItem("token");

try {
 await axios.post("https://krishivikaskendra2.onrender.com/product/product",data,{ 
headers :  {'Content-Type': 'multipart/form-data' },
withCredentials: true
});

 setProduct({
  name : "",
description : "",
image : "",
brand : "",
price : "",
offerPrice : ""  
 })
 setImage(null)
} catch (error) {
  console.log(error);
  
}  
}

return (
  
<div style={{display:'flex', justifyContent:"center" }}>
<Card className="p-4 shadow-sm" style={{ width: "100%", maxWidth: '600px', height:"auto" }}>
<Card.Body>
<Card.Title className="mb-4 text-center">Manage Product</Card.Title>
<Form onSubmit={AddProduct}>

<Form.Group className="mb-3" controlId="formUsername">
<Form.Label>Product Name :</Form.Label>
<Form.Control
type="text"
placeholder="Enter product name"
value={product.name}
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
value={product.description}
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
value={product.brand}
name="brand"
onChange={ChangeInp}
required
/>
</Form.Group>


<Form.Group className="mb-3" controlId="form3">
<Form.Label>Price</Form.Label>
<Form.Control
type="text"
placeholder="brand name"
value={product.price}
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
value={product.offerPrice}
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
</Card.Body>
</Card>
</div>
)
}

export default ManageProduct
