import css from '../styles/Skills.module.css'
import Image from 'next/image'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'

export default function Skills() {
  return(
    <>
        <div className={css.heading}>
            <span>WHAT WE SERVE</span>
            <span>Your Favourite Food</span>
            <span>Delivery Partner</span>
        </div>

        <div className={css.skills}>
            <div className={css.features}>
<div className={css.Image}>
    <Image src={s1} alt='' objectFit='cover' layout='intrinsic'/>
</div>

<span>Easy to Order</span>
<span>You need only a few steps in food ordering</span>

            </div>

            <div className={css.features}>
            <div className={css.Image}>
    <Image src={s2} alt='' objectFit='cover' layout='intrinsic'/>
</div>
<span>Fast Delivery</span>
<span>Delivery that is always on time even faster</span>
            </div>
            <div className={css.features}>
            <div className={css.Image}>
    <Image src={s3} alt='' objectFit='cover' layout='intrinsic'/>
</div>
<span>Always on time</span>
<span>Not only fast , quality is also number one</span>
            </div>
        </div>
    </>
  )
}
