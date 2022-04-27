import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styles from "../styles/CardKakao.module.scss";

interface ICardProps {
  title: string;
  episode: string;
  genre?: string[];
}

export default function CardKakao({ title, episode, genre }: ICardProps) {
  return (
    <div className={styles.CardKakao}>
      <div className={styles.image}>
        <Image src={"/image/sample_kakao.webp"} width={248} height={520} />
      </div>
      <div className={styles.content}>
        <div className={styles.orange}>New</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.episode}>{episode}</div>
        {/* <div className={styles.genre}>{genre}</div> */}
        <FontAwesomeIcon
          icon={faEllipsisV}
          className={styles.ellipsis}
          id={styles.selected}
        />
      </div>
    </div>
  );
}
