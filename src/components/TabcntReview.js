import prdImg from '../assets/images/main/img_food01.png'

function TabcntReview(){
  return (
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
    </div>
  )
}

export default TabcntReview