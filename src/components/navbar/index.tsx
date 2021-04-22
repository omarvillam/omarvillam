import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import React, { useState } from 'react'
import * as styles from "./navbar.module.scss"

export default function Navbar(): JSX.Element {
    const [open, setOpen] = useState(false);
    const menuItems = (
        <React.Fragment>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="mailto:omar@ignitionwolf.com" className={styles.cta}>Contact</a>
        </React.Fragment>
    )
    
    return (
        <div className={styles.navbar}>
            <div className={styles.navbarContent}>
                <Link to="/">
                    <img src="/images/logo.png" />
                </Link>
                
                <ul>
                   {menuItems}
                </ul>
                
                <FontAwesomeIcon icon={faBars} onClick={() => setOpen(open === false ? true : false)}/>

                {open === true ? (
                    <div className={styles.mobileItems}>
                        <ul>
                            {menuItems}
                        </ul>
                    </div>
                ) : null }
            </div>
        </div>
    )
}