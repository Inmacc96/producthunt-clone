import { initializeApp } from "firebase/app";

import firebaseConfig from "./config";

// Esta clase va a contener los diferentes métodos para los usuarios
class Firebase {
  constructor() {
    // Cuando se cree una instancia de la clase, se va a inicializar la app de Firebase
    initializeApp(firebaseConfig);
  }
}

const firebase = new Firebase();
export default firebase;
