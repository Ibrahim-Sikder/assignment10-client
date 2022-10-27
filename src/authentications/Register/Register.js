import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Register.css';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../context/AuthContext/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useState } from 'react';



const Register = () => {
    const {error, setError} = useState(null)
    const {providerLogin, githubLogin, createUser} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then( result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error =>{
            console.error('error', setError(error.message))
        })
    }

    const handleGithubSignIn = () => {
        githubLogin(githubProvider)
        .then( result => {
            const user = result.user;
            console.log(user);
            setError(error.message)
        })
        .catch( error => console.error(error))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password)

        createUser(email, password)
        .then( result => {
            const user = result.user;
            console.log(user)
            form.reset();
            setError(error.message)
        })
        .catch(error => console.error(error))
    }

    return (
        <div>
            <div className='mb-4'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Your Name" />
                        {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your PhotoURL</Form.Label>
                        <Form.Control name="photoURL" type="text" placeholder="Enter PhotoURL" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" required />
                    </Form.Group>
                  
                    <p>Already have An Acoount, please <Link to='/login'>Log In</Link></p>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
            </div>
            <div className='other-login-type'>
                <Button onClick={handleGoogleSignIn} className='me-3' variant="outline-warning" type="submit">
                    <FaGoogle></FaGoogle> Login With Google
                </Button>
                <Button onClick={handleGithubSignIn} variant="outline-warning" type="submit">
                    <FaGithub></FaGithub> Login With GitHub
                </Button>
            </div>
        </div>
    );
};

export default Register;