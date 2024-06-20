import React from 'react'
import '../assets/styles/Login.scss'
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  
  return (
    <>
        <div className='login_container'>
          <div className='login_wrap'>
              <h2>로그인</h2>
              <div className='input_wrap'>
                <input placeholder='이메일 주소 입력(필수)'/>
                <input placeholder='비밀번호 입력(필수)'/>
              </div>
              <div className='login_infowrap'>
                <label>
                  <input type='checkbox'/>
                  자동 로그인
                </label>
                  <ul className='find_info'>
                    <li><a href='#none'>아이디 찾기</a></li>
                    <li><a href='#none'>비밀번호 찾기</a></li>
                  </ul>
              </div>
              <button className='btn large'>로그인</button>
              <div className='loginsns_wrap'>
                <button>네이버로 로그인</button>
                <button>카카오로 로그인</button>
              </div>
          </div>
          <div className='banner_wrap'>
            <a href='#none'>
              <img />
            </a>
          </div>
        </div>
    </>
  )
}

export default Login