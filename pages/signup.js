import { useState } from "react";
import Router from "next/router";
import Layout from "../components/Layout";
import styles from "../styles/Form.module.css";

import { register } from "../firebase";

//Validaciones
import useValidation from "../hooks/useValidation";
import validateSignUp from "../validation/validateSignUp";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
};

export default function Signup() {
  const [errorSignUp, setErrorSignUp] = useState("");

  const { data, error, handleChange, handleSubmit, handleBlur } = useValidation(
    INITIAL_STATE,
    validateSignUp,
    createAccount
  );

  const { name, email, password } = data;

  async function createAccount() {
    try {
      await register(name, email, password);
      Router.push("/");
    } catch (err) {
      console.error("An error occurred when creating the user", err.message);
      if (err.message.match(/auth[^()]*/)[0] === "auth/email-already-in-use") {
        setErrorSignUp(
          "The email address is already in use by another account"
        );
      } else {
        setErrorSignUp("An error occurred when creating the user");
      }
    }
  }

  return (
    <Layout>
      <>
        <h1>Sign Up</h1>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          {error.name && <p className={styles.error}>{error.name}</p>}

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

          <input
            type="submit"
            value="Create account"
            className={styles.inputSubmit}
          />

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
