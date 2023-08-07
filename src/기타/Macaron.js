//Macaron.js

//todo: 클래스형 컴포넌트를 만들어본다.
//클래스형 컴포넌트 rce (React Class Component)

/* import React, { Component } from 'react' */ //리액트 모듈에 있는 component를 가져오겠다.


//↓ export 키워드는 클래스 컴포넌트를 다른 파일에서 가져올 수 있도록 해줍니다. 하지만 Macaron 클래스 컴포넌트는 index.js 파일에서만 사용되기 때문에 export 키워드를 삭제해도 됩니다.
/* export */ /* class Macaron extends Component { 
  render() {
    return (
      <div>Macaron</div>
    )
  }
}

export default Macaron */
//--클래스형 컴포넌트 끝


//함수형 컴포넌트 rfce (함수형을 더 많이 사용한다.)
import React from 'react'

/* function Macaron(props) {
  return (
    <div>
      <h1>No. {props.propsid}</h1>
      <h2>Name. {props.propsname} </h2>
      <img src={props.propsimage} alt={props.propsname} width={200} height={200}/>
    </div>
  )
} */

/* //todo: 구조분해 할당 방법
function Macaron(props) {
  console.log(props);
  const {propsname, propsid, propsimage} = props; //구조분해할당
  return (
    <div>
      <h1>No. {propsid}</h1>
      <h2>Name. {propsname} </h2>
      <img src={propsimage} alt={propsname} width={200} height={200}/>
    </div>
  )
} */

//todo: 가장 많이 사용하는 방법
function Macaron({propsname, propsid, propsimage}) { //처음부터 구조분해할당 형태로 바로해줌
  return (
    <div>
      <h1>No. {propsid}</h1>
      <h2>Name: {propsname} </h2>
      <img src={propsimage} alt={propsname} width={200} height={200}/>
    </div>
  )
}

export default Macaron