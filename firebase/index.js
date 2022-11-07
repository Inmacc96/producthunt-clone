import app, {
  register,
  logIn,
  logOut,
  addProduct,
  uploadFile,
  getData,
  getDatabyId,
  updateData,
  deleteData,
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
  updateData,
  deleteData,
};

export default app;
