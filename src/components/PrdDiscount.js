import React from 'react'
import '../assets/styles/main/PrdDiscount.scss'
import { Link } from 'react-router-dom'; 
import discountImg from '../assets/images/main/main_sec01.png'

function PrdDiscount() {
  return (
    <>
        <ul className='discount_container'>
            <li>
                <Link to="/product">
                    <div>
                        <div className='img_wrap'>
                            <img alt="img" src={discountImg}/>
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
                </Link>
            </li>
            <li>
                <Link to="/product">
                    <div>
                        <div className='img_wrap'>
                            <img alt="img" src={discountImg}/>
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
                </Link>
            </li>
            <li>
                <Link to="/product">
                    <div>
                        <div className='img_wrap'>
                            <img alt="img" src={discountImg}/>
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
                </Link>
            </li>
            <li>
                <Link to="/product">
                    <div>
                        <div className='img_wrap'>
                            <img alt="img" src={discountImg}/>
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
                </Link>
            </li>
            <li>
                <Link to="/product">
                    <div>
                        <div className='img_wrap'>
                            <img alt="img" src={discountImg}/>
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
                </Link>
            </li>
            <li>
                <Link to="/product">
                    <div>
                        <div className='img_wrap'>
                            <img alt="img" src={discountImg}/>
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
                </Link>
            </li>
        </ul>
    </>
  )
}

export default PrdDiscount