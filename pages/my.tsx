import CardAll from "../components/CardAll";
import Seo from "../components/Seo";
import styles from "../styles/my.module.scss";

export default function my() {
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
    {
      title: "Title52125",
      episode: "episode1",
      genre: ["로맨스", "코메디"],
    },
    {
      title: "Title52125",
      episode: "episode1",
      genre: ["로맨스", "코메디"],
    },
  ];
  return (
    <div className={styles.my}>
      <Seo title="My" content="My page" />
      <div className={styles.wrapper}>
        <h1>My Page</h1>
        <h2>Bookmark</h2>
        <div className={styles.webtoons}>
          {webtoons.map((webtoon) => {
            return (
              <div className={styles.webtoon} key={webtoon.title}>
                <CardAll webtoon={webtoon} />
              </div>
            );
          })}
        </div>
        <h2>Watch Later</h2>
        <div className={styles.webtoons}>
          {webtoons.map((webtoon) => {
            return (
              <div className={styles.webtoon} key={webtoon.title}>
                <CardAll webtoon={webtoon} />
              </div>
            );
          })}
        </div>
        <h2>Trash</h2>
        <div className={styles.webtoons}>
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
