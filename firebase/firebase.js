import { initializeApp } from "firebase/app";
//Importar la autenticación
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

//Importar la base de datos
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Importar storage
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";

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

//Cierra la sesión del usuario
export const logOut = async () => {
  const auth = getAuth(app);
  await signOut(auth);
};

// Agregar un registro a la base de datos
export const addProduct = async (data) => {
  //Inicializar Cloud Firestore y obtener una referencia del servicio
  const db = getFirestore(app);

  // Agregar un documento con un ID generado
  return await addDoc(collection(db, "products"), data);
};

export const uploadFile = (file) => {
  const storage = getStorage(app);

  // Se obtiene referencia de la ubicación donde se guardará la imagen
  const storageRef = ref(storage, "images/" + file.name);

  // Se realiza la subida del archivo
  const uploadTask = uploadBytesResumable(storageRef, file);

  return uploadTask;
};

export default app;
