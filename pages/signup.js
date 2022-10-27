import Layout from "../components/Layout";

export default function Signup() {
  return (
    <Layout>
      <>
        <h1>Sign Up</h1>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Your Email"
              name="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Your Password"
              name="password"
            />
          </div>
          <input type="submit" value="Create account"/>
        </form>
      </>
    </Layout>
  );
}
