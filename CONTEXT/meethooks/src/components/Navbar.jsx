import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/liked">Liked Users</Link>
      </div>
    </nav>
  );
};

export default Navbar;
