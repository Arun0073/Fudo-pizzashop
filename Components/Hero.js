import css from '../styles/Hero.module.css'
import Image from 'next/image'
import Cherry from '../assets/Cherry.png'
import HeroImage from '../assets/HeroImage.png'
import {UilPhone} from '@iconscout/react-unicons'
import Pizza1 from '../assets/p1.jpg'

export default function Hero() {
  return(
<div className={css.container}>
<div className={css.daayaSide}>
<div className={css.cherry}>
        <span>More than Faster</span>
        <Image src={Cherry} alt='' width={40} height={25}/>
    </div>
    <div className={css.hero}>
    <span>Be the Fastest</span>
    <span>In Delivering</span>
    <span>Your <span style={{color:'var(--themeRed)'}}>Pizza</span>
    </span>
</div>


<span className={css.min}>Our Mission is to Provide You With Delicious Food and with fast and free delivery
</span>
<button className={`btn ${css.btn}`}>
    Get Started
</button>

</div>

    <div className={css.baayaSide}>
        <div className={css.image}>
<Image src={HeroImage} alt='' layout='intrinsic'/>
        </div>

        <div className={css.contact}>
            <span>Contact us</span>
            <div>
              <UilPhone color='white'/>
            </div>
        </div>

        <div className={css.pizza}>
          <div>
            <Image src={Pizza1} alt='' objectFit='cover' layout='intrinsic'/>
          </div>
          <div className={css.detail}>
            <span>Italian Pizza</span>
            <span>
            <span style={{color:'var(--themeRed)'}}>$</span>7.49
            </span>
          </div>
        </div>
    </div>
</div>
  )
};

