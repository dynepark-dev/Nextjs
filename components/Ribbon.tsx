import Link from "next/link";
import styles from "../styles/Ribbon.module.scss";

interface IRibbonProps {
  line1: string;
  line2: string;
  link: string;
}

export default function Ribbon({ line1, line2, link }: IRibbonProps) {
  return (
    <div className={styles.Ribbon}>
      <div className={styles.wrapper}>
        <span className={styles.title}>{line1}</span>
        {link && (
          <Link href={link}>
            <div className={styles.link}>{line2}</div>
          </Link>
        )}
      </div>
    </div>
  );
}
