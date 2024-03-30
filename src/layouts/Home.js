import React from 'react'
import '../assets/styles/Home.scss'
import PrdDiscount from '../components/PrdDiscount'
import CntHow from '../components/CntHow'
import PopularItem from '../components/PopularItem'
import Featlist from '../components/Featlist'
import SearchPrd from '../components/SearchPrd'
import CntInfo from '../components/CntInfo'
import ProceedItem from '../components/ProceedItem'
import ReadyTo from '../components/ReadyTo'

function Home() {
  return (
    <>
        <div className='bg_wrap01'>
            <main className='main_container'>
                <h2 className='main_tit'>Are you starving?</h2>
                <p className='main_subtit'>Within a few clicks, find meals that are accessible near you</p>
                <div className="main_cnt">
                    <ul className='main_tabs'>
                        <li className='cnt_delivery active'><span>Delivery</span></li>
                        <li className='cnt_pickup'><span>Pickup</span></li>
                    </ul>
                    <div className='search_wrap'>
                        <label>
                            <input placeholder='Enter Your Address' />
                            <button className='btn_address'><span className='blind'>주소 검색</span></button>
                        </label>
                        <button className='btn point'><span>Find Food</span></button>
                    </div>
                </div>
            </main>
        </div>
        <PrdDiscount />
        <CntHow />
        <PopularItem />
        <Featlist />
        <SearchPrd />
        <CntInfo />
        <ProceedItem />
        <ReadyTo />
    </>
  )
}

export default Home