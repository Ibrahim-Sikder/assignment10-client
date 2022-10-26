import {  getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { createContext } from 'react';
import app from '../firbase/firebase.init';


export const AuthContext = createContext()
const auth = getAuth(app)
const UserContext = ({children}) => {

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

    const googlePropup = () =>{
        signInWithPopup(auth, googleProvider)
        
     }

     const githubPopup = () => {
        signInWithPopup(auth, githubProvider)
     }




    const authInfo = {googlePropup, githubPopup}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;