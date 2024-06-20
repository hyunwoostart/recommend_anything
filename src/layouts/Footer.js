import React from 'react'
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <>
        <footer>
            <div className='footer_container'>
                <strong className='sub_tit'>Our top cities</strong>
                <div className='footer_top'>
                    <ul>
                        <li>San Francisco</li>
                        <li>San Francisco</li>
                        <li>San Francisco</li>
                        <li>San Francisco</li>
                        <li>San Francisco</li>
                        <li>San Francisco</li>
                    </ul>
                    <ul>
                        <li>San Francisco</li>
                        <li>San Francisco</li>
                        <li>San Francisco</li>
                        <li>San Francisco</li>
                        <li>San Francisco</li>
                        <li>San Francisco</li>
                    </ul>
                    <ul>
                        <li>San Francisco</li>
                        <li>San Francisco</li>
                        <li>San Francisco</li>
                        <li>San Francisco</li>
                        <li>San Francisco</li>
                        <li>San Francisco</li>
                    </ul>
                    <ul>
                        <li>San Francisco</li>
                        <li>San Francisco</li>
                        <li>San Francisco</li>
                        <li>San Francisco</li>
                        <li>San Francisco</li>
                        <li>San Francisco</li>
                    </ul>
                    <ul>
                        <li>San Francisco</li>
                        <li>San Francisco</li>
                        <li>San Francisco</li>
                        <li>San Francisco</li>
                        <li>San Francisco</li>
                        <li>San Francisco</li>
                    </ul>
                    <ul>
                        <li>San Francisco</li>
                        <li>San Francisco</li>
                        <li>San Francisco</li>
                        <li>San Francisco</li>
                        <li>San Francisco</li>
                        <li>San Francisco</li>
                    </ul>
                </div>

                <div className='footer_bottom'>
                    <div className='company_wrap'>
                        <div>
                            <strong className='sub_tit'>Company</strong>
                            <ul>
                                <li>
                                    <a href='#'>About us</a>
                                </li>
                                <li>
                                    <a href='#'>Team</a>
                                </li>
                                <li>
                                    <a href='#'>Careers</a>
                                </li>
                                <li>
                                    <a href='#'>Blog</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <strong className='sub_tit'>Contact</strong>
                            <ul>
                                <li>
                                    <a href='#'>Help & Support</a>
                                </li>
                                <li>
                                    <a href='#'>Partner with us </a>
                                </li>
                                <li>
                                    <a href='#'>Ride with us</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <strong className='sub_tit'>Company</strong>
                            <ul>
                                <li>
                                    <a href='#'>Terms & Conditions</a>
                                </li>
                                <li>
                                    <a href='#'>Refund & Cancellation</a>
                                </li>
                                <li>
                                    <a href='#'>Privacy Policy</a>
                                </li>
                                <li>
                                    <a href='#'>Cookie Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='address_wrap'>
                        <p>Receive exclusive offers in your mailbox</p>
                        <div className='btn_wrap'>
                            <label>
                                <input placeholder='Enter Your email'/>
                            </label>
                            <button className='btn'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <p className='copy_tit'>All rights Reserved &copy; Your Company, 2024</p>
            </div>
        </footer>
    </>
  )
}

export default Footer