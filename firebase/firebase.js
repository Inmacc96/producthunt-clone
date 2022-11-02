import { initializeApp } from "firebase/app";
//Importar la autenticación
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";

import firebaseConfig from "./config";

const app = initializeApp(firebaseConfig);

//Registra a un usuario
export const register = async (name, email, password) => {
  const auth = getAuth(app); //Instancia de autenticación de Firebase
  const newUser = await createUserWithEmailAndPassword(auth, email, password);

  //Actualizar el usuario creado, añadiendo el nombre del usuario
  return await updateProfile(newUser.user, {
    displayName: name,
  });
};

//Inicia sesión del usuario
export const logIn = async (email, password) => {
  const auth = getAuth(app);
  return signInWithEmailAndPassword(auth, email, password);
};

export default app;
