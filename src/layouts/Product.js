
import React from 'react'
import '../assets/styles/Product.scss'
import brandlogoImg from '../assets/images/main/img_brand01.png'
import prdImg from '../assets/images/main/img_food01.png'

function Product() {
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
                        <img src={brandlogoImg} class="small_img"/>
                        <div>
                            <span><i class="icon"></i>46</span>
                            <p className='point_condition'><span>16,000</span>원 이상 주문시 <span>2,500</span>원 할인</p>
                            <p>최소 주문금액 <span>12,000</span>원</p>
                            <p>결제<span>신용카드</span><span>현금</span><span class="point_txt">요기서 결제</span></p>
                            <span class="label">2,500원 할인</span>
                        </div>
                    </div>
                    <ul className='tabs'>
                        <li className='on'>메뉴 <span>36</span></li>
                        <li>클린리뷰 <span>3926</span></li>
                        <li>정보</li>
                    </ul>
                    <div className='tabs_cnt menu'>
                        <ul>
                            <li>
                                <div>
                                    <img src={prdImg} className='prd_img' />
                                    <strong>후라이드</strong>
                                    <p><span>16,000</span>원</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={prdImg} className='prd_img' />
                                    <strong>후라이드</strong>
                                    <p><span>16,000</span>원</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={prdImg} className='prd_img' />
                                    <strong>후라이드</strong>
                                    <p><span>16,000</span>원</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={prdImg} className='prd_img' />
                                    <strong>후라이드</strong>
                                    <p><span>16,000</span>원</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={prdImg} className='prd_img' />
                                    <strong>후라이드</strong>
                                    <p><span>16,000</span>원</p>
                                </div>
                            </li>
                        </ul>
                        <div>
                            <div className='item'>
                                <button className='btn large'>
                                    <p>인기메뉴</p>
                                    <span className='blind'>닫기</span>
                                </button>
                                <div className='cnt'>
                                    <strong>반마리 (뼈)</strong>
                                    <span>치킨 + 무 + 콜라500ml</span>
                                    <p><span>12,000</span>원</p>
                                </div>
                            </div>
                            <div className='item'>
                                <button className='btn large'>
                                    <p>인기메뉴</p>
                                    <span></span>
                                </button>
                                <div className='cnt'>
                                    내용
                                </div>
                            </div>
                            <div className='item'>
                                <button className='btn large'>
                                    <p>스페셜팩</p>
                                    <span></span>
                                </button>
                                <div className='cnt'>
                                    내용
                                </div>
                            </div>
                            <div className='item'>
                                <button className='btn large'>
                                    <p>세트메뉴</p>
                                    <span></span>
                                </button>
                                <div className='cnt'>
                                    내용
                                </div>
                            </div>
                            <div className='item'>
                                <button className='btn large'>
                                    <p>주니어세트</p>
                                    <span></span>
                                </button>
                                <div className='cnt'>
                                    내용
                                </div>
                            </div>
                            <div className='item'>
                                <button className='btn large'>
                                    <p>사이드</p>
                                    <span></span>
                                </button>
                                <div className='cnt'>
                                    내용
                                </div>
                            </div>
                            <div className='item'>
                                <button className='btn large'>
                                    <p>드링크</p>
                                    <span></span>
                                </button>
                                <div className='cnt'>
                                    내용
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='tabs_cnt review'>
                            
                    </div>
                    <div className='tabs_cnt info'>
                            
                    </div>
                </div>
                <div className='prd_paper'>
                    <h3>주문표</h3>
                    <div>
                        <p>주문표에 담긴 메뉴가 없습니다</p>
                        <span>배달요금<span>1500</span>원 별도</span>
                    </div>
                    <button className='btn large'>주문하기</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Product