import React, { useState } from 'react'
import '../../styles/home.css'
import CartOne from '../Cart/CartOne'
import Cart from '../Cart/Cart'
import box4_4 from '../../assets/box4_4.jpg'
import MiddleBanner from './MiddleBanner'
import FrequentlyRequired from '../Cart/FrequentlyRequired'
import { homeData } from '../../utils/constant'
import { Link } from 'react-router-dom'


const Home = () => {
    const [data, setdata] = useState(homeData)
    const box1 = box4_4
    return (
        <div className='home'>
            <div className='banner'></div>
            <div className='cart_container'>
                <Link to="/mobile">
                    <CartOne box1={box1} />
                </Link>
                <Cart data={data} />
                <MiddleBanner
                    day="Today's Deals"
                    detail="See all deals"
                />
                <FrequentlyRequired />
                <FrequentlyRequired />
                <CartOne box1={box1} />
                <Cart data={data} />
            </div>
        </div>

    )
}

export default Home