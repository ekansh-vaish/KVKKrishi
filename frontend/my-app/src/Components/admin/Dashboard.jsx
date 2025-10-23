import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Button, Modal, Container, Row, Col } from 'react-bootstrap';
import Updateproduct from './Updateproduct';
import ManageProduct from './ManageProduct';

function Dashboard() {
const [productData, setProductData] = useState([]);
const [show, setShow] = useState(false);
const [addProduct, setAddProduct] = useState(false);
const [selectedProductId, setSelectedProductId] = useState(null);

const handleClose = () => setShow(false);
const handleShow = (id) => {
setSelectedProductId(id);
setShow(true);
};

const FormClose = () => setAddProduct(false);
const FormeShow = () => setAddProduct(true);

async function ProductList() {
const response = await axios.get("https://krishivikaskendra2.onrender.com/product/getproduct", {
withCredentials: true,
headers: {
"Content-Type": "application/json"
}
});
setProductData(response.data.data);
}

async function DeleteProduct(id) {
try {
await axios.delete(`https://krishivikaskendra2.onrender.com/product/delete/${id}`, {
withCredentials: true
});
ProductList();
} catch (err) {
console.log(err);
}
}

useEffect(() => {
ProductList();
}, []);

return (
<>
<Container className="py-4">
<div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
<h4 className="mb-2">📦 Manage Your Products</h4>
<Button variant="primary" onClick={FormeShow}>
➕ Add New Product
</Button>
</div>

<Row className="g-4">
{productData.map((item, index) => (
<Col key={index} xs={12} sm={6} md={4} lg={3}>
<Card className="h-100 shadow-sm">
<Card.Img
variant="top"
src={item.image}
className="img-fluid p-3"
style={{ height: '250px', objectFit: 'contain' }}
/>
<Card.Body>
<Card.Title>{item.name}</Card.Title>
<Card.Text>{item.description}</Card.Text>
<Card.Text><strong>Brand:</strong> {item.brand}</Card.Text>
<Card.Text><strong>Price:</strong> ₹{item.price}</Card.Text>
<Card.Text><strong>Offer:</strong> ₹{item.offerPrice}</Card.Text>
<div className="d-flex justify-content-between mt-3">
  <Button variant="secondary" onClick={() => handleShow(item._id)}>
    ✏️ Update
  </Button>
  <Button variant="danger" onClick={() => DeleteProduct(item._id)}>
    🗑️ Remove
  </Button>
</div>
</Card.Body>
</Card>
</Col>
))}
</Row>
</Container>

{/* Update Modal */}
<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
<Modal.Header closeButton>
<Modal.Title>Update Item Here...</Modal.Title>
</Modal.Header>
<Modal.Body>
<Updateproduct productId={selectedProductId} />
</Modal.Body>
</Modal>

{/* Add Modal */}
<Modal show={addProduct} onHide={FormClose} backdrop="static" keyboard={false}>
<Modal.Header closeButton>
<Modal.Title>Add Item Here...</Modal.Title>
</Modal.Header>
<Modal.Body>
<ManageProduct />
</Modal.Body>
</Modal>
</>
);
}

export default Dashboard;
