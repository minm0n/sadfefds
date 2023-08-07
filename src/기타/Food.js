//컴포넌트 .js 생성시 대문자로 rce(엔터)

import React, { Component } from 'react'

/* export */ class Food extends Component {
  
  state = { //Food 컴포넌트의 state를 따로 만들어준다.
    price : 10000,
    discountPrice : 0,
  }

  discount = () => {
    this.setState(current => (
      {discountPrice : current.price * 0.7}
    ));
  }


  
  render() {
    const {price,discountPrice} = this.state; //state랜더안에 갖고와서 쓸거니까 구조분해할당

    return (
      <>
        <div>Food</div>
        <h1>Food 가격 : {price}</h1>
        <h2>할인 가격 : {discountPrice}</h2>
        <button onClick={this.discount}>30% 할인</button>
      </>
    )
  }
}

export default Food