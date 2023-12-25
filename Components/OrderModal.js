import { Modal, useMantineTheme } from '@mantine/core';
import css from '../styles/OrderModal.module.css'
import { useState } from 'react';
import { createOrder } from '../lib/orderHandler';
import { useStore } from '../Store/Store';
import toast,{Toaster} from "react-hot-toast"
import { useRouter } from 'next/router';


export default function OrderModal({opened,setOpened,PaymentMethod}) {
    const theme = useMantineTheme();
    const router=useRouter()
    const total= typeof window !== 'undefined' && localStorage.getItem('total')
    const[Data, setData]=useState({})

    const handleInput=(e)=>{
        setData({...Data,[e.target.name]:e.target.value})
    }

    const resetCart=useStore((state)=>state.resetCart)
    const handleSubmit= async (e)=>{
        e.preventDefault();
        const id= await createOrder({...Data,total,PaymentMethod})
        toast.success("Order Places");
        resetCart();

        {
            typeof window !== 'undefined' && localStorage.setItem('order',id)
        }

        router.push(`/order/${id}`)
    }
    return(
        <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={opened}
      onClose={()=>setOpened(null)}
    >
<form  onSubmit={handleSubmit} action="" className={css.formContainer}>
    <input onChange={handleInput} type="text" name='name' required placeholder='Name' />
    <input onChange={handleInput} type="text" name='phone' required placeholder='Phone Number' />
    <textarea onChange={handleInput} name="address"  rows="3" placeholder='Address'></textarea>

    <span>Your Total amount is <span>$ {total}</span>
    </span>

    <button type='submit' className='btn'>Place Order</button>
</form>

<Toaster/>
    </Modal>

);
}
