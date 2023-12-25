import css from '../styles/Cart.module.css'
import Layout from '../Components/Layout'
import { useStore } from '../Store/Store'
import Image from 'next/image'
import {urlFor} from '../lib/client'
import toast,{Toaster} from 'react-hot-toast'
import { useState } from 'react'
import OrderModal from '../Components/OrderModal'
import  {useRouter}  from 'next/router'


export default function Cart() {
    const[PaymentMethod,setPaymentMethod]=useState(null)
    const[Order,setOrder]=useState(
        typeof window !=='undefined' && localStorage.getItem("order")
    )
   
    const CartData=useStore((state)=>state.cart)
    const oppPizza=useStore((state)=>state.oppPizza)
    const handleopp=(i)=>{
oppPizza(i);
toast.error('Item Removed')
    }


const router=useRouter();
    const total=()=>CartData.pizzas.reduce((a,b)=>a+b.quantity*b.price,0)

    const handleDev=()=>{
        setPaymentMethod(0);
        typeof window !=='undefined' && localStorage.setItem('total',total())
    }


    const handleCheckout= async()=>{
        typeof window !=='undefined' && localStorage.setItem('total',total())
        setPaymentMethod(1);
        const response= await fetch('api/stripe',{
            method:"POST",
            headers:{
                'Content-Type': "application/json",
            },
            body:JSON.stringify(CartData.pizzas),
        });

        if(response.status === 500) return;

        const data =await response.json();
        toast.loading("Redirecting...");
        router.push(data.url)
    }
    return(
        <Layout>

            <div className={css.container}>
                <div className={css.details}>
                    <table className={css.table}>
                        <thead>
                            <th>Pizza</th>
                            <th>Name</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </thead>
                        <tbody className={css.body}>
{CartData.pizzas.length>0 && CartData.pizzas.map((pizza,i)=>{
    const src=urlFor(pizza.image).url()
    return(
    <tr key={i}>
        <td className={css.imagetd}>
            <Image loader={()=>src}  alt='' objectFit='cover' width={85} height={85} src={src}/>
        </td>

        <td>
            {pizza.name}
        </td>
        <td>
            {
                pizza.size===0?
                "Small":
                pizza.size===1?
                "Medium":
                "Large"
            }
        </td>
        <td>
            {pizza.price}
        </td>
        <td>
            {pizza.quantity}
        </td>
        <td>
            {pizza.price* pizza.quantity}
        </td>
        <td  onClick={()=>handleopp(i)} style={{color:'var(--themeRed)', cursor:'pointer'}}>X</td>
    </tr>
)})
}
                        </tbody>
                    </table>
                </div>
                <div className={css.cart}>
                    <span>Cart</span>
                    <div className={css.cartdetails}>
                        <div>
                            <span>Items</span>
                            <span>{CartData.pizzas.length}</span>
                        </div>
                        <div>
                            <span>Total</span>
                            <span>${total()}</span>
                        </div>
                    </div>




{!Order && CartData.pizzas.length > 0 ?(
    <div className={css.button}>
                        <div className="btn" onClick={handleDev}>Pay on Delivery</div>
                        <div className="btn" onClick={handleCheckout}>Pay Now</div>
                    </div>
):null} 
                    
                </div>
            </div>
            <Toaster/>

            <OrderModal
                opened={PaymentMethod === 0}
                setOpened={setPaymentMethod}
                PaymentMethod={PaymentMethod}
            />
        </Layout>
    )
};
