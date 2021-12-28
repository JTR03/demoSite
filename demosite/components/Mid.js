import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import React from 'react'
import styles from '../styles/Home.module.css'

const content = [
    {
        title: "Service 1",
        text:` sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
         adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore 
         et dolore magnam aliquam quaerat voluptatem.`
    },
    {
        title: "Service 2",
        text:` quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
         nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.`
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
            <Typography variant='h3' sx={{marginTop:10}}>
                How can we help
                </Typography>

                <Grid container spacing={4} sx={{marginLeft:8,marginRight:10}}>
                    {content.map((items)=>{
                        return(
                            <Grid item xs={4}>
                        <Card sx={{background:'#535050',color:'#fff'}}>
                            <CardContent>
                                <Typography align='center' variant='h5'>
                                    {items.title}
                                </Typography>
                                <Typography>
                                 {items.text}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button>
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                        )
                    })}
                    
                </Grid>
        </div>
    )
}

export default Mid
