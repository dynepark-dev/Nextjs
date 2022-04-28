import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import useClickOutside from "../hooks/useClickOutside";
import styles from "../styles/CardAll.module.scss";
import EllipsisPopup from "./EllipsisPopup";

export default function CardAll({ webtoon }: any) {
  const [show, setShow] = useState(false);

  const domNode: any = useClickOutside(() => {
    setShow(false);
  });
  return (
    <div className={styles.CardAll}>
      <div className={styles.image}>
        <Image src={"/image/sample_kp.png"} width={180} height={180} />
      </div>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.genre}>Genre</div>
          <div
            className={styles.ellipsis}
            onClick={() => setShow(!show)}
            ref={domNode}
          >
            <FontAwesomeIcon icon={faEllipsisV} id={styles.selected} />
            <div className={styles.popup}>{show && <EllipsisPopup />}</div>
          </div>
        </div>
        <div className={styles.title} title={webtoon.title}>
          {webtoon.title}
        </div>
      </div>
    </div>
  );
}
