import { Typography } from '@mui/material'
import React from 'react'
import styles from '../styles/Home.module.css'

function Footer() {
    
    return (
        <div className={styles.footer}>
            
            <Typography variant='h5' sx={{paddingTop:3,color:'#fff'}}>
                {'Copyright © '}
                {new Date().getFullYear()}
            </Typography>
        </div>
    )
}

export default Footer 
