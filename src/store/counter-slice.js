import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
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

//액션 생성자는 따로 내보내기
export const counterActions = counterSlice.actions;

//리듀서 부분만 내보내도 됨
export default counterSlice.reducer;
