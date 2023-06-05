import { useDispatch, useSelector } from "react-redux";

import { counterActions } from "../store/counter-slice";
import classes from "./Counter.module.css";

const Counter = () => {
  //2. useDispatch() 호출하여 리덕스 스토어에 액션 발송하는 디스패치 함수 생성
  const dispatch = useDispatch();

  //1. useSelector() 호출하여 컴포넌트에 리덕스 스토어 데이터 가져오기
  //인자로 리덕스가 관리하는 상태를 받는 함수전달하여 추출하려는 상태를 반환받기
  const counter = useSelector((state) => state.counter.counter);

  //새로운 showCounter 상태에 접근하기 위해 useSelector()로 데이터 가져오기
  const isShow = useSelector((state) => state.counter.showCounter);

  //3. 핸들러에서 디스패치 호출하여 타입별 액션(type을 가진 오브젝트) 발송
  const incrementHandler = () => {
    dispatch(counterActions.increment());
    //{ type: "increment" } 반환됨
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
    //{ type: "decrement" } 반환됨
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
    //{ type: "increase", payload: 5 } 반환됨
  };

  const decreaseHandler = () => {
    dispatch(counterActions.decrease(5));
    //{ type: "decrease", payload: 5 } 반환됨
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
    //{ type: "toggle" } 반환됨
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShow && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={increaseHandler}>+ Increase by 5</button>
        <button onClick={decreaseHandler}>- Decrease by 5</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
