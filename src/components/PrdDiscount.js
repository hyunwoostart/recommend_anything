import React from 'react'
import '../assets/styles/main/PrdDiscount.scss'
import discountImg from '../assets/images/main/main_sec01.png'

function PrdDiscount() {
  return (
    <>
        <ul className='discount_container'>
            <li>
                <div>
                    <div className='img_wrap'>
                        <img src={discountImg}/>
                        <p className='label_discount'>
                            <span className='percent_num'>15</span>
                            <span className='percent_wrap'>
                                <span>%</span>
                                <span>Off</span>
                            </span>
                        </p>
                    </div>
                    <p>Greys Vage</p>
                    <span className='label_primary'>6 Days Remaining</span>
                </div>
            </li>
            <li>
                <div>
                    <div className='img_wrap'>
                        <img src={discountImg}/>
                        <p className='label_discount'>
                            <span className='percent_num'>10</span>
                            <span className='percent_wrap'>
                                <span>%</span>
                                <span>Off</span>
                            </span>
                        </p>
                    </div>
                    <p>Greys Vage</p>
                    <span className='label_primary'>6 Days Remaining</span>
                </div>
            </li>
            <li>
                <div>
                    <div className='img_wrap'>
                        <img src={discountImg}/>
                        <p className='label_discount'>
                            <span className='percent_num'>25</span>
                            <span className='percent_wrap'>
                                <span>%</span>
                                <span>Off</span>
                            </span>
                        </p>
                    </div>
                    <p>Greys Vage</p>
                    <span className='label_primary'>6 Days Remaining</span>
                </div>
            </li>
            <li>
                <div>
                    <div className='img_wrap'>  
                        <img src={discountImg}/>
                        <p className='label_discount'>
                            <span className='percent_num'>20</span>
                            <span className='percent_wrap'>
                                <span>%</span>
                                <span>Off</span>
                            </span>
                        </p>
                    </div>
                    <p>Greys Vage</p>
                    <span className='label_primary'>6 Days Remaining</span>
                </div>
            </li>
        </ul>
    </>
  )
}

export default PrdDiscount