import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/signup">Signup</Link> |{" "}
      <Link to="/profile/john123">Profile</Link>
    </nav>
  );
}

export default Navbar;
