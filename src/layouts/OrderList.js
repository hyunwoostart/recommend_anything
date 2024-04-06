import { Link } from 'react-router-dom'
import '../assets/styles/OrderList.scss'

function OrderList(){
  return (
    <div className='orderlist_container'>
         <div className='prd_box'>
            <div className='prd_paper'>
                <h3>주문표</h3>
                <div>
                    <p>주문표에 담긴 메뉴가 없습니다</p>
                    <span>배달요금<span>1500</span>원 별도</span>
                </div>
                <div className='btn_wrap'>
                    <Link to="/product"><button className='btn large'>메뉴 추가</button></Link>
                    <Link to="/payment"><button className='btn large'>주문하기</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderList