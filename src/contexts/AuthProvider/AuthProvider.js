import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // googleProvider
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    // eamil and password setup-1 for register form
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // eamil and password setup-2 for login form
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    //logOut
    const logOut = () => {
        return signOut(auth);
    }

    // gitHubProvder
    const providerLoginGtitHub = (provider) => {
        return signInWithPopup(auth, provider);
    }

    // call outside API using fribase> Manage Users
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside auth  state change', currentUser);
            setUser(currentUser)
        });

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo = {
        user,
        providerLogin,
        providerLoginGtitHub,
        logOut,
        createUser,
        signIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;