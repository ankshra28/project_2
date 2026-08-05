import { Link } from "react-router-dom";
import {
  FaSearch,
  FaHeart,
  FaPhoneAlt,
  FaShoppingCart,
  FaUserCircle,
  FaMapMarkerAlt,
  FaInfoCircle,
  FaBuilding,
  FaGoogle
} from "react-icons/fa";

import styles from "./Navbar.module.css";

const menuItems = [
  { name: "Birthday", path: "/birthday" },
  { name: "Anniversary", path: "/anniversary" },
  { name: "BabyCeremony", path: "/baby-ceremony" },
  { name: "Haldi and Mehndi", path: "/haldi-mehndi" },
   { name: "Kids special", path: "/kids-special " },
    // { name: "candle light dinner", path: "/candle" },
  // { name: "Corporate", path: "/corporate" },
  // { name: "About Us", path: "/about" },
  // { name: "Google Reviews", path: "/reviews" }
];

function Navbar() {
  return (
    <>
      {/* Top Header */}
      <header className={styles.header}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link to="/">
            <h2>
              Balloon Decoration in Varanasi<span> &Haldi mehndi</span>
            </h2>
          </Link>
        </div>

        {/* Location */}
        <div className={styles.location}>
          <FaMapMarkerAlt />
          <div>
            <small>Location</small>
            <p>Varanasi</p>
          </div>
        </div>

        {/* Search */}
        <div className={styles.searchBox}>
          <FaSearch />
          <input
            type="text"
            placeholder="Search Decorations..."
          />
        </div>

        {/* Icons */}


        <div className={styles.icons}>

          {/* <Link to ="/home">
          
          <FaBuilding/>
          </Link> */}

          <Link to="/get-in-touch">
            <FaPhoneAlt />
          </Link>



           {/* <Link to="/contact">
            <FaPhoneAlt 
          </Link> */}

          <Link to="/cart">
            <FaShoppingCart />
          </Link>
           
            <Link to="/about">
            <FaInfoCircle />
          </Link>

          {/* <Link to="/account">
            <FaUserCircle />
          </Link> */}

          

           <Link to="/https://share.google/usJ0hDyFSUqcVSAVq">
            <  FaGoogle/>
          </Link>
             {/* <a
            href="https://maps.app.goo.gl/xxxxxxxx"
      
            target="_blank"
            rel="noopener noreferrer"
            className={styles.locationBtn}
          >
           <FaGoogle/>
          
          </a> */}

        </div>
      </header>

      {/* Navigation */}
      <nav className={styles.navbar}>
        {menuItems.map((item) => (
          <Link key={item.name} to={item.path}>
            {item.name}
          </Link>
        ))}
      </nav>
    </>
  );
}


export default Navbar;