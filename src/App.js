import Header from "./components/Header";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector(
    //다중 슬라이스로 리듀서를 병합하여 이용중이기 때문에 어떤 슬라이스 사용하는지 알려줘야함
    (state) => state.auth.isAuthenticated
  );

  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />;
    </>
  );
}
export default App;
