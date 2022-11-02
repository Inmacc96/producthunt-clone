import { FirebaseContext, register, logIn } from "../firebase";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseContext.Provider value={{ register, logIn }}>
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  );
}

export default MyApp;
