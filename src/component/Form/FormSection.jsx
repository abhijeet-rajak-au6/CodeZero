import React from 'react'
import styles from './FormSection.module.css';
import formImage from '../../assets/photo-2.jpg'
const paraStyle = {
    fontSize: "30px",
    textAlign: "left",
    color: "#1D234D"
}

const subParaStyle1 = {
    fontSize: "30px",
    textAlign: "left",
    paddingRight: "30px",
    lineHeight: "25px",
    color: '#52BB9F'
}

const subParaStyle = {
    fontSize: "18px",
    textAlign: "left",
    paddingRight: "30px",
    lineHeight: "38px",
    color: '#869AB8',
    marginTop: "15px",
    lineHeight: "35px"
}

function FormSection() {
    return (
        <section className={styles.FormContainer}>
            <div className={styles.Form}>
                <img className={styles.Image} style={{ width: "80%", flexBasis: "80%", flexWrap: "wrap"}} src={formImage} alt="" />
                <form style={{ backgroundColor: "#ffffff", flexBasis: "80%", width: "80%", borderRadius: "8px" }} action="#">
                    <div className={styles.FormInput}>
                        <input placeholder="Name" className={styles.inputText} name="name" type="text" />
                        {/* <label className={styles.floatingLabel} htmlFor="name">Name</label> */}
                    </div>
                    <div className={styles.FormInput}>
                        <input placeholder="Email" className={styles.inputText} name="email" type="email" />
                        {/* <label className={styles.floatingLabel} htmlFor="email">Email</label> */}

                    </div>

                    <div className={styles.FormInput}>
                        <input placeholder="Password" className={styles.inputText} name="pwd" type="password" />
                        {/* <label className={styles.floatingLabel} htmlFor="pwd">Password</label> */}

                    </div>
                    <button className={styles.ButtonSubmit}>
                        Download a sample
                    </button>
                </form>
            </div>

            <div className={styles.FormContent}>
                <div style={{ marginBottom: "20px" }}>
                    <p style={paraStyle}>The most useful resource</p>

                </div>
                <div >
                    <p style={subParaStyle1}>

                        ever created for designers
                    </p>
                </div>
                <div >
                    <p style={subParaStyle}>

                        Using Landkit to build your site means never worrying about designing another page or cross browser compatibility. Our ever-growing library of components and pre-designed layouts will make your life easier.
                    </p>
                </div>

                    
            </div>
        </section>
    )
}

export default FormSection
