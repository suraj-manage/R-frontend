import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import '../../design/navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="title">Recap</div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        
        <li className="dropdown">
          <a href="#">Hooks</a>
          <div className="dropdown-menu">
            <div className="dropdown-column">
              <h4><Link to={"/useState"}>useState</Link></h4>
              <h4><Link to={"/useEffect"}>useEffect</Link></h4>
              <h4><Link to={"/useMemo"}>useMemo</Link></h4>
              <h4><Link to={"/useRef"}>useRef</Link></h4>
            </div>
            <div className="dropdown-column">
              <h3>Redux tool kit</h3>
              <h4><Link to={"/useReducer"}>useReducer</Link></h4>
              <h4><Link to={"/useDispatch"}>useDispatch</Link></h4>
              <h4><Link to={"/useSelector"}>useSelector</Link></h4>
            </div>
          </div>
        </li>
        
        <li className="dropdown">
          <a href="#">Messages</a>
          <div className="dropdown-menu">
            <div className="dropdown-column">
              <h4><Link to={"/fetch"}>100-105</Link></h4>
              <h4><Link to={"/authMsg"}>200-206</Link></h4>
              <h4><Link to={"/content"}>300-306</Link></h4>
              <h4><Link to={"/interaction"}>400-405</Link></h4>
              <h4><Link to={"/sys-svr-err"}>500-504</Link></h4>
            </div>
          </div>
        </li>
        <Link to="/redux" className="nav-link">Redux</Link>
        <Link to="/ayncawait" className="nav-link">Async/Await</Link>
       </div> 
        <div className="navbar-section right-icon">
          {/*token &&*/ (
            <>
              <Link to="/profile" className="profile-icon" title="Profile">
                <FaUserCircle size={26} />
              </Link>
              <button
                className="logout-btn"
                //onClick={logout}
                title="Logout"
              >
                Logout
              </button>
            </>
          )}
        </div>
    </nav>
  );
}