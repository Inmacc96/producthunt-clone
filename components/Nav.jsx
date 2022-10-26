import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/">Popular</Link>
      <Link href="/">Recent</Link>
    </nav>
  );
};

export default Nav;
