import React from 'react'
import '../assets/styles/main/SearchPrd.scss'
import searchprdImg from '../assets/images/main/img_food01.png'
import searchprdImg2 from '../assets/images/main/img_food02.png'
import searchprdImg3 from '../assets/images/main/img_food03.png'
import searchprdImg4 from '../assets/images/main/img_food04.png'
import searchprdImg5 from '../assets/images/main/img_food05.png'
import searchprdImg6 from '../assets/images/main/img_food06.png'

function SearchPrd() {
  return (
    <>
        <div className='searchprd_container'>
            <div className='searchtxt_wrap'>
                <h3>Search by Food</h3>
                <span>View All</span>
            </div>
            <ul className='searchprd_wrap'>
                <li>
                    <div>
                        <img alt="img" src={searchprdImg}/>
                        <p>Pizza</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img alt="img" src={searchprdImg2}/>
                        <p>Pizza</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img alt="img" src={searchprdImg3}/>
                        <p>Pizza</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img alt="img" src={searchprdImg4}/>
                        <p>Pizza</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img alt="img" src={searchprdImg5}/>
                        <p>Pizza</p>
                    </div>
                </li>
                <li>
                    <div>
                        <img alt="img" src={searchprdImg6}/>
                        <p>Pizza</p>
                    </div>
                </li>
            </ul>
        </div>
    </>
  )
}

export default SearchPrd