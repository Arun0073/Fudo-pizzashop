import Layout from '../../Components/Layout'
import {client, urlFor } from '../../lib/client'
import Image from 'next/image'
import css from '../../styles/Pizza.module.css'
import Baaya from '../../assets/arrowRight.png'
import Daaya from '../../assets/arrowLeft.png'
import { useState } from 'react'
import  {useStore}  from '../../Store/Store'
import toast,{Toaster} from 'react-hot-toast'

export default function Pizza({pizza}) {

    const[Size,setSize]=useState(1)
    const[Quantity,setQuantity]=useState(1)

    const handleQuan=(type)=>{
type==="inc" ? setQuantity((prev)=>prev+1): Quantity===1? null: setQuantity((prev)=>prev-1)
    }
    const src= urlFor(pizza.image).url()

const addPizza=useStore((state)=>state.addPizza)
    const addToCart=()=>{
addPizza({...pizza, price: pizza.price[Size] ,quantity: Quantity , size:Size})
toast.success('Added to cart')
    }
  return(
    <Layout>
<div className={css.container}>
    <div className={css.Image}>
        <Image loader={()=>src} src={src} alt='' layout='fill' unoptimized='true' objectFit='cover'/>
    </div>

<div className={css.right}>
<span>{pizza.name}</span>
<span>{pizza.details}</span>

<span><span style={{color:'var(--themeRed)'}}> $ </span>{pizza.price[Size]}</span>
<div className={css.size}>
    <span>size</span>
    <div className={css.sizevarient}>
        <div onClick={()=>setSize(0)} className={Size===0? css.selected : " "}>Small</div>
        <div onClick={()=>setSize(1)} className={Size===1? css.selected : " "}>Medium</div>
        <div onClick={()=>setSize(2)} className={Size===2? css.selected : " "}>Large</div>
    </div>
</div>

<div className={css.Quantity}>
    <span>Quantity</span>

    <div className={css.counter}>
        <Image src={Daaya} width={20} height={20} objectFit='contain' alt='' onClick={()=>handleQuan("dec")}/>
        <span>{Quantity}</span>
        <Image src={Baaya} width={20} height={20} objectFit='contain' alt='' onClick={()=>handleQuan("inc")}/>
    </div>
</div>

<div className={`btn ${css.btn}`} onClick={addToCart}>
    Add to Cart
</div>
</div>
<Toaster/>
</div>

    </Layout>
  )
}

export async function getStaticPaths(){
    const paths= await client.fetch(
        `*[_type=="pizza" && defined(slug.current)][].slug.current`
    )

    return{
        paths: paths.map((slug)=>({params:{slug}})),
        fallback:'blocking'
    }
}
export async function getStaticProps(context){
    const {slug = " "} = context.params;
    const pizza= await client.fetch(
        `*[_type == "pizza" && slug.current == '${slug}'][0]`
    );
    return{
        props:{
            pizza,
        },
    };


    }

