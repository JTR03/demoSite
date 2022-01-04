import { Box, Button, Grid, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import data from '../components/data.js'
import styles from '../styles/Home.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function Testimonial() {
    const [slide, setSlide] = useState(0)

    const handlePrev = ()=>{
        setSlide(slide - 1)
    }

    const handleNext = ()=>{
        setSlide(slide + 1)
    }
    useEffect(() => {
        const last = data.length - 1
        if(slide<0){
            setSlide(last)
        }else if(slide>last){
            setSlide(0)
        }
    }, [slide,data])

    useEffect(() => {
        let slider = setInterval(()=>{
            setSlide(slide+1)
        },10000)
        return () => {
            clearInterval(slider)
        }
    }, [slide])
    
    return (
        <div className={styles.section}>
            <Typography align='center' variant='h3' sx={{marginTop:10}}>
                Testimonials
            </Typography>
            <Grid container direction={'row'} justifyContent='center' >
                <Grid item>
<IconButton sx={{marginTop:{xs:16,sm:9,md:6}}} onClick={handlePrev}>
                    <ArrowBackIosNewIcon sx={{fontSize:{xs:25,sm:40,md:120}}}/>
                </IconButton>
                 
                </Grid>
                <Grid item>
    <Box className={styles.section2}>
                {data.map((reviews,ind)=>{
                    const {id,name,text} = reviews;
                    let position = 'nextSlide'

                    if(ind === slide){
                        position = 'activeSlide'
                    }

                    else if(ind === slide - 1 || (slide === 0 && ind === data.length-1)){
                        position = 'lastSlide'
                    }
                    return(
                        <article className={position} key={id}>
                            <Typography align='center' >{text}</Typography>
                            <Typography variant='h5' sx={{paddingTop:5}}>{name}</Typography>
                        </article>
                    )
                })}
               
            </Box>
                </Grid>
                <Grid item>
 <IconButton sx={{marginTop:{xs:16,sm:9,md:6}}} onClick={handleNext}>
                    <ArrowForwardIosIcon  sx={{fontSize:{xs:25,sm:40,md:120}}}/>
                </IconButton>
                </Grid>
            </Grid>
        
             
        </div>
    )
}

export default Testimonial
