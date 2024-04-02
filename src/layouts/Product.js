
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
                        <li className='on'>메뉴 <span>36</span></li>
                        <li>클린리뷰 <span>3926</span></li>
                        <li>정보</li>
                    </ul>

                    {/* <div className='tabs_cnt menu'>
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
                    </div>  */}

                    {/*  
                    <div className='tabs_cnt review'>
                        <div className='review_wrap'>
                            <div className='review_score'>
                                <strong>4.7</strong>
                                <div>
                                    <i className="icon"></i>
                                    <i className="icon"></i>
                                    <i className="icon"></i>
                                    <i className="icon"></i>
                                </div>
                            </div>
                            <div className='score_detail'>
                                <div>
                                    맛
                                    <span>
                                    <i className="icon"></i><i className="icon"></i><i className="icon"></i><i className="icon"></i>
                                        <span>4.7</span>
                                    </span>
                                </div>
                                <div>
                                    양
                                    <span>
                                        <i className="icon"></i><i className="icon"></i><i className="icon"></i><i className="icon"></i>
                                        <span>4.7</span>
                                    </span>
                                </div>
                                <div>
                                    배달
                                    <span>
                                        <i className="icon"></i><i className="icon"></i><i className="icon"></i><i className="icon"></i>
                                        <span>4.7</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='review_count'>
                            <div className='count_comment'>
                                <p>리뷰<span>3382</span>개</p>
                                <p>사장님 댓글<span>84</span>개</p>
                            </div>
                            <div className="toggle_wrap">
                                <span>사진리뷰만</span>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div className='review_list'>
                            <ul>
                                <li>
                                    <div>
                                        <strong>
                                            동동
                                            <span>님</span>
                                        </strong>
                                        <span>3일 전</span>
                                        <div className='score_wrap'>
                                            <p>
                                                <i className="icon"></i><i className="icon"></i><i className="icon"></i><i className="icon"></i><i className="icon"></i>
                                            </p>
                                            <p>맛<i className="icon"></i><span>4</span></p>
                                            <p>양<i className="icon"></i><span>4</span></p>
                                            <p>배달<i className="icon"></i><span>4</span></p>
                                        </div>
                                        <div className='img_wrap'>
                                            <img />
                                            <img /> 
                                        </div>
                                        <span className='sub_txt'>리얼 아보카도 콥 샐러드/1(드레싱 선택(랜치 드레싱)),갈릭 베이컨 치즈 세트/1(음료변경（1인세트）(카페라떼 ICE),</span>
                                        <p className='sub_txtcnt'>맛있게 잘먹었습니다.</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                    <strong>
                                            동동
                                            <span>님</span>
                                        </strong>
                                        <span>3일 전</span>
                                        <div className='score_wrap'>
                                            <p>
                                                <i className="icon"></i><i className="icon"></i><i className="icon"></i><i className="icon"></i><i className="icon"></i>
                                            </p>
                                            <p>맛<i className="icon"></i><span>4</span></p>
                                            <p>양<i className="icon"></i><span>4</span></p>
                                            <p>배달<i className="icon"></i><span>4</span></p>
                                        </div>
                                        <div className='img_wrap'>
                                            <img src={prdImg}/>
                                        </div>
                                        <span className='sub_txt'>리얼 아보카도 콥 샐러드/1(드레싱 선택(랜치 드레싱)),갈릭 베이컨 치즈 세트/1(음료변경（1인세트）(카페라떼 ICE),</span>
                                        <p className='sub_txtcnt'>맛있게 잘먹었습니다.</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                    <strong>
                                            동동
                                            <span>님</span>
                                        </strong>
                                        <span>3일 전</span>
                                        <div className='score_wrap'>
                                            <p>
                                                <i className="icon"></i><i className="icon"></i><i className="icon"></i><i className="icon"></i><i className="icon"></i>
                                            </p>
                                            <p>맛<i className="icon"></i><span>4</span></p>
                                            <p>양<i className="icon"></i><span>4</span></p>
                                            <p>배달<i className="icon"></i><span>4</span></p>
                                        </div>
                                        <div className='img_wrap'>
                                            <img />
                                        </div>
                                        <span className='sub_txt'>리얼 아보카도 콥 샐러드/1(드레싱 선택(랜치 드레싱)),갈릭 베이컨 치즈 세트/1(음료변경（1인세트）(카페라떼 ICE),</span>
                                        <p className='sub_txtcnt'>맛있게 잘먹었습니다.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>*/}
                    
                    <div className='tabs_cnt info'>
                        <div className='info_wrap'>
                            <div className='info_box'>
                                <h4>사장님 알림</h4>
                                <div>
                                    <p>업데이트 없습니다</p>
                                </div>
                                <img src={prdImg}/>
                            </div>
                            <div className='info_box'>
                                <h4>업체정보</h4>
                                <div>
                                    <p className='tit'>영업시간</p>
                                    <p>09:00 - 18:00</p>
                                </div>
                                <div>
                                    <p className='tit'>전화번호</p>
                                    <p>050720864768 (요기요 제공 번호)</p>
                                </div>
                                <div>
                                    <p className='tit'>주소</p>
                                    <p>서울특별시 마포구 도화동 563 마포아크로타워 1층 108호</p>
                                </div>
                            </div>
                            <div className='info_box'>
                                <h4>결제정보</h4>
                                <div>
                                    <p className='tit'>최소주문금액</p>
                                    <p>8,000원</p>
                                </div>
                                <div>
                                    <p className='tit'>결제수단</p>
                                    <p>신용카드, 현금, 요기서 결제</p>
                                </div>
                            </div>
                            <div className='info_box'>
                                <h4>업체정보</h4>   
                                <div>
                                    <p className='tit'>상호명</p>
                                    <p>에그드랍 마포역점</p>
                                </div>
                                <div>
                                    <p className='tit'>사업자등록번호</p>
                                    <p>290-14-025501</p>
                                </div>
                            </div>
                            <div className='info_box'>
                                <h4>원산지정보</h4>
                                <p>슬라이스햄, 돼지고기(국내산) : 아메리칸 햄 치즈 샌드위치, 햄 앤 치즈 프렌치 토스트 샌드위치, 클럽 샌드위치, 치킨 클럽 샌드위치, 햄 앤 치즈 길거리 토스트, 리얼 에그 콥 샐러드, 리얼 치킨 콥 샐러드, 리얼 아보카도 콥 샐러드, 에그앤잼 토스트, 갈릭버터 햄치즈 토스트
                                    베이컨, 돼지고기(외국산) : 베이컨 더블 치즈 샌드위치, 갈릭 베이컨 치즈 샌드위치, 베이컨 딥 치즈 번 샌드위치, 아보 베이컨 길거리 토스트, 클럽 샌드위치, 치킨 클럽 샌드위치, 베이컨 체다 해쉬브라운
                                    닭가슴살, 닭고기(국내산) : 치킨 클럽 샌드위치, 리얼 치킨 콥 샐러드
                                    불고기,쇠고기(미국산): 비프데리야끼 샌드위치, 비프앤치즈 길거리 토스트
                                </p>
                            </div>
                        </div>
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