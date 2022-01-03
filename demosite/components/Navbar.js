import React from 'react'
import Styles from '../styles/Home.module.css'
import Toolbar from '@mui/material/Toolbar'
import { Box, Link, Typography } from '@mui/material'

const items = [
    {
        id:1,
        page:'Home',
        url:'/'
},
    { 
        id:2,
        page:'About',
        url:'/about'
    },
    { 
        id:3,
        page:'Services',
        url:'/services'
    },
    {
        id:4,
        page:'Contact Us',
        url:"/contact"
    }]

function Navbar() {
    return (
        
           
                <Toolbar disableGutters className={Styles.nav}>
                    <Typography  sx={{flexGrow:1, display:'flex'}}>LOGO</Typography>
                <Box className={Styles.pageContainer}>
                    {items.map((item)=>{
                        const {id,page,url} = item
                        return(
                             <Link key={id} href={url} underline='none' className={Styles.items}>
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
