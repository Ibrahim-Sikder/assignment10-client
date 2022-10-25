import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div>
             <Form className="w-50 loginForm">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
     <div>
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