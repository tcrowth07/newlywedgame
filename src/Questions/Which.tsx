import { useState } from "react";
import Button from "../Components/Button";

function OpenIndividualQuestion(props: any) {
  const [answer, setAnswer] = useState<string>("");
  const currentPlayerName = props.player1Turn
    ? props.player1.name
    : props.player2.name;
  const otherPlayerName = props.player1Turn
    ? props.player2.name
    : props.player1.name;
  return (
    <div className="mx-5">
      <h3 className="text-2xl">{props.question.question}</h3>
      <Button
        onClick={() => setAnswer(currentPlayerName)}
        bgColor={answer === currentPlayerName ? "yellow-600" : "gray-200"}
        hoverColor=""
        className="mr-5 px-10"
      >
        Me
      </Button>
      <Button
        onClick={() => setAnswer(otherPlayerName)}
        bgColor={answer === otherPlayerName ? "yellow-600" : "gray-200"}
        hoverColor=""
        className="px-10"
      >
        {otherPlayerName}
      </Button>
      <br />
      <Button
        className="ml-3 mt-10"
        onClick={() => {
          props.handleChange(answer);
          setAnswer("");
        }}
      >
        Next
      </Button>
    </div>
  );
}
export default OpenIndividualQuestion;
