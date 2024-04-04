import prdImg from '../assets/images/main/img_food01.png'

function TabcntMenu(){
  return (
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
        <div className='accordion_wrap'>
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
  )
}

export default TabcntMenu