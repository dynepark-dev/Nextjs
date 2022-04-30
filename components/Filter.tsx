import styles from "../styles/Filter.module.scss";

interface IFilter {
  array: string[];
  clear: "전체";
  data: string[];
  setData: ([]) => void;
}

export default function Filter({ array, clear, data, setData }: IFilter) {
  function toggleButton(item: string) {
    data.includes(item)
      ? setData([...data, item].filter((x) => x !== item))
      : setData([...data, item].filter((x) => x !== clear));
  }
  data.length === 0 && setData([clear]);

  return (
    <ul className={styles.Filter}>
      <li
        className={data.includes(clear) ? styles.selected : ""}
        onClick={() => setData([clear])}
      >
        전체
      </li>
      {array.map((item) => (
        <li
          key={item}
          className={data.includes(item) ? styles.selected : ""}
          onClick={() => toggleButton(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
