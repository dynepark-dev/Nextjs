import { useState } from "react";
import EllipsisPopup from "../components/EllipsisPopup";
import styles from "../styles/new.module.scss";
import useClickoutside from "../hooks/useClickOutside";
import CardNaver from "../components/CardNaver";
import CardKP from "../components/CardKP";
import CardKakao from "../components/CardKakao";
import Toggle from "../components/Toggle";

export default function webtoons() {
  const webtoons = [
    {
      title: "전지적인 독자가 대충 어떻게 됬다는 내용",
      episode: "전지적인 독자가 대충 어떻게 됬다는 내용",
      genre: ["로맨스", "코메디"],
    },
    {
      title: "Title2",
      episode: "episode1",
      genre: ["로맨스", "코메디"],
    },
    {
      title: "Title3",
      episode: "episode1",
      genre: ["로맨스", "코메디"],
    },
    {
      title: "Title123",
      episode: "episode1",
      genre: ["로맨스", "코메디"],
    },
    {
      title: "전지적인 독자가 대충 어떻게 됬다는 내용123",
      episode: "전지적인 독자가 대충 어떻게 됬다는 내용",
      genre: ["로맨스", "코메디"],
    },
    {
      title: "Title212341",
      episode: "episode1",
      genre: ["로맨스", "코메디"],
    },
    {
      title: "Title3141",
      episode: "episode1",
      genre: ["로맨스", "코메디"],
    },
    {
      title: "Title52125",
      episode: "episode1",
      genre: ["로맨스", "코메디"],
    },
  ];
  const [selected, setSelected] = useState<number>(0);
  const list = ["Naver", "Kakao", "Kakaopage", "etc"];
  return (
    <div className={styles.new}>
      <div className={styles.wrapper}>
        <div className={styles.singlePlatform}>
          <h1>New Webtoons</h1>
          <Toggle selected={selected} setSelected={setSelected} list={list} />
          <h2>{list[selected]} Webtoons</h2>
          {selected === 0 && (
            <div className={styles.webtoons}>
              {webtoons.map((webtoon) => {
                return (
                  <div className={styles.webtoon} key={webtoon.title}>
                    <CardNaver webtoon={webtoon} />
                  </div>
                );
              })}
            </div>
          )}
          {selected === 1 && (
            <div className={styles.webtoons}>
              {webtoons.map((webtoon) => {
                return (
                  <div className={styles.webtoon} key={webtoon.title}>
                    <CardKakao webtoon={webtoon} />
                  </div>
                );
              })}
            </div>
          )}
          {selected === 2 && (
            <div className={styles.webtoons}>
              {webtoons.map((webtoon) => {
                return (
                  <div className={styles.webtoon} key={webtoon.title}>
                    <CardKP webtoon={webtoon} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
