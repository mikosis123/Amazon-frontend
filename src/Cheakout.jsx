import React from 'react'
import Chakeout_product from './Chakeout_product'
import './Cheakout.css'
import { useStateValue } from './Statepro';
import Subtotal from './Subtotal'
function Cheakout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className='cheakout'>
        <div className='cheakout_left'>
            <img className='cheakout_ads'
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
            <h3>Hello</h3>
            <h2 className='cheakout_title'>your shop in basket</h2>
            {basket.map((item) => (
            <Chakeout_product
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />))}
        </div>
        <div className='cheakout_right'>
        <Subtotal />
        </div>
    </div>
  )
}

export default Cheakout