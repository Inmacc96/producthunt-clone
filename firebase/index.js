import app, {
  register,
  logIn,
  logOut,
  addProduct,
  uploadFile,
  getData,
  getDatabyId,
} from "./firebase";
import FirebaseContext from "./context";

export {
  register,
  logIn,
  logOut,
  addProduct,
  FirebaseContext,
  uploadFile,
  getData,
  getDatabyId,
};

export default app;
