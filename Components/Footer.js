import{UilFacebook,UilInstagram,UilGithub} from '@iconscout/react-unicons'
import css from '../styles/Footer.module.css'
import Image from 'next/image'
import Logo from '../assets/Logo.png'

export default function Footer() {
  return(
    <div className={css.container}>
      <span>ALL RIGHTS RESERVED</span>
      <div className={css.social}>
        <UilFacebook size={45}/>
        <UilGithub size={45}/>
        <UilInstagram size={45}/>
      </div>
      <div className={css.logo}>
            <Image src={Logo} alt="" width={50} height={50}/>
            <span>FUDO</span>
        </div>
    </div>
  )
};

