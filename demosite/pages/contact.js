import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Typography from '@mui/material/Typography'
import Form from '../components/Form'

function contacts() {
    return (
        <div className={styles.container}>
            <Navbar />
            <Typography align='center' className={styles.heading}>
                Contact Us
            </Typography>
            <Form />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114584.90393027598!2d27.969984390440622!3d-26.171350486604428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg!5e0!3m2!1sen!2sza!4v1641115777469!5m2!1sen!2sza" width="100%" height="450"  allowfullscreen="" loading="lazy"></iframe>
            <Footer />
        </div>
    )
}

export default contacts
