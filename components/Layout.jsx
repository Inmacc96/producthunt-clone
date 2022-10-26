import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <h1>Header</h1>

      <nav>
        <Link href="/">Home</Link>
        <Link href="/aboutus">About us</Link>
      </nav>

      <main>{children}</main>
    </>
  );
};

export default Layout;
