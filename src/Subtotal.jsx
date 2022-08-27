import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './Statepro';
import { useNavigate } from 'react-router-dom';
function Subtotal() {
  const navigate = useNavigate();
    const [{ basket }, dispatch] = useStateValue();
    const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value)=>(
             <div>
                  <p>
                    subtotal ({basket.length} items):<strong>{value}</strong>
                    </p>
                     <small className='subtotal_gift'>
                   <input type='checkbox'></input> This order contains gift
                 </small>
            </div>

        )}
        decimalScale={2}
        value ={getBasketTotal(basket)}
        displayType = {'text'}
        prefix ={'$'}
        />
<button >proceed to checkout</button> 
   </div>
  )
}

export default Subtotal