import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter-slice";
import authSlice from "./auth-slice";

// 스토어 만들기
const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
  },
});

//4. 리액트 앱 - 리덕스 스토어 연결하기 위해 내보내기
export default store;
