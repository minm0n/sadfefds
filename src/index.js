import React from 'react'; //react에서 가져올거고 React라고 사용할거라는 뜻
import ReactDOM from 'react-dom/client'; // react-dom/client를 ReactDOM이라고 부르고 사용할꺼다.
/* import './index.css'; 이거 삭제 헀으니까 삭제 */
import App from './App'; // 같은 폴더에 있는 App.js를 말한다.
/* import reportWebVitals from './reportWebVitals'; 이거 삭제했으니까 삭제 */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( //root에 app 컴포넌트를 그려준다는 뜻
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* reportWebVitals(); 삭제 */