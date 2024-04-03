import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex">
      {/* a tag를 쓰면 누르고 들어갔을 때 새로고침을 한다. */}
      <Link to="/">Home</Link>
      <Link to="/join">Signup</Link>
      <Link to="/login">Login</Link>
      <Link to="/board">Boards</Link>
    </nav>
  );
};

export default NavBar;
