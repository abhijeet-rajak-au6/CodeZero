import React from 'react'
import styles from "./Experience.module.css"
import image from '../../assets/dashkit.jpg'

function Expereince() {
    return (
        <section className={styles.ExpereinceContainer}>
            <div className={styles.Content1}>


                <div className={styles.headingContainer}>
                    <p className={styles.para1Heading}>We have lots of experience</p>
                    <p className={styles.para1subHeading}>building Bootstrap themes.</p>

                </div>

                <div className={styles.paraStyle}>
                    <p style={{ color: "#89A0D0" }}>We've built well over a dozen Bootstrap themes and sold tens of thousands of copies.</p>
                </div>

                <div className={styles.para2Style}>
                    <div>
                        <div style={{ display: "flex" }}>
                            <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M12 8H8a4 4 0 00-4 4v1a3 3 0 003 3v2a5 5 0 01-5-5v-1a6 6 0 016-6h4V4.728a.5.5 0 01.8-.4l2.856 2.133a.5.5 0 01-.001.802l-2.857 2.121A.5.5 0 0112 8.983V8z" fill="#335EEA"></path><path d="M12.058 16H16a4 4 0 004-4v-1a3 3 0 00-3-3V6a5 5 0 015 5v1a6 6 0 01-6 6h-3.942v.983a.5.5 0 01-.798.401l-2.857-2.12a.5.5 0 010-.803l2.856-2.134a.5.5 0 01.8.401V16z" fill="#335EEA" opacity=".3"></path></g></svg>
                            <div style={{padding:"0 10px"}}>

                                <p className={styles.para2Heading}>Bootstrap users since the beginning</p>
                                <p className={styles.para2subHeading}>We've been developing with Bootstrap since it was publicly released in 2011.</p>
                            </div>

                        </div>
                        <div style={{ display: "flex", marginTop:"20px" }}>
                            <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z" fill="#335EEA"></path><rect fill="#335EEA" opacity=".3" transform="rotate(15 12 12)" x="11" y="4" width="2" height="16" rx="1"></rect></g></svg>
                            <div style={{padding:"0 10px"}}>
                                <p className={styles.para2Heading}>Deep understanding of Bootstrap</p>
                                <p className={styles.para2subHeading}>We've watched Bootstrap grow up over the years and understand it better than almost anyone.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.Content2}>
                <img className={styles.Image} src={image} alt="" />
            </div>
        </section>
    )
}

export default Expereince
