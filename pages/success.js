import Layout from '../Components/Layout'
import OrderModal from '../Components/OrderModal'


export default  function Success()  {
  
    return(
        <Layout>
<OrderModal opened={true} PaymentMethod={1}/>
        </Layout>
    )
}
