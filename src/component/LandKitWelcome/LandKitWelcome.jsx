import React from 'react'
import styles from "./LandKitWelcome.module.css";
import welcomeImage from "../../assets/illustration-2.png"

const headingStyle = {
    fontSize: "50px",
    textAlign: "left"
}

const paraStyle = {
    fontSize: "22px",
    textAlign: "left",
    color: "#869AB8"
}

function LandKitWelcome() {
    return (
        <section className={styles.container}>
            <div style={{ flex: 1 }} className={styles.welcomeContainer}>

                <div className={styles.content} >

                    <div>

                        <p style={headingStyle}>Welcome to <span style={{ color: "#3460EA" }}>Landkit</span>.</p>
                        <p style={headingStyle}>Develop anything.</p>
                    </div>

                    <div style={{ marginTop: "20px" }}>
                        <p style={paraStyle}>Build a beautiful, modern website with flexible</p>
                        <p style={paraStyle}>Bootstrap components built from scratch</p>

                    </div>
                </div>


                <div className={styles.ButtonGroup}>
                    <button className={styles.ButtonPrimary}>View all pages</button>
                    <button className={styles.ButtonSecondary}>Documentation</button>
                </div>

            </div>
            <div style={{ flex: 1 }} className={styles.welcomeImage}>
                <img className={styles.imageDimension} src={welcomeImage} alt="" />
            </div>
        </section>
    )
}

export default LandKitWelcome
