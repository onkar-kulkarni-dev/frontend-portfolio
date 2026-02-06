import React from "react";
import styles from './Navbar.module.scss';
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { FaTerminal } from "react-icons/fa";
import Modal from "../Modal/Modal";

type Props = {};

const Navbar: React.FC<Props> = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return <nav>
    {/* Mobile Navbar */}
    <div className={styles.header}>
      <div>
        <button className={styles.logoContainer}><FaTerminal className={styles.hamburgerLogo} /></button>
      </div>
      <div className={styles.rightContainer}>
        <ThemeToggle />
        {isMenuOpen ? <button className={styles.iconContainer} onClick={handleMenu}><MdClose className={styles.hamburgerLogo} /></button> : <button className={styles.iconContainer} onClick={handleMenu}><IoMdMenu className={styles.hamburgerLogo} /></button>}
        {isMenuOpen && <Modal>
          <ul className={styles.mobileMenu}>
            <li><a href="#home" onClick={handleMenu}>Home</a></li>
            <li><a href="#about" onClick={handleMenu}>About</a></li>
            <li><a href="#projects" onClick={handleMenu}>Philosophy</a></li>
            <li><a href="#projects" onClick={handleMenu}>Certifications</a></li>
            <li><a href="#projects" onClick={handleMenu}>Experience</a></li>
            <li><a href="#contact" onClick={handleMenu}>Contact</a></li>
          </ul>
        </Modal>}
      </div>
    </div>
  </nav>;
};

export default Navbar;
