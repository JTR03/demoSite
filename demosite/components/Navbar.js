import React, { useState } from 'react'
import Styles from '../styles/Home.module.css'
import Toolbar from '@mui/material/Toolbar'
import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'

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
    const [state, setState] = useState(false)

    const handleState = ()=>{
        setState(true)
    }

    const handleClose = ()=>{
        setState(false)
    }
    return (

                <Toolbar disableGutters className={Styles.nav}>
                    <Typography  sx={{flexGrow:1, display:'flex'}}>LOGO</Typography>
                <Box sx={{display:{sm:'block',xs:'none'}}}>
                    {items.map((item)=>{
                        const {id,page,url} = item
                        return(
                            <Link key={id} href={url} >
                           <a className={Styles.items}> {page}</a> 
                        </Link>
                        )
                       
                    }

                        
                    )}
                    <button className={Styles.btn}>
                        more
                    </button>
                </Box>
                <Box sx={{display:{sm:'none'}}}>
                    <IconButton onClick={handleState}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer 
                    anchor='right'
                    open={state}
                    onClick={handleClose}
                    >
                        {items.map((item)=>{
                            const {id,page,url} = item
                            return(
                                <List key={id}>
                                    <ListItem>
                                        <Link href={url}>
                                        {page}
                                        </Link>
                                        
                                    </ListItem>
                                </List>
                            )
                        })}
                    </Drawer>
                </Box>
                
                </Toolbar>
                
           
        
    )
}

export default Navbar
