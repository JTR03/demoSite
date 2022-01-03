import { Button, Grid, Stack } from '@mui/material'
import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

function Form() {
    return (
        <div className={styles.mid}>
            <Box sx={{marginRight:40,marginLeft:40}}>
                  <Grid container spacing={10} justifyContent='center' >

                 <Grid item md={4} >
                     <Stack direction='column' alignItems='center' justifyContent='center'>
                        <MailOutlineIcon/>
                          <Typography >
                        www.email@email.com
                    </Typography>
                     </Stack>
                    
                   
                  </Grid>
                   <Grid item md={4}>
                   <Stack direction='column' alignItems='center' justifyContent='center'>
                    <LinkedInIcon />
                    <Typography>
                        LinkedIn
                    </Typography>
                    </Stack>
                  </Grid>  
                             
                  <Grid item md={4}>
                  <Stack direction='column' alignItems='center' justifyContent='center'>
                      <PhoneIcon  />
                      <Typography >
                        0832173223
                    </Typography>
                    </Stack>
                  </Grid>             
            </Grid>
            </Box>
          
            <Box sx={{marginTop:12.5,marginRight:40,marginLeft:40, paddingBottom:10}}>
                <Grid spacing={2} container justifyContent='center'>
                <Grid item xs={12} md={6}> 
                <Grid container spacing={4.5}>
                    <Grid item xs={12} md={12}>
                        <TextField 
                    fullWidth
                    id="firstName"
                    label="Your Name"
                    placeholder='John Doe'
                    name='name'                    
                    />
                    </Grid>
                     <Grid item xs={12} md={12}> 
                    <TextField 
                    fullWidth
                    id="firstName"
                    label="Your Contacts"
                    placeholder='www.john@doe.com'
                    name='name'                    
                    />
                </Grid>
                </Grid>
                    
                </Grid>
               
                <Grid item xs={12} md={6}> 
                    <TextField 
                    fullWidth
                    id="message"
                    label='Message'
                    placeholder='Type Your message here'
                    name='name'                    
                    multiline
                    rows={5}
                    />
                </Grid>
                <Grid item>
                    <Button variant='contained'>
                        Submit
                    </Button>
                </Grid>
                </Grid>

            </Box>
            
        </div>
    )
}

export default Form
