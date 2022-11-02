import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

//Hook para que esté revisando si el usuario está autenticado todo el tiempo
const useAuth = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState({});

  useEffect(() => {
    //Obtener el usuario que ha iniciado sesión actualmente
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticatedUser(user);
      } else {
        setAuthenticatedUser({});
      }
    });
  }, []);

  return authenticatedUser;
};

export default useAuth;
