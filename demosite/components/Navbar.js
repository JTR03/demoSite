import React from 'react'
import Styles from '../styles/Home.module.css'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Box, Button, Link, Typography } from '@mui/material'

const items = ['Home','About','Services','Contact Us']

function Navbar() {
    return (
        
           
                <Toolbar disableGutters className={Styles.nav}>
                    <Typography  sx={{flexGrow:1, display:'flex'}}>LOGO</Typography>
                <Box className={Styles.pageContainer}>
                    {items.map((item)=>(
                        <Link underline='none' className={Styles.items}>
                            {item}
                        </Link>
                    ))}
                    
                </Box>
                <button className={Styles.btn}>
                        more
                    </button>
                </Toolbar>
                
           
        
    )
}

export default Navbar
