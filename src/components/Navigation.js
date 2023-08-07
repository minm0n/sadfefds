//함수형 컴포넌트 rfce
//클래스형 컴포넌트 rce
//router : 사용자가 입력한 URL을 통해 특정 컴포넌트를 불러온다

import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navigation.css'


function Navigation() {
  return (
    <div className='nav'>
      <Link to={'/'}>HOME</Link>
      <Link to={'/about'}>ABOUT</Link>
      </div>
  )
}

export default Navigation