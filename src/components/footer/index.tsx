import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import * as styles from './footer.module.scss'
import { faUser, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer(): JSX.Element {
    return (
        <footer>
            <div className={styles.footerContent}>

                <img src="/images/footer/left.png" alt="shapes1" className={styles.bgLeft} />
                <img src="/images/footer/right.png" alt="shapes2" className={styles.bgRight} />

                <img src="/images/logo.png" alt="Logo" />

                <button>
                    <a href="mailto:omar@ignitionwolf.com">
                        Contact
                    </a>
                </button>

                <div className={styles.socialMedia}>
                    <a href="https://github.com/omarvillam">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>    
                    
                    <a href="mailto:omar@ignitionwolf.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </div>   

                <div className={styles.items}>
                    <ul>
                        <a href="#services">Services</a>

                        <a href="#about">About</a>
                    </ul>
                </div>

                <div className={styles.copyright}>
                    Omar Villalobos - 2021
                </div>
            </div>

        </footer>
    )
}