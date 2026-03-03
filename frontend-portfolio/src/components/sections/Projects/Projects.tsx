import Title from '../../common/Title/Title';
import styles from './Projects.module.scss';
import { LuGithub } from "react-icons/lu";
import { IoOpenOutline } from "react-icons/io5";
import NeuralCommerceIcon from '../../../assets/neuralcommerce.svg';
import StorelyIcon from '../../../assets/storely.png';

const Projects = () => {
    const data = [
        {
            id: 1,
            title: 'Storely-Shop',
            subtitle: 'Modern electronics e-commerce app offering a seamless, fast, and secure shopping experience for the latest gadgets and tech essentials.',
            img: StorelyIcon,
            skills: ['react js', 'typescript', 'javascript', 'redux toolkit', 'scss'],
            githubLink: 'https://github.com/onkar-kulkarni-dev/storely',
            liveLink: 'https://storely-shop.vercel.app/home'
        },
        {
            id: 2,
            title: 'NeuralCommerce-AI',
            subtitle: 'Next-gen AI commerce platform delivering autonomous, real-time optimization of conversions, logistics, and customer experience at enterprise scale.',
            img: NeuralCommerceIcon,
            skills: ['react js', 'typescript', 'javascript', 'scss'],
            githubLink: 'https://github.com/onkar-kulkarni-dev/NeuralCommerce-AI',
            liveLink: 'https://neural-commerce-ai.vercel.app/'
        }
    ]
    return (
        <section id="projects">
            <Title title="portfolio" />
            <h2 className={styles.title}>Selected <span>Projects</span></h2>
            <p className={styles.subTitle}>A collection of some of the most challenging and impactful projects I've worked on recently.</p>
            <div className={styles.cardContainer}>
                {data.map((item) => {
                    return (
                        <div key={item.id} className={styles.card}>
                            {/* <img src={item.img} alt={item.title} style={{ width: '100%', height: '15rem', paddingBottom: '1rem' }} /> */}
                            <div className={styles.imageWrapper}>
                                <img src={item.img} alt={item.title} />
                            </div>
                            <h3 className={styles.projectName}>{item.title}</h3>
                            <p className={styles.projectDesc}>{item.subtitle}</p>
                            {item.skills.map((skill, index) => {
                                return (
                                    <p key={index} className={styles.skill}>
                                        {skill}
                                    </p>
                                );
                            })}
                            <div className={styles.footer}></div>
                            <div className={styles.btnContainer}>
                                <button><a href={item.githubLink} target="_blank" rel="noopener noreferrer"><LuGithub />Code</a></button>
                                <button className={styles.liveBtn}><a href={item.liveLink} target="_blank" rel="noopener noreferrer"><IoOpenOutline />Live</a></button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects;