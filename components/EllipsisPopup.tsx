import {
  faClock,
  faBookmark,
  faFlag,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/EllipsisPopup.module.scss";

export default function EllipsisPopup() {
  return (
    <ul className={styles.EllipsisPopup}>
      <li onClick={() => alert("북마크에 추가")}>
        <FontAwesomeIcon icon={faBookmark} />
        <span>북마크에 추가</span>
      </li>
      <li onClick={() => alert("나중에 볼 웹툰에 저장")}>
        <FontAwesomeIcon icon={faClock} />
        <span>나중에 볼 웹툰에 저장</span>
      </li>
      <li onClick={() => alert("공유")}>
        <FontAwesomeIcon icon={faShareNodes} />
        <span>공유</span>
      </li>
      <hr />
      <li onClick={() => alert("웹툰 추천 안함")}>
        <FontAwesomeIcon icon={faTrashCan} />
        <span>웹툰 추천 안함</span>
      </li>
      <li onClick={() => alert("신고")}>
        <FontAwesomeIcon icon={faFlag} />
        <span>신고</span>
      </li>
    </ul>
  );
}
