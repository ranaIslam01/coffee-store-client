import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged,
    signOut, 
} from 'firebase/auth';
import { AuthContext } from './AuthContext';

// Create and export the AuthContext


const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   // Function to create a new user
   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   // Function to sign in an existing user
   const signInUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   // Function to log out the current user
   const logOut = () => {
      setLoading(true);
      return signOut(auth);
   };

   // Observe auth state changes (Login/Logout/Refresh)
   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser);
         setLoading(false); // Stop loading once user data is fetched
      });

      // Cleanup subscription on unmount
      return () => {
         unSubscribe();
      };
   }, []);

   // Data to be shared across the application
   const userInfo = {
      user,
      setUser,
      loading,
      createUser,
      signInUser,
      logOut,
   };

   return (
      <AuthContext.Provider value={userInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;