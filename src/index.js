import React from "react";
import ReactDOM from "react-dom/client";
//1. 리액트-리덕스에서 Provider 컴포넌트 가져오기
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
//3. 작성한 리덕스 스토어 가져오기
import store from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //2. Provider 컴포넌트로 App 컴포넌트 감싸기
  //4.Provider 컴포넌트의 store prop에 가져온 리덕스 스토어 연결하기
  <Provider store={store}>
    <App />
  </Provider>
);
