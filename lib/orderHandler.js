export const createOrder= async({name,phone,total,address,PaymentMethod})=> {
    



    const res=await fetch('/api/Order',{
        method:"POST",
        body:JSON.stringify({
            name: name,
            phone: phone,
            address: address,
            total: parseFloat(total),
            method:PaymentMethod,
            status:1

        }),
});
const id= await res.json();
return id;

};
