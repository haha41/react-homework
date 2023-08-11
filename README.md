# 로그인 및 회원가입 버튼 호버 시 색 변화

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

