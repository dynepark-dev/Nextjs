import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import useClickOutside from "../hooks/useClickOutside";
import styles from "../styles/CardNaver.module.scss";
import EllipsisPopup from "./EllipsisPopup";

export default function CardNaver({ webtoon }: any) {
  const [show, setShow] = useState(false);

  const domNode: any = useClickOutside(() => {
    setShow(false);
  });

  return (
    <div className={styles.CardNaver}>
      <div className={styles.image}>
        <Image src={"/image/sample_naver.jpg"} width={126} height={135} />
        {/* <Image src={"/image/sample_naver.jpg"} width={168} height={180} /> */}
      </div>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.new}>New</div>
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
