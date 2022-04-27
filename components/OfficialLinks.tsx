import Image from "next/image";
import styles from "../styles/OfficialLinks.module.scss";

export default function OfficialLinks() {
  const platformsArray = [
    {
      platform: "Naver",
      background: "#00DC65",
      isDark: false,
      src: "/image/logos/naver.jpg",
    },
    {
      platform: "Kakao",
      background: "#000",
      isDark: true,
      src: "/image/logos/kakao.png",
    },
    {
      platform: "KakaoPage",
      background: "#ffd100",
      isDark: false,
      src: "/image/logos/kakaopage.jpg",
    },

    {
      platform: "Lehzhin",
      background: "#EB1B21",
      isDark: false,
      src: "/image/logos/lezhin.jpg",
    },
    {
      platform: "Toptoon",
      background: "#DC3F4D",
      isDark: false,
      src: "/image/logos/toptoon.jfif",
    },
    {
      platform: "Bomtoon",
      background: "#FF35AD",
      isDark: false,
      src: "/image/logos/bomtoon.jpg",
    },
    {
      platform: "Comico",
      background: "#FE0000",
      isDark: false,
      src: "/image/logos/comico.jpg",
    },
    {
      platform: "Mootoon",
      background: "#D40E0F",
      isDark: false,
      src: "/image/logos/mootoon.png",
    },
    {
      platform: "MrBlue",
      background: "#FEFEFE",
      isDark: false,
      src: "/image/logos/mrblue.jpg",
    },
    {
      platform: "Peanutoon",
      background: "#46BCCF",
      isDark: false,
      src: "/image/logos/peanutoon.png",
    },
    {
      platform: "Toomics",
      background: "#F02D2F",
      isDark: false,
      src: "/image/logos/toomics.jpg",
    },
    {
      platform: "Bufftoon",
      background: "#0057FE",
      isDark: false,
      src: "/image/logos/bufftoon.jpg",
    },
  ];

  return (
    <div className={styles.OfficialLinks}>
      <div className={styles.text}>
        <h2>Official Website.</h2>
        <span> Click to visit.</span>
      </div>
      <div className={styles.wrapper}>
        {platformsArray.map((i) => {
          return (
            <div
              title={i.platform}
              className={styles.platform}
              style={{ background: i.background }}
            >
              <div className={styles.image_wrapper}>
                <Image src={i.src} width={300} height={300} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
