import app, {
  register,
  logIn,
  logOut,
  addProduct,
  uploadFile,
} from "./firebase";
import FirebaseContext from "./context";

export { register, logIn, logOut, addProduct, FirebaseContext, uploadFile };

export default app;
