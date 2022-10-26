
import { Link } from "react-router-dom";
import './Header.css'
import { useContext } from "react";
import { AuthContext } from "../../UserContext/UserContext";

const Header = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
     



     <div className="navbar bg-primary text-primary-content">
      <Link><img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3dbts_3EryxmZ4IGDw6fYNWYwsnFuhjAF1h2Dk-jfg&s" alt="" /></Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/">Learning English</Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/home">Home</Link>
      <Link className="btn btn-ghost normal-case text-xl" to="/course">Courses</Link>
      <Link className="btn btn-ghost normal-case text-xl" to="/faq">FAQ</Link>
      <Link className="btn btn-ghost normal-case text-xl" to="/blog">Blog</Link>
      <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
      <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
       </div>
          

    </div>
  );
};

export default Header;
