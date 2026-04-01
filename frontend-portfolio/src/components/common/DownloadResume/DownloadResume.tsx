import React from "react";
import styles from "./DownloadResume.module.scss";
import { IoDocumentTextOutline } from "react-icons/io5";

type Props = {
  title: string;
};

const DownloadResume: React.FC<Props> = ({ title }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume/Onkar_Kulkarni_FrontEnd_Dev.pdf";
    link.download = "Onkar_Kulkarni_FrontEnd_Dev.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      className={styles.downloadButton}
      onClick={handleDownload}
      aria-label="Download Onkar Kulkarni Resume PDF"
    >
      <IoDocumentTextOutline size={26} className={styles.docIcon} />
      <p className={styles.downloadButtonText}>{title}</p>
    </button>
  );
};

export default DownloadResume;
