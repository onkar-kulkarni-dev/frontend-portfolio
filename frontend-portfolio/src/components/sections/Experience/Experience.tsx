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
      desc: "Delivered enterprise React and React Native applications for global clients, integrating REST and GraphQL APIs and optimizing performance across production deployments. Improved UI performance, maintainability, and cross-platform consistency across enterprise applications.",
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
      desc: "Developed a full-stack credit management system with frontend–backend integration, database operations, and production-ready architecture.",
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
