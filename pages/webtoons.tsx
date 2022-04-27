import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import CardAll from "../components/CardAll";
import EllipsisPopup from "../components/EllipsisPopup";
import Filter from "../components/Filter";
import useClickOutside from "../hooks/useClickOutside";
import styles from "../styles/webtoons.module.scss";

export default function webtoons() {
  const router = useRouter();
  const { category } = router.query;
  const webtoons = [
    {
      title: "titlasdf asdf asdf asd fasdf e",
      episode: "episdf asdf asdf assode",
      genre: ["a", "b"],
    },
    {
      title: "titlea sdfasd fasd fa2",
      episode: "episodf asdf a fasdsde2",
      genre: ["a", "b"],
    },
  ];
  const [popup, setPopup] = useState("");

  function capitalize(string: any) {
    return string?.charAt(0).toUpperCase() + string?.slice(1);
  }

  const platformFilter = ["네이버", "카카오", "카카오페이지", "버프툰"];
  const genreFilter = [
    "로맨스",
    "드라마",
    "판타지",
    "액션",
    "무협",
    "개그",
    "학원",
    "일상",
    "기타",
  ];
  const [platform, setPlatform] = useState(["전체"]);
  const [genre, setGenre] = useState(["전체"]);

  return (
    <div className={styles.webtoons}>
      <div className={styles.wrapper}>
        <h1>{capitalize(category)} Webtoons</h1>
        <Filter
          array={platformFilter}
          clear="전체"
          data={platform}
          setData={setPlatform}
        />
        <Filter
          array={genreFilter}
          clear="전체"
          data={genre}
          setData={setGenre}
        />
        <div className={styles.webtoonlist}>
          {webtoons.map((webtoon) => {
            return (
              <div className={styles.webtoon} key={webtoon.title}>
                <CardAll webtoon={webtoon} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
