import { Typography } from '@mui/material'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Offers from '../components/Offers'
import styles from '../styles/Home.module.css'

function services() {
    return (
        <div className={styles.container}>
            <Navbar />
            <Typography align='center' className={styles.heading}> 
                Services
            </Typography>
            <Offers />
            <Footer />
        </div>
    )
}

export default services
