// import { Link } from "react-router-dom";
// import {
//   FaSearch,
//   FaHeart,
//   FaPhoneAlt,
//   FaShoppingCart,
//   FaUserCircle,
//   FaMapMarkerAlt,
//   FaInfoCircle,
//   FaBuilding,
//   FaGoogle
// } from "react-icons/fa";

// import styles from "./Navbar.module.css";

// const menuItems = [
//   { name: "Birthday", path: "/birthday" },
//   { name: "Anniversary", path: "/anniversary" },
//   { name: "BabyCeremony", path: "/baby-ceremony" },
//   { name: "Haldi and Mehndi", path: "/haldi-mehndi" },
//    { name: "Kids special", path: "/kids-special " },
//     // { name: "candle light dinner", path: "/candle" },
//   // { name: "Corporate", path: "/corporate" },
//   // { name: "About Us", path: "/about" },
//   // { name: "Google Reviews", path: "/reviews" }
// ];

// function Navbar() {
//   return (
//     <>
//       {/* Top Header */}
//       <header className={styles.header}>
//         {/* Logo */}
//         <div className={styles.logo}>
//           <Link to="/">
//             <h2>
//               Balloon Decoration in Varanasi & Haldi Mehndi<span> &Haldi mehndi</span>
//             </h2>
//           </Link>
//         </div>

//         {/* Location */}
//         <div className={styles.location}>
//           <FaMapMarkerAlt />
//           <div>
//             <small>Location</small>
//             <p>Varanasi</p>
//           </div>
//         </div>

//         {/* Search */}
//         <div className={styles.searchBox}>
//           <FaSearch />
//           <input
//             type="text"
//             placeholder="Search Decorations..."
//           />
//         </div>

//         {/* Icons */}


//         <div className={styles.icons}>

//           {/* <Link to ="/home">

//           <FaBuilding/>
//           </Link> */}

//           <Link to="/get-in-touch">
//             <FaPhoneAlt />
//           </Link>



//            {/* <Link to="/contact">
//             <FaPhoneAlt 
//           </Link> */}

//           <Link to="/cart">
//             <FaShoppingCart />
//           </Link>

//             <Link to="/about">
//             <FaInfoCircle />
//           </Link>

//           {/* <Link to="/account">
//             <FaUserCircle />
//           </Link> */}



//            <Link to="/https://share.google/usJ0hDyFSUqcVSAVq">
//             <  FaGoogle/>
//           </Link>
//              {/* <a
//             href="https://maps.app.goo.gl/xxxxxxxx"

//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.locationBtn}
//           >
//            <FaGoogle/>

//           </a> */}

//         </div>
//       </header>

//       {/* Navigation */}
//       <nav className={styles.navbar}>
//         {menuItems.map((item) => (
//           <Link key={item.name} to={item.path}>
//             {item.name}
//           </Link>
//         ))}
//       </nav>
//     </>
//   );
// }


// export default Navbar;
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaPhoneAlt,
  FaShoppingCart,
  FaInfoCircle,
  FaGoogle,
  FaMapMarkerAlt,
  FaHistory,
} from "react-icons/fa";

import { useCart } from "../../context/CartContext";
import styles from "./Navbar.module.css";

const menuItems = [
  { name: "Birthday", path: "/birthday" },
  { name: "Anniversary", path: "/anniversary" },
  { name: "Baby Ceremony", path: "/baby-ceremony" },
  { name: "Kids Special", path: "/kids-special" },
  { name: "Haldi & Mehndi", path: "/haldi-mehndi" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { totalItems } = useCart();

  return (
    <>
      {/* =========================
          HEADER
      ========================== */}

      <header className={styles.header}>
        <div className={styles.container}>
          {/* Logo */}

          <Link to="/" className={styles.logo}>
            <h2>
              🎈 Balloon Decoration in Varanasi & Haldi Mehndi
              {/* <span> Varanasi</span> */}
            </h2>

            {/* <small>
              Balloon Decoration in Varanasi & Haldi Mehndi
            </small> */}
          </Link>

          {/* Search */}

          <div className={styles.searchBox}>
            <FaSearch />

            <input
              type="text"
              placeholder="Search Birthday, Anniversary..."
            />
          </div>

          {/* Desktop Icons */}

          <div className={styles.actions}>
            <a href="tel:+919999999999" title="Call">
              <FaPhoneAlt />
            </a>

            <NavLink to="/about" title="About">
              <FaInfoCircle />
            </NavLink>

            <a
              href="https://maps.app.goo.gl/S11QgVRE7nTxDMQf9"
              target="_blank"
              rel="noopener noreferrer"
              title="Location"
            >
              <FaMapMarkerAlt />
            </a>

            <a
              href="https://share.google/usJ0hDyFSUqcVSAVq"
              target="_blank"
              rel="noopener noreferrer"
              title="Google"
            >
              <FaGoogle />
            </a>

            <NavLink
              to="/history"
              title="Booking History"
              className={styles.history}
            >
              <FaHistory />
            </NavLink>

            <NavLink
              to="/cart"
              className={styles.cart}
            >
              <FaShoppingCart />

              {totalItems > 0 && (
                <span className={styles.badge}>
                  {totalItems}
                </span>
              )}
            </NavLink>
          </div>

          {/* Mobile Button */}

          <button
            className={styles.menuButton}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* =========================
          NAVIGATION
      ========================== */}

      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? `${styles.link} ${styles.active}`
                  : styles.link
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* =========================
          MOBILE MENU
      ========================== */}

      <div
        className={
          menuOpen
            ? `${styles.mobileMenu} ${styles.show}`
            : styles.mobileMenu
        }
      >
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? `${styles.mobileLink} ${styles.mobileActive}`
                : styles.mobileLink
            }
          >
            {item.name}
          </NavLink>
        ))}

        <hr />

        <NavLink
          to="/about"
          onClick={() => setMenuOpen(false)}
          className={styles.mobileLink}
        >
          About Us
        </NavLink>

        <NavLink
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className={styles.mobileLink}
        >
          Contact
        </NavLink>

        <NavLink
          to="/history"
          onClick={() => setMenuOpen(false)}
          className={styles.mobileLink}
        >
          <FaHistory />

          <span>Booking History</span>
        </NavLink>
        <NavLink
          to="/cart"
          onClick={() => setMenuOpen(false)}
          className={styles.mobileLink}
        >
          Cart ({totalItems})
        </NavLink>

        <a
          href="tel:+919999999999"
          className={styles.callButton}
        >
          <FaPhoneAlt />

          Call Now
        </a>
      </div>
    </>
  );
}