import Image from 'next/image'
import css from '../styles/Menu.module.css'
import { urlFor } from '../lib/client'
import Link from 'next/link'
export default function Menu({pizzas}) {
  return(
<div className={css.container}>
    <div className={css.heading}>
        <span>OUR MENU</span>
        <span>That Always</span>
        <span>Make you Fall In Love</span>
    </div>


<div className={css.menu}>
{pizzas.map((pizza,id)=>{

const src=urlFor(pizza.image).url()
return(
    <div className={css.pizza} key={id}>

<Link href={`./pizza/${pizza.slug.current}`}>
<div className={css.image}>
<Image 
loader={()=>src}
src={src} alt='' objectFit='cover' layout='fill' unoptimized='true'/>
</div></Link>

<span>{pizza.name}</span>
<span> <span style={{color:'var(--themeRed)'}}>$</span> {pizza.price[1]}</span>
    </div>
)
})}
</div>
</div>
  )
}
