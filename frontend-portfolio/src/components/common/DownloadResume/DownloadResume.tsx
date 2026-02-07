import React from "react";
import styles from "./DownloadResume.module.scss";
import { IoDocumentTextOutline } from "react-icons/io5";

type Props = {
  title: string;
};

const DownloadResume: React.FC<Props> = ({ title }) => {
  return (
    <button className={styles.downloadButton}>
      <IoDocumentTextOutline size={26} className={styles.docIcon} />{" "}
      <p className={styles.downloadButtonText}>{title}</p>
    </button>
  );
};

export default DownloadResume;
