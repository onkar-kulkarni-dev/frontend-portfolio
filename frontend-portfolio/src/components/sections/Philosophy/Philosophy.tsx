import React from "react";
import styles from "./Philosophy.module.scss";
import { RiFlashlightLine } from "react-icons/ri";
import { FiCpu } from "react-icons/fi";
import { LuShieldCheck } from "react-icons/lu";
import { FiRepeat } from "react-icons/fi";
import Title from "../../common/Title/Title";

type Props = {};

const Philosophy: React.FC<Props> = () => {
  const data = [
    {
      id: 1,
      icon: <RiFlashlightLine size={30} />,
      title: "Performance by Default",
      desc: "I don't treat speed as an afterthought. Every line of code is written with the critical rendering path in mind, ensuring sub-second load times and 60fps interactions.",
      keyMetric: "100/100 Lighthouse Average",
    },
    {
      id: 2,
      icon: <FiCpu size={30} />,
      title: "Scalable Architecture",
      desc: "Using modular patterns and type-safety to build systems that grow. I prefer boring, proven tech over hype, ensuring long-term maintainability.",
      keyMetric: "Type-Safe End-to-End",
    },
    {
      id: 3,
      icon: <LuShieldCheck size={30} />,
      title: "User-Centric Logic",
      desc: "Bridging the gap between complex backend state and intuitive frontend UI. I build with accessibility (A11y) and internationalization in mind from day one.",
      keyMetric: "WCAG 2.1 Compliant",
    },
    {
      id: 4,
      icon: <FiRepeat size={30} />,
      title: "Iterative Refinement",
      desc: "My process is a loop: build, measure, learn. I use Node.js to bridge my frontend expertise into full-stack logic, focusing on robust API design.",
      keyMetric: "Agile & CI/CD Driven",
    },
  ];
  return (
    <section id="philosophy">
      <Title title="Manifesto" />
      <p className={styles.engineering}>Engineering</p>
      <p className={styles.principles}>Principles</p>
      <p className={styles.description}>
        I don't just write code; I design systems. My approach is rooted in
        technical pragmatism and a relentless focus on the end-user experience.
      </p>
      <div className={styles.philosophyCard}>
        <p className={styles.techPhilosophyText}>Technical Philosophy</p>
        <p className={styles.techPhilosophyDesc}>
          "Simplicity is the prerequisite for reliability. I strive to solve
          complex problems with the most straightforward, maintainable code
          possible."
        </p>
      </div>
      {data.map((item: any) => {
        return (
          <div key={item.id} className={styles.card}>
            <div className={styles.firstRow}>
              <div className={styles.icon}>{item.icon}</div>
              <p className={`${styles.icon} ${styles.iconNumber}`}>{`0${item.id}`}</p>
            </div>
            <p className={styles.title}>{item.title}</p>
            <p className={styles.desc}>{item.desc}</p>
            <div className={styles.footer}></div>
            <div className={styles.keyMetricContainer}>
              <p className={styles.keyMetricText}>key metric</p>
              <p className={styles.keyMetric}>{item.keyMetric}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Philosophy;
