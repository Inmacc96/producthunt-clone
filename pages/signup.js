import Layout from "../components/Layout";
import styles from "../styles/Form.module.css";

export default function Signup() {
  return (
    <Layout>
      <>
        <h1>Sign Up</h1>
        <form className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" name="name" />
          </div>
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Your Email"
              name="email"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Your Password"
              name="password"
            />
          </div>
          <input
            type="submit"
            value="Create account"
            className={styles.inputSubmit}
          />
        </form>

        <style jsx>
          {
            `
            h1{
              text-align:center;
              margin-top:5rem;
            }
            `
          }
        </style>
      </>
    </Layout>
  );
}
