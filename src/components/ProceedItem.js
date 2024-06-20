import React from 'react'
import '../assets/styles/main/ProceedItem.scss'
import ProceedItemImg from "../assets/images/main/cnt_sec01.png"
import ProceedItemImg2 from "../assets/images/main/cnt_sec02.png"
import ProceedItemImg3 from "../assets/images/main/cnt_sec03.png"


function ProceedItem() {
  return (
    <>
        <div className='proceed_container'>
            <div className='proceed_wrap'>
                <div className='proced_box'>
                    <div className='procced_info'>
                        <h3>Best deals 
                            <span>Crispy Sandwiches</span>
                        </h3>
                        <p>Enjoy the large size of sandwiches. Complete  perfect slice of sandwiches.</p>
                        <button className="btn large"><span>Proceed to order</span></button>
                    </div>
                    <img alt="img" src={ProceedItemImg}/>
                </div>
                <div className='proced_box'>
                    <img alt="img" src={ProceedItemImg2}/>
                    <div className='procced_info'>
                        <h3>Celebrate parties with  
                            <span>Fried Chicken</span>
                        </h3>
                        <p>Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deals for fried chicken.</p>
                        <button className="btn large"><span>Proceed to order</span></button>
                    </div>
                </div>
                <div className='proced_box'>
                    <div className='procced_info'>
                        <h3>Wanna eat hot & spicy 
                            <span>Pizza?</span>
                        </h3>
                        <p>Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals.</p>
                        <button className="btn large"><span>Proceed to order</span></button>
                    </div>
                    <img alt="img" src={ProceedItemImg3}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProceedItem