import app, {
  register,
  logIn,
  logOut,
  addProduct,
  uploadFile,
  getData,
  getDatabyId,
  updateData
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
  updateData
};

export default app;
