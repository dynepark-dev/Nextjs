import styles from "../styles/GoButton.module.scss";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faHome,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import useClickOutside from "../hooks/useClickOutside";

export default function GoButton() {
  const [show, setShow] = useState(false);
  const domNode: any = useClickOutside(() => {
    setShow(false);
  });

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const scrollBottom = () => {
    window.scrollTo({ top: 99999, behavior: "smooth" });
  };

  return (
    <div ref={domNode} className={styles.GoButton}>
      <div className={styles.buttons} id={show ? styles.show : styles.hidden}>
        <button onClick={scrollTop}>
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
        <Link href="/">
          <button>
            <FontAwesomeIcon icon={faHome} />
          </button>
        </Link>
        <button onClick={scrollBottom}>
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
      <button id={show ? styles.plus : ""} onClick={() => setShow(!show)}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}
