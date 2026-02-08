import React from "react";
import styles from "./About.module.scss";
import Title from "../../common/Title/Title";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { RiFlashlightLine } from "react-icons/ri";

type Props = {};

const About: React.FC<Props> = () => {
  const data = [
    {
      id: 1,
      icon: <MdOutlineRocketLaunch size={30} />,
      title: "Growth Mindset",
      desc: "Currently expanding into backend system design with Node.js to build end-to-end application architectures.",
    },
    {
      id: 2,
      icon: <RiFlashlightLine size={30} />,
      title: "Engineering Discipline",
      desc: "Whether it's a CSS animation or a database schema, I strive for efficiency, readability, and performance.",
    },
  ];
  return (
    <section id="about">
      <Title title="My Story" />
      <h2 className={styles.title}>
        Bridging Design and <span>Technical Excellence</span>
      </h2>
      <p className={styles.description}>
        I'm a <span>Frontend Developer</span> with a deep appreciation for
        high-fidelity UI and smooth interactions. I design frontend systems for enterprise environments where performance, scalability, and maintainability are non-negotiable.
      </p>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <div className={styles.cardHeader}>
              {item.icon}
              <p className={styles.cardTitle}>{item.title}</p>
            </div>
            <p className={styles.cardDescription}>{item.desc}</p>
          </div>
        );
      })}
      <div className={styles.footer}></div>
      <div className={styles.footerItems}>
        <p>Experience</p>
        <p>Major Projects</p>
      </div>
      <div className={styles.footerItems}>
        <p className={styles.footerValues}>4.6+ years</p>
        <p className={styles.footerValues}>4+</p>
      </div>
    </section>
  );
};

export default About;
