import React, { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthProvider';

const Login = () => {
    const {error, setError} = useState(null)
    const {signIn} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then( result => {
            const user = result.user;
            console.log(user)
            form.reset();
            navigate('/')
        })
        .catch( error => {
            console.error(error)
            setError(error.message)
        })
    }

    return (
        <div>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
               
                <p>if you haven't any account, please <Link to='/register'>Create An Acoount</Link></p>
                <Button variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
        </div>
    );
};

export default Login;