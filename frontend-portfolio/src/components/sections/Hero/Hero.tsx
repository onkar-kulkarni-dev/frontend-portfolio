import React from "react";
import styles from "./Hero.module.scss";
import DownloadResume from "../../common/DownloadResume/DownloadResume";
import { TbBrandGithub } from "react-icons/tb";
import { LuLinkedin } from "react-icons/lu";

type Props = {};

const Hero: React.FC<Props> = () => {
  return (
    <section id="hero">
      <p className={styles.heroText}>
        <span className={styles.dotStatus} />
        Available for new opportunities
      </p>
      <h2 className={styles.title}>
        Frontend <span>Developer</span>
      </h2>
      <p className={styles.description}>
        I'm a detail-oriented <span>Frontend Specialist</span>, engineering high-performance web and mobile applications using React ecosystems and scalable architecture principles. Specialized in building performant UI systems, cross-platform applications, and production-grade frontend architecture.
      </p>
      <div className={styles.socialIcons}>
        <DownloadResume title="Resume(PDF)" />
        <div className={styles.verticalLine}></div>
        <div style={{ display: "flex", gap: "16px" }}>
          <a href="https://github.com/onkar-kulkarni-dev" target="_blank" rel="noopener noreferrer">
            <TbBrandGithub size={32} />
          </a>
          <a href="https://www.linkedin.com/in/onkar-kulkarni-4049461a0" target="_blank" rel="noopener noreferrer">
            <LuLinkedin size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
