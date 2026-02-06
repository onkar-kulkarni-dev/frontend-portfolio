import React from "react";
import styles from "./Title.module.scss";

const Title: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default Title;
