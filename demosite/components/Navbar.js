import React from 'react'
import Styles from '../styles/Home.module.css'
import Toolbar from '@mui/material/Toolbar'
import { Box, Button, Link, Typography } from '@mui/material'

const items = [
    {
        page:'Home',
        url:'/'
},
    {
        page:'About',
        url:'/about'
    },
    {
        page:'Services',
        url:'/services'
    },
    {
        page:'Contact Us',
        url:"/contact"
    }]

function Navbar() {
    return (
        
           
                <Toolbar disableGutters className={Styles.nav}>
                    <Typography  sx={{flexGrow:1, display:'flex'}}>LOGO</Typography>
                <Box className={Styles.pageContainer}>
                    {items.map((item)=>{
                        const {page,url} = item
                        return(
                             <Link href={url} underline='none' className={Styles.items}>
                            {page}
                        </Link>
                        )
                       
                    }

                        
                    )}
                    
                </Box>
                <button className={Styles.btn}>
                        more
                    </button>
                </Toolbar>
                
           
        
    )
}

export default Navbar
