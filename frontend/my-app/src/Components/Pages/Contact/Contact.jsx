import React, { useState } from 'react';
import { Form, Card, Button, Container, Row, Col } from 'react-bootstrap';
import MapComponent from './MapComponents';
import axios from "axios";
function Contact() {
const [contact, setContact] = useState({
Name: '',
Email: '',
Phone: '',
Subject: '',
Message: ''
});

function ChangeInp(e) {
const { name, value } = e.target;
setContact({ ...contact, [name]: value });
}


async function Report(e)
{
e.preventDefault();
try{
 await axios.post("https://kvk-frontend.onrender.com/query/queries",contact,
{withCredentials: true}
)

alert("Your Query is Successfully Submitted");
setContact({
Name: '',
Email: '',
Phone: '',
Subject: '',
Message: ''    
})
}
catch(err)
{
console.log(err);
}
}

return (
<div> 
<Container className="my-5">
<Row className="justify-content-center">
<Col xs={12} md={8} lg={6}>
<Card className="p-4 shadow-sm">
<Card.Body>
<Card.Title className="mb-4 text-center">Drop any Query</Card.Title>
<Form onSubmit={Report}>
<Form.Group className="mb-3" controlId="formName">
<Form.Label>Your Name :</Form.Label>
<Form.Control
type="text"
placeholder="name ..."
name="Name"
value={contact.Name}
onChange={ChangeInp}
/>
</Form.Group>

<Form.Group className="mb-3" controlId="formEmail">
<Form.Label>Email address</Form.Label>
<Form.Control
type="email"
placeholder="name@example.com"
name="Email"
value={contact.Email}
onChange={ChangeInp}
/>
</Form.Group>

<Form.Group className="mb-3" controlId="formPhone">
<Form.Label>Phone Number :</Form.Label>
<Form.Control
type="tel"
placeholder="Phone Number here .."
name="Phone"
value={contact.Phone}
onChange={ChangeInp}
/>
</Form.Group>

<Form.Group className="mb-3" controlId="formSubject">
<Form.Label>Subject</Form.Label>
<Form.Control
type="text"
placeholder="Subject..."
name="Subject"
value={contact.Subject}
onChange={ChangeInp}
/>
</Form.Group>

<Form.Group className="mb-3" controlId="formMessage">
<Form.Label>Message</Form.Label>
<Form.Control
as="textarea"
rows={3}
name="Message"
value={contact.Message}
onChange={ChangeInp}
/>
</Form.Group>

<Button variant="primary" type="submit" className="w-100">
Submit
</Button>
</Form>
</Card.Body>
</Card>
</Col>
</Row>
</Container>

<Container className="my-5">
<h5 className="text-center mb-3">📍 हमारी लोकेशन</h5>
<MapComponent />
</Container>
</div>
);
}

export default Contact;
