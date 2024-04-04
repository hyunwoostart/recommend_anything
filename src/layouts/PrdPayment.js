
import '../assets/styles/main/PrdPayment.scss'

function PrdPayment() {
  return (
    <>
        <div className='prdpayment_container product_container'>
            <div className='prd_box'>
                <div className='prd_prepare'>
                    <h2>결제하기</h2>
                    <div className='accordion_wrap'>
                        <div className='item'>
                            <button className='btn large'>
                                <p>배달정보</p>
                                <span className='blind'>닫기</span>
                            </button>
                            <div className='cnt'>
                                <div>
                                    <label>
                                        주소
                                        <input />
                                        <input placeholder='(필수) 상세 주소 입력'/>
                                    </label>
                                </div>
                                <label>
                                    휴대폰 번호
                                    <input placeholder='(필수) 휴대폰 번호 입력'/>
                                </label>
                            </div>
                        </div>
                        <div className='item'>
                            <button className='btn large'>
                                <p>주문시 요청사항</p>
                                <span></span>
                            </button>
                            <div className='cnt'>
                                <textarea rows="6" cols="50"/>
                            </div>
                        </div>
                    </div>
                    <div className='paymetod_wrap'>
                        <h3>결제수단 선택</h3>
                        <h4>미리 결제</h4>
                        <ul className='paymetod_box'>
                            <li className='pay_card active'>신용카드</li>
                            <li className='pay_phone'>휴대폰</li>
                            <li className='pay_naver'>네이버페이</li>
                            <li className='pay_toss'>토스페이</li>
                        </ul>
                        <h4>현장결제</h4>
                        <ul className='paymetod_box'>
                            <li className='pay_card'>신용카드</li>
                            <li className='pay_money'>현금</li>
                        </ul>
                    </div>
                    <div className='discount_method'>
                        <h3>할인방법 선택</h3>
                        <div>
                            <h4>쿠폰</h4>
                            <select>
                                <option>1,000원 할인쿠폰</option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='prd_paper'>
                    <h3>주문내역</h3>
                    <div>
                        <p>주문표에 담긴 메뉴가 없습니다</p>
                        <span>배달요금<span>1500</span>원 별도</span>
                    </div>
                    <button className='btn large'>결제하기</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default PrdPayment