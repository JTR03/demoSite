import { Typography } from '@mui/material'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Mid from '../components/Mid'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div style={{display:'flex'}}>
        <div style={{width:'40%'}}>
        <Typography className={styles.title}>
        Leading Company <br /> In Industry
      </Typography>
      <Typography className={styles.description}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>
      <button className={styles.btn2}>
        <a href='/about'>
           About Us
        </a>
       
      </button>
      </div>
      
      <div className={styles.img}>
          <Image 
      src="/landing.png"
      alt="landing page image"
      width={800}
      height={450}
      
      />
      </div>
      
    
      </div>
      
      <Mid />
      <Testimonial />
      <Footer />
    </div>
  )
}
