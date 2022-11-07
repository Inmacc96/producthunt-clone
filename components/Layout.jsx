import Header from "./Header";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Product Hunt Clone - NextJS y Firebase</title>
      </Head>

      <Header />

      <main>{children}</main>
    </>
  );
};

export default Layout;
