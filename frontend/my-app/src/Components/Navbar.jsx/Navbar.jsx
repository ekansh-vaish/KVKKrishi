import React, { useEffect, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../../assets/Screenshot 2025-10-06 210210.png";
import axios from 'axios';

function Navbar1() {
const navigate = useNavigate();
const [role, setRole] = useState(null);

useEffect(() => {
const storedRole = localStorage.getItem("role");
setRole(storedRole);
}, []);

async function handleLogout() {
try {
await axios.post("https://krishivikaskendra2.onrender.com/logout", {}, {
withCredentials: true
});
localStorage.removeItem("role");
setRole(null);
navigate("/login");
} catch (error) {
console.error("Logout failed:", error);
}
}

return (
<Navbar expand="lg" bg="light" className="shadow-sm">
<Container fluid>
<Navbar.Brand as={Link} to="/product" className="d-flex align-items-center">
<img src={logo} alt="logo" height="50" className="me-2" />
<span className="fw-bold">Krishi Vikas Kendra</span>
</Navbar.Brand>

<Navbar.Toggle aria-controls="navbarScroll" />
<Navbar.Collapse id="navbarScroll">
<Nav className="ms-auto my-2 my-lg-0" navbarScroll>
<Nav.Link as={Link} to="/product"><b>Explore</b></Nav.Link>
<Nav.Link as={Link} to="/network"><b>Network</b></Nav.Link>
<Nav.Link as={Link} to="/aboutus"><b>About Us</b></Nav.Link>
<Nav.Link as={Link} to="/contactus"><b>Contact Us</b></Nav.Link>

{role === "admin" && (
<>
<Nav.Link as={Link} to="/manageproduct"><b>Add New Product</b></Nav.Link>
<Nav.Link as={Link} to="/dashboard"><b>Manage Product</b></Nav.Link>
</>
)}

{role && (
<Nav.Link onClick={handleLogout}><b>Logout</b> </Nav.Link>
)}
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>
);
}

export default Navbar1;
