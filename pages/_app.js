import { FirebaseContext, register } from "../firebase";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <FirebaseContext.Provider value={{ register }}>
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  );
}

export default MyApp;
