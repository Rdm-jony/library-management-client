import { createContext, useEffect, useState } from "react";
import { app } from "../../Firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, signInWithPopup } from "firebase/auth";
import axios from "axios";


export const AuthContext = createContext(null)
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUser = (user) => {
        setLoading(true)
        return updateProfile(auth.currentUser, user)
    }

    useEffect(() => {
        const unsubsCribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            const loggedUser = { email: currentUser.email }
            setLoading(false)
            if (currentUser) {
                axios.post('https://library-management-server-bice.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => console.log(res.data))
            }
        })

        return () => {
            return unsubsCribe()
        }
    }, [])
    const authInfo = { createUser, signInUser, logOut, updateUser, user, loading, signInWithGoogle }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;