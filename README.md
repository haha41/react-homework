# 로그인 및 회원가입 버튼 호버 시 색 변화

<img src="./src/assets/스크린샷 2023-08-12 오전 2.01.23(2).png">

### const [isActive, setIsActive] = useState(true);
useState를 통해 나오는 boolean 값을 isActive에 넣는다.

### function state(){setIsActive(!isActive)}
setIsActive 함수를 이용하여 isActive 값은 반전 시킨다.

### props는 isActive, state
로그인과 회원가입 버튼에 맞는 각각의 isActive와 state를 props로 하위 컴포넌트에 전달한다.

### 삼항연산자
스타일 변화를 주기 위해 삼항 연산자를 통해 클래스를 변경한다.

### 이벤트
onMouseLeave와 onPointerEnter를 이용해 호버 시 작동되도록 구현했다.

### 완성된 코드
App.jsx

``` jsx
import "./App.css";
import Button from './components/Button';
import { useState } from "react";



function App() {
  

  const [isActiveLogin, setIsActive] = useState(true);
  const [isActiveSignUp, setIsActiveSignUp] = useState(true);

  function state() {
    setIsActive(!isActiveLogin)
  }

  function stateSignUp() {
    setIsActiveSignUp(!isActiveSignUp)
  }

  return (
    <div className="buttonWrapper">
      <Button isActiveLogin={isActiveLogin} isActiveSignUp={isActiveSignUp} state = {state} stateSignUp={stateSignUp}/>
    </div>
  );
}

export default App;
```
Button.jsx
``` jsx
import styles from "@/components/button.module.css";

function Button({isActiveLogin, state, stateSignUp, isActiveSignUp}) {

  let change = isActiveLogin ? styles.button : styles.buttonHover;
  let changeSignUp = isActiveSignUp ? styles.button : styles.buttonHover;
  return (
    <>
      <button className={change} onMouseLeave={state} onPointerEnter={state}>로그인</button>
      
      <button className={changeSignUp} onMouseLeave={stateSignUp} onPointerEnter={stateSignUp}>회원가입</button>
    </>
  )
}

export default Button


```