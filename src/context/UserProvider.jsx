import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebaseConfig";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  //Observador de Usuario

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, photoURL, displayName, uid } = user;
        setUser({ email, photoURL, displayName, uid });
      } else {
        setUser(null);
      }
    });
    return () => unsuscribe();
  }, []);

  //Registro de Usuario
  const registerEmailUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  //Logueo de Usuario
  const loginEmailUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  //Cerrar Seción de Usuario

  const signOutEmailUser = () => signOut(auth);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        registerEmailUser,
        loginEmailUser,
        signOutEmailUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
