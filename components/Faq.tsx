import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from "../styles/Faq.module.scss";

interface IQna {
  question: string;
  answer: string;
}

export default function Faq() {
  const Qna = [
    {
      question: "What is Apple Fitness+?",
      answer: `Apple Fitness+ is a fitness service powered by Apple Watch. You can
          choose from a catalog of workouts and meditations led by expert
          trainers. In-session metrics, like heart rate and calories burned, are
          synced to your iPhone, iPad, or Apple TV, so you don’t have to take
          your eyes away from your workout or meditation to see how you’re
          doing. It’s like your Apple Watch is on the screen.`,
    },
    {
      question: "Where can I find Apple Fitness+?",
      answer: `If you own an Apple Watch, Apple Fitness+ automatically appears as the center tab in the Fitness app on your iPhone. For iPad, the Fitness app is available for Apple Watch users to download from the App Store. The Fitness app is also available on Apple TV.`,
    },
    {
      question: "Does Apple Fitness+ offer all levels of fitness?",
      answer: `Yes. Fitness+ is created for everyone from beginners to experts, with modifications for all levels in every workout. You choose the type of workout, the time, and the trainer — it’s totally up to you. There’s also an instructional program called Workouts for Beginners for people who need to learn the basics.`,
    },
  ];

  return (
    <section className={styles.Faq}>
      <div className={styles.wrapper}>
        <h2>Questions? Answers.</h2>
        <ul className={styles.accordion}>
          {Qna.map((item) => {
            return (
              <AccordionItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function AccordionItem({ question, answer }: IQna) {
  const [show, setShow] = useState(false);

  return (
    <li className={styles.accordionItem} id={show ? styles.show : ""}>
      <div className={styles.question} onClick={() => setShow((prev) => !prev)}>
        <h3>{question}</h3>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={styles.chevron}
          id={show ? styles.flip : ""}
        />
      </div>
      <div className={styles.answer}>{answer}</div>
    </li>
  );
}
