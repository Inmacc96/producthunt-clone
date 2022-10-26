import Search from "./Search";
import Nav from "./Nav";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <p>P</p>

          <Search />

          <Nav />
        </div>

        <div>
          <p>Hola: Inma</p>

          <button type="button">Log Out</button>
          <Link href="/">Log In</Link>
          <Link href="/">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
