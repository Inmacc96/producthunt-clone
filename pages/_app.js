import { FirebaseContext, register, logIn } from "../firebase";
import useAuth from "../hooks/useAuth";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const user = useAuth();

  return (
    <FirebaseContext.Provider value={{ register, logIn, user }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FirebaseContext.Provider>
  );
}

export default MyApp;
