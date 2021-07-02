import React from 'react';
import brand from "../../assets/brand.svg";
import styles from "./NavBar.module.css";

function NavBar() {
    return (
        <nav className={styles.navBar}>
            <a className={styles.navBarBrand}>
                <img src={brand} alt="brand-logo" />
            </a>

            <ul className={styles.navBarList}>
                <li className={styles.navItem}>Landings</li>
                <li className={styles.navItem}>Pages</li>
                <li className={styles.navItem}>Accounts</li>
                <li className={styles.navItem}>Documentation</li>
            </ul>
            <div className={styles.buttonGroup}>

                <button className={styles.navBarButton}>Buy Now</button>
            </div>
        </nav>
    )
}

export default NavBar
