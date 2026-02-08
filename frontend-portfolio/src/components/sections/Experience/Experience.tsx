import React from "react";
import styles from "./Experience.module.scss";
import Title from "../../common/Title/Title";

type Props = {};

const Experience: React.FC<Props> = () => {
  const data = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Accenture",
      duration: "2021 - Present",
      desc: "Engineered enterprise web and mobile experiences at Accenture, building performant, scalable React and React Native systems aligned with real-world business workflows.",
      skills: [
        "React Architecture",
        "React Native",
        "TypeScript",
        "Cross-Platform Development",
        "Performance Optimization",
        "Redux State Management",
        "Enterprise Applications",
        "CI/CD Pipelines",
      ],
    },
    {
      id: 2,
      title: "Intern",
      company: "The Spark Foundation",
      duration: "Aug 2020 - Sep 2020",
      desc: "Built a full-stack web application at The Sparks Foundation using HTML, Bootstrap, JavaScript, PHP, and MySQL, delivering a functional credit management system.",
      skills: [
        "Full-Stack Development",
        "Frontend–Backend Integration",
        "CRUD Application Design",
        "Database Integration",
        "Web Application Architecture",
      ],
    },
  ];
  return (
    <section id="experience">
      <Title title="Trajectory" />
      <h2 className={styles.title}>
        Professional <span>Journey</span>
      </h2>
      {data.map((item) => {
        return (
          <div key={item.id} className={styles.card}>
            <p className={styles.duration}>{item.duration}</p>
            <p className={styles.role}>{item.title}</p>
            <p className={styles.company}>{item.company}</p>
            <p className={styles.desc}>{item.desc}</p>
            {item.skills.map((skill, index) => {
              return (
                <p key={index} className={styles.skill}>
                  {skill}
                </p>
              );
            })}
          </div>
        );
      })}
    </section>
  );
};

export default Experience;
