import styles from "../styles/PlayButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePause,
  faCirclePlay,
} from "@fortawesome/free-regular-svg-icons";

export default function PlayButton({ play, setPlay }: any) {
  return (
    <div className={styles.PlayButton} onClick={() => setPlay(!play)}>
      {play ? (
        <FontAwesomeIcon icon={faCirclePause} className={styles.stop} />
      ) : (
        <FontAwesomeIcon icon={faCirclePlay} className={styles.play} />
      )}
    </div>
  );
}
