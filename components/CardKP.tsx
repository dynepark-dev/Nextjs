import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styles from "../styles/CardKP.module.scss";

interface ICardKP {
  title: string;
  episode?: string;
  genre?: string[];
}

export default function CardKP({ episode, title }: ICardKP) {
  return (
    <div className={styles.CardKP}>
      <div className={styles.image}>
        <Image src={"/image/sample_kp.png"} width={240} height={240} />
      </div>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.orange}>New</div>
          <FontAwesomeIcon
            icon={faEllipsisV}
            className={styles.ellipsis}
            id={styles.selected}
          />
        </div>
        <div className={styles.title} title={title}>
          {title}
        </div>
        <div className={styles.episode} title={episode}>
          {episode}
        </div>
      </div>
    </div>
  );
}
