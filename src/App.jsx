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
