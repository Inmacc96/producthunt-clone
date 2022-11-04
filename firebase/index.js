import app, {
  register,
  logIn,
  logOut,
  addProduct,
  uploadFile,
  getData,
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
};

export default app;
