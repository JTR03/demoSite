import { Typography,Box, Grid } from '@mui/material'
import React from 'react'
import styles from '../styles/Home.module.css'

function About() {
    return (
        <div className={styles.mid}>
            <Grid container spacing={28.75} sx={{marginTop:24.25,paddingBottom:11}}>
                <Grid item>
                        <Box sx={{marginLeft:12.5,maxWidth:380}}>
                <Typography variant='h6'>
                A Little Bit More About Us
            </Typography>
            <Typography variant='h4' sx={{paddingTop:5.875}}>
                For The Best Services In The Country
            </Typography>
            </Box>
                </Grid>
                <Grid item>
  <Box sx={{width:620}}>
                <Typography variant='h3'>
rem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
                <Typography sx={{paddingTop:5}}>
                
                 Nam hendrerit nisi sed sollicitudin pellentesque. Nunc
                  posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique
                   nisl vitae volutpat. Nulla aliquet porttitor venenatis. 
                   Donec a dui et dui fringilla consectetur id nec massa.
                    Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel
                     tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. 
                Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices 
                tellus, in suscipit massa vehicula eu.<br /><br/>

                Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit
                 aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem 
                 sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit 
                 amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora 
                 inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima 
                 veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid 
                 ex ea commodi consequatur? Quis autem vel eum iure reprehenderit
                qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem
                 eum fugiat, quo voluptas nulla pariatur
                </Typography>
            </Box>
                </Grid>
            </Grid>
        
            
          
            
        </div>
    )
}

export default About
