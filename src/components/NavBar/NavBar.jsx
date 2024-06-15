import styles from "./navbar.module.scss";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  /*     const menuList = ['Home', 'About', 'Contacts']; */
  const menuList = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contacts", path: "/contacts" },
  ];

  return (
    <nav className={styles.navbarContainer}>
      <Logo />
      <ul className={styles.menuList}>
        {menuList.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                (isActive ? styles.active : "")
              }>
              {item.name}
            </NavLink>
            {/* <Link to={item.path}>{item.name}</Link> questo per usare link standard */}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
