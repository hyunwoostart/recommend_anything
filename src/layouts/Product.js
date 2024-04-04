
import React, { useState } from 'react'
import '../assets/styles/Product.scss'
import brandlogoImg from '../assets/images/main/img_brand01.png'
import TabcntInfo from '../components/TabcntInfo'
import TabcntMenu from '../components/TabcntMenu'
import TabcntReview from '../components/TabcntReview'
import { Link } from 'react-router-dom'

function Product() {
    const tab = {0: <TabcntMenu />, 1: <TabcntReview />, 2:  <TabcntInfo />}
    const [activeTab, setActiveTab] = useState(0);
    const onClickTab = (tabIndex) => {
        setActiveTab(prevTab => !prevTab === tabIndex ? -1 : tabIndex);
    }
    
  return (
    <>
        <div className='product_container'>
            <div className='prdfind_wrap'>
                <ul>
                    <li>
                        <button className='btn_search'>
                            <span className='blind'>검색</span>
                        </button>
                    </li>
                    <li className='on'>전체보기</li>
                    <li>1인분 주문</li>
                    <li>프랜차이즈</li>
                    <li>치킨</li>
                    <li>피자/양식</li>
                    <li>중국집</li>
                    <li>한식</li>
                    <li>일식/돈까스</li>
                    <li>족발/보쌈</li>
                    <li>야식</li>
                    <li>분식</li>
                    <li>카페/디저트</li>
                    <li>편의점/마트</li>
                </ul>
            </div>
            <div className='prd_box'>
                <div className='prd_prepare'>
                    <h3>후라이드참잘하는집 - 서강대점</h3>
                    <div className="infobrand_wrap">
                        <img src={brandlogoImg} className="small_img"/>
                        <div>
                            <span><i className="icon"></i>46</span>
                            <p className='point_condition'><span>16,000</span>원 이상 주문시 <span>2,500</span>원 할인</p>
                            <p>최소 주문금액 <span>12,000</span>원</p>
                            <p>결제<span>신용카드</span><span>현금</span><span className="point_txt">요기서 결제</span></p>
                            <span className="label">2,500원 할인</span>
                        </div>
                    </div>
                    <ul className='tabs'>
                        <li className={activeTab === 0 ? 'on' : ''} onClick={() => onClickTab(0)}>메뉴 <span>36</span></li>
                        <li className={activeTab === 1 ? 'on' : ''} onClick={() => onClickTab(1)}>클린리뷰 <span>3926</span></li>
                        <li className={activeTab === 2 ? 'on' : ''} onClick={() => onClickTab(2)}>정보</li>
                    </ul>

                    {tab[activeTab]}

                </div>
                <div className='prd_paper'>
                    <h3>주문표</h3>
                    <div>
                        <p>주문표에 담긴 메뉴가 없습니다</p>
                        <span>배달요금<span>1500</span>원 별도</span>
                    </div>
                    <Link to="/payment"><button className='btn large'>주문하기</button></Link>
                    {/* <button className='btn large'>주문하기</button> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default Product