import prdImg from '../assets/images/main/img_food01.png'

function TabcntInfo(){
  return (
    <div className='tabs_cnt info'>
      <div className='info_wrap'>
          <div className='info_box'>
              <h4>사장님 알림</h4>
              <div>
                  <p>업데이트 없습니다</p>
              </div>
              <img alt="img" src={prdImg}/>
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
              <h4>사업자 정보</h4>   
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
  )
}

export default TabcntInfo