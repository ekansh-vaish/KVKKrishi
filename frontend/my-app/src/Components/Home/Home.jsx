import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Home.css';
import Form from 'react-bootstrap/Form';

function Home() {
const [productData, setProductData] = useState([]);
const [showModal, setShowModal] = useState(false);
const [selectedProduct, setSelectedProduct] = useState(null);
const [searchterm,setSearchTerm] = useState("");
const handleClose = () => setShowModal(false);
const handleShow = (product) => {
setSelectedProduct(product);
setShowModal(true);
};

async function ProductList() {
try {

const response = await axios.get("https://krishivikaskendra2.onrender.com/product/getproduct",
{
withCredentials : true,   
headers: {
"Content-Type": "application/json"
},}
);
setProductData(response.data.data);
} catch (error) {
  console.error("Error fetching products:", error);
if(error.response && error.response.status === 401)
{
 alert("your session expired.Please login again!");
 window.location.href = "/login" 
}
else {
console.error("Error fetching products:", error); 
}
}
}

function Search() {
 const filtered =  productData.filter((item) => 
    item.name.toLowerCase().includes(searchterm.toLowerCase())
    );
    console.log(productData);
    setProductData(filtered);
}

useEffect(() => {
ProductList();
}, []);

return (
<div className='search'>
<h1>Product Available in Krishi Vikas Kendra</h1>    
<Form className="d-flex justify-content-center">
<Form.Control
type="search"
value={searchterm}
onChange={(e) =>setSearchTerm(e.target.value)}
placeholder="Search"
className="me-2 w-25 m-3"
aria-label="Search"
/>
<Button variant="outline-success" onClick={Search} style={{height:"35px", width:"80px", marginTop:"17px"}}>Search</Button>
</Form>
<div className='main'>
{productData.map((item, index) => (
<Card
  key={index}
  style={{ width: '18rem', height: '400px', cursor: 'pointer', margin: '20px' }}
  onClick={() => handleShow(item)}
>
  <Card.Img
    variant="top"
    className="image"
    src={item.image}
    alt={item.name}
    style={{ height: '200px', objectFit: 'cover' }}
  />
  <hr />
  <Card.Body style={{ padding: '12px' }}>
    <Card.Title style={{ fontSize: '1.1rem' }}>{item.name}</Card.Title>
    <Card.Text style={{ fontSize: '0.9rem' }}>
      <strong>Price:</strong>{' '}
      <span style={{ textDecoration: 'line-through', color: 'red' }}>
        ₹{item.price}
      </span>
      <br />
      <strong>OfferPrice:</strong> ₹{item.offerPrice}
    </Card.Text>
    <p style={{ fontSize: '0.85rem', marginTop: '8px' }}>
      Offer available with best price
    </p>
  </Card.Body>
</Card>
))}

<Modal show={showModal} onHide={handleClose} centered>
<Modal.Header closeButton>
<Modal.Title>{selectedProduct?.name}</Modal.Title>
</Modal.Header>
<Modal.Body>
<img
src={selectedProduct?.image}
alt={selectedProduct?.name}
style={{ width: '100%', height:"400px", marginBottom: '15px' }}
/>
<p><strong>Description:</strong> {selectedProduct?.description}</p>
<p><strong>Brand:</strong> {selectedProduct?.brand}</p>
<p><strong>Price:</strong><span style={{ textDecoration: 'line-through', color: 'red' }}> ₹{selectedProduct?.price} </span></p>
<p><strong>Offer:</strong> ₹{selectedProduct?.offerPrice}</p>
</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={handleClose}>Close</Button>
</Modal.Footer>
</Modal>
</div>
</div>
);
}

export default Home;
