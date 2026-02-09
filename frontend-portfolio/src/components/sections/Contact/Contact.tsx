import React from "react";
import styles from "./Contact.module.scss";
import Title from "../../common/Title/Title";
import { MdMailOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { TbBrandGithub } from "react-icons/tb";
import { LuLinkedin } from "react-icons/lu";
import Form from "./Form";
import DownloadResume from "../../common/DownloadResume/DownloadResume";

type Props = {};

const Contact: React.FC<Props> = () => {
  return (
    <section id="contact">
      <Title title="Get In Touch" />
      <p className={styles.title}>
        Let's craft something{" "}
        <span className={styles.highlight}>exceptional</span> together.
      </p>
      <p className={styles.description}>
        I'm currently looking for new opportunities in Frontend and Full-stack
        roles. Open to product engineering, platform development, and frontend architecture roles.
      </p>
      <div className={styles.contactInfo}>
        <MdMailOutline size={62} className={styles.icon} />
        <div className={styles.contactDetails}>
          <p className={styles.contactTitle}>send an email</p>
          <p className={styles.contactEmail}>onksgk@gmail.com</p>
        </div>
      </div>
      <div className={styles.contactInfo}>
        <GrLocation size={62} className={styles.icon} />
        <div className={styles.contactDetails}>
          <p className={styles.contactTitle}>current location</p>
          <p className={styles.contactEmail}>Pune, India</p>
        </div>
      </div>
      <p className={styles.supportDocs}>supporting docs</p>
      <DownloadResume title="Download Resume(PDF)" />
      <div className={styles.horizonalLine}></div>
      <p className={styles.digitalPresence}>digital presence</p>
      <div className={styles.socialIcons}>
        <a href="https://github.com/onkar-kulkarni-dev" target="_blank" rel="noopener noreferrer">
          <TbBrandGithub size={62} className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/in/onkar-kulkarni-4049461a0" target="_blank" rel="noopener noreferrer">
          <LuLinkedin size={62} className={styles.icon} />
        </a>
      </div>
      <div className={styles.parentFormContainer}>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
