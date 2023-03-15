import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Login from "./Login";

function SideMenu(){
  return(
    <div className='menu-wrap'>
      <div className='user-menu'>
        <Link to='/Login'>로그인</Link>
        <Link to='/Signin'>회원가입</Link>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </div>
      <ul className='travel-menu'>
        <li className='travel-menu-title'>
          <p>국내여행지</p>
          <ul className='travel-where-list'>
            <li>
              <Link>서울</Link>
            </li>
            <li>
              <Link>경기</Link>
            </li>
            <li>
              <Link>강원</Link>
            </li>
            <li>
              <Link>충청</Link>
            </li>
            <li>
              <Link>전라</Link>
            </li>
            <li>
              <Link>경상</Link>
            </li>
            <li>
              <Link>제주</Link>
            </li>
          </ul>
        </li>
        <li className='travel-menu-title'>
          <p>해외여행지</p>
          <ul className='travel-where-list'>
            <li>
              <Link>동아시아</Link>
            </li>
            <li>
              <Link>동남아시아</Link>
            </li>
            <li>
              <Link>서유럽</Link>
            </li>
            <li>
              <Link>동유럽</Link>
            </li>
            <li>
              <Link>아메리카</Link>
            </li>
            <li>
              <Link>라틴아메리카</Link>
            </li>
            <li>
              <Link>휴양지</Link>
            </li>
          </ul>
        </li>
      </ul>
      <ul className='service-menu'>
        <li>
          <Link>이벤트</Link>
        </li>
        <li>
          <Link>리뷰</Link>
        </li>
        <li>
          <Link>마이페이지</Link>
        </li>
        <li>
          <Link>고객센터</Link>
        </li>
      </ul>
    </div>
  )
}

export default SideMenu;