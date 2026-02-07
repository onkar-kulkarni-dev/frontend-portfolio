import React from "react";
import styles from "./Skills.module.scss";
import Title from "../../common/Title/Title";
import { LuPanelsTopLeft } from "react-icons/lu";
import { FiTool } from "react-icons/fi";
import { IoCodeSlash } from "react-icons/io5";

type Props = {};

const Skills: React.FC<Props> = () => {
  const data = [
    {
      id: 1,
      icon: <LuPanelsTopLeft size={30}/>,
      title: "Frontend Development",
      desc: "Building responsive, accessible, and performant user interfaces.",
      skills: [
        "React",
        "React Native",
        "TypeScript",
        "JavaScript",
        "Next JS",
        "Redux",
      ],
    },
    {
      id: 2,
      icon: <FiTool size={30}/>,
      title: "DevOps & Tools",
      desc: "Streamlining development workflows and deployment pipelines.",
      skills: ["Git", "CI/CD", "Jenkins"],
    },
    {
      id: 3,
      icon: <IoCodeSlash size={30}/>,
      title: "Core Expertise",
      desc: "Fundamental principles and architectural patterns.",
      skills: [
        "Data Structures",
        "Design Patterns",
        "Clean Code",
        "Unit Testing",
      ],
    },
  ];
  return (
    <section>
      <Title title="Expertise" />
      <h2 className={styles.title}>
        Technical <span>Skillset</span>
      </h2>
      <p className={styles.subTitle}>
        A comprehensive list of technologies I've mastered and those I'm
        currently adding to my arsenal.
      </p>
      {data.map((item) => {
        return (
          <div key={item.id} className={styles.card}>
            <div className={styles.icon}>{item.icon}</div>
            <p className={styles.skillTitle}>{item.title}</p>
            <p className={styles.subTitle}>{item.desc}</p>
            {item.skills.map((skill, index) => {
              return <p key={index} className={styles.skill}>{skill}</p>;
            })}
          </div>
        );
      })}
    </section>
  );
};

export default Skills;
