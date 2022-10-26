import {  createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import app from '../firbase/firebase.init';


export const AuthContext = createContext()
const auth = getAuth(app)
const UserContext = ({children}) => {
    const [user, setUser ] = useState({})

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()


     const createUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
     }
     const login = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
     }

    const googlePropup = () =>{
        signInWithPopup(auth, googleProvider)
        
     }

     const githubPopup = () => {
        signInWithPopup(auth, githubProvider)
     }


     useEffect(() =>{
        const unsubScribes =  onAuthStateChanged(auth, currentUser =>{
             setUser(currentUser);
             console.log(currentUser)
         })
         return (() =>{
             unsubScribes()
         })
 
     }, [])


    const authInfo = {googlePropup, githubPopup, createUser, login}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;