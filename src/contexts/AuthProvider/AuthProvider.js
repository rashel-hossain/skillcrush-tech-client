import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // googleProvider
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
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

    const authInfo = { user, providerLogin, providerLoginGtitHub, logOut }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;