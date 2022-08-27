import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
  return (
    <div>
<div className='home_container'>

    <img className='home_image' src="https://m.media-amazon.com/images/I/717OO5QwJnL._SX3000_.jpg" alt="" />
    <div className='home_row'>
        <Product
        id = "12321341"
        title = "New Apple iMac with Retina 5K Display (27-inch, 8GB RAM, 256GB SSD Storage)"
        price = {1369.99}
        rating ={5}
        image = 'https://m.media-amazon.com/images/I/71KR2i6-WaL._AC_UY218_.jpg'
        />
        <Product 
        id = "49538094"
        title = "4K 60FPS Video Camera Camcorder Ultra HD 48MP YouTube Camera Vlogging WiFi Digital Camera Recorder IPS Touch Screen"
        price = {149.99}
        rating ={6}
        image = 'https://m.media-amazon.com/images/I/81eUw7H78UL._AC_UY218_.jpg'/>
    </div>
    <div className='home_row'>
        <Product 
        id = "4903850"
        title = "Epic Racing Professional Gaming Chair with Adjustable Height, Full Recline and Headrest/Lumbar Support"
        price = {159.99}
        rating ={4}
        image = 'https://m.media-amazon.com/images/I/71t8UBllIgL._AC_UL320_.jpg '/>
        <Product 
        id = "23445930"
        title = "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
        price = {598.99}
        rating ={6}
        image = "https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"/>
        <Product
        id = "3254354345"
        title = "POLIVIAR French Press Co..."
        price = {39.99}
        rating ={5}
        image = 'https://m.media-amazon.com/images/I/81btnU91VPL._AC_SX679_.jpg' />
    </div>
    <div className='home_row'>
        <Product 
        id = "90829332"
        title = "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
        price = {1094.99}
        rating ={6}
        image = "https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
        />
       
    </div>
    <div className='home_row'>
        <Product 
        id = "12345453"
        title = "Kenwood kMix Stand Mixer..."
        price = {239}
        rating ={6}
        image = "https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
        />
       <Product 
        id = "12345452"
        title = "The Lean Startup: How Co..."
        price = {14.99}
        rating ={6}
        image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
    </div>
</div>

    </div>
  )
}

export default Home