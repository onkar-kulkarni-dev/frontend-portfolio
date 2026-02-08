import React from "react";
import styles from "./Home.module.scss";
import Hero from "../../components/sections/Hero/Hero";
import About from "../../components/sections/About/About";
import Skills from "../../components/sections/Skills/Skills";
import Philosophy from "../../components/sections/Philosophy/Philosophy";
import Certifications from "../../components/sections/Certifications/Certifications";
import Experience from "../../components/sections/Experience/Experience";
import Contact from "../../components/sections/Contact/Contact";
import Navbar from "../../components/common/Navbar/Navbar";
import Footer from "../../components/common/Footer/Footer";
import Education from "../../components/sections/Education/Education";

type Props = {};

const Home: React.FC<Props> = ({}) => {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <div> </div>
        <Hero />
        <About />
        <Skills />
        <Philosophy />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
