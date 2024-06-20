import React from 'react'
import '../assets/styles/main/CntInfo.scss'
import cntinfoImg from "../assets/images/main/img_cnt01.png"
import cntinfoImg2 from "../assets/images/main/img_cnt02.png"
import cntinfoImg3 from "../assets/images/main/img_cnt03.png"

function CntInfo() {
  return (
    <>
        <div className='bg_section'>
            <div className='cntinfo_container'>
                <div className='cntinfo_wrap'>
                    <div>
                        <img src={cntinfoImg}/>
                        <strong>Daily Discounts</strong>
                    </div>
                    <div>
                        <img src={cntinfoImg2}/>
                        <strong>Daily Discounts</strong>
                    </div>
                    <div>
                        <img src={cntinfoImg3}/>
                        <strong>Daily Discounts</strong>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CntInfo