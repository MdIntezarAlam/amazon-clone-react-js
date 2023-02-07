import React from 'react'
import '../../styles/cartOne.css'

const CartOne = ({box1}) => {
    return (
        <div className='cartOne'>
            <div className='title'>Up to 70% off | Clearance store</div>
            <div className='imgContainer'>
                <img src={box1} alt="" />
            </div>
            <div className='text'> See more</div>
        </div>
    )
}

export default CartOne