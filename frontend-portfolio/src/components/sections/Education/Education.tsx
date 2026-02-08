import React from "react";
import styles from "./Education.module.scss";
import Title from "../../common/Title/Title";
import { IoIosCalendar } from "react-icons/io";
import { GrLocation } from "react-icons/gr";

type Props = {};

const Education: React.FC<Props> = ({}) => {
  const data = [
    {
      id: 1,
      title: "B.E. in Computer Engineering",
      university: "Savitribai Phule Pune University",
      duration: "2018 - 2021",
      desc: 'Bachelor of Engineering in Computer Engineering — Graduated with First Class Distinction, building strong foundations in software engineering and system design.',
      place: "Pune, India",
    },
  ];
  return (
    <section id="education">
      <Title title="Foundation" />
      <h2 className={styles.title}>
        Academic <span>Background</span>
      </h2>
      {data.map((item) => {
        return (
          <div key={item.id} className={styles.card}>
            <p className={styles.degree}>{item.title}</p>
            <p className={styles.university}>{item.university}</p>
            <div className={styles.info}>
              <p className={styles.place}>
                <IoIosCalendar size={15} /> {item.duration}
              </p>
              <p className={styles.place}>
                <GrLocation size={15} /> {item.place}
              </p>
            </div>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Education;
