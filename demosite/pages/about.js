import { Typography } from '@mui/material'
import React from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import History from '../components/History'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
function about() {
    return (
        <div className={styles.container}>
            <Navbar />
            <h1 className={styles.heading}>
                About Us
            </h1>
            <About />
            <History />
            <Footer />
        </div>
    )
}

export default about
