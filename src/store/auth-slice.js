import { createSlice } from "@reduxjs/toolkit";

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

//액션 생성자는 따로 내보내기
export const authActions = authSlice.actions;

//리듀서 부분만 내보내도 됨
export default authSlice.reducer;
