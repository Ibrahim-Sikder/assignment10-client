import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './Login.css';

const Login = () => {
    const handleSubmit = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
    return (
        <div>
             <Form onSubmit={handleSubmit} className="w-50 loginForm">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
     <div>
        <div>
        <Button variant="outline-success">Login with Google</Button>{' '}
      <Button variant="outline-warning">Login with Github </Button>{' '}
        </div>
     <Link to='/register'><span>Register now </span></Link>
     </div>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
        </div>
    );
};

export default Login;