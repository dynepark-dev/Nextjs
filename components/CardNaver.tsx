import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styles from "../styles/CardNaver.module.scss";

interface ICardProps {
  title: string;
  episode: string;
  genre: string[];
}

export default function CardNaver({ title, episode }: ICardProps) {
  return (
    <div className={styles.CardNaver}>
      <div className={styles.image}>
        <Image src={"/image/sample_naver.jpg"} width={168} height={180} />
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
