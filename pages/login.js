import { useState } from "react";
import Router from "next/router";
import Layout from "../components/Layout";
import styles from "../styles/Form.module.css";

import { register } from "../firebase";

//Validaciones
import useValidation from "../hooks/useValidation";
import validateLogIn from "../validation/validateLogIn";

const INITIAL_STATE = {
  email: "",
  password: "",
};

export default function Login() {
  const [errorSignUp, setErrorSignUp] = useState("");

  const { data, error, handleChange, handleSubmit, handleBlur } = useValidation(
    INITIAL_STATE,
    validateLogIn,
    logIn
  );

  const { email, password } = data;

  function logIn() {
    console.log("Log in....");
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

          {errorSignUp && <p className={styles.error}>{errorSignUp}</p>}
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
