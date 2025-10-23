import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
function Signup() {

const [userRegister,setuserRegister] = useState(
{
username  :"",
email :"",
password :"",
}
)
const navigate = useNavigate();
function ChangeInp (e)
{
const name = e.target.name;
const value = e.target.value;
setuserRegister({...userRegister,[name] : value})
}

async function UserSignup(e) {
e.preventDefault();
try{
 await axios.post("https://kvk-frontend.onrender.com/auth/signup",userRegister)
navigate("/login")
setuserRegister({
username :"",
email :"",
password :""    

})
}
catch(err)
{
if(err)
{
alert("Something went Wrong!")
}
}
}

return (

<Container className="d-flex justify-content-center align-items-center vh-100 bg-light">
<Card className="p-4 shadow-sm" style={{ width: '100%', maxWidth: '600px' }}>
<Card.Body>
<Card.Title className="mb-4 text-center">Create Your Account</Card.Title>
<Form onSubmit={UserSignup}>

<Form.Group className="mb-3" controlId="formUsername">
<Form.Label>Username</Form.Label>
<Form.Control
type="text"
placeholder="Enter username"
value={userRegister.username}
name="username"
onChange={ChangeInp}
required
/>
</Form.Group>

<Form.Group className="mb-3" controlId="formEmail">
<Form.Label>Email address</Form.Label>
<Form.Control
type="email"
placeholder="name@example.com"
value={userRegister.email}
name="email"
onChange={ChangeInp}
required
/>
</Form.Group>

<Form.Group className="mb-3" controlId="formPassword">
<Form.Label>Password</Form.Label>
<Form.Control
type="password"
placeholder="Enter password"
value={userRegister.password}
name="password"
onChange={ChangeInp}
required
/>
<p style={{color:"green"}}>Make Sure Your password  above atleast 4 characters</p>
</Form.Group>


<Button variant="primary" type="submit">Submit</Button>
</Form>
</Card.Body>
</Card>
</Container>
);
}

export default Signup;
