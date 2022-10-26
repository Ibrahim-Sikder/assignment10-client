import React from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { AuthContext } from "../../UserContext/UserContext";


const Register = () => {

  
  const {createUser} = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.password.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password)

        createUser(email, password)
        .then(result=>{
          const user = result.user ;
          console.log(user)
        })
        .then(error=>{
          console.error('error', error)
        })

    }


  return (
    <div>
      <Form onSubmit={handleSubmit} className="w-50 loginForm">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="name" name="name" placeholder="Full Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL </Form.Label>
          <Form.Control type="photoURL" name="photo" placeholder="Photo URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <div>
          <Link to="/register">
            <span>Register now </span>
          </Link>
        </div>
        <Button variant="info" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
