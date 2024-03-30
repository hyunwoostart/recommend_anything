import React from 'react'
import '../assets/styles/main/CntHow.scss'
import cnthowImg from '../assets/images/main/img_work01.png'
import cnthowImg2 from '../assets/images/main/img_work02.png'
import cnthowImg3 from '../assets/images/main/img_work03.png'
import cnthowImg4 from '../assets/images/main/img_work04.png'

function CntHow() {
  return (
    <>
        <div className='cnt_container'>
            <h3 className='how_tit'>How does it work</h3>
            <div className='work_wrap'>
                <div>
                    <img src={cnthowImg}/>
                    <p className='how_subtit'>Select location</p>
                    <span>Choose the location where your food will be delivered.</span>
                </div>
                <div>
                    <img src={cnthowImg2}/>
                    <p className='how_subtit'>Select location</p>
                    <span>Choose the location where your food will be delivered.</span>
                </div>
                <div>
                    <img src={cnthowImg3}/>
                    <p className='how_subtit'>Select location</p>
                    <span>Choose the location where your food will be delivered.</span>
                </div>
                <div>
                    <img src={cnthowImg4}/>
                    <p className='how_subtit'>Select location</p>
                    <span>Choose the location where your food will be delivered.</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default CntHow