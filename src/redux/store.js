import { createStore } from "redux";

// reducer 생성 함수
const reducer = (currentState, action) => {
  //첫번째 인자는 초기값, 두번째 인자는 변경할 데이터 액션

  if (currentState === undefined) {
    return { number: 1 };
  }

  const newState = { ...currentState };
  //새로운 상태를 생성할 때 기존 상태를 유지하기 위해 spread연산자 사용

  if (action.type === "PLUS") {
    newState.number++;
  }

  return newState;
};

export const store = createStore(reducer);
// 전체 component로 전달할 수 있도록 App component를 감싸준다.
