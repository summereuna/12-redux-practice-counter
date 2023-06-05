import { createSlice, configureStore } from "@reduxjs/toolkit";

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

//사용자 인증 상태와 관련된 슬라이스 만들기
const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// 스토어 만들기
const store = configureStore({
  //리덕스 스토어는 하나 뿐이기 때문에 스토어는 루트 리듀서 하나만 가질 수 있다.
  //리듀서는 리듀서 함수를 인자로 받을 수 있을 뿐만 아니라 리듀서 맵 역할을 하는 객체로서 받기도 한다.
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
  //이런 식으로 여러 개의 슬라이스의 리듀서를 하나의 리듀서로 합칠 수 있다.
  //그런데 이렇게 병합하면 스토어에서 데이터에 접근할 때, 어떤 슬라이스 사용하는지 알려줘야 함
});

//액션 생성자 내보내기
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

//4. 리액트 앱 - 리덕스 스토어 연결하기 위해 내보내기
export default store;
