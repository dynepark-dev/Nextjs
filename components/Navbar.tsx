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
    { title: "최신", link: "/new" },
    { title: "연재", link: "/webtoons?category=ongoing" },
    { title: "완결", link: "webtoons?category=completed" },
    { title: "성인", link: "/webtoons?category=adult" },
    { title: "BL/GL", link: "/webtoons?category=BL/GL" },
    { title: "북마크", link: "/bookmark" },
    { title: "커뮤니티", link: "/community" },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
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
          <Link href={"/"}>
            <FontAwesomeIcon icon={faW} className={styles.icon} />
          </Link>
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
