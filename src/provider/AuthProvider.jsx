import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import app from "../config/firebase.config";
import axiosPublic from "../api/axiosPublic";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const AuthInfoProvider = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    logOut,
    updateUserProfile,
  };

  useEffect(() => {
    // const axiosPublic = useAxiosPublic(); // Import and use your axios instance here

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      try {
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = { email: userEmail };
        setUser(currentUser);

        if (currentUser) {
          const res = await axiosPublic.post("/jwt", loggedUser);
          console.log("token response", res.data);
        } else {
          const res = await axiosPublic.post("/logout", loggedUser);
          console.log("logout", res.data);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error during authentication state change:", error);
        setLoading(false);
      }
    });

    return () => {
      unsubscribe(); // Unsubscribe when the component unmounts
    };
  }, [user]);

  return (
    <AuthContext.Provider value={AuthInfoProvider}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
