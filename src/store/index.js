//1. 임포트
const redux = require("redux");

const initialState = {
  counter: 0,
  showCounter: true,
};

//3. 리듀서 함수
//리덕스 스토어 리듀서 함수에 새로운 상태 showCounter를 추가하고, toggle 타입 시 상태 변경 로직 작성
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  //액션의 페이로드 사용하여 확장가능하게 하기
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrease") {
    return {
      counter: state.counter - action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }
  return state;
};

//2. 스토어 만들기
const store = redux.createStore(counterReducer);

//4. 리액트 앱 - 리덕스 스토어 연결하기 위해 내보내기
export default store;
