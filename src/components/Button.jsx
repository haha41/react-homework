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

