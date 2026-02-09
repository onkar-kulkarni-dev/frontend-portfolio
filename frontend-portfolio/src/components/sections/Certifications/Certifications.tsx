import React from "react";
import styles from "./Certifications.module.scss";
import Title from "../../common/Title/Title";
import { FiAward } from "react-icons/fi";
import { LuShieldCheck } from "react-icons/lu";
import { IoOpenOutline } from "react-icons/io5";

type Props = {};

const Certifications: React.FC<Props> = () => {
  const data = [
    {
      id: 1,
      title:
        "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
      desc: "Validated expertise in identity management, governance, and security principles across Microsoft ecosystems.",
      issuer: "Microsoft",
      date: 2023,
      skills: [
        "Security and Compliance",
        "Microsoft 365 Security",
        "Azure Security",
      ],
    },
    {
      id: 2,
      title: "Microsoft Certified: Azure Security Engineer Associate",
      desc: "Certified Azure Security Engineer Associate, focused on securing cloud infrastructure, identities, and data on Microsoft Azure.",
      issuer: "Microsoft",
      date: 2023,
      skills: [
        "Azure Security Solutions",
        "Identity and Access Management",
        "Threat Protection",
        "Security Operations",
      ],
    },
    {
      id: 3,
      title: "GitHub Actions",
      desc: "Implemented automated CI/CD workflows for build, test, and deployment pipelines using GitHub Actions.",
      issuer: "GitHub",
      date: 2026,
      skills: [
        "CI/CD Pipelines",
        "Workflow Automation",
        "Continuous Integration",
        "Continuous Deployment",
      ],
    },
  ];
  const skillColorMap: Record<string, string> = {
    // Blue
    "Security and Compliance": "blue",
    "Microsoft 365 Security": "blue",
    "Azure Security": "blue",

    // Teal
    "Azure Security Solutions": "teal",
    "Identity and Access Management": "teal",
    "Threat Protection": "teal",
    "Security Operations": "teal",

    // Orange
    "CI/CD Pipelines": "orange",
    "Workflow Automation": "orange",
    "Continuous Integration": "orange",
    "Continuous Deployment": "orange",
  };

  return (
    <section id="certifications">
      <Title title="credentials" />
      <h2 className={styles.title}>
        Certifications & <span>Badges</span>
      </h2>
      <p className={styles.subTitle}>
        Industry-recognized certifications validating expertise in cloud
        security and engineering practices.
      </p>
      <div className={styles.cardContainer}>
        {data.map((item) => {
          return (
            <div key={item.id} className={styles.card}>
              <div className={styles.firstRow}>
                <FiAward size={50} className={styles.icon} />
                <p className={styles.icon}>{item.date}</p>
              </div>
              <p className={styles.name}>{item.title}</p>
              <p className={styles.issuer}>{item.issuer}</p>
              <p className={styles.desc}>{item.desc}</p>
              {item.skills.map((skill, index) => {
                const color = skillColorMap[skill] || "blue";
                return (
                  <p key={index} className={`${styles.skill} ${styles[color]}`}>
                    {skill}
                  </p>
                );
              })}

              <div className={styles.hrLine}></div>
              <div className={styles.footer}>
                <p>
                  <span>
                    <LuShieldCheck size={20} />
                  </span>
                  verify credentials
                </p>
                <IoOpenOutline size={20} className={styles.openLinkIcon} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Certifications;
