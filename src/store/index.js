import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      //메서드 안에서 상태 변경
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    //액션에 붙어있는 페이로드 데이터가 필요한 경우 액션을 매개변수로 받아서 사용할 수 있음
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrease(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// 스토어 만들기
const store = configureStore({
  reducer: counterSlice.reducer,
});

//액션 생성자 내보내기
export const counterActions = counterSlice.actions;

//4. 리액트 앱 - 리덕스 스토어 연결하기 위해 내보내기
export default store;
