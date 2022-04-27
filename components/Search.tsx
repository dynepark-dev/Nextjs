import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styles from "../styles/Search.module.scss";

export default function Search() {
  return (
    <div className={styles.Search}>
      <div className={styles.searchbar}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={styles.searchIcon}
        />
        <form action="">
          <input type="text" placeholder="Search webtoonMoa.com" />
        </form>
        <FontAwesomeIcon icon={faX} className={styles.closeIcon} />
      </div>
      <div className={styles.quickLinks}>
        <h2>QUICK LINKS</h2>
        <ul>
          <li>
            <Link href={"/"}>Visiting a Webtoon Moa FAW</Link>
          </li>
          <li>
            <Link href={"/"}>Visiting a Webtoon Moa FAW</Link>
          </li>
          <li>
            <Link href={"/"}>Visiting a Webtoon Moa FAW</Link>
          </li>
          <li>
            <Link href={"/"}>Visiting a Webtoon Moa FAW</Link>
          </li>
          <li>
            <Link href={"/"}>Visiting a Webtoon Moa FAW</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
