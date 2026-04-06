import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="fixed top-0 z-10 w-full border-2 text-xl border-black items-center flex py-5 px-2">
      <ul className="flex gap-10 items-center">
        <div>
          <h1 className="text-2xl">logo</h1>
        </div>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/products">products</Link>
        </li>
        <li>
          <Link to="/service">service</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
