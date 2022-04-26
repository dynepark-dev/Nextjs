import Image from "next/image";
import styles from "../styles/Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faW } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";

interface INavItem {
  title: string;
  link: string;
}

export default function Navbar() {
  const navArray: INavItem[] = [
    { title: "최신", link: "/" },
    { title: "연재", link: "/" },
    { title: "완결", link: "/" },
    { title: "성인", link: "/" },
    { title: "BL/GL", link: "/" },
    { title: "북마크", link: "/" },
    { title: "커뮤니티", link: "/" },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  console.log(searchOpen);
  return (
    <nav className={styles.Navbar}>
      <ul className={styles.gnb}>
        <li
          className={styles.mobileMenu}
          onClick={() => setMobileOpen((prev) => !prev)}
          title="Menu"
        >
          <div className={styles.menuIcon}>
            <span
              className={styles.line1}
              id={mobileOpen ? styles.menuOpen1 : ""}
            ></span>
            <span
              className={styles.line2}
              id={mobileOpen ? styles.menuOpen2 : ""}
            ></span>
          </div>
        </li>
        <li title="WebtoonMoa">
          <FontAwesomeIcon icon={faW} className={styles.icon} />
        </li>
        {navArray.map((item) => {
          return (
            <li key={item.title} className={styles.navItem}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          );
        })}
        <li className={styles.search} title="Search">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={styles.icon}
            onClick={() => setSearchOpen((prev) => !prev)}
          />
        </li>
        <li title="Menu" id={mobileOpen ? styles.hide : ""}>
          <FontAwesomeIcon icon={faUser} className={styles.icon} />
        </li>
      </ul>
    </nav>
  );
}

function Search() {
  return (
    <div className={styles.Search}>
      <div className={styles.searchIcon}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <div className={styles.searchBar}>
        <form>
          <input type="text" placeholder="Search webtoonMoa.com" />
        </form>
      </div>

      <div className={styles.quickLinks}>
        <h2>Quick Links</h2>
        <ul>
          <li>
            <Link href="#">Visiting an Apple Store FAQ</Link>
          </li>
          <li>
            <Link href="#">Shop Apple Store Online</Link>
          </li>
          <li>
            <Link href="#">Accessories</Link>
          </li>
          <li>
            <Link href="#">AirPods</Link>
          </li>
          <li>
            <Link href="#">AirTag</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
