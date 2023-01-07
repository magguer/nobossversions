import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth, googleProviderAuth } from "../firebase/firebaseConfig";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [userValue, setUserValue] = useState("")

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

  //Logueo de Usuario con Email
  const loginEmailUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  //Logueo de Usuario con Google
  const loginGoogleUser = () =>
    signInWithPopup(auth, googleProviderAuth).then((data) => {
      setUserValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });

    useEffect(() => {
      setUserValue(localStorage.getItem("email"))
    })

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
        loginGoogleUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
