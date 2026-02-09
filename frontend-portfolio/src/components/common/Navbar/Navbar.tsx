import React, { useEffect, useRef } from "react";
import styles from "./Navbar.module.scss";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { FaTerminal } from "react-icons/fa";
import Modal from "../Modal/Modal";
import { useNavbarShadow } from "../../../hooks/useNavbarShadow";
import { useDeviceType } from "../../../hooks/useDeviceType";

type Props = {};

const Navbar: React.FC<Props> = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const showShadow = useNavbarShadow();
  const { isMobile, isTabletPortrait } = useDeviceType();

  const menuRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className={showShadow ? styles.navbarShadow : styles.header}>
      <div className={styles.logoNameContainer}>
        <button
          className={styles.logoContainer}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FaTerminal
            className={`${styles.hamburgerLogo} ${styles.logoIcon}`}
          />
        </button>
        <h1 className={styles.logoName}>Onkar.Dev</h1>
      </div>

      <div className={styles.rightContainer}>
        {isMobile || isTabletPortrait ? (
          <>
            <ThemeToggle />
            {isMenuOpen ? (
              <button className={styles.iconContainer} onClick={handleMenu}>
                <MdClose className={styles.hamburgerLogo} />
              </button>
            ) : (
              <button className={styles.iconContainer} onClick={handleMenu}>
                <IoMdMenu className={styles.hamburgerLogo} />
              </button>
            )}
          </>
        ) : (
          <>
            <ul className={styles.navLinks}>
              <li className={styles.linkItem}>
                <a href="#about">About</a>
              </li>
              <li className={styles.linkItem}>
                <a href="#skills">Skills</a>
              </li>
              <li className={styles.linkItem}>
                <a href="#philosophy">Philosophy</a>
              </li>
              <li className={styles.linkItem}>
                <a href="#certifications">Certifications</a>
              </li>
              <li className={styles.linkItem}>
                <a href="#experience">Experience</a>
              </li>
              <li className={styles.linkItem}>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <ThemeToggle />
          </>
        )}
        {isMenuOpen && (
          <Modal>
            <ul ref={menuRef} className={styles.mobileMenu}>
              <li>
                <a href="#about" onClick={handleMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" onClick={handleMenu}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#philosophy" onClick={handleMenu}>
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#certifications" onClick={handleMenu}>
                  Certifications
                </a>
              </li>
              <li>
                <a href="#experience" onClick={handleMenu}>
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleMenu}>
                  Contact
                </a>
              </li>
            </ul>
          </Modal>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
