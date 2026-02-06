import React from "react";
import styles from './ThemeToggle.module.scss';
import { useTheme } from "../../../hooks/useTheme";
import { CiLight } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";

type Props = {};

const ThemeToggle: React.FC<Props> = ({ }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className={styles.btnContainer}>
      {theme === "light" ? <FaRegMoon className={styles.themeLogo} /> : <CiLight className={styles.themeLogo} />}
    </button>
  );
};

export default ThemeToggle;
