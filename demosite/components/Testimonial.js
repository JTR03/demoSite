import { Box, Button, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import data from '../components/data.js'
import styles from '../styles/Home.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowForwardIos'

function Testimonial() {
    const [slide, setSlide] = useState(0)
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
        },5000)
        return () => {
            clearInterval(slider)
        }
    }, [slide])
    
    return (
        <div className={styles.section}>
            <Typography align='center' variant='h3' sx={{marginTop:10}}>
                Testimonials
            </Typography>

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
                            <Typography sx={{maxWidth:800}}>{text}</Typography>
                            <Typography variant='h5' sx={{paddingTop:5}}>{name}</Typography>
                        </article>
                    )
                })}
                <IconButton className={styles.iconBtn}>
                    <ArrowBackIosIcon />
                </IconButton>
                <IconButton className={styles.iconBtn}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Box>
        </div>
    )
}

export default Testimonial
