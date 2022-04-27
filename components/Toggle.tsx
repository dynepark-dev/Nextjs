import { useState } from "react";
import styles from "../styles/Toggle.module.scss";

interface IToggle {
  list: string[];
  selected: number;
  setSelected: any;
}

export default function Toggle({ list, selected, setSelected }: IToggle) {
  return (
    <div className={styles.Toggle} style={{ width: `${10 * list.length}em` }}>
      <ul className={styles.wrapper}>
        {list.map((item: string, i: number) => {
          return (
            <li
              key={i}
              onClick={() => setSelected(i)}
              id={selected === i ? styles.selected : ""}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <div style={{ transform: `translate(${10 * selected}em)` }}></div>
    </div>
  );
}
