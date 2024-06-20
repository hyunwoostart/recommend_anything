import React, { useEffect, useRef, useState } from 'react'
import prdImg from '../assets/images/main/img_food01.png'
import { Link } from 'react-router-dom';

function TabcntMenu(){

    const [number, setNumber] = useState(1);

    const plusCounter = () => {
        setNumber(number + 1)
    }

    const minusCounter = () => {
        setNumber(Math.max(number - 1, 0));
    }

    const [activeIndex, setActiveIndex] = useState(0); // 초기 상태로 0을 설정합니다.

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        if (modalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [modalOpen]);
    const modalBack = useRef();
    
    return (
    <div className='tabs_cnt menu'>
        <ul>
            <li>
                <div onClick={ () => setModalOpen(true)}>
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

            {
            modalOpen && (
                <div className='modal' ref={modalBack} onClick={(e) => {                    
                    if (e.target === modalBack.current) {
                        setModalOpen(false);
                    }
                }}>
                    <div className='modal_content'>
                        <div className='modal_header'>
                            <h2>메뉴상세</h2>
                            <button className='close_modal' onClick={() =>  setModalOpen(false)}></button>
                        </div>
                        <div className='option_wrap'>
                            <div className='img_wrap'>
                                <img src={prdImg}/>
                                <h4>더블팝순살 양념</h4>
                                <p>크런치한 바삭함과 촉촉 부드러운 순살이 더블! 깊고 진한 바베큐소스 양념 위에 치즈크림소스가 더블!</p>
                            </div>
                            <div className='prdprice_wrap'>
                                <h4>가격</h4>
                                <p><span>23,500</span>원</p>
                            </div>
                            <div>
                                <h4>소스 <span>추가 선택 가능</span></h4>
                                <label>
                                    <div className='chkbox_wrap'>
                                        <input type='checkbox' />
                                        <p>뿌링클 소스 추가</p>
                                    </div>
                                    <p>+<span>2,500</span>원</p>
                                </label>
                                <label>
                                    <div className='chkbox_wrap'>
                                        <input type='checkbox' />
                                        <p>뿌링클 소스 추가</p>
                                    </div>
                                    <p>+<span>2,500</span>원</p>
                                </label>
                                <label>
                                    <div className='chkbox_wrap'>
                                        <input type='checkbox' />
                                        <p>뿌링클 소스 추가</p>
                                    </div>
                                    <p>+<span>2,500</span>원</p>
                                </label>
                            </div>
                            <div>
                                <h4>소스 <span>추가 선택 가능</span></h4>
                                <label>
                                    <div className='chkbox_wrap'>
                                        <input type='checkbox' />
                                        <p>뿌링클 소스 추가</p>
                                    </div>
                                    <p>+<span>2,500</span>원</p>
                                </label>
                                <label>
                                    <div className='chkbox_wrap'>
                                        <input type='checkbox' />
                                        <p>뿌링클 소스 추가</p>
                                    </div>
                                    <p>+<span>2,500</span>원</p>
                                </label>
                                <label>
                                    <div className='chkbox_wrap'>
                                        <input type='checkbox' />
                                        <p>뿌링클 소스 추가</p>
                                    </div>
                                    <p>+<span>2,500</span>원</p>
                                </label>
                            </div>
                            <div>
                                <h4>옵션<span>최대 3개 선택 가능</span></h4>
                                <label>
                                    <div className='chkbox_wrap'>
                                        <input type='checkbox' />
                                        <p>양념소스</p>
                                    </div>
                                    <p>+<span>500</span>원</p>
                                </label>
                                <label>
                                    <div className='chkbox_wrap'>
                                        <input type='checkbox' />
                                        <p>머스타드소스</p>
                                    </div>
                                    <p>+<span>2,500</span>원</p>
                                </label>
                                <label>
                                    <div className='chkbox_wrap'>
                                        <input type='checkbox' />
                                        <p>치킨무</p>
                                    </div>
                                    <p>+<span>1,000</span>원</p>
                                </label>
                            </div>
                            <div className='prdcount_wrap'>
                                <h4>수량</h4>
                                <div className='count_prd'>
                                    <button onClick={minusCounter}>-</button>
                                    <span>{number}</span>
                                    <button onClick={plusCounter}>+</button>
                                </div>
                            </div>
                            <div className='totalprice_wrap'>
                                <h4>총 주문금액</h4>
                                <div>
                                    <p><span>23,500</span>원</p>
                                    <span>(최소주문금액 18,000원)</span>
                                </div>
                            </div>
                        </div>
                        <div className='modalbtn_wrap'>
                            {/* <Link to='/orderlist'><button className='btn large'>주문표에 추가</button></Link> */}
                            <button className='btn large'>주문표에 추가</button>
                            <Link to='/payment'><button className='btn large'>주문하기</button></Link>
                            {/* <button className='btn large'>주문하기</button> */}
                        </div>
                    </div>
                </div>)
            }
        
        <div className='accordion_wrap'>
            <div className={activeIndex === 0 ? "item open" : "item"}>
                <button className="btn large" onClick={() => toggleAccordion(0)}>
                    <p>인기메뉴</p>
                    <span className='blind'>{activeIndex === 0 ? "닫기" : "열기"}</span>
                </button>
                <div className="cnt">
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
  )
}

export default TabcntMenu
