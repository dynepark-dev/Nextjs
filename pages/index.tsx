import Seo from "../components/Seo";
import styles from "../styles/Home.module.scss";
import OfficialLinks from "../components/OfficialLinks";
import Hello from "../components/Hello";
import Ribbon from "../components/Ribbon";

export default function Home() {
  return (
    <>
      <Seo title="Home" />
      <div className={styles.Home}>
        <Ribbon
          line1="모든 웹툰은 공식 플랫폼으로 연결되어 있습니다."
          line2="연재 중인 웹툰 보러가기 ›"
          link="/webtoons?type=ongoing"
        />
        <div className={styles.wrapper}>
          <Hello />
          <OfficialLinks />
        </div>
      </div>
    </>
  );
}
