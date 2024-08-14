import { useState } from 'react';
import './App.css';
import Box from './component/Box';
import Popup from './component/Popup';

//1. 박스 2개 (타이틀, 사진, 결과)
//2. 가위 바위 보 버튼이 있다.
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다
//5. 3 4의 결과를 가지고 누가 이겼는지 승패를 따진다
//6. 승패결과에 따라 테두리 색이 바뀐다 (이기면-초록, 지면-빨강 비기면-검은색)

const choice = ["rock", "scissors", "paper"];

// const choice = {
//   rock: {
//     name: "rock",
//   },
//   scissors: {
//     name: "scissors",
//   },
//   paper: {
//     name: "paper",
//   }
// }

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const play= (userChoice) => {
    setUserSelect(userChoice);
    const computerChoice = randomChoice();
    setComputerSelect(computerChoice)
    setResult(judgement(userChoice, computerChoice));
    openPopup()
  }

  const judgement = (user, computer) => {
    if (user === computer){
      return "tie";
    } else if (user === "rock") {
      return computer === "scissors"? "win":"lose";
    } else if (user === "scissors") {
      return computer === "rock"? "lose":"win";
    } else { // paper
      return computer === "rock"? "win":"lose";
    }
    
  }

  const randomChoice = () => {
    const randomItem = Math.floor(Math.random() * choice.length);
    const final = choice[randomItem];
    return final;
  }

  return (
    <div className='container'>
      <div className='main'>
        <Box title="You" item={userSelect} result={result}/>

        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      <div className='button-main'>
        <button className='button-image scissors' onClick={() => play("scissors")}></button>
        <button className='button-image rock' onClick={() => play("rock")}></button>
        <button className='button-image paper' onClick={() => play("paper")}></button>
      </div>

      {isPopupOpen && <Popup onClose={closePopup} result={result}/>}
    </div>
  );
}

export default App;
