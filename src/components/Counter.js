import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  //2. useDispatch() 호출하여 리덕스 스토어에 액션 발송하는 디스패치 함수 생성
  const dispatch = useDispatch();

  //1. useSelector() 호출하여 컴포넌트에 리덕스 스토어 데이터 가져오기
  //인자로 리덕스가 관리하는 상태를 받는 함수전달하여 추출하려는 상태를 반환받기
  const counter = useSelector((state) => state.counter);

  //3. 핸들러에서 디스패치 호출하여 타입별 액션(type을 가진 오브젝트) 발송
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  //핸들러에서는 여전히 하드 코딩으로 속성값을 고정하여 보내지만 이 부분을 사용자 입력 값으로 바꾸면 좀 더 확장가능함
  const increaseHandler = () => {
    dispatch({ type: "increase", amount: 5 });
  };
  const decreaseHandler = () => {
    dispatch({ type: "decrease", amount: 5 });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
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
