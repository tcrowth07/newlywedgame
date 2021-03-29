import { useState } from "react";
import "../Questions.css"
function OpenIndividualQuestion(props: any) {
  const [answer, setAnswer] = useState<string>("");
  //const [currentPlayerName, setCurrentPlayerName] = useState<string>(props.player1Turn ? props.player1.name : props.player2.name);
  const currentPlayerName = props.player1Turn ? props.player1.name : props.player2.name;
  const otherPlayerName = props.player1Turn ? props.player2.name : props.player1.name;
  return (
    <>

      <p>{props.question.question}</p>
      <button 
        onClick={() => setAnswer(currentPlayerName)}
        className={answer === currentPlayerName ? "selected" : ""}
      >
          Me
      </button>
      <br />
      <button
        onClick={() =>
          setAnswer(otherPlayerName)
        }
        className={answer === (otherPlayerName) ? "selected" : ""}
      >
        {otherPlayerName}
      </button>
      <br />
      <button
        onClick={() => {
          props.handleChange(answer);
          setAnswer("");
        }}
      >
        Next
      </button>
    </>
  );
}
export default OpenIndividualQuestion;
