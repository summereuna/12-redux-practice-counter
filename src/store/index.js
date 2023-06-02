//1. 임포트
const redux = require("redux");

//3. 리듀서 함수
const counterReducer = (state, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }
  //액션의 페이로드 사용하여 확장가능하게 하기
  if (action.type === "increase") {
    return { counter: state.counter + action.amount };
  }
  if (action.type === "decrease") {
    return { counter: state.counter - action.amount };
  }
  return {
    counter: 0,
  };
};

//2. 스토어 만들기
const store = redux.createStore(counterReducer);

//4. 리액트 앱 - 리덕스 스토어 연결하기 위해 내보내기
export default store;
