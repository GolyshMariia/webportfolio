import React from 'react'
import styles from './footer.module.scss'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Si500Px } from "react-icons/si";
import { IconContext } from 'react-icons';

type FooterProps = {

}

const Footer: React.FC<FooterProps> = () => {
    return (
        <IconContext.Provider value={{ size: "2em", color: "black" }}>
            <div className={styles.container}>
                <a target="blank" rel="noreferrer" href="https://github.com/GolyshMariia">
                    <FaGithub/>
                </a>

                <a target="blank" rel="noreferrer" href="https://www.linkedin.com/in/maria-golysh">
                    <FaLinkedin/>
                </a>

                <a href="mailto:g.mv@mail.ru">
                    <FaEnvelope/>
                </a>

                <a target="blank" rel="noreferrer" href="https://500px.com/p/MariaGolysh?view=photos">
                    <Si500Px size={"4em"} />
                </a>            
            </div>
        </IconContext.Provider>
    )
}

export default Footer
