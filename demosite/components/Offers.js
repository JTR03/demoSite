import { Typography } from '@mui/material'
import React from 'react'
import styles from '../styles/Home.module.css'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'


const services = [
    {
        id:1,
        title: "Service 1",
        text:` sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
         adipisci velit, sed quia non numquam eius modi tempora.`
    },
    {
        id:2,
        title: "Service 2",
        text:` quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
         nulla pariatur. Excepteur sint occaecat cupidatat non .`
    },
    {
        id:3,
        title: "Service 3",
        text:`  ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
         laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
    },
    {
        id:4,
    title: "Service 4",
        text:` sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
         adipisci velit, sed quia non numquam eius modi tempora.`
    },
    {
        id:5,
        title: "Service 5",
        text:` quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
         nulla pariatur. Excepteur sint occaecat cupidatat non .`
    },
    {
        id:6,
        title: "Service 6",
        text:`  ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
         laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`
    },
]

function offers() {
    return (
        <div className={styles.mid}>
             <Typography variant='h3' align='center' sx={{marginTop:10,paddingTop:10}}>
               What We Offer
                </Typography>

                <Container maxWidth={false}  >


<Grid container spacing={5} direction='row' justifyContent='center' sx={{paddingLeft:{xs:2,md:9.45},paddingRight:{xs:2,md:9.45}}} > 
    {services.map((items)=>{
        const{id,title,text} = items
        return(
            
            <Grid key={id} item xs={12} sm={6} md={4} >
        <Card sx={{background:'#535050',color:'#fff',borderRadius:{xs:5, sm:10,md:35},marginTop:11}}>
            <CardContent>
                <Typography align='center' variant='h5' sx={{paddingTop:5}}>
                    {title}
                </Typography>
                <Typography sx={{padding:{xs:0}}}>
                 {text}
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
        <Button variant='outlined' sx={{marginTop:10,marginBottom:10,fontSize:25,borderColor:'#fe0000',color:'#fe0000'} }>
        Get A Quote
    </Button>

    </Grid>
    
</Container>
        </div>
    )
}

export default offers
