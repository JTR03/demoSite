import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import { Typography } from '@mui/material'
import Form from '../components/Form'

function contacts() {
    return (
        <div className={styles.container}>
            <Navbar />
            <Typography align='center' className={styles.heading}>
                Contact Us
            </Typography>
            <Form />
            <Footer />
        </div>
    )
}

export default contacts
