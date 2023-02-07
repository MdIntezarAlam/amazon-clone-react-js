import React from 'react'
import '../../styles/freq.css'
import { Link } from 'react-router-dom'
import {frequentlyRequired} from '../../utils/constant'

const FrequentlyRequired = () => {
    return (
        <div className='freq'>
            <div className='offer'>
                <h1 className='heading'>Up to 60% off | Shop for new kitchenware from local shoap</h1>
                <Link to="/" className='freq_See'>Seee all Offers</Link>
            </div>
            <div className='freq_carasole'>
                {frequentlyRequired?.map((data) => (
                    <>
                        <div className='img_flex'>
                            <img src={data.img1} alt="img" className='image_container_horigental' />
                            <img src={data.img2} alt="img" className='image_container_horigental' />
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default FrequentlyRequired