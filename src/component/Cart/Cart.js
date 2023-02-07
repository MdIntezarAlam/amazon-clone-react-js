import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/cart.css'

const Cart = ({ data }) => {

  return (
    <>
      {data?.map((da) => (
        <Link to="/mobile" className='cartOne'>
          <div className='title' style={{color:"#000"}}>Up to 70% off | Clearance store</div>
          <div className='imgContainers'>
            <div className='one'>
              <div className='img_one'>
                <img src={da.img1} alt="" className='image_one_img' />
                <span className='text_'>{da.title}</span>
              </div>
              <div className='img_one'>
                <img src={da.img3} alt="" className='image_one_img' />
                <span className='text_'>{da.title}</span>
              </div>
              <div className='img_one'>
                <img src={da.img2} alt="" className='image_one_img' />
                <span className='text_'>{da.title}</span>
              </div>
              <div className='img_one'>
                <img src={da.img4} alt="" className='image_one_img' />
                <span className='text_'>{da.title}</span>
              </div>
            </div>
          </div>
          <div className='text'> See more</div>
        </Link>
      ))}
    </>
  )
}

export default Cart