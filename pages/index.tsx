import Seo from "../components/Seo";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Seo title="Home" />
      <div className={styles.Home}>
        <div className={styles.wrapper}> Home </div>
      </div>
    </>
  );
}
