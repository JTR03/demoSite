import { Button, Card, CardActions, CardContent, Typography,Container } from '@mui/material'
import Grid from '@mui/material/Grid'
import React from 'react'
import styles from '../styles/Home.module.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

const content = [
    {
        title: "Service 1",
        text:` sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
         adipisci velit, sed quia non numquam eius modi tempora.`
    },
    {
        title: "Service 2",
        text:` quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
         nulla pariatur. Excepteur sint occaecat cupidatat non .`
    },
    {
        title: "Service 3",
        text:`  ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
         laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
    },
]
function Mid() {
    return (
        <div className={styles.mid}>
            <Typography variant='h3' align='center' sx={{marginTop:10,paddingTop:10}}>
                How can we help
                </Typography>
{/*  */}  <Container maxWidth={false}  >


                <Grid container spacing={14.125} direction='row' justifyContent='center' sx={{paddingLeft:9.45,paddingRight:9.45}} > 
                    {content.map((items)=>{
                        return(
                            
                            <Grid item xs={4}>
                        <Card sx={{background:'#535050',color:'#fff'}} className={styles.card}>
                            <CardContent>
                                <Typography align='center' variant='h5' sx={{paddingBottom:4}}>
                                    {items.title}
                                </Typography>
                                <Typography>
                                 {items.text}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{justifyContent:'center',paddingBottom:4}}>
                                <Button  sx={{background:'#fff9f9',color:'#000'}}>
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    
                        )
                    })}
                    </Grid>
                    <Grid container justifyContent='center'>
                        <Button sx={{marginTop:10,marginBottom:10,fontSize:25,background:'#fe0000',color:'#000'} }>
                        All Services
                    </Button>
                
                    </Grid>
                    
                </Container>
        </div>
    )
}

export default Mid
