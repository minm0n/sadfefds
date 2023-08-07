import React, { Component } from 'react'
import axios from 'axios';
import Movie from '../components/Movie'
import '../styles/Home.css'

export class Home extends Component {

  state = {
    isLoading : true, //로딩이 true일땐 보이고 false일땐 보이지 않게 한다.
    movies:[],
  }

  getMovies = async () => {
    const {
      data:{
        data:{movies}
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?genre=animation&sort_by=like_count') //get방식으로 데이터가 온다.
    console.log(movies,'movies');
    this.setState({isLoading:false,movies}) //키:키값 이름이 똑같으면 하나만 써줘도 된다. movies:movies
  }

componentDidMount(){ //영화데이터 들어오는 시점 이지만 직접적으로 넣지는 않고 함수(getMovies)로 호출예정
  this.getMovies(); //데이터를 불러올때 
/*   setTimeout(() => {
    this.setState({isLoading : false}); //6초뒤에 isLoading이 false로 바뀐다.(이런식으로 바뀌면 setState실행되고 랜더 자동 실행된다.)
  },6000); */

}


  
  render() {
    const {isLoading,movies} = this.state; //구조분해 할당해서 가져옴
    return (
      <section className='container'>{/* 삼항연산자 사용 ? true : false*/}
        {isLoading ?
        <div className='loader'>
          <span className='loader_text'>'Loading...'</span>{/* //로딩이 true일땐 보이고 false일땐 보이지 않게 한다. */}
          </div>
          :
          <div className='movies'>
            {movies.map((movie,index) => ( //map메서드 통해서인덱스 값도 가져올 수 있음
            <Movie
            key={index} //고유값도 있어야해서 가져옴
            id={movie.id}
            img={movie.medium_cover_image}
            title={movie.title}
            year={movie.year}
            genre={movie.genres}
            summary={movie.summary}
            />
            ))}
          </div>
            }
      </section>
    )
  }
}

export default Home