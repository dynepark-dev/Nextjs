import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import useClickOutside from "../hooks/useClickOutside";
import styles from "../styles/CardKP.module.scss";
import EllipsisPopup from "./EllipsisPopup";

export default function CardKP({ webtoon }: any) {
  const [show, setShow] = useState(false);
  const domNode: any = useClickOutside(() => {
    setShow(false);
  });

  return (
    <div className={styles.CardKP}>
      <div className={styles.image}>
        <Image src={"/image/sample_kp.png"} width={240} height={240} />
      </div>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.new}>new</div>
          <div
            className={styles.ellipsis}
            onClick={() => setShow((prev) => !prev)}
            ref={domNode}
          >
            <FontAwesomeIcon icon={faEllipsisV} id={styles.selected} />
            <div className={styles.popup}>{show && <EllipsisPopup />}</div>
          </div>
        </div>
        <div className={styles.title} title={webtoon.title}>
          {webtoon.title}
        </div>
        <div className={styles.episode} title={webtoon.episode}>
          {webtoon.episode}
        </div>
      </div>
    </div>
  );
}
