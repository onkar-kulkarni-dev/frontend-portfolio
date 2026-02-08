import React from "react";
import styles from './Navbar.module.scss';
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { FaTerminal } from "react-icons/fa";
import Modal from "../Modal/Modal";
import { useNavbarShadow } from "../../../hooks/useNavbarShadow";

type Props = {};

const Navbar: React.FC<Props> = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const showShadow = useNavbarShadow();
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return <nav className={showShadow ? styles. navbarShadow : styles.header}>
    {/* Mobile Navbar */}
      <div>
        <button className={styles.logoContainer}><FaTerminal className={styles.hamburgerLogo} /></button>
      </div>
      <div className={styles.rightContainer}>
        <ThemeToggle />
        {isMenuOpen ? <button className={styles.iconContainer} onClick={handleMenu}><MdClose className={styles.hamburgerLogo} /></button> : <button className={styles.iconContainer} onClick={handleMenu}><IoMdMenu className={styles.hamburgerLogo} /></button>}
        {isMenuOpen && <Modal>
          <ul className={styles.mobileMenu}>
            <li><a href="#about" onClick={handleMenu}>About</a></li>
            <li><a href="#skills" onClick={handleMenu}>Skills</a></li>
            <li><a href="#philosophy" onClick={handleMenu}>Philosophy</a></li>
            <li><a href="#certifications" onClick={handleMenu}>Certifications</a></li>
            <li><a href="#experience" onClick={handleMenu}>Experience</a></li>
            <li><a href="#contact" onClick={handleMenu}>Contact</a></li>
          </ul>
        </Modal>}
      </div>
  </nav>;
};

export default Navbar;
