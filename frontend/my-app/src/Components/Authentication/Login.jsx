import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
function Login() {
const [userLogin, setUserLogin] = useState({ email: '', password: '' });

const navigate = useNavigate();

const handleChange = (e) => {
const { name, value } = e.target;
setUserLogin((prev) => ({ ...prev, [name]: value }));
};

const handleSubmit = async (e) => {
e.preventDefault();
try {
const response = await axios.post('https://krishivikaskendra2.onrender.com/auth/login', userLogin,{withCredentials :true});
console.log(response.data);
localStorage.setItem("role",response.data.payload.role );

alert("Login successful!");
navigate("/product")
setUserLogin({ email: '', password: '' });
} catch (error) {
if(error)
{
alert("Incorrect Email or Password");    
}
console.error(error);
}
};

return (
<Container className="d-flex justify-content-center align-items-center vh-100 bg-light">
<Card className="p-4 shadow-sm" style={{ width: '100%', maxWidth: '400px' }}>
<Card.Body>
<Card.Title className="mb-4 text-center">Login</Card.Title>
<Form onSubmit={handleSubmit}>
<Form.Group className="mb-3" controlId="formEmail">
<Form.Label>Email address</Form.Label>
<Form.Control
type="email"
placeholder="name@example.com"
name="email"
value={userLogin.email}
onChange={handleChange}
required
/>
</Form.Group>

<Form.Group className="mb-3" controlId="formPassword">
<Form.Label>Password</Form.Label>
<Form.Control
type="password"
placeholder="Enter password"
name="password"
value={userLogin.password}
onChange={handleChange}
required
/>
</Form.Group>
<p>Not registered ? <a href="/signup">Register Here..</a></p>
<Button variant="primary" type="submit" className="w-100">
Submit
</Button>
</Form>
</Card.Body>
</Card>
</Container>
);
}

export default Login;
