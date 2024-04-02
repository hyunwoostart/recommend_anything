import React from 'react'
import '../assets/styles/Header.scss'
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <>
        <header className='header'>
            <div className='header_wrap'>
                <Link to="/"> 
                    <h1><a href='#'>anything</a></h1>
                </Link>
                <div className='header_location'>
                    <span className='from_location'>Deliver to: </span>
                    <span className='current_location'>Current Location</span>
                    <span className='to_location'>Mohammadpur Bus Stand, Dhaka</span>
                </div>
                <div className='search_wrap'>
                    <label>
                        <input placeholder='Search Food'/>
                        <button className='btn_search'><span className='blind'>물건 검색</span></button>
                    </label>
                    <Link to="/login">
                        <span className='login_txt'><i className='ico_login'></i>Login</span>                    
                    </Link>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header