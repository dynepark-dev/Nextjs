import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Hello.module.scss";

export default function Hello() {
  return (
    <div className={styles.Hello}>
      <div className={styles.wrapper}>
        <div className={styles.content_wrapper}>
          <h2 className={styles.headline}>WebtoonMoa</h2>
          <h3 className={styles.subhead}>웹툰 모아 놓은 곳</h3>
          <div className={styles.link}>
            <Link href="/webtoons?toon=ongoing">Ongoing</Link>
            <Link href="/webtoons?toon=completed">Completed</Link>
          </div>
        </div>
        <Image src={"/image/watch.png"} width={600} height={150} />
      </div>
    </div>
  );
}
