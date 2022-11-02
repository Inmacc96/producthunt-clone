import { useState } from "react";
import Router from "next/router";
import Layout from "../components/Layout";
import styles from "../styles/Form.module.css";

import { logIn } from "../firebase";

//Validaciones
import useValidation from "../hooks/useValidation";
import validateLogIn from "../validation/validateLogIn";

const INITIAL_STATE = {
  email: "",
  password: "",
};

export default function Login() {
  const [errorLogIn, setErrorLogIn] = useState("");

  const { data, error, handleChange, handleSubmit, handleBlur } = useValidation(
    INITIAL_STATE,
    validateLogIn,
    logInUser
  );

  const { email, password } = data;

  async function logInUser() {
    try {
      await logIn(email, password);
      Router.push("/");
    } catch (err) {
      console.error("There was an error authenticating the user", err.message);
      if (err.message.match(/auth[^()]*/)[0] === "auth/user-not-found") {
        setErrorLogIn(
          "There is no user record corresponding to this identifier"
        );
      } else if (err.message.match(/auth[^()]*/)[0] === "auth/wrong-password") {
        setErrorLogIn("The password is invalid");
      } else {
        setErrorLogIn("There was an error authenticating the user");
      }
    }
  }

  return (
    <Layout>
      <>
        <h1>Log In</h1>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          {error.email && <p className={styles.error}>{error.email}</p>}

          <div className={styles.field}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Your Password"
              name="password"
              value={password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          {error.password && <p className={styles.error}>{error.password}</p>}

          <input type="submit" value="Log In" className={styles.inputSubmit} />

          {errorLogIn && <p className={styles.error}>{errorLogIn}</p>}
        </form>

        <style jsx>
          {`
            h1 {
              text-align: center;
              margin-top: 5rem;
            }
          `}
        </style>
      </>
    </Layout>
  );
}
