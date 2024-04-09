import React from 'react'
import '../assets/styles/main/Featlist.scss'
import featprdImg from '../assets/images/main/prd_rest01.png'
import brandlogoImg from '../assets/images/main/img_brand01.png'

function Featlist() {

  return (
    <>
        <div className='featlist_container'>
            <h3>Featured Restaurants</h3>
            <ul className='featlist_wrap'>
                <li>
                    <div>
                        <div className='img_wrap'>
                            <img src={featprdImg}/>
                            <div className='label_box'>
                                <span className='label_small label_sale'><span>20%</span><span>off</span></span>
                                <span className='label_small label_howlong'><span>Fast</span></span>
                            </div>
                        </div>
                        <div className='infobrand_wrap'>
                            <img src={brandlogoImg} className='small_img'/>
                            <div>
                                <p>Foodworld</p>
                                <span><i className='icon'></i>46</span>
                            </div>
                        </div>
                        <span className='label_primary off'>Opens tomorrow</span>
                    </div>
                </li>
                <li>
                    <div>
                        <div className='img_wrap'>
                            <img src={featprdImg}/>
                            <div className='label_box'>
                                <span className='label_small label_sale'><span>20%</span><span>off</span></span>
                                <span className='label_small label_howlong'><span>Fast</span></span>
                            </div>
                        </div>
                        <div className='infobrand_wrap'>
                            <img src={brandlogoImg} className='small_img'/>
                            <div>
                                <p>Foodworld</p>
                                <span><i className='icon'></i>46</span>
                            </div>
                        </div>
                        <span className='label_primary off'>Opens tomorrow</span>
                    </div>
                </li>
                <li>
                    <div>
                        <div className='img_wrap'>
                            <img src={featprdImg}/>
                            <div className='label_box'>
                                <span className='label_small label_sale'><span>20%</span><span>off</span></span>
                                <span className='label_small label_howlong'><span>Fast</span></span>
                            </div>
                        </div>
                        <div className='infobrand_wrap'>
                            <img src={brandlogoImg} className='small_img'/>
                            <div>
                                <p>Foodworld</p>
                                <span><i className='icon'></i>46</span>
                            </div>
                        </div>
                        <span className='label_primary'>Open Now</span>
                    </div>
                </li>
                <li>
                    <div>
                        <div className='img_wrap'>
                            <img src={featprdImg}/>
                            <div className='label_box'>
                                <span className='label_small label_sale'><span>20%</span><span>off</span></span>
                                <span className='label_small label_howlong'><span>Fast</span></span>
                            </div>
                        </div>
                        <div className='infobrand_wrap'>
                            <img src={brandlogoImg} className='small_img'/>
                            <div>
                                <p>Foodworld</p>
                                <span><i className='icon'></i>46</span>
                            </div>
                        </div>
                        <span className='label_primary'>Open Now</span>
                    </div>
                </li>
                <li>
                    <div>
                        <div className='img_wrap'>
                            <img src={featprdImg}/>
                            <div className='label_box'>
                                <span className='label_small label_sale'><span>20%</span><span>off</span></span>
                                <span className='label_small label_howlong'><span>Fast</span></span>
                            </div>
                        </div>
                        <div className='infobrand_wrap'>
                            <img src={brandlogoImg} className='small_img'/>
                            <div>
                                <p>Foodworld</p>
                                <span><i className='icon'></i>46</span>
                            </div>
                        </div>
                        <span className='label_primary'>Open Now</span>
                    </div>
                </li>
                <li>
                    <div>
                        <div className='img_wrap'>
                            <img src={featprdImg}/>
                            <div className='label_box'>
                                <span className='label_small label_sale'><span>20%</span><span>off</span></span>
                                <span className='label_small label_howlong'><span>Fast</span></span>
                            </div>
                        </div>
                        <div className='infobrand_wrap'>
                            <img src={brandlogoImg} className='small_img'/>
                            <div>
                                <p>Foodworld</p>
                                <span><i className='icon'></i>46</span>
                            </div>
                        </div>
                        <span className='label_primary'>Open Now</span>
                    </div>
                </li>
                <li>
                    <div>
                        <div className='img_wrap'>
                            <img src={featprdImg}/>
                            <div className='label_box'>
                                <span className='label_small label_sale'><span>20%</span><span>off</span></span>
                                <span className='label_small label_howlong'><span>Fast</span></span>
                            </div>
                        </div>
                        <div className='infobrand_wrap'>
                            <img src={brandlogoImg} className='small_img'/>
                            <div>
                                <p>Foodworld</p>
                                <span><i className='icon'></i>46</span>
                            </div>
                        </div>
                        <span className='label_primary off'>Opens tomorrow</span>
                    </div>
                </li>
                <li>
                    <div>
                        <div className='img_wrap'>
                            <img src={featprdImg}/>
                            <div className='label_box'>
                                <span className='label_small label_sale'><span>20%</span><span>off</span></span>
                                <span className='label_small label_howlong'><span>Fast</span></span>
                            </div>
                        </div>
                        <div className='infobrand_wrap'>
                            <img src={brandlogoImg} className='small_img'/>
                            <div>
                                <p>Foodworld</p>
                                <span><i className='icon'></i>46</span>
                            </div>
                        </div>
                        <span className='label_primary off'>Opens tomorrow</span>
                    </div>
                </li>
            </ul>
            <button className='btn large point'>View All</button>
        </div>
    </>
  )
}

export default Featlist