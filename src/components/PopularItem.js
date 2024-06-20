import React from 'react'
import '../assets/styles/main/PopularItem.scss'
import popularImg from '../assets/images/main/prd_item01.png'
import popularImg2 from '../assets/images/main/prd_item02.png'
import popularImg3 from '../assets/images/main/prd_item03.png'
import popularImg4 from '../assets/images/main/prd_item04.png'
import popularImg5 from '../assets/images/main/prd_item05.png'

function PopularItem() {
  return (
    <>
        <div className='popular_container'>
            <h3>Popular items</h3>
            <ul className='popular_wrap'>
                <li>
                    <div className='img_wrap'>
                        <img alt="img" src={popularImg}/>
                    </div>
                    <div className='info_wrap'>
                        <p>Cheese Burger</p>
                        <strong><span>Burger Arena</span></strong>
                        <p>$<span>3.88</span></p>
                    </div>
                    <button className="btn large">Order Now</button>
                </li>
                <li>
                    <div className='img_wrap'>
                        <img alt="img" src={popularImg2}/>
                    </div>
                    <div className='info_wrap'>
                        <p>Cheese Burger</p>
                        <strong><span>Burger Arena</span></strong>
                        <p>$<span>3.88</span></p>
                    </div>
                    <button className="btn large">Order Now</button>
                </li>
                <li>
                    <div className='img_wrap'>
                        <img alt="img" src={popularImg3}/>
                    </div>
                    <div className='info_wrap'>
                        <p>Cheese Burger</p>
                        <strong><span>Burger Arena</span></strong>
                        <p>$<span>3.88</span></p>
                    </div>
                    <button className="btn large">Order Now</button>
                </li>
                <li>
                    <div className='img_wrap'>
                        <img alt="img" src={popularImg4}/>
                    </div>
                    <div className='info_wrap'>
                        <p>Cheese Burger</p>
                        <strong><span>Burger Arena</span></strong>
                        <p>$<span>3.88</span></p>
                    </div>
                    <button className="btn large">Order Now</button>
                </li>
                <li>
                    <div className='img_wrap'>
                        <img alt="img" src={popularImg5}/>
                    </div>
                    <div className='info_wrap'>
                        <p>Cheese Burger</p>
                        <strong><span>Burger Arena</span></strong>
                        <p>$<span>3.88</span></p>
                    </div>
                    <button className="btn large">Order Now</button>
                </li>
            </ul>
        </div>
    </>
  )
}

export default PopularItem