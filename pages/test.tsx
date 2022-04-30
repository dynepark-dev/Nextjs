import { useState } from "react";
import PlayButton from "../components/PlayButton";
import Promo from "../components/Promo";
import PromoGallery from "../components/PromoGallery";
import styles from "../styles/test.module.scss";

export default function test() {
  const style = { animation: "paused" };
  const [play, setPlay] = useState(true);
  return (
    <div className={styles.test}>
      <Promo />
      {/* <div id={styles.paused}>
        <PromoGallery play={play} />
        <PromoGallery play={play} />
        <PlayButton play={play} setPlay={setPlay} />
      </div> */}
    </div>
  );
}
