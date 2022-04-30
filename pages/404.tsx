import { faSearch, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRef, useState } from "react";
import Seo from "../components/Seo";
import styles from "../styles/NotFound.module.scss";

export default function NotFound() {
  const [value, setValue] = useState("");

  console.log(value);
  const inputRef = useRef<HTMLInputElement>(null);
  function btnClose() {
    setValue("");
    inputRef.current!.focus();
  }

  return (
    <div className={styles.NotFound}>
      <Seo title="Page Not Found" content="page not found" />
      <div className={styles.wrapper}>
        <h1>The page you’re looking for can’t be found.</h1>
        <div className={styles.search}>
          <form>
            <input
              onChange={(e) => setValue(e.target.value)}
              value={value}
              title="이 입력란을 작성하세요"
              type="text"
              ref={inputRef}
            />
            <span className={styles.placeholder}>Search webtoonmoa.com</span>
            <div className={styles.searchIcon}>
              <FontAwesomeIcon icon={faSearch} id={styles.selected} />
            </div>
            <div className={styles.closeIcon} onClick={btnClose}>
              <FontAwesomeIcon icon={faXmarkCircle} id={styles.selected} />
            </div>
          </form>
        </div>
        <Link href="/">
          <div className={styles.sitemap}>Or see our site map</div>
        </Link>
      </div>
    </div>
  );
}
